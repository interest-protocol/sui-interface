import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { CheckmarkSVG } from '@/components/svg/v2';
import { capitalize } from '@/utils';

import { FaucetResultModalProps } from '../faucet.types';

const FaucetMintConfirmModal: FC<FaucetResultModalProps> = ({
  txLink,
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
        <Box my="xl" color="success">
          <CheckmarkSVG filled width="100%" maxWidth="3rem" maxHeight="3rem" />
        </Box>
        <Typography my="xl" width="16rem" variant="medium" textAlign="center">
          {t('faucet.modal.confirm.content')}
        </Typography>
      </Box>
      <Typography variant="extraSmall">
        {t('faucet.modal.confirm.additionalText')}
      </Typography>
      <Button
        mt="xl"
        mb="xl"
        size="small"
        width="100%"
        variant="filled"
        boxSizing="border-box"
        justifyContent="center"
        onClick={closeModal}
      >
        {capitalize(t('faucet.modal.confirm.button'))}
      </Button>
      <a target="__black" rel="noreferrer nofollow" href={txLink}>
        <Button
          mb="2xl"
          size="small"
          width="100%"
          variant="outline"
          boxSizing="border-box"
          justifyContent="center"
          onClick={closeModal}
        >
          {capitalize(t('common.explorer'))}
        </Button>
      </a>
    </Box>
  );
};

export default FaucetMintConfirmModal;
