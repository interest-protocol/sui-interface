import {
  Box,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { useModal, useMoneyMarketSdk, useWeb3 } from '@/hooks';
import { formatDollars, formatMoney } from '@/utils';
import { useLendProviderValue } from '@/views/dapp/v2/lend/lend.provider';

import { BorrowRow } from '../lend-table.types';
import {
  BorrowMarketConfirmModal,
  BorrowMarketFailModal,
  BorrowMarketModal,
} from './market-table-modals/market-table-borrow-modal';
import { BorrowMarketPreviewModal } from './market-table-modals/market-table-borrow-modal';
import { ResultRowBorrowModalProps } from './market-table-modals/market-table-borrow-modal/borrow-modal.types';
import { OpenBorrowMarketPreviewModalArgs } from './market-table-modals/modal.types';
import { MarketTableTokenIcon } from './market-table-token-icon';

const BorrowMarketTableRow: FC<BorrowRow> = ({
  cash,
  asset,
  borrowed,
  isEngaged,
  marketKey,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const { setModal, handleClose } = useModal();
  const hoverColor = dark
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
  const skd = useMoneyMarketSdk();

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

  const openRowMarketModal = (isLoan: boolean) => {
    setModal(
      <BorrowMarketModal
        asset={asset}
        coinsMap={coinsMap}
        priceMap={priceMap}
        ipxPrice={ipxPrice}
        marketKey={marketKey}
        closeModal={handleClose}
        marketRecord={marketRecord}
        userBalancesInUSD={userBalancesInUSD}
        moneyMarketStorage={moneyMarketStorage}
        openRowMarketPreviewModal={openRowMarketPreviewModal}
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

  return (
    <Motion
      mb="1rem"
      pr="0.5rem"
      pl="0.75rem"
      width="100%"
      display="grid"
      cursor="pointer"
      onClick={() => openRowMarketModal(true)}
      gridTemplateColumns="repeat(3, 1fr)"
      whileHover={{ background: hoverColor }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Box
        gap="m"
        py="1.5rem"
        pl="1.125rem"
        display="flex"
        borderLeft="2px solid"
        borderColor={isEngaged ? 'success' : dark ? 'black' : 'white'}
      >
        <Box display="flex" alignItems="center">
          <MarketTableTokenIcon type={asset.coin.token.type} />
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
        textAlign="center"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="medium">{formatMoney(borrowed.amount)}</Typography>
        <Typography variant="small" color={dark ? '#77767A' : '#47464A'}>
          {formatDollars(borrowed.value)}
        </Typography>
      </Box>
      <Box px="l" display="flex" alignItems="center" justifyContent="flex-end">
        <Typography
          variant="medium"
          textAlign="right"
          wordBreak={['break-word', 'unset', 'unset', 'unset']}
        >
          {`${
            asset.coin.token.type == skd.getSUIDType() ? '∞' : formatMoney(cash)
          }
          ${asset.coin.token.symbol}`}
        </Typography>
      </Box>
    </Motion>
  );
};

export default BorrowMarketTableRow;
