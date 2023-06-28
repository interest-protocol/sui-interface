import { Network, ZERO_ADDRESS } from '@interest-protocol/sui-amm-sdk';
import {
  Box,
  Button,
  Motion,
  ProgressIndicator,
  Typography,
} from '@interest-protocol/ui-kit';
import { BCS } from '@mysten/bcs';
import {
  SUI_CLOCK_OBJECT_ID,
  TransactionArgument,
  TransactionBlock,
} from '@mysten/sui.js';
import { bcs } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { PriceServiceConnection } from '@pythnetwork/price-service-client';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import {
  NETWORK_RECORD,
  SUI_EXPLORER_URL,
  SUI_VISION_EXPLORER_URL,
} from '@/constants';
import { MONEY_MARKET_OBJECTS } from '@/constants/money-market.constants';
import { useNetwork, useProvider } from '@/hooks';
import { FixedPointMath, Rebase } from '@/lib';
import { safeIntDiv, throwTXIfNotSuccessful } from '@/utils';
import {
  ORACLE_PRICE_COIN_NAMES,
  PYTH_PRICE_CONNECT_URL,
  PYTH_PRICE_FEED_ID_TO_PRICE_INFO_OBJECT,
  PYTH_PRICE_FEED_IDS,
  SWITCHBOARD_AGGREGATOR_IDS,
} from '@/views/dapp/v2/lend/lend.constants';

import HeaderModal from './header';
import LineModal from './lines';
import LoadingModal from './loading-collateral';
import { CollateralModalProps } from './modal.types';

const DisableCollateralModal: FC<CollateralModalProps> = ({
  assetApy,
  closeModal,
  resultModal,
  priceMap,
  marketRecord,
  marketKey,
  userBalancesInUSD,
  mutate,
  setCollateralSwitchState,
}) => {
  const t = useTranslations();
  const [isLoading, setIsLoading] = useState(false);

  const { signTransactionBlock } = useWalletKit();
  const { provider } = useProvider();
  const { network } = useNetwork();

  const handleCollateral = async () => {
    setIsLoading(true);

    const objects = MONEY_MARKET_OBJECTS[network];

    try {
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

      const txb = new TransactionBlock();

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
        target: `${objects.MONEY_MARKET_PACKAGE_ID}::ipx_money_market_sdk_interface::exit_market`,
        typeArguments: [marketKey],
        arguments: [
          txb.object(objects.MONEY_MARKET_STORAGE),
          txb.object(objects.INTEREST_RATE_STORAGE),
          txb.makeMoveVec({
            type: `${objects.ORACLE_PACKAGE_ID}::ipx_oracle::Price`,
            objects: pricePotato,
          }),
          txb.object(SUI_CLOCK_OBJECT_ID),
        ],
      });

      const tx = await provider.devInspectTransactionBlock({
        transactionBlock: txb,
        sender: ZERO_ADDRESS,
      });

      console.log(tx);

      //
      // const { transactionBlockBytes, signature } = await signTransactionBlock({
      //   transactionBlock: txb,
      // });
      //
      // const tx = await provider.executeTransactionBlock({
      //   transactionBlock: transactionBlockBytes,
      //   signature,
      //   options: {
      //     showEffects: true,
      //   },
      // });
      //
      // console.log(tx);
      //
      // throwTXIfNotSuccessful(tx);
      //
      // resultModal({
      //   tokenName: assetApy.coin.token.symbol,
      //   isEnabled: false,
      //   isSuccess: true,
      //   txLink:
      //     network === Network.MAINNET
      //       ? `${SUI_VISION_EXPLORER_URL}/txblock/${tx.digest}`
      //       : `${SUI_EXPLORER_URL}/transaction/${tx.digest}?network=${NETWORK_RECORD[network]}`,
      // });
      //
      // setCollateralSwitchState(true);
    } catch (e) {
      console.log(e);
      resultModal({
        tokenName: assetApy.coin.token.symbol,
        isEnabled: false,
        isSuccess: false,
      });

      setCollateralSwitchState(false);
    } finally {
      setIsLoading(false);
      await mutate();
    }
  };

  const currentBorrowLimit =
    userBalancesInUSD.totalCollateral - userBalancesInUSD.totalLoan;

  const market = marketRecord[marketKey];

  const collateralRebase = new Rebase(
    market.totalCollateralBase,
    market.totalCollateralElastic
  );

  const newBorrowLimit = market.userShares.isZero()
    ? currentBorrowLimit
    : currentBorrowLimit -
      FixedPointMath.toNumber(
        collateralRebase.toElastic(market.userShares),
        market.decimals
      ) *
        priceMap[marketKey].price;

  const currentBorrowLimitPercentage =
    safeIntDiv(userBalancesInUSD.totalLoan, userBalancesInUSD.totalCollateral) *
    100;

  return isLoading ? (
    <LoadingModal
      title={t('Lend.modal.collateral.loading.title', { isEnable: 0 })}
      content={t('Lend.modal.collateral.loading.content', {
        walletName: '###',
        isEnable: 0,
      })}
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
          {t('Lend.modal.collateral.preview.title', { isEnable: 0 })}
        </Typography>
        <Typography variant="small" color="onSurface" lineHeight="1.25rem">
          {t('Lend.modal.collateral.preview.content', { isEnable: 0 })}
        </Typography>
      </Box>
      <Box p="xl" bg="surface.containerLow">
        <LineModal
          description="common.v2.lend.firstSection.newBorrowLimit"
          value={`$ ${newBorrowLimit.toFixed(2)}`}
        />
        <LineModal
          description="common.v2.lend.firstSection.borrowLimitUsed"
          value={`${currentBorrowLimitPercentage.toFixed(2)} %`}
        />
        <Box p="1rem" display="flex" justifyContent="space-between">
          <ProgressIndicator
            value={currentBorrowLimitPercentage}
            variant="bar"
          />
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
          {t('common.v2.cancel')}
        </Button>
        <Button variant="filled" fontSize="s" onClick={handleCollateral}>
          {t('Lend.modal.collateral.preview.button', { isEnable: 0 })}
        </Button>
      </Box>
    </Motion>
  );
};

export default DisableCollateralModal;
