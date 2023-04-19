import { GetResponse } from 'api-getresponse';

const getResponse = new GetResponse({
  apiKey: process.env.GETRESPONSE_API_KEY!,
});

export default getResponse;
