import { Box, Typography } from '@interest-protocol/ui-kit';
import { BCS } from '@mysten/bcs';
import { SUI_SYSTEM_STATE_OBJECT_ID, TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { EXPLORER_URL } from '@/constants';
import { LST_OBJECTS } from '@/constants/lst';
import { useModal, useNetwork, useProvider } from '@/hooks';
import { useGetInterestSbt } from '@/hooks/use-get-interest-sbt';
import { showTXSuccessToast, throwTXIfNotSuccessful } from '@/utils';

import FormConfirmModal from '../../../components/modal/confirm-modal';
import FormFailModal from '../../../components/modal/fail-modal';
import FormLoadingModal from '../../../components/modal/loading-modal';
import { ReviewForm } from '../validators-details.types';
import LeaveAComment from './comments';
import VotingButtons from './ratings';
import SubmitButton from './submit-button';

const ReviewAndComments: FC = () => {
  const t = useTranslations();
  const { setModal, handleClose } = useModal();
  const { network } = useNetwork();
  const { signTransactionBlock } = useWalletKit();
  const { provider } = useProvider();
  const { data, mutate } = useGetInterestSbt();

  const { setValue, control, getValues } = useForm<ReviewForm>({
    defaultValues: {
      comment: '',
      rating: null,
    },
  });

  const openLoadingModal = () => {
    setModal(<FormLoadingModal handleClose={handleClose} />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: true,
    });
  };

  const openResultModal = (isSuccess: boolean, txLink?: string) =>
    setModal(
      isSuccess ? (
        <FormConfirmModal
          handleClose={() => {
            handleClose();
            setValue('rating', null);
          }}
          viewInExplorerLink={txLink || ''}
          onClick={handleClose}
          labels={{
            description: 'transaction success',
            button: 'go back home',
          }}
        />
      ) : (
        <FormFailModal
          labels={{ description: 'transaction failed', button: 'try again' }}
          handleClose={handleClose}
        />
      ),
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: false,
      }
    );

  const handleSubmit = async () => {
    try {
      openLoadingModal();
      const objects = LST_OBJECTS[network];
      const values = getValues();

      const txb = new TransactionBlock();
      txb.moveCall({
        target: `${objects.PACKAGE_ID}::review::create`,
        arguments: [
          txb.object(SUI_SYSTEM_STATE_OBJECT_ID),
          txb.object(objects.REVIEWS_STORAGE),
          txb.object(data[0].id),
          txb.pure(
            '0xba4d20899c7fd438d50b2de2486d08e03f34beb78a679142629a6baacb88b013'
          ),
          txb.pure(true),
          txb.pure(values.comment, BCS.STRING),
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

      openResultModal(true, explorerLink);
    } catch (e) {
      console.log(e);
      openResultModal(false);
    } finally {
      await mutate();
    }
  };

  return (
    <Box
      p="l"
      display="flex"
      position="relative"
      borderRadius=".5rem"
      flexDirection="column"
      bg="surface.container"
    >
      <Typography mb="1.5rem" variant="extraSmall" textTransform="uppercase">
        {t(
          'lst.validators.validatorSection.validatorDetailsPage.rankingAndCommentsSection.reviewAndComment'
        )}
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        <Typography variant="small" opacity=".6">
          {t(
            'lst.validators.validatorSection.validatorDetailsPage.rankingAndCommentsSection.headerMessage'
          )}
        </Typography>
        <VotingButtons
          setValue={(value: 'positive' | 'negative') =>
            setValue('rating', value)
          }
          control={control}
        />
        <LeaveAComment
          setValue={(value: string) => setValue('comment', value)}
        />
      </Box>
      <SubmitButton control={control} handleSubmit={handleSubmit} />
    </Box>
  );
};

export default ReviewAndComments;
