import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import Card from './card';
import { useLendProviderValue } from './lend.provider';
import { makeCardsData } from './lend.utils';

const OverviewSection: FC = () => {
  const t = useTranslations();

  const { userBalancesInUSD, loading } = useLendProviderValue();

  return (
    <>
      <Typography variant="extraSmall" color="onSurface" my="1rem">
        {t('lend.subTitle')}
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
          <Card {...item} key={v4()} isLoading={loading} />
        ))}
      </Box>
    </>
  );
};

export default OverviewSection;
