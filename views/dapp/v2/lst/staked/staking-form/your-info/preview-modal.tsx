import { Box, Typography } from '@interest-protocol/ui-kit';
import { BCS } from '@mysten/bcs';
import { SUI_SYSTEM_STATE_OBJECT_ID, TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { BigNumber } from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { SUISVG } from '@/components/svg/v2';
import { DEFAULT_VALIDATOR, LST_OBJECTS } from '@/constants/lst';
import { FixedPointMath } from '@/lib';
import { ISuiSVG } from '@/svg';
import {
  createObjectsParameter,
  showTXSuccessToast,
  throwTXIfNotSuccessful,
} from '@/utils';
import {
  useGetExchangeRateISuiToSui,
  useGetExchangeRateSuiToISui,
} from '@/views/dapp/v2/lst/lst.hooks';

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
}) => {
  const t = useTranslations();
  const { signTransactionBlock } = useWalletKit();
  const suiAmount = lstForm.getValues('amount');
  const { data } = useGetExchangeRateSuiToISui(
    FixedPointMath.toBigNumber(suiAmount)
      .decimalPlaces(0, BigNumber.ROUND_DOWN)
      .toString()
  );

  const stake = async () => {
    if (+suiAmount < 1 || !account) return;

    try {
      const objects = LST_OBJECTS[network];

      const txb = new TransactionBlock();
      const coinType = lstForm.getValues('coinType');
      const suiAmountBN = FixedPointMath.toBigNumber(suiAmount)
        .decimalPlaces(0, BigNumber.ROUND_DOWN)
        .toString();

      const coinInList = createObjectsParameter({
        coinsMap,
        txb,
        type: coinType,
        amount: suiAmountBN,
      });

      const suiCoin = txb.moveCall({
        target: `${objects.PACKAGE_ID}::coin_utils::handle_coin_vector`,
        typeArguments: [coinType],
        arguments: [
          txb.makeMoveVec({ objects: coinInList }),
          txb.pure(suiAmountBN.toString(), BCS.U64),
        ],
      });

      const iSuiCoin = txb.moveCall({
        target: `${objects.PACKAGE_ID}::pool::mint_isui`,
        arguments: [
          txb.object(SUI_SYSTEM_STATE_OBJECT_ID),
          txb.object(objects.POOL_STORAGE),
          txb.object(objects.ISUI_STORAGE),
          suiCoin,
          txb.pure(DEFAULT_VALIDATOR[network], BCS.ADDRESS),
        ],
      });

      txb.transferObjects([iSuiCoin], txb.pure(account, BCS.ADDRESS));

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
    } catch (error) {
      console.log(error);
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
          token: { main: 'SUI', secondary: 'SUI' },
          Icon: (
            <Box
              width="3rem"
              height="3rem"
              borderRadius="0.34rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              bg="#6FBCF0"
            >
              <SUISVG
                maxHeight="2.5rem"
                maxWidth="2.5rem"
                width="100%"
                height="100%"
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
                $100.000
              </Typography>
            </Box>
          ),
        },
        {
          title: t('lst.modal.preview.receiveLabel'),
          token: { main: 'iSUI', secondary: 'SUI' },
          Icon: (
            <Box
              width="3rem"
              height="3rem"
              borderRadius="0.34rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
            >
              <ISuiSVG
                maxHeight="3rem"
                maxWidth="3rem"
                width="100%"
                height="100%"
                filled
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
              <Box display="flex" alignItems="center" gap="0.5rem">
                <Typography
                  variant="extraSmall"
                  fontWeight="400"
                  fontSize="0.6875rem"
                  color="onSurface"
                  opacity="0.6"
                >
                  {suiAmount}
                </Typography>
                <Box
                  color="white"
                  bg="#6FBCF0"
                  borderRadius="full"
                  width="1rem"
                  height="1rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <SUISVG
                    maxHeight="0.825rem"
                    maxWidth="0.825rem"
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Box>
            </Box>
          ),
          reverse: true,
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
}) => {
  const t = useTranslations();
  const { signTransactionBlock } = useWalletKit();
  const iSuiAmount = lstForm.getValues('amount');
  const { data } = useGetExchangeRateISuiToSui(
    FixedPointMath.toBigNumber(iSuiAmount)
      .decimalPlaces(0, BigNumber.ROUND_DOWN)
      .toString()
  );

  const unstake = async () => {
    if (+iSuiAmount < 1 || !account) return;

    try {
      const objects = LST_OBJECTS[network];

      const txb = new TransactionBlock();
      const coinType = lstForm.getValues('coinType');
      const suiAmountBN = FixedPointMath.toBigNumber(iSuiAmount)
        .decimalPlaces(0, BigNumber.ROUND_DOWN)
        .toString();

      const coinInList = createObjectsParameter({
        coinsMap,
        txb,
        type: coinType,
        amount: suiAmountBN,
      });

      const iSuiCoin = txb.moveCall({
        target: `${objects.PACKAGE_ID}::coin_utils::handle_coin_vector`,
        typeArguments: [coinType],
        arguments: [
          txb.makeMoveVec({ objects: coinInList }),
          txb.pure(suiAmountBN.toString(), BCS.U64),
        ],
      });

      const burnValidatorPayload = txb.moveCall({
        target: `${objects.PACKAGE_ID}::pool::create_burn_validator_payload`,
      });

      console.log({ burnValidatorPayload });

      const suiCoin = txb.moveCall({
        target: `${objects.PACKAGE_ID}::pool::burn_isui`,
        arguments: [
          txb.object(SUI_SYSTEM_STATE_OBJECT_ID),
          txb.object(objects.POOL_STORAGE),
          txb.object(objects.ISUI_STORAGE),
          iSuiCoin,
          txb.pure(DEFAULT_VALIDATOR[network], BCS.ADDRESS),
        ],
      });

      txb.transferObjects([suiCoin], txb.pure(account, BCS.ADDRESS));

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
    } catch (error) {
      console.log(error);
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
          title: t('lst.modal.preview.stakeLabel'),
          token: { main: 'SUI', secondary: 'SUI' },
          Icon: (
            <Box
              width="3rem"
              height="3rem"
              borderRadius="0.34rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              bg="#6FBCF0"
            >
              <SUISVG
                maxHeight="2.5rem"
                maxWidth="2.5rem"
                width="100%"
                height="100%"
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
                {iSuiAmount}
              </Typography>
              <Typography
                variant="extraSmall"
                fontWeight="400"
                fontSize="0.6875rem"
                color="onSurface"
                opacity="0.6"
              >
                $100.000
              </Typography>
            </Box>
          ),
        },
        {
          title: t('lst.modal.preview.receiveLabel'),
          token: { main: 'iSUI', secondary: 'SUI' },
          Icon: (
            <Box
              width="3rem"
              height="3rem"
              borderRadius="0.34rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
            >
              <ISuiSVG
                maxHeight="3rem"
                maxWidth="3rem"
                width="100%"
                height="100%"
                filled
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
              <Box display="flex" alignItems="center" gap="0.5rem">
                <Typography
                  variant="extraSmall"
                  fontWeight="400"
                  fontSize="0.6875rem"
                  color="onSurface"
                  opacity="0.6"
                >
                  {FixedPointMath.toNumber(BigNumber(data))}
                </Typography>
                <Box
                  color="white"
                  bg="#6FBCF0"
                  borderRadius="full"
                  width="1rem"
                  height="1rem"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <SUISVG
                    maxHeight="0.825rem"
                    maxWidth="0.825rem"
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Box>
            </Box>
          ),
          reverse: true,
        },
      ]}
      onClick={unstake}
    />
  );
};
