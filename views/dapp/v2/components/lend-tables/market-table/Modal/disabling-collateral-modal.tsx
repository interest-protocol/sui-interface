import {
  Box,
  Button,
  Motion,
  ProgressIndicator,
  Typography,
} from '@interest-protocol/ui-kit';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { setTimeout } from 'timers';

import HeaderModal from './header';
import LineModal from './lines';
import LoadingModal from './loading-collateral';
import { CollateralModalProps } from './modal.types';

const DisablingCollateralModal: FC<CollateralModalProps> = ({
  assetApy,
  closeModal,
  resultModal,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleIsLoading = () => {
    setIsLoading(not);
  };

  const handleCollateral = () => {
    handleIsLoading();
    setTimeout(resultModal, (Math.floor(Math.random() * 5) + 3) * 1000);
  };

  return isLoading ? (
    <LoadingModal
      title="Disabling as Collateral"
      content="Confirm the transaction with [Name of Wallet]."
    />
  ) : (
    <Motion
      layout
      width="24.375rem"
      display="flex"
      maxHeight="90vh"
      maxWidth="26rem"
      overflow="hidden"
      color="onSurface"
      borderRadius="1rem"
      bg="surface.container"
      flexDirection="column"
      boxShadow="0 0 5px #3334"
      transition={{ duration: 0.3 }}
    >
      <HeaderModal
        type={assetApy.coin.token.type}
        symbol={assetApy.coin.token.symbol}
        closeModal={closeModal}
      />
      <Box p="xl">
        <Typography
          variant="medium"
          mb="1rem"
          fontSize="1.375rem"
          fontWeight="400"
          color="onSurface"
        >
          Disable as Collateral
        </Typography>
        <Typography variant="small" color="onSurface" lineHeight="1.25rem">
          Disabling an asset as collateral will remove it from your borrowing
          limit, and no longer subject it to liquidation
        </Typography>
      </Box>
      <Box p="xl" bg="surface.containerLow">
        <LineModal description="Borrow Limit" value="$ 1000" />
        <LineModal description="Borrow Limit Used" value="0 %" />
        <Box p="1rem" display="flex" justifyContent="space-between">
          <ProgressIndicator value={75} variant="bar" />
        </Box>
      </Box>
      <Box
        p="xl"
        bg="surface.containerLow"
        display="flex"
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Button variant="text" fontSize="s" onClick={closeModal}>
          Cancel
        </Button>
        <Button variant="filled" fontSize="s" onClick={handleCollateral}>
          Disable Collateral
        </Button>
      </Box>
    </Motion>
  );
};

export default DisablingCollateralModal;
