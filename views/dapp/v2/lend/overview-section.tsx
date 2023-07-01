import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import APRCard from './card/apr-card';
import RewardsCard from './card/rewards-card';
import { useLendProviderValue } from './lend.provider';
import { makeCardsData } from './lend.utils';

const OverviewSection: FC = () => {
  const t = useTranslations();

  const { userBalancesInUSD, loading } = useLendProviderValue();

  return (
    <>
      <Typography variant="extraSmall" color="onSurface" my="1rem">
        {t('common.v2.lend.subTitle')}
      </Typography>
      <Box
        display={['grid', 'grid', 'grid', 'grid']}
        gridTemplateColumns={[
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(4, 1fr)',
        ]}
        overflowX="auto"
        gap="0.5rem"
        flexWrap="wrap"
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

export default OverviewSection;
