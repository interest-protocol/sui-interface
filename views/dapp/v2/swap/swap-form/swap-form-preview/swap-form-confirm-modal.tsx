import {
  Box,
  Button,
  ProgressIndicator,
  Typography,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CheckmarkSVG } from '@/components/svg/v2';

import { SwapFormConfirmModalProps } from './swap-form-preview.types';

const SwapFormConfirmModal: FC<SwapFormConfirmModalProps> = ({
  txLink,
  loading,
  handleClose,
}) => {
  const t = useTranslations();
  if (loading)
    return (
      <Box
        px="xl"
        bg="#1F1F23"
        width="100%"
        display="flex"
        color="#C7C6CA"
        maxHeight="90vh"
        overflow="hidden"
        borderRadius="1rem"
        maxWidth="24.375rem"
        flexDirection="column"
        boxShadow="0 0 5px #3334"
      >
        <Box py="m" display="flex" alignItems="center" justifyContent="center">
          <Typography variant="medium">{t('swap.metadata.title')}</Typography>
        </Box>
        <Box
          pt="4xl"
          pb="xl"
          mb="xl"
          bg="#0D0E11"
          display="flex"
          borderRadius="m"
          alignItems="center"
          flexDirection="column"
        >
          <ProgressIndicator variant="loading" />
          <Typography
            mt="2xl"
            width="16rem"
            variant="medium"
            textAlign="center"
          >
            {t('swap.swapModalPreview.swappingToken')}
          </Typography>
        </Box>
      </Box>
    );

  return (
    <Box
      px="xl"
      width="100%"
      bg="#1F1F23"
      display="flex"
      color="#C7C6CA"
      maxHeight="90vh"
      overflow="hidden"
      borderRadius="1rem"
      maxWidth="24.375rem"
      flexDirection="column"
      boxShadow="0 0 5px #3334"
    >
      <Box py="m" display="flex" alignItems="center" justifyContent="center">
        <Typography variant="medium">{t('swap.metadata.title')}</Typography>
      </Box>
      <Box
        pt="4xl"
        pb="xl"
        mb="xl"
        bg="#0D0E11"
        display="flex"
        borderRadius="m"
        alignItems="center"
        flexDirection="column"
      >
        <Box my="xl">
          <CheckmarkSVG filled width="100%" maxWidth="3rem" maxHeight="3rem" />
        </Box>
        <Typography my="xl" width="16rem" variant="medium" textAlign="center">
          {t('swap.swapModalPreview.swapFormConfirmModal.tokenSwapped')}
        </Typography>
      </Box>
      <Typography variant="extraSmall">
        {t('swap.swapModalPreview.swapFormConfirmModal.explorerMessage')}
      </Typography>
      <a href={txLink} target="_blank" rel="noreferrer" onClick={handleClose}>
        <Button variant="filled" justifyContent="center" size="small" mb="2xl">
          {t('swap.swapModalPreview.swapFormConfirmModal.seeOnExplorer')}
        </Button>
      </a>
    </Box>
  );
};

export default SwapFormConfirmModal;
