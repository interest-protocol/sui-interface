import { toHEX } from '@mysten/bcs';
import { TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { prop } from 'ramda';
import { FC, useState } from 'react';

import { OBJECT_RECORD, Routes, RoutesEnum } from '@/constants';
import { Box, Button } from '@/elements';
import { useModal, useNetwork, useProvider, useWeb3 } from '@/hooks';
import { AddressZero, FixedPointMath } from '@/sdk';
import {
  capitalize,
  getCoinIds,
  getDevInspectData,
  showToast,
  showTXSuccessToast,
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
  const { provider, wsProvider } = useProvider();

  const objects = OBJECT_RECORD[network];

  const enterPool = async () => {
    setLoading(true);

    try {
      const pairId = getRecommendedPairId(network, tokenAType, tokenBType);

      if (pairId)
        return await push({
          pathname: Routes[RoutesEnum.DEXPoolDetails],
          query: { objectId: pairId },
        });

      const transactionBlock = new TransactionBlock();

      transactionBlock.moveCall({
        target: `${objects.PACKAGE_ID}::interface::get_v_pool_id`,
        arguments: [transactionBlock.object(objects.DEX_STORAGE_VOLATILE)],
        typeArguments: [tokenAType, tokenBType],
      });

      const response = await provider.devInspectTransactionBlock({
        transactionBlock,
        sender: account ?? AddressZero,
        gasPrice: 50000,
      });

      if (response.effects.status.status === 'failure')
        return setCreatingPair(true);

      await push({
        pathname: Routes[RoutesEnum.DEXPoolDetails],
        query: { objectId: `0x${toHEX(getDevInspectData(response))}` },
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

      if (!account) throw new Error();

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

      const transactionBlock = new TransactionBlock();

      transactionBlock.moveCall({
        target: `${objects.PACKAGE_ID}::interface::create_pool`,
        arguments: [
          transactionBlock.object(objects.DEX_STORAGE_VOLATILE),
          transactionBlock.pure(getCoinIds(network, coinsMap, tokenA.type)),
          transactionBlock.pure(getCoinIds(network, coinsMap, tokenB.type)),
          transactionBlock.pure(amountA.toString()),
          transactionBlock.pure(amountB.toString()),
        ],
      });

      const tx = await signAndExecuteTransactionBlock({
        transactionBlock,
        requestType: 'WaitForEffectsCert',
      });

      await showTXSuccessToast(tx, network);

      const subscriptionId = await wsProvider.subscribeEvent({
        filter: {
          All: [{ Package: objects.PACKAGE_ID }, { Sender: account }],
        },
        onMessage: async (data) => {
          if (data.sender === account) {
            const id = data.parsedJson?.id;
            if (id) {
              await wsProvider.unsubscribeEvent({ id: subscriptionId });
              await push({
                pathname: Routes[RoutesEnum.DEXPoolDetails],
                query: { objectId: id },
              });
            }
          }
        },
      });
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
