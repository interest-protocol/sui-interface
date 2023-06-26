import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { safeIntDiv } from '@/utils';

import { LimitSectionProps } from './lend.types';

const LimitSection: FC<LimitSectionProps> = ({
  isLoading,
  userBalancesInUSD,
}) => {
  const t = useTranslations();

  const borrowLimitPercentage = (
    safeIntDiv(userBalancesInUSD.totalLoan, userBalancesInUSD.totalCollateral) *
    100
  ).toFixed(2);

  return (
    <Box
      my="2.375rem"
      color="onSurface"
      display="grid"
      gridTemplateColumns="auto 1fr"
      mb={['m', 'm', 'm', '2.375rem']}
      gap="s"
    >
      <Box>
        <Typography variant="extraSmall" maxWidth="12rem" width="max-content">
          {t('common.v2.lend.firstSection.borrowLimit')}
        </Typography>
      </Box>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Box display="grid" gridTemplateColumns="auto 3fr auto" gap="s">
          <Typography variant="extraSmall">
            {borrowLimitPercentage} %
          </Typography>
          <Box display="flex" alignItems="center">
            <ProgressIndicator value={+borrowLimitPercentage} variant="bar" />
          </Box>
          <Typography variant="extraSmall" textAlign="left">
            ${' '}
            {(
              userBalancesInUSD.totalCollateral - userBalancesInUSD.totalLoan
            ).toFixed(2)}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default LimitSection;
