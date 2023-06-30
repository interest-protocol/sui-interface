import { Network } from '@interest-protocol/sui-amm-sdk';
import {
  Box,
  Button,
  Motion,
  ProgressIndicator,
  Typography,
} from '@interest-protocol/ui-kit';
import { TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import {
  NETWORK_RECORD,
  SUI_EXPLORER_URL,
  SUI_VISION_EXPLORER_URL,
} from '@/constants';
import { MONEY_MARKET_OBJECTS } from '@/constants/money-market.constants';
import { useNetwork, useProvider } from '@/hooks';
import { throwTXIfNotSuccessful } from '@/utils';

import { calculateNewBorrowLimitEnableCollateral } from '../../lend-table.utils';
import HeaderModal from './header';
import LineModal from './lines';
import LoadingModal from './loading-collateral';
import { CollateralModalProps } from './modal.types';

const EnableCollateralModal: FC<CollateralModalProps> = ({
  assetApy,
  closeModal,
  resultModal,
  mutate,
  userBalancesInUSD,
  setCollateralSwitchState,
  marketRecord,
  priceMap,
  marketKey,
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
      const txb = new TransactionBlock();

      txb.moveCall({
        target: `${objects.MONEY_MARKET_PACKAGE_ID}::ipx_money_market_sdk_interface::enter_market`,
        typeArguments: [marketKey],
        arguments: [txb.object(objects.MONEY_MARKET_STORAGE)],
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
      resultModal({
        tokenName: assetApy.coin.token.symbol,
        isEnabled: true,
        isSuccess: true,
        txLink:
          network === Network.MAINNET
            ? `${SUI_VISION_EXPLORER_URL}/txblock/${tx.digest}`
            : `${SUI_EXPLORER_URL}/transaction/${tx.digest}?network=${NETWORK_RECORD[network]}`,
      });

      setCollateralSwitchState(true);
    } catch {
      resultModal({
        tokenName: assetApy.coin.token.symbol,
        isEnabled: true,
        isSuccess: false,
      });

      setCollateralSwitchState(false);
    } finally {
      setIsLoading(false);
      await mutate();
    }
  };

  const {
    currentBorrowLimitPercentage,
    newBorrowLimitPercentage,
    currentBorrowLimit,
    newBorrowLimit,
  } = calculateNewBorrowLimitEnableCollateral({
    userBalancesInUSD,
    addCollateral: true,
    priceMap,
    marketKey,
    marketRecord,
  });

  return isLoading ? (
    <LoadingModal
      title={t('Lend.modal.collateral.loading.title', { isEnable: 1 })}
      content={t('Lend.modal.collateral.loading.content', {
        walletName: '###',
        isEnable: 1,
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
          {t('Lend.modal.collateral.preview.title', { isEnable: 1 })}
        </Typography>
        <Typography variant="small" color="onSurface" lineHeight="1.25rem">
          {t('Lend.modal.collateral.preview.content', { isEnable: 1 }) + ' '}
          <Typography variant="small" color="#A5F3FC" as="span">
            <a
              target="_blank"
              href="https://docs.interestprotocol.com/overview/money-market"
              rel="noreferrer"
            >
              {t('Lend.learnMore')}...
            </a>
          </Typography>
        </Typography>
      </Box>
      <Box p="xl" bg="surface.containerLow">
        <LineModal
          description="common.v2.lend.firstSection.currentBorrowLimit"
          value={`$ ${currentBorrowLimit.toFixed(2)}`}
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
        <LineModal
          description="common.v2.lend.firstSection.newBorrowLimit"
          value={`$ ${newBorrowLimit.toFixed(2)}`}
        />
        <LineModal
          description="common.v2.lend.firstSection.borrowLimitUsed"
          value={`${newBorrowLimitPercentage.toFixed(2)} %`}
        />
        <Box p="1rem" display="flex" justifyContent="space-between">
          <ProgressIndicator value={newBorrowLimitPercentage} variant="bar" />
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
          {t('Lend.modal.collateral.preview.button', { isEnable: 1 })}
        </Button>
      </Box>
    </Motion>
  );
};

export default EnableCollateralModal;
