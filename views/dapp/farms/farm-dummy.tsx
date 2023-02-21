import { FC } from 'react';

import { CoinData } from '@/interface';

import { useFarmData } from './farms.hooks';

interface FarmDummyProps {
  objectId: string;
  poolObjectId: string;
  lpCoin: CoinData;
  coin0: CoinData;
  coin1: CoinData;
  isSingleCoin: boolean;
  account: string | null;
}

const FarmDummy: FC<FarmDummyProps> = ({
  lpCoin,
  objectId,
  poolObjectId,
  isSingleCoin,
  account,
}) => {
  useFarmData({ objectId, account, lpCoin, isSingleCoin, poolObjectId });
  return <div>{lpCoin.symbol}i am a farm replace me but check console.log</div>;
};

export default FarmDummy;
