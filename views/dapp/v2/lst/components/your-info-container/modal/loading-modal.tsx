import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import HeaderModal from './header-modal';
import { LSTFormFailModalProps } from './modal.types';

const LSTFormLoadingModal: FC<Omit<LSTFormFailModalProps, 'isStake'>> = ({
  message,
  handleClose,
}) => {
  const t = useTranslations();

  return (
    <Box
      width={['90vw', '90vw', '90vw', '27rem']}
      borderRadius="1rem"
      bg="surface.container"
      display="flex"
      flexDirection="column"
      pb="l"
    >
      <HeaderModal
        title={t('lst.modal.preview.title')}
        handleClose={handleClose}
      />
      <Box
        px="l"
        pt="l"
        gap="l"
        display="flex"
        minHeight="12rem"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <ProgressIndicator variant="loading" />
        <Typography variant="medium" color="onSurface">
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

export default LSTFormLoadingModal;
