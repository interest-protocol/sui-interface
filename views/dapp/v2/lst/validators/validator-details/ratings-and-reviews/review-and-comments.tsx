import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { useModal } from '@/hooks';

import ValidatorConfirmVoteModal from '../modal';
import { VotingButtonsProps } from '../validators-details.types';
import LeaveAComment from './comments';
import VotingButtons from './ratings';

const ReviewAndComments: FC<VotingButtonsProps> = ({
  isNegative,
  isPositive,
  setIsNegative,
  setIsPositive,
}) => {
  const t = useTranslations();
  const { setModal, handleClose } = useModal();

  const openConfirmationModal = () => {
    setModal(
      <ValidatorConfirmVoteModal
        handleClose={() => {
          handleClose();
          setIsPositive(false);
          setIsNegative(false);
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
          isNegative={isNegative}
          isPositive={isPositive}
          setIsPositive={setIsPositive}
          setIsNegative={setIsNegative}
        />
        <LeaveAComment />
        <Button
          ml="auto"
          size="small"
          variant="filled"
          width="fit-content"
          textTransform="capitalize"
          onClick={openConfirmationModal}
          disabled={!isPositive && !isNegative}
        >
          {t(
            'lst.validators.validatorSection.validatorDetailsPage.rankingAndCommentsSection.publish'
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewAndComments;
