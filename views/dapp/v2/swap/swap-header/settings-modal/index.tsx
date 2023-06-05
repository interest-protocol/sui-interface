import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TimesSVG } from '@/svg';
import { capitalize } from '@/utils';

import AutomatedPrice from './automated-price';
import { SettingsModalProps } from './settings-modal.types';
import SlippageTolerance from './slippage-tolerance';
import TransactionDeadline from './transaction-deadline';

const SettingsModal: FC<SettingsModalProps> = ({
  closeModal,
  formSettings,
}) => {
  const t = useTranslations();

  return (
    <Box
      px="xl"
      width="100%"
      bg="#1F1F23"
      display="flex"
      color="#C7C6CA"
      maxHeight="90vh"
      borderRadius="1rem"
      maxWidth="24.375rem"
      flexDirection="column"
      boxShadow="0 0 5px #3334"
    >
      <Box
        py="m"
        display="grid"
        alignItems="center"
        gridTemplateColumns="2rem auto 2rem"
      >
        <Typography
          gridColumn="2"
          variant="medium"
          textAlign="center"
          textTransform="capitalize"
        >
          {t('swap.modal.settings.title')}
        </Typography>
        <Button variant="icon" onClick={closeModal}>
          <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
      </Box>
      <Box overflowY="auto">
        <Typography variant="small" my="m">
          {capitalize(t('swap.modal.settings.subtitles.transaction'))}
        </Typography>
        <Box
          p="xl"
          mb="xl"
          bg="#0D0E11"
          display="flex"
          borderRadius="m"
          alignItems="center"
          flexDirection="column"
        >
          <SlippageTolerance
            register={formSettings.register}
            setValue={formSettings.setValue}
          />
          <TransactionDeadline register={formSettings.register} />
        </Box>
        <Typography variant="small" my="m">
          {capitalize(t('swap.modal.settings.subtitles.panel'))}
        </Typography>
        <Box
          p="xl"
          mb="4xl"
          bg="#0D0E11"
          display="flex"
          borderRadius="m"
          alignItems="center"
          flexDirection="column"
        >
          <AutomatedPrice
            setValue={formSettings.setValue}
            control={formSettings.control}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsModal;
