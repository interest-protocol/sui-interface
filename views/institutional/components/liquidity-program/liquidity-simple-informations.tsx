import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const LiquiditySimpleInformation: FC = () => {
  const t = useTranslations();

  return (
    <>
      <Box gridColumn={['1/23', '1/23', 'span 4']} width="100%">
        <Typography variant="small" width="100%" opacity=".7">
          {t('liquidity.liquidity-program.informations.first')}
        </Typography>
      </Box>
      <Box gridColumn={['1/-1', 'span 4']} width="100%">
        <Typography variant="small" width="100%" opacity=".7">
          {t('liquidity.liquidity-program.informations.second')}
        </Typography>
      </Box>
    </>
  );
};

export default LiquiditySimpleInformation;
