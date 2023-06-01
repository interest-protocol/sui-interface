import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { useLocalStorage } from '@/hooks';
import { TimesSVG } from '@/svg';
import { capitalize } from '@/utils';

import AutomatedPrice from './automated-price';
import { SwapSettingsForm } from './settings-modal.types';
import SlippageTolerance from './slippage-tolerance';
import TransactionDeadline from './transaction-deadline';

const SettingsModal: FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const t = useTranslations();
  const [localSwapSettings, setLocalSwapSettings] =
    useLocalStorage<SwapSettingsForm>('sui-interest-swap-settings', {
      slippage: 0.1,
      deadline: 30,
      autoFetch: true,
    });

  const { register, setValue, control, handleSubmit } =
    useForm<SwapSettingsForm>({
      defaultValues: localSwapSettings,
    });

  const onSubmit = (data: SwapSettingsForm) => {
    setLocalSwapSettings(data);
    closeModal();
  };

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
        <SlippageTolerance register={register} setValue={setValue} />
        <TransactionDeadline register={register} />
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
        <AutomatedPrice setValue={setValue} control={control} />
      </Box>
      <Box display="grid" gridTemplateColumns="1fr 1fr">
        <Button
          mb="2xl"
          size="small"
          variant="text"
          onClick={closeModal}
          justifyContent="center"
        >
          <Typography variant="small" textTransform="capitalize">
            {t('common.v2.cancel')}
          </Typography>
        </Button>
        <Button
          mb="2xl"
          size="small"
          variant="filled"
          fontSize="0.9rem"
          justifyContent="center"
          onClick={handleSubmit(onSubmit)}
        >
          <Typography
            variant="small"
            textAlign="center"
            textTransform="capitalize"
          >
            {t('common.v2.confirmChanges')}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsModal;
