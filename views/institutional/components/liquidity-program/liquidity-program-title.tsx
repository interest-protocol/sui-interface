import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const LiquidityProgramTitle: FC = () => {
  const t = useTranslations();

  return (
    <Box>
      <Typography
        color="primary"
        variant="displaySmall"
        letterSpacing="-0.15rem"
        width="100%"
        textAlign="left"
      >
        {t('liquidity.liquidity-program.title')}
      </Typography>

      <Box width="100%" opacity=".7" mb="2xl" textAlign="left">
        <Typography
          variant="small"
          width={['100%', '100%', '100%', '520px']}
          mb="2xl"
        >
          {t('liquidity.liquidity-program.description.paragraph1')}
        </Typography>
        <Typography variant="small" width={['100%', '100%', '100%', '520px']}>
          {t('liquidity.liquidity-program.description.paragraph2')}
        </Typography>
      </Box>
    </Box>
  );
};

export default LiquidityProgramTitle;
