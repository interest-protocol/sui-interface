import {
  Box,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { useModal, useWeb3 } from '@/hooks';
import { formatMoney } from '@/utils';
import { useLendProviderValue } from '@/views/dapp/v2/lend/lend.provider';
import { BorrowRow } from '@/views/dapp/v2/lend/lend-tables/lend-table.types';
import { OpenBorrowMarketPreviewModalArgs } from '@/views/dapp/v2/lend/lend-tables/market-table/modals/modal.types';

import { getSVG } from '../market-table.utils';
import {
  BorrowMarketConfirmModal,
  BorrowMarketFailModal,
  BorrowMarketModal,
} from '../modals/borrow-row';
import { ResultRowBorrowModalProps } from '../modals/borrow-row/borrow-modal.types';
import BorrowMarketPreviewModal from '../modals/borrow-row/borrow-row-preview-modal';

const BorrowMarketTableRow: FC<BorrowRow> = ({
  asset,
  borrowed,
  wallet,
  cash,
  isEngaged,
  marketKey,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const { setModal, handleClose } = useModal();
  const surface1 = dark
    ? 'linear-gradient(0deg, rgba(182, 196, 255, 0.04), rgba(182, 196, 255, 0.04)), #1B1B1F'
    : 'linear-gradient(0deg, rgba(0, 85, 255, 0.04), rgba(0, 85, 255, 0.04)), #F2F0F4';
  const surface2 = dark
    ? 'linear-gradient(0deg, rgba(182, 196, 255, 0.08), rgba(182, 196, 255, 0.08)), #1B1B1F'
    : 'linear-gradient(0deg, rgba(0, 85, 255, 0.08), rgba(0, 85, 255, 0.08)), #F2F0F4';

  const {
    userBalancesInUSD,
    mutate,
    marketRecord,
    priceMap,
    moneyMarketStorage,
    ipxPrice,
  } = useLendProviderValue();
  const { coinsMap } = useWeb3();

  const openRowBorrowMarketResultModal = ({
    isSuccess,
    isLoan,
    txLink,
  }: ResultRowBorrowModalProps) => {
    setModal(
      isSuccess ? (
        <BorrowMarketConfirmModal
          closeModal={handleClose}
          title={t(isLoan ? 'lend.borrow' : 'lend.repay')}
          content={t('lend.modal.borrow.confirm.content', {
            isBorrow: +isLoan,
          })}
          additionalText={t('lend.modal.borrow.confirm.additionInfo')}
          activityLink={txLink as string}
        />
      ) : (
        <BorrowMarketFailModal
          closeModal={handleClose}
          title={t(isLoan ? 'lend.borrow' : 'lend.repay')}
          content={t('lend.modal.borrow.error.content', {
            isBorrow: +isLoan,
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

  const openRowMarketPreviewModal = ({
    isLoan,
    value,
    isMax,
  }: OpenBorrowMarketPreviewModalArgs) => {
    setModal(
      <BorrowMarketPreviewModal
        closeModal={handleClose}
        asset={asset}
        backRowMarketModal={openRowMarketModal}
        openRowMarketResultModal={openRowBorrowMarketResultModal}
        marketRecord={marketRecord}
        priceMap={priceMap}
        userBalancesInUSD={userBalancesInUSD}
        coinsMap={coinsMap}
        marketKey={marketKey}
        value={value}
        isMax={isMax}
        mutate={mutate}
        isLoan={isLoan}
      />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  const openRowMarketModal = () => {
    setModal(
      <BorrowMarketModal
        closeModal={handleClose}
        asset={asset}
        userBalancesInUSD={userBalancesInUSD}
        coinsMap={coinsMap}
        marketKey={marketKey}
        openRowMarketPreviewModal={openRowMarketPreviewModal}
        marketRecord={marketRecord}
        priceMap={priceMap}
        ipxPrice={ipxPrice}
        moneyMarketStorage={moneyMarketStorage}
      />,
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
      onClick={() => openRowMarketModal()}
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
          {getSVG(asset.coin.token.type)}
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography variant="medium">{asset.coin.token.symbol}</Typography>
          <Typography
            variant="small"
            color={
              asset.coin.color != undefined && dark
                ? asset.coin.color.dark
                : asset.coin.color != undefined && !dark
                ? asset.coin.color.light
                : dark
                ? '#77767A'
                : '#47464A'
            }
          >
            {asset.percentage}%
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
          {formatMoney(wallet)}
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
