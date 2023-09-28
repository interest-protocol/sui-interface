import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { EXPLORER_URL } from '@/constants';
import { LST_OBJECTS } from '@/constants/lst';
import { useModal, useNetwork, useProvider } from '@/hooks';
import { useGetInterestSbt } from '@/hooks/use-get-interest-sbt';
import { capitalize } from '@/utils';
import { showTXSuccessToast, throwTXIfNotSuccessful } from '@/utils';

import FormConfirmModal from '../../../components/modal/confirm-modal';
import FormFailModal from '../../../components/modal/fail-modal';
import FormLoadingModal from '../../../components/modal/loading-modal';
import {
  RatingRowProps,
  ValidatorsUserActionsProps,
} from '../validators-details.types';
import CommunityInvite from './community-invite';
import RatingRow from './rating-row';
import ReviewAndComments from './review-and-comments';

const MAX_RANKING = 10;

const DividerLine = () => (
  <Box
    top="50%"
    left="50%"
    width="1px"
    position="absolute"
    borderRight="1px solid"
    height="calc(100% - 2rem)"
    transform="translate(-50%, -50%)"
    borderColor="outline.outlineVariant"
  />
);

const ValidatorRatings: FC<
  RatingRowProps & Pick<ValidatorsUserActionsProps, 'ranking'>
> = ({ ranking, negativeReview, positiveReview }) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const { setModal, handleClose } = useModal();
  const { data, mutate } = useGetInterestSbt();
  const { network } = useNetwork();
  const { signTransactionBlock } = useWalletKit();
  const { provider } = useProvider();

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
          handleClose={handleClose}
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

  const mintSBT = async () => {
    try {
      openLoadingModal();
      const objects = LST_OBJECTS[network];

      const txb = new TransactionBlock();
      txb.moveCall({
        target: `${objects.PACKAGE_ID}::soulbound_token::mint_sbt`,
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
    } catch {
      openResultModal(false);
    } finally {
      await mutate();
    }
  };

  return (
    <Box
      gap=".5rem"
      display="flex"
      color="onSurface"
      flexDirection="column"
      p={['l', 'l', 'l', 'unset']}
      width={['100%', '100%', '100%', '45%']}
    >
      <Box
        p="l"
        display="flex"
        position="relative"
        borderRadius=".5rem"
        bg="surface.container"
      >
        <DividerLine />
        <Box flex="1" display="flex" flexDirection="column" gap="m">
          <Typography variant="extraSmall" textTransform="uppercase">
            {capitalize(
              t(
                'lst.validators.validatorSection.validatorDetailsPage.rankingAndCommentsSection.ranking'
              )
            )}
          </Typography>
          <Box
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="displaySmall"
              color={dark ? '#D9F99D' : '#3F6212'}
            >
              {ranking}
            </Typography>
            <Typography variant="medium" mt="l">
              /{MAX_RANKING}
            </Typography>
          </Box>
        </Box>
        <Box
          py="l"
          flex="1"
          gap="2rem"
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <RatingRow
            type="positive"
            positiveReview={positiveReview}
            negativeReview={negativeReview}
          />
          <RatingRow
            type="negative"
            negativeReview={negativeReview}
            positiveReview={positiveReview}
          />
        </Box>
      </Box>
      {data.length ? <ReviewAndComments /> : <CommunityInvite vote={mintSBT} />}
    </Box>
  );
};

export default ValidatorRatings;
