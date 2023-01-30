import { useTranslations } from 'next-intl';
import { ChangeEvent, FC } from 'react';
import { useForm } from 'react-hook-form';

import { Box, Button, Modal, Typography } from '@/elements';
import { TimesSVG } from '@/svg';
import { parseInputEventToNumberString } from '@/utils';

import AutoFetch from './auto-fetch';
import Field from './field';
import { ISwapSettingsForm, SettingsDropdownProps } from './settings.types';

const SettingsDropdown: FC<SettingsDropdownProps> = ({
  isOpen,
  onClose,
  localSettings,
  setLocalSettings,
}) => {
  const t = useTranslations();

  const { register, setValue, getValues, control } = useForm<ISwapSettingsForm>(
    {
      defaultValues: {
        slippage: localSettings.slippage,
        deadline: localSettings.deadline,
        autoFetch: localSettings.autoFetch,
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
      <Box
        pb="L"
        zIndex={1}
        color="text"
        bg="foreground"
        minWidth="20rem"
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
            bg="transparent"
            variant="secondary"
            alignItems="center"
            justifyContent="center"
            onClick={onRequestClose}
            hover={{
              bg: 'background',
            }}
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
            setRegister={() =>
              register('slippage', {
                onChange: (v: ChangeEvent<HTMLInputElement>) => {
                  const slippage = parseInputEventToNumberString(v);
                  const safeSlippage = +slippage >= 30 ? '30' : slippage;
                  setValue('slippage', safeSlippage);
                },
              })
            }
            prefix={
              <Button
                px="M"
                fontSize="S"
                height="100%"
                variant="secondary"
                bg="accent"
                hover={{ bg: 'accent' }}
                active={{ bg: 'accentActive' }}
                onClick={() => {
                  setValue('slippage', '0.1');
                }}
              >
                Auto
              </Button>
            }
            suffix={<Typography variant="normal">%</Typography>}
          />
          <Field
            type="number"
            placeholder="5"
            max="30"
            setRegister={() =>
              register('deadline', {
                onChange: (v: ChangeEvent<HTMLInputElement>) => {
                  const deadline = isNaN(+v.target.value) ? 0 : +v.target.value;
                  setValue('deadline', deadline);
                },
              })
            }
            label={t('dexSwap.deadlineLabel')}
            suffix={
              <Typography variant="normal" textTransform="lowercase">
                {t('common.minute', { count: localSettings.deadline })}
              </Typography>
            }
          />
        </Box>
        <Box p="S">
          <Typography
            m="M"
            pt="M"
            pb="L"
            fontSize="S"
            variant="normal"
            color="textSecondary"
            textTransform="uppercase"
          >
            {t('dexSwap.settingsPanelTitle')}
          </Typography>
          <AutoFetch
            control={control}
            setter={(value: boolean) => setValue('autoFetch', value)}
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default SettingsDropdown;
