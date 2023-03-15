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
} from '@/utils';
import { WalletGuardButton } from '@/views/dapp/components';

import CreatePoolPopup from './create-pool-popup';
import { FindPoolButtonProps } from './dex-find-pool.types';
import { getRecommendedPairId } from './dex-find-pool.utils';

const FindPoolButton: FC<FindPoolButtonProps> = ({
  tokenBType,
  tokenAType,
  isCreatingPair,
  setCreatingPair,
  getValues,
}) => {
  const t = useTranslations();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const { setModal, handleClose } = useModal();
  const { signAndExecuteTransaction } = useWalletKit();
  const { coinsMap } = useWeb3();

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
    } catch (error) {
      throw new Error('Error connecting'); // TODO: translate this message
    } finally {
      setLoading(false);
    }
  };

  const createPair = async () => {
    try {
      setLoading(true);

      const tokenA = getValues('tokenA');
      const tokenB = getValues('tokenB');

      if (!+tokenA.value || !+tokenB.value)
        throw new Error('Both coins must have a value');

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

      const filteredEvents = tx.effects.events?.filter((event) => {
        if ('moveEvent' in event) {
          const data = event.moveEvent;

          return data.packageId === COINS_PACKAGE_ID;
        }

        return false;
      });

      if (!filteredEvents || !filteredEvents.length)
        throw new Error('Cannot find the pool id');

      const firstEvent = filteredEvents[0];

      if ('moveEvent' in firstEvent) {
        const data = firstEvent.moveEvent;

        await push({
          pathname: Routes[RoutesEnum.DEXPoolDetails],
          query: { objectId: data.fields.id },
        });
      }

      throw new Error('Cannot find the pool id');
    } catch (error) {
      throw new Error('Failed to create pool');
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
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    showToast(createPair(), {
      loading: t('dexPoolFind.buttonPool', { isLoading: 1 }),
      success: capitalize(t('common.success')),
      error: prop('message'),
    });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const openModal = () =>
    setModal(
      <CreatePoolPopup onCancel={handleClose} onContinue={handleCreatePair} />
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
