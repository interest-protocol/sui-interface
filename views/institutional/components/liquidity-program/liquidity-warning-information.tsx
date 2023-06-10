import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import InfoLight from '@/components/svg/info-light';

const LiquidityWarning: FC = () => {
  const t = useTranslations();

  return (
    <Box
      gridColumn={['1/23', '1/-1']}
      background="#E9D5FF"
      padding="l"
      borderRadius="m"
    >
      <Box display="flex" gap="1rem" alignItems="center" color="#6B21A8">
        <InfoLight width="1.5rem" maxHeight="1.5rem" maxWidth="1.5rem" />
        <Typography variant="small" width="100%" textAlign="left">
          {t('liquidity.liquidity-program.informations.warning')}
        </Typography>
      </Box>
    </Box>
  );
};

export default LiquidityWarning;
