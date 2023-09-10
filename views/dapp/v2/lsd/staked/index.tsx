import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import StakingForm from './staking-form';
import Statistics from './statistics';

const Staked: FC = () => {
  const t = useTranslations();

  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Box
        pb="1rem"
        width="100%"
        gridColumn="1/-1"
        display="flex"
        flexDirection={['column', 'column', 'column', 'row']}
        gap={['l', 'l', 'l', 'xl']}
      >
        <Typography
          display={['block', 'block', 'block', 'none']}
          variant="displayLarge"
          color="onSurface"
          textTransform="capitalize"
          textAlign="center"
        >
          {t('lsd.metadata.title')}
        </Typography>
        <Statistics />
        <StakingForm />
      </Box>
    </Box>
  );
};

export default Staked;
