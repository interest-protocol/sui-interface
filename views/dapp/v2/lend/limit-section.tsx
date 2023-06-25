import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

const LimitSection: FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const t = useTranslations();
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
          <Typography variant="extraSmall">0 %</Typography>
          <Box display="flex" alignItems="center">
            <ProgressIndicator value={75} variant="bar" />
          </Box>
          <Typography variant="extraSmall" textAlign="left">
            $ 0
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default LimitSection;
