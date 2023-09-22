import { FC } from 'react';

import { FixedPointMath } from '@/lib';
import { formatMoney } from '@/utils';
import { useLstData } from '@/views/dapp/v2/lst/lst.hooks';

import ExchangeRate from '../../components/exchange-rate';
import NextEpoch from '../../components/next-epoch';
import PricesMarketCard from '../../components/prices-market-card';
import Stats from '../../components/stats';
import StatsSkeleton from './stats-skeleton';

const Statistics: FC = () => {
  const { lstStorage, totalISuiMinted, iSuiExchangeRate, isLoading } =
    useLstData();

  if (isLoading) return <StatsSkeleton />;

  const totalSui = FixedPointMath.toNumber(lstStorage.pool.elastic);

  return (
    <>
      <PricesMarketCard />
      <Stats
        totalStaked={+formatMoney(totalSui, 2)}
        totalISui={formatMoney(totalISuiMinted, 2).toString()}
      />
      <ExchangeRate iSuiExchangeRate={Number(iSuiExchangeRate)} />
      <NextEpoch />
    </>
  );
};

export default Statistics;
