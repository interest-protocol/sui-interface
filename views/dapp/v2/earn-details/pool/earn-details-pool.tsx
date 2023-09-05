import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { FarmMetadataType, TOKENS_SVG_MAP_V2 } from '@/constants';
import { useWeb3 } from '@/hooks';
import { getSafeTotalBalance, ZERO_BIG_NUMBER } from '@/utils';
import { IToken } from '@/views/dapp/dex-pool-details/components/add-liquidity-card/add-liquidity-card.types';

import { useGetPool } from '../earn-details.hooks';
import EarnPoolOverview from './earn-details-overview';
import AddLiquidityCard from './pool-card/add-liquidity';
import RemoveLiquidityCard from './pool-card/remove-liquidity';

const EarnDetailsPool: FC<FarmMetadataType> = ({
  coin0,
  coin1,
  stable,
  poolObjectId,
}) => {
  const { coinsMap } = useWeb3();
  const { data: pool } = useGetPool(poolObjectId);

  const DefaultIcon = TOKENS_SVG_MAP_V2.default;
  const FirstIcon = TOKENS_SVG_MAP_V2[coin0.type] ?? DefaultIcon;
  const SecondIcon = TOKENS_SVG_MAP_V2[coin1.type] ?? DefaultIcon;

  const addLiquidityTokens: IToken[] = [
    {
      symbol: coin0.symbol,
      Icon: (
        <Box as="span" display="inline-flex" width="1.2rem">
          <FirstIcon width="100%" maxHeight="1.2rem" maxWidth="1.2rem" />
        </Box>
      ),
      balance: getSafeTotalBalance(coinsMap[coin0.type]),
      decimals: coin0.decimals,
      type: coin0.type,
    },
    {
      symbol: coin1.symbol,
      Icon: (
        <Box as="span" display="inline-flex" width="1.2rem">
          <SecondIcon width="100%" maxHeight="1.2rem" maxWidth="1.2rem" />
        </Box>
      ),
      balance: getSafeTotalBalance(coinsMap[coin1.type]),
      decimals: coin1.decimals,
      type: coin1.type,
    },
  ];

  const removeLiquidityTokens: [
    Omit<IToken, 'balance'>,
    Omit<IToken, 'balance'>
  ] = [
    {
      symbol: coin0.symbol,
      Icon: (
        <Box as="span" display="flex" width="1rem">
          <FirstIcon width="100%" maxHeight="1rem" maxWidth="1rem" />
        </Box>
      ),
      type: coin0.type,
      decimals: coin0.decimals,
    },
    {
      symbol: coin1.symbol,
      Icon: (
        <Box as="span" display="flex" width="1rem">
          <SecondIcon width="100%" maxHeight="1rem" maxWidth="1rem" />
        </Box>
      ),
      type: coin1.type,
      decimals: coin1.decimals,
    },
  ];

  console.log('>> pool :: ', pool);

  return (
    <Box variant="container" display="flex" flexDirection="column">
      <EarnPoolOverview stable={stable} objectId={poolObjectId} />
      <Box
        display="grid"
        gap={['s', 's', 's', '2xl']}
        gridTemplateColumns={[
          'repeat(auto-fit, 1fr)',
          'repeat(auto-fit, 1fr)',
          'repeat(auto-fit, 1fr)',
          'repeat(auto-fit, minmax(17rem, 1fr))',
        ]}
      >
        <AddLiquidityCard
          token0={addLiquidityTokens[0]}
          token1={addLiquidityTokens[1]}
        />
        <RemoveLiquidityCard
          tokens={removeLiquidityTokens}
          decimals={0}
          balance={ZERO_BIG_NUMBER}
        />
      </Box>
    </Box>
  );
};

export default EarnDetailsPool;
