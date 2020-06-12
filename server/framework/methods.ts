import { NextApiRequest, NextApiResponse } from 'next';

/** Returns middleware that restricts the API endpoint to the given methods. */
export function restrictMethods(methods: string[]) {
  const methodSet = new Set(methods.map((method) => method.toUpperCase()));
  return (req: NextApiRequest, res: NextApiResponse, next: Function) => {
    if (!methodSet.has(req.method.toUpperCase())) {
      res.status(400).json({
        error: {
          message: `This API does not support method ${req.method}.`,
        },
      });
    }
    next();
  };
}
