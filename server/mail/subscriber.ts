import getResponse from './config';

const listToken = process.env.GETRESPONSE_LIST_TOKEN!;

const subscriber = (email: string): Promise<void> =>
  getResponse.addContact({
    email,
    token: listToken,
  });

export default subscriber;
