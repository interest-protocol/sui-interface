import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useLendProviderValue } from '../lend.provider';
import { makeCardsData } from '../lend.utils';
import APRCard from './apr-card';
import RewardsCard from './rewards-card';

const Overview: FC = () => {
  const t = useTranslations();

  const { userBalancesInUSD, loading } = useLendProviderValue();

  return (
    <>
      <Typography variant="extraSmall" color="onSurface" my="1rem">
        {t('lend.subTitle')}
      </Typography>
      <Box
        gap="m"
        display="grid"
        overflowX="auto"
        gridTemplateColumns="repeat(4, 1fr)"
      >
        {makeCardsData({
          userBalancesInUSD,
        }).map((item) => (
          <APRCard {...item} key={v4()} isLoading={loading} />
        ))}
        <RewardsCard />
      </Box>
    </>
  );
};

export default Overview;
