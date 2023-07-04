import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TimesSVG } from '@/components/svg/v2';

import { FaucetFailModalProps } from '../faucet.types';

const FaucetMintFailModal: FC<FaucetFailModalProps> = ({
  message,
  closeModal,
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
      borderRadius="m"
      alignItems="stretch"
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
          {message}
        </Typography>
      </Box>
      <Button
        mt="x"
        mb="2xl"
        size="small"
        width="100%"
        variant="filled"
        onClick={closeModal}
        boxSizing="border-box"
        justifyContent="center"
      >
        {t('faucet.modal.fail.button')}
      </Button>
    </Box>
  );
};

export default FaucetMintFailModal;
