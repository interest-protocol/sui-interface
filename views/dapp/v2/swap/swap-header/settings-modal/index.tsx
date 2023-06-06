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
      display="flex"
      maxHeight="90vh"
      color="onSurface"
      borderRadius="1rem"
      maxWidth="24.375rem"
      flexDirection="column"
      bg="surface.container"
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
          display="flex"
          borderRadius="m"
          alignItems="center"
          flexDirection="column"
          bg="surface.containerLowest"
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
          display="flex"
          borderRadius="m"
          alignItems="center"
          flexDirection="column"
          bg="surface.containerLowest"
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
