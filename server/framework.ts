import cookies from 'connect-cookies';
import { NextApiHandler } from 'next';
import CORS from './cors';
import { firebaseAuthentication } from './firebase';
import { restrictMethods } from './methods';
import { withMiddleware } from './middleware';

/**
 * Transforms the given API handler so that the framework handlers are run
 * before it.
 *
 * Additional middleware can also be specified before or after the
 * framework middleware.
 */
export default function withFrameworkMiddleware(
  handler: NextApiHandler,
  { methods = ['POST'], requiresAuthentication = true, before = [], after = [] }
) {
  return withMiddleware(
    [
      restrictMethods(methods),
      CORS,
      cookies(),
      firebaseAuthentication(requiresAuthentication),
      ...before,
    ],
    handler,
    after
  );
}
