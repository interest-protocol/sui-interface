import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import SuiDerivatedSVG from '../../components/sui-derivated-svg';
import { StatsDerivatedWrapperProps } from './stats.type';

const StatsDerivatedWrapper: FC<StatsDerivatedWrapperProps> = ({
  name,
  value,
}) => {
  const t = useTranslations();
  return (
    <Box key={v4()}>
      <Typography
        variant="extraSmall"
        fontSize="0.688rem"
        color="onSurface"
        opacity={0.6}
        mb="0.625rem"
      >
        {t('lsd.totalMinted', { symbol: name })}
      </Typography>
      <Box display="flex" alignItems="center" gap="0.5rem">
        <Box display="flex" alignItems="center" gap="0.5rem" color="white">
          <SuiDerivatedSVG size="1.25rem" symbol={name} rounded />
        </Box>
        <Typography
          variant="extraSmall"
          fontSize="1.375rem"
          lineHeight="1.75rem"
          color="onSurface"
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatsDerivatedWrapper;
