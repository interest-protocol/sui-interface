import { NextApiHandler } from 'next';
import { use } from 'next-api-middleware';

import { getDailyTradingVolume } from '@/api/metrics';
import { getRequestOnlyMiddleware, logApiErrors } from '@/utils';

const handler: NextApiHandler = async (req, res) => {
  const data = await getDailyTradingVolume(req.query.TZ as string);

  res.status(200);
  res.send(data);
};

export default use([getRequestOnlyMiddleware, logApiErrors])(handler);