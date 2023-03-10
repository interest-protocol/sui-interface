import { Middleware } from 'next-api-middleware';

const httpMethod = (
  allowedHttpMethod: 'GET' | 'POST' | 'PATCH'
): Middleware => {
  return async function (req, res, next) {
    if (req.method === allowedHttpMethod || req.method == 'OPTIONS')
      await next();
    else {
      res.status(404);
      res.end();
    }
  };
};

export const logApiErrors: Middleware = async (req, res, next) => {
  try {
    await next();
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({ error });
  }
};

export const getRequestOnlyMiddleware = httpMethod('GET');
