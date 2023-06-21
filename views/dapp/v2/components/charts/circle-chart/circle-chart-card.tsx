import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import CircleChart from './circle';

interface CircleChartCardProps {
  data: ReadonlyArray<any>;
}

const CircleChartCard: FC<CircleChartCardProps> = ({ data }) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  return (
    <Box
      gridColumn="8/-1"
      width="100%"
      height="371px"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      color="onSurface"
      borderRadius="m"
      bg="surface.containerLow"
      pb="1rem"
    >
      <Box
        display="flex"
        rowGap="1rem"
        justifyContent="space-between"
        margin="1.5rem 1.5rem 0px 1.5rem"
      >
        <Typography variant="large" color={dark ? 'white' : 'onSurface'}>
          {t('dapp.cryptoAllocation')}
        </Typography>
        <Typography variant="extraSmall" color={dark ? '#E9D5FF' : '#C084FC'}>
          {t('dapp.seeMore')}
        </Typography>
      </Box>
      <CircleChart data={data} />
    </Box>
  );
};

export default CircleChartCard;
