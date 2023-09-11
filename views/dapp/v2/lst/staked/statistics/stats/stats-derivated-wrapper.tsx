import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { ISuiPCSVG, ISuiSVG, ISuiYNSVG } from '@/svg';

import { GetISuiSVGProps, StatsDerivatedWrapperProps } from './stats.type';

const GetISuiSVG: FC<GetISuiSVGProps> = ({ symbol }) => {
  const SVG =
    symbol == 'iSui' ? ISuiSVG : symbol == 'iSui-PC' ? ISuiPCSVG : ISuiYNSVG;
  return (
    <SVG
      maxWidth="1.25rem"
      maxHeight="1.25rem"
      width="100%"
      height="100%"
      filled
      rounded
    />
  );
};

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
        {t('lst.totalMinted', { symbol: name })}
      </Typography>
      <Box display="flex" alignItems="center" gap="0.5rem">
        <Box display="flex" alignItems="center" gap="0.5rem" color="white">
          <GetISuiSVG symbol={name} />
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
