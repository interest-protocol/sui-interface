import { Box, TooltipWrapper, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { InfoLightSVG } from '@/svg';

const LstHeader: FC = () => {
  const t = useTranslations();

  return (
    <Box display="flex" fontSize="1.375rem" alignItems="center" gap="0.5rem">
      {t('lst.metadata.title')}
      <TooltipWrapper
        bg="inverseSurface"
        width="max-content"
        tooltipPosition="right"
        tooltipContent={
          <Typography
            variant="extraSmall"
            color="inverseOnSurface"
            textTransform="capitalize"
          >
            {t('lst.metadata.description')}
          </Typography>
        }
      >
        <Box
          width="1.375rem"
          height="1.375rem"
          display="flex"
          color="onSurface"
          cursor="help"
        >
          <InfoLightSVG maxWidth="1.375rem" maxHeight="1.375rem" width="100%" />
        </Box>
      </TooltipWrapper>
    </Box>
  );
};

export default LstHeader;
