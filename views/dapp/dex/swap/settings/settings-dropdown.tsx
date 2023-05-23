import { useTheme } from '@emotion/react';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FC } from 'react';
import { useWatch } from 'react-hook-form';

import { Switch } from '@/components';
import { Box, Button, Modal, Typography } from '@/elements';
import { TimesSVG } from '@/svg';
import { parseInputEventToNumberString } from '@/utils';

import Field from './field';
import {
  ModalSettingsBody,
  SettingsAutoButton,
  SettingsDropdownProps,
} from './settings.types';

const SLIPPAGE_AUTO_VALUE = '0.1';

const AutoButton: FC<SettingsAutoButton> = ({ control, setValue, setAuto }) => {
  const { dark } = useTheme() as any;
  const currentSlippage = useWatch({ control, name: 'slippage' });

  return (
    <Button
      px="M"
      fontSize="S"
      width="3rem"
      height="3rem"
      lineHeight="0"
      variant="primary"
      fontWeight="normal"
      bg={SLIPPAGE_AUTO_VALUE != currentSlippage ? 'transparent' : 'accent'}
      border="1px solid"
      color={
        SLIPPAGE_AUTO_VALUE != currentSlippage
          ? dark
            ? 'text'
            : 'accentActive'
          : dark
          ? 'text'
          : 'textInverted'
      }
      borderColor={
        SLIPPAGE_AUTO_VALUE != currentSlippage ? 'accentActive' : 'transparent'
      }
      nHover={{
        bg: SLIPPAGE_AUTO_VALUE != currentSlippage ? 'accentActive' : 'accent',
        color: dark ? 'text' : 'textInverted',
      }}
      onClick={() => {
        setValue('slippage', SLIPPAGE_AUTO_VALUE);
        setAuto(true);
      }}
    >
      Auto
    </Button>
  );
};

const ModalBody: FC<ModalSettingsBody> = ({
  control,
  register,
  setValue,
  getValues,
  onRequestClose,
  autoButtonState,
}) => {
  const t = useTranslations();
  const autoFetch = useWatch({ control, name: 'autoFetch' });

  return (
    <Box
      pb="L"
      zIndex={1}
      color="text"
      bg="foreground"
      minWidth="21rem"
      borderRadius="M"
      boxShadow="0 0 0.5rem #0006"
      width={['80%', '80%', '80%', 'unset']}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography
          m="M"
          pt="S"
          fontSize="S"
          variant="normal"
          color="textSecondary"
          textTransform="uppercase"
        >
          {t('dexSwap.settingsTransactionTitle')}
        </Typography>
        <Button
          p="S"
          display="flex"
          variant="tertiary"
          alignItems="center"
          justifyContent="center"
          onClick={onRequestClose}
        >
          <TimesSVG width="1.5rem" maxHeight="1.5rem" maxWidth="1.5rem" />
        </Button>
      </Box>
      <Box px="L">
        <Field
          max="30"
          type="text"
          placeholder="0.5"
          label={t('dexSwap.toleranceLabel')}
          hasBorder={!autoButtonState.isAuto}
          setRegister={() =>
            register('slippage', {
              onChange: (v: ChangeEvent<HTMLInputElement>) => {
                const slippage = parseInputEventToNumberString(v);
                const safeSlippage = +slippage >= 30 ? '30' : slippage;
                setValue('slippage', safeSlippage);
                autoButtonState.setAuto(false);
              },
            })
          }
          prefix={
            <AutoButton
              control={control}
              setValue={setValue}
              setAuto={autoButtonState.setAuto}
            />
          }
          suffix={<Typography variant="normal">%</Typography>}
        />
        <Field
          max="30"
          type="number"
          placeholder="5"
          setRegister={() =>
            register('deadline', {
              onChange: (v: ChangeEvent<HTMLInputElement>) => {
                const deadline = isNaN(+v.target.value) ? 0 : +v.target.value;
                setValue('deadline', deadline.toString());
              },
            })
          }
          label={t('dexSwap.deadlineLabel')}
          suffix={
            <Typography variant="normal" textTransform="lowercase" mr="L">
              {t('common.minute', {
                count: getValues('deadline'),
              })}
            </Typography>
          }
        />
      </Box>
      <Box p="S" mx="M">
        <Typography
          my="M"
          pt="S"
          fontSize="S"
          variant="normal"
          color="textSecondary"
          textTransform="uppercase"
        >
          {t('dexSwap.settingsPanelTitle')}
        </Typography>
        <Typography variant="normal" mt="L" mb="M" fontSize="0.9rem">
          {t('dexSwap.priceLabel')}
        </Typography>
        <Switch
          defaultValue={autoFetch ? 'auto' : 'manual'}
          options={[
            { value: 'manual', onSelect: () => setValue('autoFetch', false) },
            { value: 'auto', onSelect: () => setValue('autoFetch', true) },
          ]}
        />
      </Box>
    </Box>
  );
};

const SettingsDropdown: FC<SettingsDropdownProps> = ({
  isOpen,
  onClose,
  setLocalSettings,
  formSettingsDropdown,
  autoButtonState,
}) => {
  const onRequestClose = () => {
    setLocalSettings(formSettingsDropdown.getValues());
    onClose();
  };

  return (
    <Modal
      background="#0003"
      modalProps={{
        isOpen,
        onRequestClose,
        shouldCloseOnEsc: true,
        shouldCloseOnOverlayClick: true,
      }}
    >
      <ModalBody
        getValues={formSettingsDropdown.getValues}
        setValue={formSettingsDropdown.setValue}
        register={formSettingsDropdown.register}
        onRequestClose={onRequestClose}
        control={formSettingsDropdown.control}
        autoButtonState={autoButtonState}
      />
    </Modal>
  );
};

export default SettingsDropdown;
