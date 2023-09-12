import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { COINS } from '@/constants';
import { useGetCoinsPrices } from '@/hooks';
import { FixedPointMath, ONE_COIN } from '@/lib';
import {
  useGetActiveValidators,
  useGetLstStorage,
} from '@/views/dapp/v2/lst/lst.hooks';

import { StakedProps } from './staked.types';
import StakingForm from './staking-form';
import Statistics from './statistics';

const Staked: FC<StakedProps> = ({ form }) => {
  const t = useTranslations();
  const { data: activeValidators, isLoading: isActiveValidatorsLoading } =
    useGetActiveValidators();

  console.log({ isActiveValidatorsLoading });

  const { data: coinPrice, isLoading } = useGetCoinsPrices([
    COINS[Network.MAINNET].SUI.type,
  ]);

  const suiPrice = isLoading
    ? 0
    : coinPrice[COINS[Network.MAINNET].SUI.type].price;

  console.log({ isLoading });

  const { data } = useGetLstStorage();

  const totalStakedSui = FixedPointMath.toNumber(data.pool.elastic);
  const iSuiExchangeRate =
    totalStakedSui === 0
      ? 1
      : FixedPointMath.toNumber(data.pool.toElastic(ONE_COIN));
  const totalISuiMinted = FixedPointMath.toNumber(data.pool.base);

  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Box
        pb="1rem"
        width="100%"
        gridColumn="1/-1"
        display="flex"
        flexDirection={['column', 'column', 'column', 'row']}
        gap={['l', 'l', 'l', 'xl']}
      >
        <Typography
          display={['block', 'block', 'block', 'none']}
          variant="displayLarge"
          color="onSurface"
          textTransform="capitalize"
          textAlign="center"
        >
          {t('lst.metadata.title')}
        </Typography>
        <Statistics
          suiPrice={suiPrice}
          totalSuiStaked={totalStakedSui.toString()}
          totalISuiMinted={totalISuiMinted.toString()}
          iSuiExchangeRate={iSuiExchangeRate.toString()}
          totalActiveValidators={activeValidators.length}
        />
        <StakingForm
          form={form}
          suiPrice={suiPrice}
          iSuiExchangeRate={iSuiExchangeRate}
        />
      </Box>
    </Box>
  );
};

export default Staked;
