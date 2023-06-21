import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import LinearChart from './linear';

interface LineChartCardProps {
  visibleData: ReadonlyArray<any>;
  data: ReadonlyArray<any>;
}

const LineChartCard: FC<LineChartCardProps> = ({ visibleData, data }) => {
  const { dark } = useTheme() as Theme;
  const t = useTranslations();

  return (
    <Box
      width="100%"
      gridColumn={['1/-1', '1/-1', '1/-1', '1/8']}
      height="371px"
      color="onSurface"
      borderRadius="m"
      bg="surface.containerLow"
    >
      <Box
        display="flex"
        flexDirection="column"
        rowGap="1rem"
        margin="1.125rem 1.1875rem 2.3681rem"
      >
        <Typography variant="large" color={dark ? 'white' : 'onSurface'}>
          {t('dapp.performance')}
        </Typography>
        <Typography variant="title4" color={dark ? 'white' : 'onSurface'}>
          USD 19.90
        </Typography>
      </Box>
      <LinearChart visibleData={visibleData} data={data} />
    </Box>
  );
};

export default LineChartCard;
