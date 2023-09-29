import { Box } from '@interest-protocol/ui-kit';
import { SUI_SYSTEM_STATE_OBJECT_ID, TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { EXPLORER_URL } from '@/constants';
import { LST_OBJECTS } from '@/constants/lst';
import {
  useGetLstBondObjects,
  useModal,
  useNetwork,
  useProvider,
} from '@/hooks';
import { ONE_COIN } from '@/lib';
import { throwTXIfNotSuccessful } from '@/utils';

import { useBondsContext } from '../bonds.hooks';
import BondsFormConfirmModal from '../components/modal/confirm-modal';
import BondsFormFailModal from '../components/modal/fail-modal';
import BondsFormLoadingModal from '../components/modal/loading-modal';
import TransactionSummary from '../components/transaction-summary';
import BondsUnstakeForm from './unstake-form';
import BondsUnstakeHeader from './unstake-header';

const LSTBondsUnstake: FC = () => {
  const t = useTranslations();

  const { network } = useNetwork();
  const { form } = useBondsContext();
  const { setModal, handleClose } = useModal();
  const [isLoading, setIsLoading] = useState(false);
  const { signTransactionBlock } = useWalletKit();
  const { bondsMap, mutate } = useGetLstBondObjects();
  const { provider } = useProvider();
  const openModal = (type: 'loading' | 'success' | 'error', txUrl?: string) => {
    setModal(
      {
        loading: <BondsFormLoadingModal handleClose={handleClose} />,
        error: <BondsFormFailModal handleClose={handleClose} />,
        success: (
          <BondsFormConfirmModal
            onClick={handleClose}
            handleClose={handleClose}
            viewInExplorerLink={txUrl!}
          />
        ),
      }[type],
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      openModal('loading');
      const objects = LST_OBJECTS[network];
      const values = form.getValues();
      const txb = new TransactionBlock();

      const unstakePayload = txb.moveCall({
        target: `${objects.PACKAGE_ID}::unstake_algorithms::default_unstake_algorithm`,
        arguments: [
          txb.object(objects.POOL_STORAGE),
          txb.pure(ONE_COIN.toString()),
        ],
      });

      txb.moveCall({
        target: `${objects.PACKAGE_ID}::entry::call_bond`,
        arguments: [
          txb.object(SUI_SYSTEM_STATE_OBJECT_ID),
          txb.object(objects.POOL_STORAGE),
          txb.object(objects.ISUI_PRINCIPAL_STORAGE),
          txb.object(objects.ISUI_YIELD_STORAGE),
          txb.makeMoveVec({
            objects: bondsMap[values.maturity.epoch]
              .principal!.objects.map((x) => x.id)
              .map((x) => txb.object(x)),
          }),
          txb.makeMoveVec({
            objects: bondsMap[values.maturity.epoch]
              .coupon!.objects.map((x) => x.id)
              .map((x) => txb.object(x)),
          }),
          txb.pure(ONE_COIN.toString()),
          txb.pure(ONE_COIN.toString()),
          txb.pure('140'),
          txb.pure(
            '0xba4d20899c7fd438d50b2de2486d08e03f34beb78a679142629a6baacb88b013'
          ),
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
      const explorerLink = `${EXPLORER_URL[network]}/txblock/${tx.digest}`;
      openModal('success', explorerLink);
    } catch {
      openModal('error');
    } finally {
      await mutate();
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    form.setValue('maturity', { date: '', epoch: '' });
    form.setValue('amount', '0');
  };

  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Box
        gap="xl"
        width="100%"
        display="grid"
        alignItems="flex-start"
        gridTemplateColumns={['1fr', '1fr', '3fr 2fr']}
      >
        <Box
          p="xl"
          width="100%"
          borderRadius="m"
          color="onSurface"
          bg="surface.container"
        >
          <BondsUnstakeHeader />
          <BondsUnstakeForm />
        </Box>
        <TransactionSummary
          handleClear={handleClear}
          handleSubmit={handleSubmit}
          submitText={t('common.unstake', { isLoading: Number(isLoading) })}
        />
      </Box>
    </Box>
  );
};

export default LSTBondsUnstake;
