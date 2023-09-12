import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { StakedProps } from './staked.types';
import StakingForm from './staking-form';
import Statistics from './statistics';
import FAQ from './statistics/faq';

const Staked: FC<StakedProps> = (props) => {
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
          {t('lst.metadata.title')}
        </Typography>

        <Box
          gap="0.5rem"
          display="flex"
          flexDirection="column"
          width={['100%', '100%', '100%', '55%']}
        >
          <Statistics />
          <FAQ />
        </Box>
        <StakingForm {...props} />
      </Box>
    </Box>
  );
};

export default Staked;
