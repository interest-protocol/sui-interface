import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ISuiPSVG, ISuiSVG, ISuiYNSVG } from '@/components/svg/v2';

import { GetISuiSVGProps, StatsDerivatedWrapperProps } from './stats.type';

const GetISuiSVG: FC<GetISuiSVGProps> = ({ symbol }) => {
  const SVG =
    symbol == 'iSui' ? ISuiSVG : symbol == 'iSUIP' ? ISuiPSVG : ISuiYNSVG;

  return (
    <SVG width="100%" height="100%" maxWidth="1.25rem" maxHeight="1.25rem" />
  );
};

const StatsDerivatedWrapper: FC<StatsDerivatedWrapperProps> = ({
  name,
  value,
}) => {
  const t = useTranslations();

  return (
    <Box>
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
          {value} {name}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatsDerivatedWrapper;
