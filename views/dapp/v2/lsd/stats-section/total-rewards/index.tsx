import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Chart from '../../../components/charts';
import { TOTAL_DATA } from './total-rewards.data';

const TotalRewards: FC = () => {
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
      <Box gridColumn="1/-1" width="100%">
        <Typography
          color="onSurface"
          variant="extraSmall"
          textTransform="capitalize"
        >
          {t('lsd.statsSection.totalRewards.title')}
        </Typography>
      </Box>
      <Box
        gap="l"
        display="flex"
        flexDirection={['row', 'row', 'column', 'column']}
        justifyContent={['space-between', 'space-between', 'unset', 'unset']}
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
              type="bar"
              dataKey="amount"
              xAxis="description"
              data={TOTAL_DATA}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TotalRewards;
