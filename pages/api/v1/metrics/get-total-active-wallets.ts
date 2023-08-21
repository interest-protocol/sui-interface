import { NextApiHandler } from 'next';
import { use } from 'next-api-middleware';

import { getTotalActiveWallets } from '@/api/metrics';
import { getRequestOnlyMiddleware, logApiErrors } from '@/utils';

const handler: NextApiHandler = async (req, res) => {
  const data = await getTotalActiveWallets(
    req.query.TZ as string,
    Boolean(req.query.daily)
  );

  res.status(200);
  res.send(data);
};

export default use([getRequestOnlyMiddleware, logApiErrors])(handler);
