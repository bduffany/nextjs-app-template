import { NextHandleFunction } from 'connect';
import admin from 'firebase-admin';
import { NextApiRequest, NextApiResponse } from 'next';
import env from '../config/env';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: env.firebase.project_id,
      privateKey: env.firebase.private_key,
      clientEmail: env.firebase.client_email,
    }),
    databaseURL: env.firebase.database_url,
  });
}

export interface AuthenticatedRequest extends NextApiRequest {
  decodedIdToken: admin.auth.DecodedIdToken;
  user: admin.auth.UserRecord;
}

/**
 * Middleware that ensures firebase authentication on incoming requests.
 *
 * The client must set the `AuthToken` header or have the 'AuthToken'
 * cookie set for this to work.
 */
export const firebaseAuthentication = (required: boolean) => {
  const handler: NextHandleFunction = async (
    req,
    res: NextApiResponse,
    next
  ) => {
    const authToken = req.headers.authtoken;
    if (authToken) {
      try {
        const decodedIdToken = await admin
          .auth()
          .verifyIdToken(authToken as string);

        const authenticatedRequest = req as AuthenticatedRequest;
        authenticatedRequest.decodedIdToken = decodedIdToken;

        const user = await admin.auth().getUser(decodedIdToken.uid);
        authenticatedRequest.user = user;
      } catch {
        // Fall through to error.
      }
    }
    if (required && !(req as AuthenticatedRequest).user) {
      res.status(401).json({ error: { message: 'Unauthorized.' } });
      return;
    }
    next();
  };
  return handler;
};

/**
 * A function that returns whether the user is authorized.
 */
type AuthorizationCheck = (user: admin.auth.UserRecord) => boolean;

/**
 * Returns middleware that checks whether custom claims match the given
 * predicate.
 */
export const checkAuthorization: (
  check: AuthorizationCheck
) => NextHandleFunction = (check) => async (
  req: AuthenticatedRequest,
  res,
  next
) => {
  if (check(req.user)) {
    next();
    return;
  }
  res.statusCode = 403;
  res.write({ error: { message: 'Unauthorized.' } });
};

/**
 * Middleware that checks whether the user's "role" custom claim
 * is set to "admin".
 */
export const adminOnly = checkAuthorization(
  (user) => user?.customClaims?.role === 'admin'
);

export default admin;
