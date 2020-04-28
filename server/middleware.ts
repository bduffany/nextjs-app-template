import { HandleFunction } from 'connect';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  middleware: Function
) {
  return new Promise((resolve, reject) => {
    middleware(req, res, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });
}

/**
 * Wraps the given NextJS request handler with connect-compatible middleware.
 *
 * @param before Middleware to run before the handler.
 * @param handler The request handler.
 * @param after Middleware to run after the handler.
 */
export function withMiddleware(
  before: HandleFunction[],
  handler: NextApiHandler,
  after: HandleFunction[] = []
): NextApiHandler {
  return async (req, res) => {
    const handlers: (() => Promise<any>)[] = [
      ...before.map((middleware) => () => runMiddleware(req, res, middleware)),
      () => (handler(req, res) as unknown) as Promise<void>,
      ...after.map((middleware) => () => runMiddleware(req, res, middleware)),
    ];
    for (const handler of handlers) {
      await handler();
      if (res.writableEnded) {
        return;
      }
    }
  };
}
