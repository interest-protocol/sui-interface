import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const FaucetMintLoadingModal: FC = () => {
  const t = useTranslations();

  return (
    <Box
      px="xl"
      pb="xl"
      width="100%"
      display="flex"
      maxHeight="90vh"
      color="onSurface"
      overflow="hidden"
      borderRadius="m"
      maxWidth="24.375rem"
      flexDirection="column"
      bg="surface.container"
      boxShadow="0 0 5px #3334"
    >
      <Box py="m" display="flex" alignItems="center" justifyContent="center">
        <Typography variant="medium">{t('faucet.metadata.title')}</Typography>
      </Box>
      <Box
        pt="4xl"
        pb="4xl"
        mb="s"
        display="flex"
        borderRadius="m"
        alignItems="center"
        flexDirection="column"
        bg="surface.containerLowest"
      >
        <ProgressIndicator variant="loading" />
        <Typography mt="2xl" variant="medium" textAlign="center">
          {t('faucet.modal.loading.content')}
        </Typography>
      </Box>
      <Typography variant="extraSmall" color="onSurface">
        {t('faucet.modal.loading.additionalText')}
      </Typography>
    </Box>
  );
};

export default FaucetMintLoadingModal;
