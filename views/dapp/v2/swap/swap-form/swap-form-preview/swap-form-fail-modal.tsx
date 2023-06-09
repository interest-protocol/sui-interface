import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TimesSVG } from '@/components/svg/v2';

import { SwapFormFailModalProps } from './swap-form-preview.types';

const SwapFormFailModal: FC<SwapFormFailModalProps> = ({
  message,
  handleClose,
}) => {
  const t = useTranslations();

  return (
    <Box
      px="xl"
      width="100%"
      display="flex"
      maxHeight="90vh"
      color="onSurface"
      overflow="hidden"
      borderRadius="1rem"
      alignItems="stretch"
      maxWidth="24.375rem"
      flexDirection="column"
      bg="surface.container"
      boxShadow="0 0 5px #3334"
    >
      <Box py="m" display="flex" alignItems="center" justifyContent="center">
        <Typography variant="medium">{t('swap.metadata.title')}</Typography>
      </Box>
      <Box
        pt="4xl"
        pb="xl"
        mb="xl"
        display="flex"
        borderRadius="m"
        alignItems="center"
        flexDirection="column"
        bg="surface.containerLowest"
      >
        <Box my="xl" color="error">
          <TimesSVG filled width="100%" maxWidth="3rem" maxHeight="3rem" />
        </Box>
        <Typography my="xl" width="16rem" variant="medium" textAlign="center">
          {t('swap.modal.error.title')}
        </Typography>
      </Box>
      <Typography variant="extraSmall" textAlign="center">
        {message ?? t('swap.modal.error.description')}
      </Typography>
      <Button
        mt="xl"
        mb="2xl"
        size="small"
        width="100%"
        variant="filled"
        onClick={handleClose}
        boxSizing="border-box"
        justifyContent="center"
      >
        {t('swap.modal.error.button')}
      </Button>
    </Box>
  );
};

export default SwapFormFailModal;
