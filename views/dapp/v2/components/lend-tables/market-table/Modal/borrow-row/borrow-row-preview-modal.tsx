import {
  Box,
  Button,
  Motion,
  ProgressIndicator,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { LeftArrowSVG } from '@/components/svg/v2';
import { TimesSVG } from '@/svg';

import { getSVG } from '../../../market-table/market-table.utils';
import LineModal from '../lines';
import LoadingModal from '../loading-collateral';
import { RowPreviewModalProps } from '../modal.types';

const BorrowMarketPreviewModal: FC<RowPreviewModalProps> = ({
  assetApy,
  closeModal,
  isSupplyOrBorrow,
  backRowMarketModal,
  openRowMarketResultModal,
}) => {
  const { dark } = useTheme() as Theme;
  const [FromIcon] = [getSVG(assetApy.coin.token.type)];

  const [isLoading, setIsLoading] = useState(false);

  const handleIsLoading = () => {
    setIsLoading(not);
  };

  const handleResult = () => {
    const RANDOM_RESULT = Math.random() < 0.5;
    openRowMarketResultModal(RANDOM_RESULT, isSupplyOrBorrow);
  };

  const handleCollateral = () => {
    handleIsLoading();
    setTimeout(handleResult, (Math.floor(Math.random() * 5) + 3) * 1000);
  };

  return isLoading ? (
    <LoadingModal
      title={isSupplyOrBorrow ? 'Borrow' : 'Repay'}
      content={
        isSupplyOrBorrow
          ? 'Borrowing Token please wait...'
          : 'Repaying Token please wait...'
      }
    />
  ) : (
    <Motion
      layout
      width="24.375rem"
      display="flex"
      maxHeight="90vh"
      maxWidth="26rem"
      overflowY="auto"
      overflowX="hidden"
      color="onSurface"
      borderRadius="1rem"
      bg="surface.container"
      flexDirection="column"
      boxShadow="0 0 5px #3334"
      transition={{ duration: 0.3 }}
    >
      <Box
        p="xl"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        color="onSurface"
      >
        <Button
          variant="icon"
          onClick={() => {
            backRowMarketModal(false);
          }}
        >
          <LeftArrowSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center">
            {getSVG(assetApy.coin.token.type)}
          </Box>
          <Typography variant="title5" ml="0.5rem" color="onSurface">
            {assetApy.coin.token.symbol}
          </Typography>
        </Box>
        <Button variant="icon" onClick={closeModal}>
          <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
      </Box>
      <Box mx="-0.5rem" px="xl">
        <Box bg="surface.containerLowest" borderRadius="m">
          <Box
            p="xl"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" gap="xl">
              {FromIcon}
              <Typography variant="medium" color="">
                {assetApy.coin.token.symbol}
              </Typography>
            </Box>
            <Box textAlign="right">
              <Typography variant="medium" color={dark ? 'white' : 'black'}>
                0.000
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box p="xl" bg="surface.containerLow">
        <LineModal description="New Borrow Limit" value="" />
        <LineModal description="Borrow Limit" value="$ 1000" />
        <LineModal description="Borrow Limit Used" value="0 %" />
        <Box p="1rem" display="flex" justifyContent="space-between">
          <ProgressIndicator value={75} variant="bar" />
        </Box>
        <Box
          as="hr"
          mx="4xl"
          my="1.5rem"
          border="none"
          borderBottom="1px solid"
          borderColor="outline.outlineVariant"
        />
        <LineModal description="New Total Borrow Balance" value="" />
        <LineModal description="In token" value="0,0" />
        <LineModal description="In USD" value="0,2" />
      </Box>
      <Box
        p="xl"
        bg="surface.containerLow"
        display="flex"
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Button
          variant="filled"
          fontSize="s"
          width="100%"
          display="flex"
          justifyContent="center"
          onClick={handleCollateral}
        >
          {isSupplyOrBorrow ? 'Confirm Borrow' : 'Confirm Repay'}
        </Button>
      </Box>
    </Motion>
  );
};

export default BorrowMarketPreviewModal;
