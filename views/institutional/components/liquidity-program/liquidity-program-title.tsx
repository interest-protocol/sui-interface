import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const LiquidityProgramTitle: FC = () => {
  const t = useTranslations();

  return (
    <Box gridColumn="1/-1">
      <Typography
        color="primary"
        variant="displaySmall"
        letterSpacing="-0.15rem"
        width="100%"
      >
        {t('liquidity.liquidity-program.title')}
      </Typography>

      <Box width="100%" opacity=".7" my="2xl">
        <Typography variant="small" width={['100%', '100%', '100%', '520px']}>
          {t('liquidity.liquidity-program.description')}
        </Typography>
      </Box>
    </Box>
  );
};

export default LiquidityProgramTitle;
