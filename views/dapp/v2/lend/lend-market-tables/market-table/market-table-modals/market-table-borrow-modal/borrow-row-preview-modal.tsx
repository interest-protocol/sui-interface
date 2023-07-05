import { Network } from '@interest-protocol/sui-amm-sdk';
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
import {
  NETWORK_RECORD,
  SUI_EXPLORER_URL,
  SUI_VISION_EXPLORER_URL,
} from '@/constants';
import { useMoneyMarketSdk, useNetwork, useProvider } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { TimesSVG } from '@/svg';
import {
  bnMin,
  createObjectsParameter,
  formatDollars,
  formatMoney,
  throwTXIfNotSuccessful,
  ZERO_BIG_NUMBER,
} from '@/utils';
import { calculateNewBorrowLimitNewAmount } from '@/views/dapp/v2/lend/lend-market-tables/lend-table.utils';
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
          borrowValue: safeAmount.toString(),
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
        txLink:
          network === Network.MAINNET
            ? `${SUI_VISION_EXPLORER_URL}/txblock/${tx.digest}`
            : `${SUI_EXPLORER_URL}/transaction/${tx.digest}?network=${NETWORK_RECORD[network]}`,
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

      const amount = isMax
        ? coinsMap[marketKey]?.totalBalance ?? ZERO_BIG_NUMBER
        : FixedPointMath.toBigNumber(
            value,
            coinsMap[marketKey]?.decimals
          ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      const market = marketRecord[marketKey];

      const amountInPrincipal = market.totalLoanRebase.toBase(amount);

      const principalToRepay = amountInPrincipal.gt(market.userPrincipal)
        ? market.userPrincipal
        : amountInPrincipal;

      const coinInList = createObjectsParameter({
        coinsMap,
        txb,
        type: marketKey,
        amount: amount.toString(),
      });

      const { transactionBlockBytes, signature } = await signTransactionBlock({
        transactionBlock: await moneyMarketSdk.repay({
          assetType: marketKey,
          principalToRepay: principalToRepay.toString(),
          assetList: coinInList,
          assetValue: amount.toString(),
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
        txLink:
          network === Network.MAINNET
            ? `${SUI_VISION_EXPLORER_URL}/txblock/${tx.digest}`
            : `${SUI_EXPLORER_URL}/transaction/${tx.digest}?network=${NETWORK_RECORD[network]}`,
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
      width={['90vw', '90vw', '90vw', '24.375rem']}
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
            backRowMarketModal(isLoan);
          }}
        >
          <LeftArrowSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center">
            <MarketTableTokenIcon type={asset.coin.token.type} />
          </Box>
          <Typography variant="title5" ml="0.5rem" color="onSurface">
            {asset.coin.token.symbol}
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
        <BorrowLimits
          {...calculateNewBorrowLimitNewAmount({
            marketRecord,
            marketKey,
            userBalancesInUSD,
            newAmount: isLoan ? +value : repayAmount,
            adding: isLoan,
            isLoan: true,
            priceMap,
          })}
        />
        <Box
          as="hr"
          mx="4xl"
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