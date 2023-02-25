import { useTheme } from '@emotion/react';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useWatch } from 'react-hook-form';

import { Box, Button, Modal, Typography } from '@/elements';
import { TimesSVG } from '@/svg';
import { parseInputEventToNumberString } from '@/utils';

import Field from './field';
import {
  ISwapSettingsForm,
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
      height="100%"
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
      hover={{
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
  onRequestClose,
  register,
  setValue,
  getValues,
  control,
}) => {
  const [isAuto, setAuto] = useState(
    getValues('slippage') == SLIPPAGE_AUTO_VALUE
  );
  const t = useTranslations();
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
      <Box display="flex" justifyContent="space-between" p="S">
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
          hasBorder={!isAuto}
          setRegister={() =>
            register('slippage', {
              onChange: (v: ChangeEvent<HTMLInputElement>) => {
                const slippage = parseInputEventToNumberString(v);
                const safeSlippage = +slippage >= 30 ? '30' : slippage;
                setValue('slippage', safeSlippage);
                setAuto(false);
              },
            })
          }
          prefix={
            <AutoButton
              setAuto={setAuto}
              setValue={setValue}
              control={control}
            />
          }
          suffix={<Typography variant="normal">%</Typography>}
        />
      </Box>
    </Box>
  );
};

const SettingsDropdown: FC<SettingsDropdownProps> = ({
  isOpen,
  onClose,
  localSettings,
  setLocalSettings,
}) => {
  const { register, setValue, getValues, control } = useForm<ISwapSettingsForm>(
    {
      defaultValues: {
        slippage: localSettings.slippage,
      },
    }
  );

  const onRequestClose = () => {
    setLocalSettings(getValues());
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
        setValue={setValue}
        getValues={getValues}
        register={register}
        onRequestClose={onRequestClose}
        control={control}
      />
    </Modal>
  );
};

export default SettingsDropdown;
