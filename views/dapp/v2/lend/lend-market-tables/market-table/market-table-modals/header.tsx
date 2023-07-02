import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { LeftArrowSVG } from '@/components/svg/v2';
import { TimesSVG } from '@/svg';

import { MarketTableTokenIcon } from '../market-table-token-icon';
import { HeaderModalProps } from './modal.types';

const HeaderModal: FC<HeaderModalProps> = ({
  type,
  symbol,
  withBack,
  handleBack,
  closeModal,
  isSupply,
  isCenter,
}) => (
  <Box
    p="xl"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    color="onSurface"
  >
    {withBack && (
      <Button
        variant="icon"
        onClick={() => {
          handleBack && handleBack(isSupply || true);
        }}
      >
        <LeftArrowSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
      </Button>
    )}
    {isCenter && <Box />}
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center">
        <MarketTableTokenIcon type={type} />
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

export default HeaderModal;
