import {
  Box,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { useModal } from '@/hooks';
import BorrowMarketConfirmModal from '@/views/dapp/v2/lend/lend-tables/market-table/modals/borrow-row/borrow-row-confirm-modal';
import BorrowMarketFailModal from '@/views/dapp/v2/lend/lend-tables/market-table/modals/borrow-row/borrow-row-fail-modal';
import BorrowMarketModal from '@/views/dapp/v2/lend/lend-tables/market-table/modals/borrow-row/borrow-row-modal';
import BorrowMarketPreviewModal from '@/views/dapp/v2/lend/lend-tables/market-table/modals/borrow-row/borrow-row-preview-modal';

import { MarketTableBorrowedProps } from '../market-table.types';
import { getSVG } from '../market-table.utils';

const BorrowMarketTableRow: FC<
  MarketTableBorrowedProps & { isEngaged: boolean }
> = ({ assetApy, borrowed, wallet, cash, isEngaged }) => {
  const t = useTranslations();
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
          title={t(
            isSupplyOrBorrow ? 'common.v2.lend.borrow' : 'common.v2.lend.repay'
          )}
          content={t('Lend.modal.borrow.confirm.content', {
            isBorrow: +isSupplyOrBorrow,
          })}
          additionalText={t('Lend.modal.borrow.confirm.additionInfo')}
          activityLink="#"
        />
      ) : (
        <BorrowMarketFailModal
          closeModal={handleClose}
          title={t(
            isSupplyOrBorrow ? 'common.v2.lend.borrow' : 'common.v2.lend.repay'
          )}
          content={t('Lend.modal.borrow.error.content', {
            isBorrow: +isSupplyOrBorrow,
          })}
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
        borderColor={isEngaged ? 'success' : dark ? 'black' : 'white'}
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
              assetApy.coin.color != undefined && dark
                ? assetApy.coin.color.dark
                : assetApy.coin.color != undefined && !dark
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
          {borrowed.amount}
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
          {cash}
        </Typography>
      </Box>
    </Motion>
  );
};

export default BorrowMarketTableRow;
