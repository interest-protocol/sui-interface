import { TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { AddressZero, FixedPointMath } from 'lib';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { prop } from 'ramda';
import { FC, useState } from 'react';

import { Routes, RoutesEnum } from '@/constants';
import { Box, Button } from '@/elements';
import { useModal, useNetwork, useSDK, useWeb3 } from '@/hooks';
import {
  capitalize,
  createObjectsParameter,
  showToast,
  showTXSuccessToast,
  throwTXIfNotSuccessful,
} from '@/utils';
import { WalletGuardButton } from '@/views/dapp/components';

import CreatePoolPopup from './create-pool-popup';
import { FindPoolButtonProps } from './dex-find-pool.types';
import { getRecommendedPairId } from './dex-find-pool.utils';

const FindPoolButton: FC<FindPoolButtonProps> = ({
  getValues,
  tokenBType,
  tokenAType,
  isCreatingPair,
  setCreatingPair,
}) => {
  const t = useTranslations();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const { setModal, handleClose } = useModal();
  const { signAndExecuteTransactionBlock } = useWalletKit();
  const { coinsMap, account } = useWeb3();
  const { network } = useNetwork();
  const sdk = useSDK();

  const enterPool = async () => {
    setLoading(true);

    try {
      const pairId = getRecommendedPairId(network, tokenAType, tokenBType);

      if (pairId)
        return await push({
          pathname: Routes[RoutesEnum.DEXPoolDetails],
          query: { objectId: pairId },
        });

      const objectId = await sdk.findPoolId({
        tokenAType,
        tokenBType,
        account: account ?? AddressZero,
      });

      if (!objectId) return setCreatingPair(true);

      await push({
        pathname: Routes[RoutesEnum.DEXPoolDetails],
        query: { objectId },
      });
    } catch {
      throw new Error(t('dexPoolFind.errors.connecting'));
    } finally {
      setLoading(false);
    }
  };

  const createPair = async () => {
    try {
      setLoading(true);

      const tokenA = getValues('tokenA');
      const tokenB = getValues('tokenB');

      if (!account) throw new Error(t('error.accountNotFound'));

      if (!+tokenA.value || !+tokenB.value)
        throw new Error(t('dexPoolFind.errors.value'));

      const amountA = FixedPointMath.toBigNumber(
        tokenA.value,
        tokenA.decimals
      ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      const amountB = FixedPointMath.toBigNumber(
        tokenB.value,
        tokenB.decimals
      ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      const txb = new TransactionBlock();

      const transactionBlock = await sdk.createPool({
        txb,
        coinAList: createObjectsParameter({
          txb,
          type: tokenA.type,
          coinsMap,
          amount: amountA.toString(),
        }),
        coinBList: createObjectsParameter({
          txb,
          type: tokenB.type,
          coinsMap,
          amount: amountB.toString(),
        }),
        coinAAmount: amountA.toString(),
        coinBAmount: amountB.toString(),
        coinAType: tokenA.type,
        coinBType: tokenB.type,
      });

      const tx = await signAndExecuteTransactionBlock({
        transactionBlock,
        requestType: 'WaitForEffectsCert',
        options: { showEffects: true, showEvents: true },
      });

      throwTXIfNotSuccessful(tx);

      await showTXSuccessToast(tx, network);

      if (
        tx.events &&
        tx.events.length &&
        tx.events[0].parsedJson &&
        tx.events[0].parsedJson.id
      ) {
        await push({
          pathname: Routes[RoutesEnum.DEXPoolDetails],
          query: { objectId: tx.events[0].parsedJson?.id },
        });
      }
    } catch {
      throw new Error(t('dexPoolFind.errors.create'));
    } finally {
      setLoading(false);
    }
  };

  const handleEnterPool = () =>
    showToast(enterPool(), {
      loading: capitalize(t('common.check', { isLoading: 1 })),
      success: capitalize(t('common.success')),
      error: prop('message'),
    });

  const handleCreatePair = () =>
    showToast(createPair(), {
      loading: t('dexPoolFind.buttonPool', { isLoading: 1 }),
      success: capitalize(t('common.success')),
      error: prop('message'),
    });

  const openModal = () =>
    setModal(
      <CreatePoolPopup
        onCancel={handleClose}
        onContinue={handleCreatePair}
        symbol0={getValues('tokenA.symbol')}
        symbol1={getValues('tokenB.symbol')}
      />
    );

  return (
    <Box
      p="L"
      my="L"
      color="text"
      bg="foreground"
      maxWidth="30rem"
      borderRadius="M"
      width={['100%', '100%', '100%', '30rem']}
    >
      <WalletGuardButton>
        {tokenAType == tokenBType ? (
          <Button width="100%" variant="primary" disabled={true} bg="disabled">
            {t('dexPoolFind.buttonSameToken')}
          </Button>
        ) : isCreatingPair ? (
          <Button
            onClick={openModal}
            width="100%"
            variant="primary"
            disabled={loading}
          >
            {t('dexPoolFind.buttonPool', { isLoading: Number(loading) })}
          </Button>
        ) : (
          <Button
            width="100%"
            variant="primary"
            disabled={loading}
            onClick={handleEnterPool}
            bg={loading ? 'accentActive' : 'accent'}
            nHover={{ bg: loading ? 'disabled' : 'accentActive' }}
          >
            {t('dexPoolFind.button', { isLoading: Number(loading) })}
          </Button>
        )}
      </WalletGuardButton>
    </Box>
  );
};

export default FindPoolButton;
