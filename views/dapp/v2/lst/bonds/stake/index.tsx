import { Box } from '@interest-protocol/ui-kit';
import { BCS } from '@mysten/bcs';
import {
  SUI_SYSTEM_STATE_OBJECT_ID,
  SUI_TYPE_ARG,
  TransactionBlock,
} from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { EXPLORER_URL } from '@/constants';
import { LST_OBJECTS } from '@/constants/lst';
import { useModal, useNetwork, useProvider, useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { createObjectsParameter, noop } from '@/utils';

import { useBondsContext } from '../bonds.hooks';
import BondsFormConfirmModal from '../components/modal/confirm-modal';
import BondsFormFailModal from '../components/modal/fail-modal';
import BondsFormLoadingModal from '../components/modal/loading-modal';
import TransactionSummary from '../components/transaction-summary';
import BondsStakeForm from './stake-form';
import BondsStakeHeader from './stake-header';

const LSTBondsStake: FC = () => {
  const t = useTranslations();
  const { form } = useBondsContext();
  const { coinsMap } = useWeb3();
  const { signTransactionBlock } = useWalletKit();
  const { provider } = useProvider();
  const { network } = useNetwork();
  const { setModal, handleClose } = useModal();
  const [isLoading, setIsLoading] = useState(false);

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
      const formValues = form.getValues();

      const txb = new TransactionBlock();
      const objects = LST_OBJECTS[network];
      const validator = formValues.validator;
      const suiAmountBN = FixedPointMath.toBigNumber(formValues.amount)
        .decimalPlaces(0, BigNumber.ROUND_DOWN)
        .toString();

      console.log(validator);
      console.log(formValues.maturity.epoch);

      const coinInList = createObjectsParameter({
        coinsMap,
        txb,
        type: SUI_TYPE_ARG,
        amount: suiAmountBN.toString(),
      });

      txb.moveCall({
        target: `${objects.PACKAGE_ID}::entry::mint_stripped_bond`,
        arguments: [
          txb.object(SUI_SYSTEM_STATE_OBJECT_ID),
          txb.object(objects.POOL_STORAGE),
          txb.object(objects.ISUI_STORAGE),
          txb.object(objects.ISUI_PRINCIPAL_STORAGE),
          txb.object(objects.ISUI_YIELD_STORAGE),

          txb.makeMoveVec({ objects: coinInList }),
          txb.pure(suiAmountBN.toString(), BCS.U64),
          txb.pure(validator, BCS.ADDRESS),
          txb.pure(formValues.maturity.epoch, BCS.U64),
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
      const explorerLink = `${EXPLORER_URL[network]}/txblock/${tx.digest}`;
      openModal('success', explorerLink);
    } catch {
      openModal('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    form.setValue('maturity', { date: '', epoch: '' });
    form.setValue('amount', '0');
  };

  return (
    <Box variant="container" display="flex">
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
          <BondsStakeHeader />
          <BondsStakeForm />
        </Box>
        <TransactionSummary
          handleClear={handleClear}
          handleSubmit={isLoading ? noop : handleSubmit}
          submitText={t('common.stake', { isLoading: Number(isLoading) })}
        />
      </Box>
    </Box>
  );
};

export default LSTBondsStake;
