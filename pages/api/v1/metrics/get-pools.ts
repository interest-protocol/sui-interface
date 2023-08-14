import { NextApiHandler } from 'next';
import { use } from 'next-api-middleware';

import { getPools } from '@/api/metrics';
import { getRequestOnlyMiddleware, logApiErrors } from '@/utils';

const handler: NextApiHandler = async (req, res) => {
  const data = await getPools(req.query.TZ as string);

  res.status(200);
  res.send(data);
};

export default use([getRequestOnlyMiddleware, logApiErrors])(handler);
