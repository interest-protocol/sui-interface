import { NextApiHandler } from 'next';
import { use } from 'next-api-middleware';

import { getPools } from '@/api/metrics';
import { getRequestOnlyMiddleware, logApiErrors } from '@/utils';

const handler: NextApiHandler = async (_, res) => {
  const data = await getPools();

  res.status(200);
  res.send(data);
};

export default use([getRequestOnlyMiddleware, logApiErrors])(handler);
