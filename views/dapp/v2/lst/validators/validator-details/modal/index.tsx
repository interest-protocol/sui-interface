import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Checkmark from '@/components/svg/v2/checkmark';
import { SEMANTIC_COLORS } from '@/constants';
import { capitalize } from '@/utils';

import HeaderModal from '../../../components/your-info-container/modal/header-modal';
import { ValidateVoteModalProps } from '../validators-details.types';

const ValidatorConfirmVoteModal: FC<ValidateVoteModalProps> = ({
  handleClose,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  return (
    <Box
      width={['90vw', '90vw', '90vw', '27rem']}
      borderRadius="1rem"
      bg="surface"
      display="flex"
      flexDirection="column"
      pb="l"
    >
      <HeaderModal withoutBack title="" handleClose={handleClose} />
      <Box
        p="xl"
        gap="xl"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box bg="surface.container" borderRadius="full" p="1.5rem">
          <Box
            display="flex"
            width="2.5rem"
            minHeight="2.5rem"
            alignItems="center"
            borderRadius="full"
            justifyContent="center"
            color="inverseOnSurface"
            bg={dark ? SEMANTIC_COLORS[0].dark : SEMANTIC_COLORS[0].light}
          >
            <Checkmark width="100%" maxHeight="1.5rem" maxWidth="1.5rem" />
          </Box>
        </Box>
        <Typography variant="small" color="onSurface">
          {capitalize(
            t(
              'lst.validators.validatorSection.validatorDetailsPage.rankingAndCommentsSection.modalMessage'
            )
          )}
        </Typography>
        <Button onClick={handleClose} variant="filled" size="small">
          {capitalize(
            t(
              'lst.validators.validatorSection.validatorDetailsPage.rankingAndCommentsSection.backToHome'
            )
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default ValidatorConfirmVoteModal;
