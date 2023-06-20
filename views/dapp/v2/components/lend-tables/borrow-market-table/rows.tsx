import {
  Box,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { useModal } from '@/hooks';

import { MarketTableBorrowedProps } from '../market-table/market-table.types';
import { getSVG } from '../market-table/market-table.utils';
import BorrowMarketConfirmModal from '../market-table/Modal/borrow-row/borrow-row-confirm-modal';
import BorrowMarketFailModal from '../market-table/Modal/borrow-row/borrow-row-fail-modal';
import BorrowMarketModal from '../market-table/Modal/borrow-row/borrow-row-modal';
import BorrowMarketPreviewModal from '../market-table/Modal/borrow-row/borrow-row-preview-modal';

const BorrowMarketTableRow: FC<
  MarketTableBorrowedProps & { isEngaged: boolean }
> = ({ assetApy, borrowed, wallet, liquidity, isEngaged }) => {
  const { dark } = useTheme() as Theme;
  const { setModal, handleClose } = useModal();
  const surface1 = dark
    ? 'linear-gradient(0deg, rgba(182, 196, 255, 0.04), rgba(182, 196, 255, 0.04)), #1B1B1F'
    : 'linear-gradient(0deg, rgba(0, 85, 255, 0.04), rgba(0, 85, 255, 0.04)), #F2F0F4';
  const surface2 = dark
    ? 'linear-gradient(0deg, rgba(182, 196, 255, 0.08), rgba(182, 196, 255, 0.08)), #1B1B1F'
    : 'linear-gradient(0deg, rgba(0, 85, 255, 0.08), rgba(0, 85, 255, 0.08)), #F2F0F4';

  const openRowMarketModal = (isSupplyOrBorrow: boolean) => {
    setModal(
      <BorrowMarketModal
        closeModal={handleClose}
        isSupplyOrBorrow={isSupplyOrBorrow}
        assetApy={assetApy}
        openRowMarketPreviewModal={openRowMarketPreviewModal}
      />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  const openRowMarketPreviewModal = (isSupplyOrBorrow: boolean) => {
    setModal(
      <BorrowMarketPreviewModal
        closeModal={handleClose}
        assetApy={assetApy}
        isSupplyOrBorrow={isSupplyOrBorrow}
        backRowMarketModal={openRowMarketModal}
        openRowMarketResultModal={openRowMarketResultModal}
      />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  const openRowMarketResultModal = (
    isSuccess: boolean,
    isSupplyOrBorrow: boolean
  ) => {
    setModal(
      isSuccess ? (
        <BorrowMarketConfirmModal
          closeModal={handleClose}
          title={isSupplyOrBorrow ? 'Borrow' : 'Repay'}
          content={isSupplyOrBorrow ? 'Token Supplied' : 'Token Withdrawed'}
          additionalText="You can check you transaction history in the Actvity menu."
          activityLink="#"
        />
      ) : (
        <BorrowMarketFailModal
          closeModal={handleClose}
          title={isSupplyOrBorrow ? 'Supply' : 'Withdraw'}
          content={
            isSupplyOrBorrow ? 'Token Supply Failed' : 'Token Withdraw Failed'
          }
          description=""
        />
      ),
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  return (
    <Motion
      width="100%"
      display="grid"
      cursor="pointer"
      whileHover={{
        background: surface2,
      }}
      initial={{
        background: surface1,
      }}
      gridTemplateColumns="repeat(4, 1fr)"
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      pl="0.75rem"
      pr="0.5rem"
      mb="1rem"
      onClick={() => openRowMarketModal(true)}
    >
      <Box
        borderLeft="2px solid"
        borderColor={isEngaged ? '#D9F99D' : 'surface.containerLow'}
        py="1.5rem"
        pl="1.125rem"
        gap="m"
        display="flex"
      >
        <Box display="flex" alignItems="center">
          {getSVG(assetApy.coin.token.type)}
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography variant="medium">{assetApy.coin.token.symbol}</Typography>
          <Typography
            variant="small"
            color={
              assetApy.coin.color !== undefined && dark
                ? assetApy.coin.color.dark
                : assetApy.coin.color !== undefined && !dark
                ? assetApy.coin.color.light
                : dark
                ? '#77767A'
                : '#47464A'
            }
          >
            {assetApy.percentage}%
          </Typography>
        </Box>
      </Box>
      <Box
        gap="2xs"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="medium" textAlign="center">
          {borrowed.percentage}
        </Typography>
        <Typography
          variant="small"
          textAlign="center"
          color={dark ? '#77767A' : '#47464A'}
        >
          ${borrowed.value}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography variant="medium" textAlign="center">
          {wallet}
        </Typography>
      </Box>
      <Box px="l" display="flex" alignItems="center" justifyContent="flex-end">
        <Typography variant="medium" textAlign="right">
          ${liquidity}
        </Typography>
      </Box>
    </Motion>
  );
};

export default BorrowMarketTableRow;
