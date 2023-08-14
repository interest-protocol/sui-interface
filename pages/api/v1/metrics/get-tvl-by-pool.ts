import { NextApiHandler } from 'next';
import { use } from 'next-api-middleware';

import { getTVLByPool } from '@/api/metrics';
import { getRequestOnlyMiddleware, logApiErrors } from '@/utils';
import { TFilter } from '@/views/dapp/v2/metrics/card-header/card-header.types';

const handler: NextApiHandler = async (req, res) => {
  const data = await getTVLByPool(
    req.query.TZ as string,
    req.query.filter as TFilter
  );

  res.status(200);
  res.send(data);
};

export default use([getRequestOnlyMiddleware, logApiErrors])(handler);
