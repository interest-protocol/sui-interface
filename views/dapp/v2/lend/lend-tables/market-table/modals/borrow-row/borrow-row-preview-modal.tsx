import { COIN_TYPE } from '@interest-protocol/sui-amm-sdk';
import {
  Box,
  Button,
  Motion,
  ProgressIndicator,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import {
  SUI_CLOCK_OBJECT_ID,
  TransactionArgument,
  TransactionBlock,
} from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { PriceServiceConnection } from '@pythnetwork/price-service-client';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { pathOr } from 'ramda';
import { FC, useState } from 'react';

import { LeftArrowSVG } from '@/components/svg/v2';
import { MONEY_MARKET_OBJECTS } from '@/constants/money-market.constants';
import { useNetwork, useProvider } from '@/hooks';
import { AddressZero, FixedPointMath, Rebase } from '@/lib';
import { TimesSVG } from '@/svg';
import {
  bnMin,
  createObjectsParameter,
  throwTXIfNotSuccessful,
  ZERO_BIG_NUMBER,
} from '@/utils';
import {
  ORACLE_PRICE_COIN_NAMES,
  PYTH_PRICE_CONNECT_URL,
  PYTH_PRICE_FEED_ID_TO_PRICE_INFO_OBJECT,
  PYTH_PRICE_FEED_IDS,
  SWITCHBOARD_AGGREGATOR_IDS,
} from '@/views/dapp/v2/lend/lend.constants';
import { calculateNewBorrowLimitNewAmount } from '@/views/dapp/v2/lend/lend-tables/lend-table.utils';
import BorrowLimits from '@/views/dapp/v2/lend/lend-tables/market-table/modals/borrow-limits';

import { getSVG } from '../../market-table.utils';
import LineModal from '../lines';
import LoadingModal from '../loading-collateral';
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
  const [FromIcon] = [getSVG(asset.coin.token.type)];
  const { network } = useNetwork();
  const { signTransactionBlock } = useWalletKit();
  const { provider } = useProvider();
  const [isLoading, setIsLoading] = useState(false);

  const isSUID =
    marketKey === pathOr(AddressZero, [network, 'SUID'], COIN_TYPE);

  const handleBorrowSUID = async () => {
    setIsLoading(true);

    const objects = MONEY_MARKET_OBJECTS[network];

    try {
      const txb = new TransactionBlock();

      const amount = FixedPointMath.toBigNumber(
        value,
        coinsMap[marketKey]?.decimals
      ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      const pythPriceFeedIds = PYTH_PRICE_FEED_IDS[network];

      const pythConnection = new PriceServiceConnection(
        PYTH_PRICE_CONNECT_URL[network],
        {
          priceFeedRequestConfig: {
            binary: true,
          },
        }
      );

      const vaas = await pythConnection.getLatestVaas(pythPriceFeedIds);

      const pythPayments = txb.splitCoins(
        txb.gas,
        pythPriceFeedIds.map(() => txb.pure('1'))
      );

      const pricePotato = [] as TransactionArgument[];

      vaas.forEach((vaa, index) => {
        const priceFeed = pythPriceFeedIds[index];

        const price = txb.moveCall({
          target: `${objects.ORACLE_PACKAGE_ID}::ipx_oracle::get_price`,
          arguments: [
            txb.object(objects.ORACLE_STORAGE),
            txb.object(objects.WORMHOLE_STATE),
            txb.object(objects.PYTH_STATE),
            txb.pure([...Buffer.from(vaa, 'base64')]),
            txb.object(
              PYTH_PRICE_FEED_ID_TO_PRICE_INFO_OBJECT[network][priceFeed]
            ),
            pythPayments[index],
            txb.object(SUI_CLOCK_OBJECT_ID),
            txb.object(SWITCHBOARD_AGGREGATOR_IDS[network][index]),
            txb.pure(ORACLE_PRICE_COIN_NAMES[network][index]),
          ],
        });

        pricePotato.push(price);
      });

      txb.moveCall({
        target: `${objects.MONEY_MARKET_PACKAGE_ID}::ipx_money_market_sdk_interface::borrow_suid`,
        arguments: [
          txb.object(objects.MONEY_MARKET_STORAGE),
          txb.object(objects.INTEREST_RATE_STORAGE),
          txb.object(objects.SUID_STORAGE),
          txb.makeMoveVec({
            type: `${objects.ORACLE_PACKAGE_ID}::ipx_oracle::Price`,
            objects: pricePotato,
          }),
          txb.object(SUI_CLOCK_OBJECT_ID),
          txb.pure(amount.toString()),
        ],
      });

      const { transactionBlockBytes, signature } = await signTransactionBlock({
        transactionBlock: txb,
      });

      const tx = await provider.executeTransactionBlock({
        transactionBlock: transactionBlockBytes,
        signature,
        options: {
          showEffects: true,
        },
      });

      throwTXIfNotSuccessful(tx);
      openRowMarketResultModal(true, isLoan);
    } catch {
      openRowMarketResultModal(false, isLoan);
    } finally {
      setIsLoading(false);
      await mutate();
    }
  };

  const handleBorrow = async () => {
    setIsLoading(true);

    const objects = MONEY_MARKET_OBJECTS[network];

    try {
      const txb = new TransactionBlock();

      const market = marketRecord[marketKey];

      const amount = FixedPointMath.toBigNumber(
        value,
        coinsMap[marketKey]?.decimals
      ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      const pythPriceFeedIds = PYTH_PRICE_FEED_IDS[network];

      const pythConnection = new PriceServiceConnection(
        PYTH_PRICE_CONNECT_URL[network],
        {
          priceFeedRequestConfig: {
            binary: true,
          },
        }
      );

      const vaas = await pythConnection.getLatestVaas(pythPriceFeedIds);

      const pythPayments = txb.splitCoins(
        txb.gas,
        pythPriceFeedIds.map(() => txb.pure('1'))
      );

      const pricePotato = [] as TransactionArgument[];

      vaas.forEach((vaa, index) => {
        const priceFeed = pythPriceFeedIds[index];

        const price = txb.moveCall({
          target: `${objects.ORACLE_PACKAGE_ID}::ipx_oracle::get_price`,
          arguments: [
            txb.object(objects.ORACLE_STORAGE),
            txb.object(objects.WORMHOLE_STATE),
            txb.object(objects.PYTH_STATE),
            txb.pure([...Buffer.from(vaa, 'base64')]),
            txb.object(
              PYTH_PRICE_FEED_ID_TO_PRICE_INFO_OBJECT[network][priceFeed]
            ),
            pythPayments[index],
            txb.object(SUI_CLOCK_OBJECT_ID),
            txb.object(SWITCHBOARD_AGGREGATOR_IDS[network][index]),
            txb.pure(ORACLE_PRICE_COIN_NAMES[network][index]),
          ],
        });

        pricePotato.push(price);
      });

      txb.moveCall({
        target: `${objects.MONEY_MARKET_PACKAGE_ID}::ipx_money_market_sdk_interface::borrow`,
        typeArguments: [marketKey],
        arguments: [
          txb.object(objects.MONEY_MARKET_STORAGE),
          txb.object(objects.INTEREST_RATE_STORAGE),
          txb.makeMoveVec({
            type: `${objects.ORACLE_PACKAGE_ID}::ipx_oracle::Price`,
            objects: pricePotato,
          }),
          txb.object(SUI_CLOCK_OBJECT_ID),
          txb.pure(bnMin(amount, market.cash).toString()),
        ],
      });

      const { transactionBlockBytes, signature } = await signTransactionBlock({
        transactionBlock: txb,
      });

      const tx = await provider.executeTransactionBlock({
        transactionBlock: transactionBlockBytes,
        signature,
        options: {
          showEffects: true,
        },
      });

      throwTXIfNotSuccessful(tx);
      openRowMarketResultModal(true, isLoan);
    } catch {
      openRowMarketResultModal(false, isLoan);
    } finally {
      setIsLoading(false);
      await mutate();
    }
  };

  const handleRepaySUID = async () => {
    setIsLoading(true);

    const objects = MONEY_MARKET_OBJECTS[network];

    try {
      const txb = new TransactionBlock();

      const amount = isMax
        ? coinsMap[marketKey]?.totalBalance ?? ZERO_BIG_NUMBER
        : FixedPointMath.toBigNumber(
            value,
            coinsMap[marketKey]?.decimals
          ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      const market = marketRecord[marketKey];

      const loanRebase = new Rebase(
        market.totalLoanBase,
        market.totalLoanElastic
      );

      const amountInPrincipal = loanRebase.toBase(amount);

      const principalToRepay = amountInPrincipal.gt(market.userPrincipal)
        ? market.userPrincipal
        : amountInPrincipal;

      const coinInList = createObjectsParameter({
        coinsMap,
        txb,
        type: marketKey,
        amount: amount.toString(),
      });

      txb.moveCall({
        target: `${objects.MONEY_MARKET_PACKAGE_ID}::ipx_money_market_sdk_interface::repay_suid`,
        arguments: [
          txb.object(objects.MONEY_MARKET_STORAGE),
          txb.object(objects.SUID_STORAGE),
          txb.object(SUI_CLOCK_OBJECT_ID),
          txb.makeMoveVec({
            objects: coinInList,
          }),
          txb.pure(amount.toString()),
          txb.pure(principalToRepay.toString()),
        ],
      });

      const { transactionBlockBytes, signature } = await signTransactionBlock({
        transactionBlock: txb,
      });

      const tx = await provider.executeTransactionBlock({
        transactionBlock: transactionBlockBytes,
        signature,
        options: {
          showEffects: true,
        },
      });

      throwTXIfNotSuccessful(tx);
      openRowMarketResultModal(true, isLoan);
    } catch {
      openRowMarketResultModal(false, isLoan);
    } finally {
      setIsLoading(false);
      await mutate();
    }
  };

  const handleReplay = async () => {
    setIsLoading(true);

    const objects = MONEY_MARKET_OBJECTS[network];

    try {
      const txb = new TransactionBlock();

      const amount = isMax
        ? coinsMap[marketKey]?.totalBalance ?? ZERO_BIG_NUMBER
        : FixedPointMath.toBigNumber(
            value,
            coinsMap[marketKey]?.decimals
          ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      const market = marketRecord[marketKey];

      const loanRebase = new Rebase(
        market.totalLoanBase,
        market.totalLoanElastic
      );

      const amountInPrincipal = loanRebase.toBase(amount);

      const principalToRepay = amountInPrincipal.gt(market.userPrincipal)
        ? market.userPrincipal
        : amountInPrincipal;

      const coinInList = createObjectsParameter({
        coinsMap,
        txb,
        type: marketKey,
        amount: amount.toString(),
      });

      txb.moveCall({
        target: `${objects.MONEY_MARKET_PACKAGE_ID}::ipx_money_market_sdk_interface::repay`,
        typeArguments: [marketKey],
        arguments: [
          txb.object(objects.MONEY_MARKET_STORAGE),
          txb.object(objects.INTEREST_RATE_STORAGE),
          txb.object(SUI_CLOCK_OBJECT_ID),
          txb.makeMoveVec({
            objects: coinInList,
          }),
          txb.pure(amount.toString()),
          txb.pure(principalToRepay.toString()),
        ],
      });

      const { transactionBlockBytes, signature } = await signTransactionBlock({
        transactionBlock: txb,
      });

      const tx = await provider.executeTransactionBlock({
        transactionBlock: transactionBlockBytes,
        signature,
        options: {
          showEffects: true,
        },
      });

      throwTXIfNotSuccessful(tx);
      openRowMarketResultModal(true, isLoan);
    } catch {
      openRowMarketResultModal(false, isLoan);
    } finally {
      setIsLoading(false);
      await mutate();
    }
  };

  const handleAction = () =>
    isLoan
      ? isSUID
        ? handleBorrowSUID()
        : handleBorrow()
      : isSUID
      ? handleRepaySUID()
      : handleReplay();

  return isLoading ? (
    <LoadingModal
      title={t(isLoan ? 'common.v2.lend.borrow' : 'common.v2.lend.repay')}
      content={t('Lend.modal.borrow.loading.content', {
        isBorrow: +isLoan,
      })}
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
            {getSVG(asset.coin.token.type)}
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
              {FromIcon}
              <Typography variant="medium" color="">
                {asset.coin.token.symbol}
              </Typography>
            </Box>
            <Box textAlign="right">
              <Typography variant="medium" color={dark ? 'white' : 'black'}>
                {value}
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
            newAmount: +value,
            adding: isLoan,
            isLoan: true,
            priceMap,
          })}
        />
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
        <LineModal
          description="Lend.modal.supply.preview.sectionTitle"
          value=""
        />
        <LineModal
          description="Lend.modal.supply.preview.inToken"
          value="0,0"
        />
        <LineModal description="Lend.modal.supply.preview.inUSD" value="0,2" />
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
          {t('Lend.modal.borrow.preview.button', {
            isBorrow: +isLoan,
          })}
        </Button>
      </Box>
    </Motion>
  );
};

export default BorrowMarketPreviewModal;
