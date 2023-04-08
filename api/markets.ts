import { Network } from '@/constants';
import { DexMarket } from '@/interface';

export const getDexMarket = async (network: Network): Promise<DexMarket> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_IPX_ANALYTICS_SERVER_URL}api/v1/markets/getMarkets/${network}`,
    {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response.json();
};
