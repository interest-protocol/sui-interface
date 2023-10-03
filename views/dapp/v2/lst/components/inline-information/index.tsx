import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TTranslatedMessage } from '@/interface';
import { capitalize } from '@/utils';

import { InlineInformationProps } from './small-information.types';

const InlineInformation: FC<InlineInformationProps> = ({
  bg,
  Icon,
  value,
  color,
  description,
}) => {
  const t = useTranslations();
  return (
    <Box display="flex" columnGap="l" alignItems="center">
      <Box
        display="flex"
        width="2.5rem"
        height="2.5rem"
        borderRadius="m"
        aspectRatio="1/1"
        alignItems="center"
        justifyContent="center"
        color={color ? color : 'primary'}
        bg={bg ? bg : 'surface.containerHigh'}
      >
        <Icon width="100%" maxHeight="1.25rem" maxWidth="1.25rem" />
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Typography variant="extraSmall" opacity="0.6" color="onSurface">
          {capitalize(t(description as TTranslatedMessage))}
        </Typography>
        <Typography variant="large" color="onSurface">
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default InlineInformation;
