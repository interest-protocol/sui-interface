import { NextApiHandler } from 'next';
import { use } from 'next-api-middleware';

import { getPoolInfo } from '@/api/metrics';
import { Pair } from '@/constants';
import { getRequestOnlyMiddleware, logApiErrors } from '@/utils';

const handler: NextApiHandler = async (req, res) => {
  const data = await getPoolInfo(
    req.query.TZ as string,
    req.query.pair as Pair
  );

  res.status(200);
  res.send(data);
};

export default use([getRequestOnlyMiddleware, logApiErrors])(handler);
