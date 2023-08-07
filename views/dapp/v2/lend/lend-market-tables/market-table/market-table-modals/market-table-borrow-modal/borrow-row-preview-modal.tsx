import {
  Box,
  Button,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { LeftArrowSVG } from '@/components/svg/v2';
import { EXPLORER_URL, MAX_U64 } from '@/constants';
import { useMoneyMarketSdk, useNetwork, useProvider } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { TimesSVG } from '@/svg';
import {
  bnMin,
  createObjectsParameter,
  formatDollars,
  formatMoney,
  throwTXIfNotSuccessful,
} from '@/utils';
import {
  calculateNewLoanBorrowLimit,
  calculateNewRepayLimitNewAmount,
} from '@/views/dapp/v2/lend/lend-market-tables/lend-table.utils';
import BorrowLimits from '@/views/dapp/v2/lend/lend-market-tables/market-table/market-table-modals/borrow-limits';

import { MarketTableTokenIcon } from '../../market-table-token-icon';
import LineModal from '../lines';
import LoadingModal from '../market-table-collateral-modal/loading-collateral';
import { BorrowPreviewModalProps } from '../modal.types';

const BorrowMarketPreviewModal: FC<BorrowPreviewModalProps> = ({
  asset,
  closeModal,
  backRowMarketModal,
  openRowMarketResultModal,
  marketKey,
  marketRecord,
  priceMap,
  isLoan,
  value,
  isMax,
  coinsMap,
  userBalancesInUSD,
  mutate,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const { network } = useNetwork();
  const { signTransactionBlock } = useWalletKit();
  const { provider } = useProvider();
  const [isLoading, setIsLoading] = useState(false);
  const moneyMarketSdk = useMoneyMarketSdk();

  const handleBorrow = async () => {
    setIsLoading(true);

    try {
      const amount = FixedPointMath.toBigNumber(
        value,
        coinsMap[marketKey]?.decimals
      ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      const safeAmount =
        marketKey === moneyMarketSdk.getSUIDType()
          ? amount
          : bnMin(amount, marketRecord[marketKey].cash);

      const { transactionBlockBytes, signature } = await signTransactionBlock({
        transactionBlock: await moneyMarketSdk.borrow({
          assetType: marketKey,
          borrowValue: safeAmount
            .decimalPlaces(0, BigNumber.ROUND_DOWN)
            .toString(),
        }),
      });

      const tx = await provider.executeTransactionBlock({
        transactionBlock: transactionBlockBytes,
        signature,
        options: {
          showEffects: true,
        },
      });

      throwTXIfNotSuccessful(tx);
      openRowMarketResultModal({
        isLoan,
        isSuccess: true,
        txLink: `${EXPLORER_URL[network]}/txblock/${tx.digest}`,
      });
    } catch {
      openRowMarketResultModal({ isSuccess: false, isLoan });
    } finally {
      setIsLoading(false);
      await mutate();
    }
  };

  const handleRepay = async () => {
    setIsLoading(true);

    try {
      const txb = new TransactionBlock();

      const market = marketRecord[marketKey];

      const amount = FixedPointMath.toBigNumber(
        value,
        coinsMap[marketKey]?.decimals
      ).decimalPlaces(0, BigNumber.ROUND_UP);

      const amountInPrincipal = market.totalLoanRebase
        .toBase(amount)
        .decimalPlaces(0, BigNumber.ROUND_UP);

      const principalToRepay =
        amountInPrincipal.gt(market.userPrincipal) || isMax
          ? MAX_U64
          : amountInPrincipal;

      const coinInList = createObjectsParameter({
        coinsMap,
        txb,
        type: marketKey,
        amount: amount.decimalPlaces(0, BigNumber.ROUND_DOWN).toString(),
      });

      const { transactionBlockBytes, signature } = await signTransactionBlock({
        transactionBlock: await moneyMarketSdk.repay({
          assetType: marketKey,
          principalToRepay: principalToRepay.toString(),
          assetList: coinInList,
          txb,
        }),
      });

      const tx = await provider.executeTransactionBlock({
        transactionBlock: transactionBlockBytes,
        signature,
        options: {
          showEffects: true,
        },
      });

      throwTXIfNotSuccessful(tx);
      openRowMarketResultModal({ isSuccess: true, isLoan, txLink: '' });
      openRowMarketResultModal({
        isLoan,
        isSuccess: true,
        txLink: `${EXPLORER_URL[network]}/txblock/${tx.digest}`,
      });
    } catch {
      openRowMarketResultModal({ isSuccess: false, isLoan });
    } finally {
      setIsLoading(false);
      await mutate();
    }
  };

  const handleAction = () => (isLoan ? handleBorrow() : handleRepay());

  const market = marketRecord[marketKey];

  const loanBorrowedValue = market.userPrincipal.isZero()
    ? 0
    : FixedPointMath.toNumber(
        market.totalLoanRebase.toElastic(market.userPrincipal),
        market.decimals
      );

  const totalLoanBorrowedValue =
    (loanBorrowedValue + +value) * priceMap[marketKey].price;

  const repayAmount = +value > loanBorrowedValue ? loanBorrowedValue : +value;

  const repayBorrowedValue = loanBorrowedValue - repayAmount;

  const totalRepayBorrowedValue =
    repayBorrowedValue * priceMap[marketKey].price;

  return isLoading ? (
    <LoadingModal
      title={t(isLoan ? 'lend.borrow' : 'lend.repay')}
      content={t('lend.modal.borrow.loading.content', {
        isBorrow: +isLoan,
      })}
    />
  ) : (
    <Motion
      layout
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
      width={['90vw', '90vw', '90vw', '24.375rem']}
    >
      <Box
        p="xl"
        display="flex"
        color="onSurface"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          variant="icon"
          onClick={() => {
            backRowMarketModal(isLoan);
          }}
        >
          <LeftArrowSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
        <Box display="flex" alignItems="center">
          <Typography variant="title5" ml="0.5rem" color="onSurface">
            {t(isLoan ? 'lend.borrow' : 'lend.repay')}
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
              <MarketTableTokenIcon type={asset.coin.token.type} />
              <Typography variant="medium" color="">
                {asset.coin.token.symbol}
              </Typography>
            </Box>
            <Box textAlign="right">
              <Typography variant="medium" color={dark ? 'white' : 'black'}>
                {formatMoney(+value, 6)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box p="xl" bg="surface.containerLow">
        {isLoan ? (
          <BorrowLimits
            {...calculateNewLoanBorrowLimit({
              marketRecord,
              marketKey,
              userBalancesInUSD,
              newAmount: +value,
              priceMap,
            })}
          />
        ) : (
          <BorrowLimits
            {...calculateNewRepayLimitNewAmount({
              marketRecord,
              marketKey,
              userBalancesInUSD,
              newAmount: +value,
              priceMap,
            })}
          />
        )}
        <Box
          as="hr"
          mx="s"
          my="1.5rem"
          border="none"
          borderBottom="1px solid"
          borderColor="outline.outlineVariant"
        />
        <LineModal
          description="lend.modal.supply.preview.sectionTitle"
          value=""
        />
        <LineModal
          description="lend.modal.supply.preview.inToken"
          value={
            isLoan
              ? formatMoney(+value + loanBorrowedValue)
              : formatMoney(repayBorrowedValue)
          }
        />
        <LineModal
          description="lend.modal.supply.preview.inUSD"
          value={
            isLoan
              ? formatDollars(totalLoanBorrowedValue)
              : formatDollars(totalRepayBorrowedValue)
          }
        />
      </Box>
      <Box
        p="xl"
        pt="0"
        bg="surface.containerLow"
        display="flex"
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Button
          variant="filled"
          size="small"
          fontSize="s"
          width="100%"
          display="flex"
          justifyContent="center"
          onClick={handleAction}
        >
          {t('lend.modal.borrow.preview.button', {
            isBorrow: +isLoan,
          })}
        </Button>
      </Box>
    </Motion>
  );
};

export default BorrowMarketPreviewModal;
