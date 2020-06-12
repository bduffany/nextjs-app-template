import cookies from 'connect-cookies';
import { NextApiHandler } from 'next';
import { firebaseAuthentication } from '../services/firebase';
import corsMiddleware from './cors';
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
      corsMiddleware,
      cookies(),
      firebaseAuthentication(requiresAuthentication),
      ...before,
    ],
    handler,
    after
  );
}
