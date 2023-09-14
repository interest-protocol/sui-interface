import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { UsersSVG } from '@/components/svg/v2';
import { FixedPointMath } from '@/lib';
import { capitalize } from '@/utils';
import {
  useGetActiveValidators,
  useLstData,
} from '@/views/dapp/v2/lst/lst.hooks';

import ExchangeRate from '../../components/exchange-rate';
import FAQ from './faq';
import NextEpoch from './next-epoch';
import PricesMarketCard from './prices-market-card';
import Stats from './stats';

const Statistics: FC = () => {
  const t = useTranslations();

  const { data: activeValidators, isLoading: isActiveValidatorsLoading } =
    useGetActiveValidators();

  const { lstStorage, totalISuiMinted, iSuiExchangeRate, isLoading } =
    useLstData();

  if (isActiveValidatorsLoading || isLoading)
    return (
      <Box
        gap="0.5rem"
        display="flex"
        flexDirection="column"
        width={['100%', '100%', '100%', '55%']}
      >
        <Skeleton height="6.75rem" width="100%" />
        <Skeleton height="10.3rem" width="100%" />
        <Box
          gap="s"
          display="flex"
          flexDirection={['column', 'column', 'column', 'row']}
        >
          <Box width={['100%', '100%', '100%', '50%']}>
            <Skeleton height="6.75rem" width="100%" />
          </Box>
          <Box width={['100%', '100%', '100%', '50%']}>
            <Skeleton height="6.75rem" width="100%" />
          </Box>
        </Box>
        <Skeleton height="5.6rem" width="100%" />
      </Box>
    );

  const totalSuiStaked = FixedPointMath.toNumber(lstStorage.totalPrincipal);

  return (
    <Box
      gap="0.5rem"
      display="flex"
      flexDirection="column"
      width={['100%', '100%', '100%', '55%']}
    >
      <PricesMarketCard />
      <Stats
        apy={0}
        totalRewards={0}
        totalStaked={Number(totalSuiStaked)}
        derivatedSui={[{ name: 'iSui', value: totalISuiMinted.toString() }]}
      />
      <Box
        gap="s"
        display="flex"
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <ExchangeRate iSuiExchangeRate={Number(iSuiExchangeRate)} />
        <Box
          p="l"
          gap="l"
          flex="1"
          display="flex"
          flexDirection="column"
          borderRadius="0.5rem"
          bg="surface.container"
        >
          <Typography
            color="onSurface"
            variant="extraSmall"
            textTransform="capitalize"
          >
            {capitalize(t('lst.overview.validators'))}
          </Typography>
          <Box display="flex" columnGap="l" alignItems="center">
            <Box
              display="flex"
              width="2.5rem"
              height="2.5rem"
              color="primary"
              borderRadius="m"
              aspectRatio="1/1"
              alignItems="center"
              justifyContent="center"
              bg="surface.containerHigh"
            >
              <UsersSVG width="100%" maxHeight="1.25rem" maxWidth="1.25rem" />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Typography variant="extraSmall" opacity="0.6" color="onSurface">
                {capitalize(t('lst.overview.validators'))}
              </Typography>
              <Typography variant="large" color="onSurface">
                {activeValidators.length}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <NextEpoch />
      <FAQ />
    </Box>
  );
};

export default Statistics;
