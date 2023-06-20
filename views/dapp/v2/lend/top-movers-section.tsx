import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import Card from './card';
import { CARD_HEADERS } from './lend.data';

const TopMoversSection: FC = () => {
  const t = useTranslations();
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
        {CARD_HEADERS.map((item) => (
          <Card {...item} key={v4()} />
        ))}
      </Box>
    </>
  );
};

export default TopMoversSection;
