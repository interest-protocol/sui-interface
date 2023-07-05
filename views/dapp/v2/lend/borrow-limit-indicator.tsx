import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { formatDollars, formatNumber, safeIntDiv } from '@/utils';

import { useLendProviderValue } from './lend.provider';

const BorrowLimitIndicator: FC = () => {
  const t = useTranslations();

  const { userBalancesInUSD, loading } = useLendProviderValue();

  const borrowLimitPercentage =
    safeIntDiv(userBalancesInUSD.totalLoan, userBalancesInUSD.totalCollateral) *
    100;

  return (
    <Box
      gap="s"
      my="2.375rem"
      display="grid"
      color="onSurface"
      gridTemplateColumns="auto 1fr"
      mb={['m', 'm', 'm', '2.375rem']}
    >
      <Box>
        <Typography variant="extraSmall" maxWidth="12rem" width="max-content">
          {t('lend.overview.borrowLimit')}:
        </Typography>
      </Box>
      {loading ? (
        <Skeleton />
      ) : (
        <Box display="grid" gridTemplateColumns="auto 3fr auto" gap="s">
          <Typography variant="extraSmall">
            {formatNumber(+borrowLimitPercentage.toFixed(2)).toString()}%
          </Typography>
          <Box display="flex" alignItems="center">
            <ProgressIndicator value={+borrowLimitPercentage} variant="bar" />
          </Box>
          <Typography variant="extraSmall" textAlign="left">
            100% (
            {formatDollars(
              userBalancesInUSD.totalCollateral - userBalancesInUSD.totalLoan
            ).toString()}
            )
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default BorrowLimitIndicator;
