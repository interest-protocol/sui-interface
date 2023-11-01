import { NextApiHandler } from 'next';
import { use } from 'next-api-middleware';

import { getActiveWallets } from '@/api/metrics';
import { getRequestOnlyMiddleware, logApiErrors } from '@/utils';

const handler: NextApiHandler = async (req, res) => {
  const data = await getActiveWallets(
    req.query.TZ as string,
    Boolean(req.query.daily)
  );

  res.status(200);
  res.send(data);
};

export default use([getRequestOnlyMiddleware, logApiErrors])(handler);
