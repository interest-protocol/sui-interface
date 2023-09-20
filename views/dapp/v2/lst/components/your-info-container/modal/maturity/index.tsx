import {
  Box,
  Button,
  darkTheme,
  lightTheme,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { InfoSVG } from '@/svg';
import { capitalize } from '@/utils';

import HeaderModal from '../header-modal';
import { MaturityModalProps } from '../modal.type';
import MaturityModalBody from './maturity-body';

const MaturityModal: FC<MaturityModalProps> = ({
  handleClose,
  handleConfirm,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  return (
    <Box
      width={['90vw', '90vw', '90vw', '28rem']}
      height={['90vh', '90vh', '90vh', 'auto']}
      borderRadius="1rem"
      bg={dark ? 'black' : 'white'}
      display="flex"
      flexDirection="column"
    >
      <Box bg="surface.dim" borderRadius="1rem 1rem 0 0">
        <HeaderModal
          title="Select Maturity date"
          handleClose={handleClose}
          withoutBack
        />
      </Box>
      <Box px="xl" pb="0.875rem" borderRadius="0 0 1rem 1rem" bg="surface.dim">
        <Box
          p="0.75rem"
          borderRadius="0.25rem"
          display="flex"
          bg="#A5F3FC"
          color="#155E75"
          mb="xl"
        >
          <Box width="1.25rem" height="1.25rem" mr="0.75rem">
            <InfoSVG maxWidth="1.25rem" maxHeight="1.25rem" width="100%" />
          </Box>
          <Typography
            variant="extraSmall"
            fontSize="0.75rem"
            textTransform="capitalize"
          >
            {t('lst.modal.validator.info')}
          </Typography>
        </Box>
      </Box>
      <MaturityModalBody />
      <Box
        px="xl"
        py="0.75rem"
        display="flex"
        justifyContent="space-between"
        bg="surface.dim"
        borderRadius="0 0 1rem 1rem"
      >
        <Button
          variant="text"
          p="0 !important"
          fontSize="0.688rem"
          textDecoration="underline"
          color="onSurface"
        >
          {capitalize(t('lst.modal.validator.clearButton'))}
        </Button>
        <Button
          variant="filled"
          bg={(dark ? lightTheme : darkTheme).colors.primary}
          color="white"
          p="0.654rem 1.5rem !important"
          onClick={() => {
            handleConfirm();
            handleClose();
          }}
        >
          Confirm
        </Button>
      </Box>
    </Box>
  );
};

export default MaturityModal;
