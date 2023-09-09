import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { capitalize } from '@/utils';

import Chart from '../../../components/charts';
import { TOTAL_DATA } from './total-staked.data';

const TotalStaked: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 4000);

  const t = useTranslations();
  return (
    <Box
      p="l"
      rowGap="l"
      display="flex"
      flexDirection="column"
      borderRadius="0.5rem"
      bg="surface.container"
    >
      {isLoading ? (
        <>
          <Skeleton width="20%" />
          <Skeleton width="20%" height="3.125rem" />
          <Skeleton height="12.5rem" />
        </>
      ) : (
        <>
          <Box
            width="100%"
            display="flex"
            gridColumn="1/-1"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              color="onSurface"
              variant="extraSmall"
              textTransform="capitalize"
            >
              {t('lsd.statsSection.totalStaked.title')}
            </Typography>
            <Typography variant="extraSmall" color="onSurface" opacity="0.6">
              {capitalize(t('lsd.statsSection.totalStaked.daily'))}
            </Typography>
          </Box>
          <Box
            gap="l"
            display="flex"
            flexDirection={['row', 'row', 'column', 'column']}
            justifyContent={[
              'space-between',
              'space-between',
              'unset',
              'unset',
            ]}
          >
            <Box width="100%">
              <Typography variant="large" color="onSurface">
                $16,529.24
              </Typography>
              <Typography
                mb="l"
                opacity="0.6"
                color="onSurface"
                variant="extraSmall"
              >
                09 • 07 • 2023
              </Typography>
              <Box height="260px" width="100%">
                <Chart
                  type="area"
                  dataKey="amount"
                  xAxis="description"
                  data={TOTAL_DATA}
                />
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default TotalStaked;