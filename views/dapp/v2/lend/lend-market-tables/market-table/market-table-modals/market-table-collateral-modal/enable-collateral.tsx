import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import {
  SUI_VISION_EXPLORER_URL,
  SUI_VISION_TESTNET_EXPLORER_URL,
} from '@/constants';
import { useMoneyMarketSdk, useNetwork, useProvider } from '@/hooks';
import { throwTXIfNotSuccessful } from '@/utils';

import { calculateNewBorrowLimitEnableCollateral } from '../../../lend-table.utils';
import BorrowLimits from '../borrow-limits';
import HeaderModal from '../header';
import { CollateralModalProps } from './collateral-modal.types';
import LoadingModal from './loading-collateral';

const EnableCollateralModal: FC<CollateralModalProps> = ({
  asset,
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

  const { signTransactionBlock, currentWallet } = useWalletKit();
  const { provider } = useProvider();
  const { network } = useNetwork();
  const moneyMarketSdk = useMoneyMarketSdk();

  const handleCollateral = async () => {
    setIsLoading(true);

    try {
      const { transactionBlockBytes, signature } = await signTransactionBlock({
        transactionBlock: moneyMarketSdk.enterMarket({ assetType: marketKey }),
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
        tokenName: asset.coin.token.symbol,
        isEnabled: true,
        isSuccess: true,
        txLink:
          network === Network.MAINNET
            ? `${SUI_VISION_EXPLORER_URL}/txblock/${tx.digest}`
            : `${SUI_VISION_TESTNET_EXPLORER_URL}/txblock/${tx.digest}`,
      });

      setCollateralSwitchState(true);
    } catch {
      resultModal({
        tokenName: asset.coin.token.symbol,
        isEnabled: true,
        isSuccess: false,
      });

      setCollateralSwitchState(false);
    } finally {
      setIsLoading(false);
      await mutate();
    }
  };

  return isLoading ? (
    <LoadingModal
      title={t('lend.modal.collateral.loading.title', { isEnable: 1 })}
      content={t('lend.modal.collateral.loading.content', {
        walletName: currentWallet?.name,
        isEnable: 1,
      })}
    />
  ) : (
    <Motion
      layout
      width={['90vw', '90vw', '90vw', '24.375rem']}
      display="flex"
      maxHeight="90vh"
      maxWidth="26rem"
      overflow="hidden"
      overflowY="auto"
      color="onSurface"
      borderRadius="1rem"
      bg="surface.container"
      flexDirection="column"
      boxShadow="0 0 5px #3334"
      transition={{ duration: 0.3 }}
    >
      <HeaderModal
        type={asset.coin.token.type}
        symbol={asset.coin.token.symbol}
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
          {t('lend.modal.collateral.preview.title', { isEnable: 1 })}
        </Typography>
        <Typography variant="small" color="onSurface" lineHeight="1.25rem">
          {t('lend.modal.collateral.preview.content', { isEnable: 1 }) + ' '}
          <Typography variant="small" color="#A5F3FC" as="span">
            <a
              target="_blank"
              href="https://docs.interestprotocol.com/overview/money-market"
              rel="noreferrer"
            >
              {t('lend.learnMore')}...
            </a>
          </Typography>
        </Typography>
      </Box>
      <Box p="xl" bg="surface.containerLow">
        <BorrowLimits
          {...calculateNewBorrowLimitEnableCollateral({
            userBalancesInUSD,
            addCollateral: true,
            priceMap,
            marketKey,
            marketRecord,
          })}
        />
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
        <Button
          variant="filled"
          fontSize="s"
          onClick={handleCollateral}
          textAlign="center"
        >
          {t('lend.modal.collateral.preview.button', { isEnable: 1 })}
        </Button>
      </Box>
    </Motion>
  );
};

export default EnableCollateralModal;
