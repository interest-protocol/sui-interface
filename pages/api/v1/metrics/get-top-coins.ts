import { NextApiHandler } from 'next';
import { use } from 'next-api-middleware';

import { getTopCoins } from '@/api/metrics';
import { getRequestOnlyMiddleware, logApiErrors } from '@/utils';

const handler: NextApiHandler = async (_, res) => {
  const data = await getTopCoins();

  res.status(200);
  res.send(data);
};

export default use([getRequestOnlyMiddleware, logApiErrors])(handler);
