import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TimesSVG } from '@/svg';

import { getSVG } from '../../market-table/market-table.utils';
import { HeaderModalProps } from './modal.types';

const HeaderModal: FC<HeaderModalProps> = ({
  type,
  symbol,
  closeModal,
  isCenter,
}) => {
  return (
    <Box
      p="xl"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      color="onSurface"
    >
      {isCenter && <Box />}
      <Box display="flex" alignItems="center">
        <Box display="flex" alignItems="center">
          {getSVG(type)}
        </Box>
        <Typography variant="title5" ml="0.5rem" color="onSurface">
          {symbol}
        </Typography>
      </Box>
      <Button variant="icon" onClick={closeModal}>
        <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
      </Button>
    </Box>
  );
};

export default HeaderModal;
