import { NextApiHandler } from 'next';
import { use } from 'next-api-middleware';

import { getTotalLiquidity } from '@/api/metrics';
import { getRequestOnlyMiddleware, logApiErrors } from '@/utils';
import { TFilter } from '@/views/dapp/v2/metrics/card-header/card-header.types';

const handler: NextApiHandler = async (req, res) => {
  const data = await getTotalLiquidity(
    req.query.TZ as string,
    req.query.filter as TFilter
  );

  res.status(200);
  res.send(data);
};

export default use([getRequestOnlyMiddleware, logApiErrors])(handler);
