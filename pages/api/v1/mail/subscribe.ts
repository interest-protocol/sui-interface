import { NextApiRequest, NextApiResponse } from 'next';

import { subscriber } from '../../../../server/mail';

const subscribe = async (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  try {
    if (request.method === 'GET') {
      await subscriber(request.query.email as string);
      response.status(200).send(true);
    }
  } catch (error: any) {
    response.status(error.obj.httpStatus).send(error.obj);
  }
};

export default subscribe;
