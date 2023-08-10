import { Network } from '@interest-protocol/sui-amm-sdk';

import { RECOMMENDED_POOLS } from '@/constants';

export const getCoinDataFromMetricLabel = (value: string) => {
  const [type, symbols] = value.split('-');

  const isStable = type === 'stable';

  const [coinIdA, coinIdB] = symbols.split('/');

  const [symbolA, originA] = [
    coinIdA.replace(/[^a-z]/g, ''),
    coinIdA.replace(/[^A-Z]/g, ''),
  ];

  const [symbolB, originB] = [
    coinIdB.replace(/[^a-z]/g, ''),
    coinIdB.replace(/[^A-Z]/g, ''),
  ];

  const pool = RECOMMENDED_POOLS[Network.MAINNET].filter(
    ({ stable }) => stable === isStable
  );

  console.log('>> pools :: ', pool);

  return {
    value,
    isStable,
    origins: [originA, originB],
    symbols: [symbolA, symbolB],
  };
};
