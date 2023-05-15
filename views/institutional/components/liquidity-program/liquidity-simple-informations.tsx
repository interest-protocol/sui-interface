import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const LiquiditySimpleInformation: FC = () => {
  const t = useTranslations();

  return (
    <Box
      gap="2xl"
      display="grid"
      gridColumn="1/-1"
      textAlign="left"
      gridTemplateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']}
      my={['2.5rem', '2.5rem', '2.5rem', '5rem']}
    >
      <Box width="100%">
        <Typography variant="small" width="100%" opacity=".7">
          {t('liquidity.liquidity-program.informations.first')}
        </Typography>
      </Box>
      <Box width="100%">
        <Typography variant="small" width="100%" opacity=".7">
          {t('liquidity.liquidity-program.informations.second')}
        </Typography>
      </Box>
    </Box>
  );
};

export default LiquiditySimpleInformation;
