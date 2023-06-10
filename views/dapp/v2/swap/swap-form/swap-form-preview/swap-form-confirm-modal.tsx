import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CheckmarkSVG } from '@/components/svg/v2';

import { SwapFormConfirmModalProps } from './swap-form-preview.types';

const SwapFormConfirmModal: FC<SwapFormConfirmModalProps> = ({
  txLink,
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
        <Box my="xl" color="success">
          <CheckmarkSVG filled width="100%" maxWidth="3rem" maxHeight="3rem" />
        </Box>
        <Typography my="xl" width="16rem" variant="medium" textAlign="center">
          {t('swap.modal.confirm.title')}
        </Typography>
      </Box>
      <Typography variant="extraSmall">
        {t('swap.modal.confirm.description')}
      </Typography>
      <a href={txLink} target="_blank" rel="noreferrer" onClick={handleClose}>
        <Button
          mt="xl"
          mb="2xl"
          size="small"
          width="100%"
          variant="filled"
          boxSizing="border-box"
          justifyContent="center"
        >
          {t('swap.modal.confirm.button')}
        </Button>
      </a>
    </Box>
  );
};

export default SwapFormConfirmModal;
