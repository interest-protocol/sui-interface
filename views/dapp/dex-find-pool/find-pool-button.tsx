import { toHEX } from '@mysten/bcs';
import { MoveCallTransaction } from '@mysten/sui.js/src';
import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { prop } from 'ramda';
import { FC, useState } from 'react';

import {
  COINS_PACKAGE_ID,
  DEX_STORAGE_VOLATILE,
  FAUCET_PACKAGE_ID,
  Routes,
  RoutesEnum,
} from '@/constants';
import { Box, Button } from '@/elements';
import { useWeb3 } from '@/hooks';
import { useModal } from '@/hooks/use-modal';
import { AddressZero, FixedPointMath } from '@/sdk';
import {
  capitalize,
  getCoinIds,
  getDevInspectData,
  provider,
  showToast,
  showTXSuccessToast,
  wsProvider,
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
  const { signAndExecuteTransaction } = useWalletKit();
  const { coinsMap, account } = useWeb3();

  const enterPool = async () => {
    setLoading(true);

    try {
      const pairId = getRecommendedPairId(tokenAType, tokenBType);

      if (pairId)
        return await push({
          pathname: Routes[RoutesEnum.DEXPoolDetails],
          query: { objectId: pairId },
        });

      const response = await provider.devInspectTransaction(AddressZero, {
        kind: 'moveCall',
        data: {
          function: 'get_v_pool_id',
          gasBudget: 5000,
          module: 'interface',
          packageObjectId: COINS_PACKAGE_ID,
          arguments: [DEX_STORAGE_VOLATILE],
          typeArguments: [tokenAType, tokenBType],
        } as MoveCallTransaction,
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

      const tx = await signAndExecuteTransaction({
        kind: 'moveCall',
        data: {
          function: 'create_pool',
          gasBudget: 12000,
          module: 'interface',
          packageObjectId: FAUCET_PACKAGE_ID,
          typeArguments: [tokenAType, tokenBType],
          arguments: [
            DEX_STORAGE_VOLATILE,
            getCoinIds(coinsMap, tokenA.type, 12000),
            getCoinIds(coinsMap, tokenB.type, 12000),
            amountA.toString(),
            amountB.toString(),
          ],
        },
      });

      await showTXSuccessToast(tx);

      const subscriptionId = await wsProvider.subscribeEvent(
        {
          All: [
            { Package: COINS_PACKAGE_ID },
            { SenderAddress: account },
            { EventType: 'MoveEvent' },
          ],
        },
        async (data) => {
          if ('moveEvent' in data.event) {
            const id = data.event.moveEvent.fields.id;
            if (id) {
              await wsProvider.unsubscribeEvent(subscriptionId);
              await push({
                pathname: Routes[RoutesEnum.DEXPoolDetails],
                query: { objectId: id },
              });
            }
          }
        }
      );
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
            hover={{ bg: loading ? 'disabled' : 'accentActive' }}
          >
            {t('dexPoolFind.button', { isLoading: Number(loading) })}
          </Button>
        )}
      </WalletGuardButton>
    </Box>
  );
};

export default FindPoolButton;
