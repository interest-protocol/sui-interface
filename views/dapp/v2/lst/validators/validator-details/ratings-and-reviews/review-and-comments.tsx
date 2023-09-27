import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { useModal } from '@/hooks';

import ValidatorConfirmVoteModal from '../modal';
import { ReviewForm } from '../validators-details.types';
import LeaveAComment from './comments';
import VotingButtons from './ratings';
import SubmitButton from './submit-button';

const ReviewAndComments: FC = () => {
  const t = useTranslations();
  const { setModal, handleClose } = useModal();
  const { setValue, control } = useForm<ReviewForm>({
    defaultValues: {
      comment: '',
      rating: null,
    },
  });

  const openConfirmationModal = () => {
    setModal(
      <ValidatorConfirmVoteModal
        handleClose={() => {
          handleClose();
          setValue('rating', null);
        }}
      />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: false,
      }
    );
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
      <SubmitButton control={control} openModal={openConfirmationModal} />
    </Box>
  );
};

export default ReviewAndComments;
