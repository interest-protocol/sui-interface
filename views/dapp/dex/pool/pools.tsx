import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { Switch } from '@/components';
import { Box, Typography } from '@/elements';

import PoolList from './pool-list';

const Pools: FC<{ isRecommended: boolean }> = ({ isRecommended }) => {
  const t = useTranslations();
  const [isStable, setIsStable] = useState(false);

  return (
    <Box pb="L" pt="M" mb="L" px="L" bg="foreground" borderRadius="M">
      <Box
        my="M"
        mb="L"
        display="grid"
        alignItems="center"
        gridTemplateColumns="1fr 1fr 1fr"
      >
        <Typography variant="normal">
          {isRecommended ? t('dexPool.recommended') : t('dexPool.myPools')}
        </Typography>
        <Box display="flex" justifyContent="center">
          <Switch
            thin
            defaultValue={isStable ? 'stable' : 'volatile'}
            options={[
              { value: 'volatile', onSelect: () => setIsStable(false) },
              { value: 'stable', onSelect: () => setIsStable(true) },
            ]}
          />
        </Box>
      </Box>
      <PoolList isRecommended={isRecommended} isStable={isStable} />
    </Box>
  );
};

export default Pools;
