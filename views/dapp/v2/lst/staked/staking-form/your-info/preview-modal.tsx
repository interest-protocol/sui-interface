import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { BCS } from '@mysten/bcs';
import { SUI_SYSTEM_STATE_OBJECT_ID, TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { BigNumber } from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { ISuiSVG, SUISVG } from '@/components/svg/v2';
import { EXPLORER_URL } from '@/constants';
import { LST_OBJECTS } from '@/constants/lst';
import { FixedPointMath } from '@/lib';
import {
  createObjectsParameter,
  formatDollars,
  showTXSuccessToast,
  throwTXIfNotSuccessful,
} from '@/utils';
import {
  useGetExchangeRateISuiToSui,
  useGetExchangeRateSuiToISui,
} from '@/views/dapp/v2/lst/lst.hooks';

import LSTFormConfirmModal from '../../../components/your-info-container/modal/confirm-modal';
import LSTFormFailModal from '../../../components/your-info-container/modal/fail-modal';
import HeaderModal from '../../../components/your-info-container/modal/header-modal';
import PreviewTransaction from './modal/preview';
import {
  StakePreviewModalProps,
  UnstakePreviewModalProps,
} from './your-info.types';

export const StakePreviewModal: FC<StakePreviewModalProps> = ({
  handleClose,
  lstForm,
  provider,
  network,
  coinsMap,
  account,
  suiUsdPrice,
  mutate,
}) => {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const [transactionFailed, setTransactionFailed] = useState(false);
  const [transactionSuccess, setTransactionSuccess] = useState('');
  const { signTransactionBlock } = useWalletKit();
  const suiAmount = lstForm.getValues('amount');
  const { data, isLoading } = useGetExchangeRateSuiToISui(
    FixedPointMath.toBigNumber(suiAmount)
      .decimalPlaces(0, BigNumber.ROUND_DOWN)
      .toString()
  );

  if (transactionFailed)
    return <LSTFormFailModal isStake={true} handleClose={handleClose} />;

  if (transactionSuccess)
    return (
      <LSTFormConfirmModal
        txLink={transactionSuccess}
        isStake={true}
        handleClose={handleClose}
      />
    );

  if (isLoading || loading)
    return (
      <Box
        width={['90vw', '90vw', '90vw', '27rem']}
        borderRadius="1rem"
        bg="surface.container"
        display="flex"
        flexDirection="column"
        pb="l"
      >
        <HeaderModal
          title={t('lst.modal.preview.title')}
          handleClose={handleClose}
        />
        <Box
          px="l"
          pt="l"
          gap="l"
          display="flex"
          minHeight="12rem"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <ProgressIndicator variant="loading" />
          <Typography variant="medium" color="onSurface">
            {t(
              isLoading
                ? 'lst.modal.preview.fetchingExchangeRate'
                : 'lst.modal.preview.submitting',
              isLoading ? undefined : { isStake: 1 }
            )}
          </Typography>
        </Box>
      </Box>
    );

  const stake = async () => {
    if (+suiAmount < 1 || !account) return;

    try {
      setLoading(true);
      const objects = LST_OBJECTS[network];

      const txb = new TransactionBlock();
      const coinType = lstForm.getValues('coinType');
      const validator = lstForm.getValues('validator');
      const suiAmountBN = FixedPointMath.toBigNumber(suiAmount)
        .decimalPlaces(0, BigNumber.ROUND_DOWN)
        .toString();

      const coinInList = createObjectsParameter({
        coinsMap,
        txb,
        type: coinType,
        amount: suiAmountBN,
      });

      txb.moveCall({
        target: `${objects.PACKAGE_ID}::entry::mint_isui`,
        arguments: [
          txb.object(SUI_SYSTEM_STATE_OBJECT_ID),
          txb.object(objects.POOL_STORAGE),
          txb.object(objects.ISUI_STORAGE),
          txb.makeMoveVec({ objects: coinInList }),
          txb.pure(suiAmountBN.toString(), BCS.U64),
          txb.pure(validator, BCS.ADDRESS),
        ],
      });

      const { signature, transactionBlockBytes } = await signTransactionBlock({
        transactionBlock: txb,
      });

      const tx = await provider.executeTransactionBlock({
        transactionBlock: transactionBlockBytes,
        signature,
        options: { showEffects: true },
        requestType: 'WaitForEffectsCert',
      });

      throwTXIfNotSuccessful(tx);

      await showTXSuccessToast(tx, network);

      const explorerLink = `${EXPLORER_URL[network]}/txblock/${tx.digest}`;

      setTransactionSuccess(explorerLink);
    } catch {
      setTransactionFailed(true);
    } finally {
      setLoading(false);
      await mutate();
    }
  };

  return (
    <PreviewTransaction
      rewards="2.5%"
      depositFee={0}
      handleClose={handleClose}
      lines={[
        {
          title: t('lst.modal.preview.stakeLabel'),
          token: 'SUI',
          Icon: (
            <Box
              width="3rem"
              height="3rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <SUISVG
                filled
                width="100%"
                height="100%"
                maxWidth="3rem"
                maxHeight="3rem"
              />
            </Box>
          ),
          children: (
            <Box textAlign="right">
              <Typography
                variant="small"
                fontWeight="400"
                fontSize="1rem"
                color="onSurface"
              >
                {suiAmount}
              </Typography>
              <Typography
                variant="extraSmall"
                fontWeight="400"
                fontSize="0.6875rem"
                color="onSurface"
                opacity="0.6"
              >
                {formatDollars(+suiAmount * suiUsdPrice)}
              </Typography>
            </Box>
          ),
        },
        {
          title: t('lst.modal.preview.receiveLabel'),
          token: 'iSUI',
          Icon: (
            <Box
              width="3rem"
              height="3rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <ISuiSVG
                filled
                width="100%"
                height="100%"
                maxWidth="3rem"
                maxHeight="3rem"
              />
            </Box>
          ),
          children: (
            <Box textAlign="right">
              <Typography
                variant="small"
                fontWeight="400"
                fontSize="1rem"
                color="onSurface"
              >
                {FixedPointMath.toNumber(BigNumber(data))}
              </Typography>
            </Box>
          ),
        },
      ]}
      onClick={stake}
      isStake
    />
  );
};

export const UnstakePreviewModal: FC<UnstakePreviewModalProps> = ({
  handleClose,
  lstForm,
  provider,
  network,
  coinsMap,
  account,
  mutate,
  suiUsdPrice,
}) => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations();
  const [transactionFailed, setTransactionFailed] = useState(false);
  const [transactionSuccess, setTransactionSuccess] = useState('');
  const { signTransactionBlock } = useWalletKit();
  const iSuiAmount = lstForm.getValues('amount');

  const { data, isLoading } = useGetExchangeRateISuiToSui(
    FixedPointMath.toBigNumber(iSuiAmount)
      .decimalPlaces(0, BigNumber.ROUND_DOWN)
      .toString()
  );

  if (transactionFailed)
    return <LSTFormFailModal isStake={true} handleClose={handleClose} />;

  if (transactionSuccess)
    return (
      <LSTFormConfirmModal
        txLink={transactionSuccess}
        isStake={true}
        handleClose={handleClose}
      />
    );

  if (isLoading || loading)
    return (
      <Box
        width={['90vw', '90vw', '90vw', '27rem']}
        borderRadius="1rem"
        bg="surface.container"
        display="flex"
        flexDirection="column"
        pb="l"
      >
        <HeaderModal
          title={t('lst.modal.preview.title')}
          handleClose={handleClose}
        />
        <Box
          px="l"
          pt="l"
          gap="l"
          display="flex"
          minHeight="12rem"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <ProgressIndicator variant="loading" />
          <Typography variant="medium" color="onSurface">
            {t(
              isLoading
                ? 'lst.modal.preview.fetchingExchangeRate'
                : 'lst.modal.preview.submitting',
              isLoading ? undefined : { isStake: 0 }
            )}
          </Typography>
        </Box>
      </Box>
    );

  const suiAmountToReceive = FixedPointMath.toNumber(BigNumber(data));

  const unstake = async () => {
    if (!account) return;

    try {
      setLoading(true);
      const objects = LST_OBJECTS[network];

      const txb = new TransactionBlock();

      const coinType = lstForm.getValues('coinType');
      const validator = lstForm.getValues('validator');

      const iSuiAmountBN = FixedPointMath.toBigNumber(iSuiAmount)
        .decimalPlaces(0, BigNumber.ROUND_DOWN)
        .toString();

      const coinInList = createObjectsParameter({
        coinsMap,
        txb,
        type: coinType,
        amount: iSuiAmountBN,
      });

      const unstakeAmount = txb.moveCall({
        target: `${objects.PACKAGE_ID}::pool::get_exchange_rate_isui_to_sui`,
        arguments: [
          txb.object(SUI_SYSTEM_STATE_OBJECT_ID),
          txb.object(objects.POOL_STORAGE),
          txb.pure(iSuiAmountBN.toString(), BCS.U64),
        ],
      });

      const unstakePayload = txb.moveCall({
        target: `${objects.PACKAGE_ID}::unstake_algorithms::default_unstake_algorithm`,
        arguments: [txb.object(objects.POOL_STORAGE), unstakeAmount],
      });

      console.log(objects.PACKAGE_ID);

      txb.moveCall({
        target: `${objects.PACKAGE_ID}::entry::burn_isui`,
        arguments: [
          txb.object(SUI_SYSTEM_STATE_OBJECT_ID),
          txb.object(objects.POOL_STORAGE),
          txb.object(objects.ISUI_STORAGE),
          txb.makeMoveVec({
            objects: coinInList,
          }),
          txb.pure(iSuiAmountBN.toString(), BCS.U64),
          txb.pure(validator, BCS.ADDRESS),
          unstakePayload,
        ],
      });

      const { signature, transactionBlockBytes } = await signTransactionBlock({
        transactionBlock: txb,
      });

      const tx = await provider.executeTransactionBlock({
        transactionBlock: transactionBlockBytes,
        signature,
        options: { showEffects: true },
        requestType: 'WaitForEffectsCert',
      });

      throwTXIfNotSuccessful(tx);

      await showTXSuccessToast(tx, network);

      const explorerLink = `${EXPLORER_URL[network]}/txblock/${tx.digest}`;

      setTransactionSuccess(explorerLink);
    } catch (e) {
      console.log(e);
      setTransactionFailed(true);
    } finally {
      setLoading(false);
      await mutate();
    }
  };

  return (
    <PreviewTransaction
      rewards="2.5%"
      depositFee={0}
      handleClose={handleClose}
      isStake={false}
      lines={[
        {
          token: 'iSUI',
          title: t('lst.modal.preview.unstakeLabel'),
          Icon: (
            <Box
              width="3rem"
              height="3rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <ISuiSVG
                filled
                width="100%"
                height="100%"
                maxWidth="3rem"
                maxHeight="3rem"
              />
            </Box>
          ),
          children: (
            <Box textAlign="right">
              <Typography
                variant="small"
                fontWeight="400"
                fontSize="1rem"
                color="onSurface"
              >
                {suiAmountToReceive}
              </Typography>
              <Typography
                variant="extraSmall"
                fontWeight="400"
                fontSize="0.6875rem"
                color="onSurface"
                opacity="0.6"
              >
                {formatDollars(suiAmountToReceive * suiUsdPrice)}
              </Typography>
            </Box>
          ),
        },
        {
          token: 'SUI',
          title: t('lst.modal.preview.receiveLabel'),
          Icon: (
            <Box
              width="3rem"
              color="white"
              height="3rem"
              display="flex"
              alignItems="center"
              borderRadius="0.34rem"
              justifyContent="center"
            >
              <SUISVG
                filled
                width="100%"
                height="100%"
                maxWidth="3rem"
                maxHeight="3rem"
              />
            </Box>
          ),
          children: (
            <Box textAlign="right">
              <Typography
                variant="small"
                fontWeight="400"
                fontSize="1rem"
                color="onSurface"
              >
                {FixedPointMath.toNumber(BigNumber(data))}
              </Typography>
            </Box>
          ),
        },
      ]}
      onClick={unstake}
    />
  );
};
