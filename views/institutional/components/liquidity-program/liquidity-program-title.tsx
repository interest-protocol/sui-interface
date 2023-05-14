import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Title from '../title';

const LiquidityProgramTitle: FC = () => {
  const t = useTranslations();

  return (
    <Box gridColumn="1/-1">
      <Title>
        <Typography
          color="primary"
          variant="displaySmall"
          letterSpacing="-0.15rem"
          width="100%"
        >
          {t('liquidity.liquidity-program.title')}
        </Typography>
      </Title>
      <Box width="100%" opacity=".7" mb="2xl">
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
