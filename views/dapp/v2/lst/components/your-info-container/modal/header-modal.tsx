import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { LeftArrowSVG, TimesSVG } from '@/components/svg/v2';

import { HeaderModalProps } from './modal.types';

const HeaderModal: FC<HeaderModalProps> = ({
  handleClose,
  withoutBack,
  title,
}) => (
  <Box
    p="xl"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    color="onSurface"
  >
    {withoutBack ? (
      <Box />
    ) : (
      <Button variant="icon" onClick={handleClose}>
        <LeftArrowSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
      </Button>
    )}
    <Box display="flex" alignItems="center">
      <Typography
        variant="medium"
        textTransform="uppercase"
        ml="s"
        color="onSurface"
      >
        {title}
      </Typography>
    </Box>
    <Button variant="icon" onClick={handleClose}>
      <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
    </Button>
  </Box>
);

export default HeaderModal;
