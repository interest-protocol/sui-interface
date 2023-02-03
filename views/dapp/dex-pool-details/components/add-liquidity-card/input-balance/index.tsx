import { useTheme } from '@emotion/react';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FC } from 'react';

import { Box, Button, Input, Typography } from '@/elements';
import { parseInputEventToNumberString } from '@/utils';

import { InputBalanceProps } from './input-balance.types';

const InputBalance: FC<InputBalanceProps> = ({
  name,
  balance,
  disabled,
  register,
  setValue,
  currencyPrefix,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as { dark: boolean };
  const onFocus = (v: ChangeEvent<HTMLInputElement>) => {
    const value = v.target.value;

    value === '0.0' && setValue?.(name, '');
  };

  return (
    <Box display="flex" flexDirection="column-reverse" alignItems="flex-end">
      <Input
        max={balance}
        type="text"
        onFocus={onFocus}
        placeholder="0.0"
        disabled={disabled}
        {...register(name, {
          onChange: (v: ChangeEvent<HTMLInputElement>) => {
            setValue?.(
              name,
              parseInputEventToNumberString(v, balance ? +balance : undefined)
            );
            setValue('locked', false);
          },
        })}
        shieldProps={{
          p: 'S',
          my: 'M',
          width: '100%',
          height: '3rem',
          bg: 'background',
          overflow: 'visible',
          border: '1px solid',
          borderRadius: '2rem',
          borderColor: 'transparent',
          opacity: disabled ? 0.7 : 1,
          hover: {
            borderColor: 'accentActive',
          },
        }}
        Prefix={
          <>
            <Button
              px="M"
              fontSize="S"
              height="100%"
              variant="primary"
              disabled={disabled}
              onClick={() => {
                if (disabled || !setValue) return;
                setValue(name, balance);
                setValue('locked', false);
              }}
            >
              max
            </Button>
            <Box
              px="L"
              width="4.5rem"
              display="flex"
              maxHeight="1rem"
              alignItems="center"
              borderRight="1px solid"
              borderColor="bottomBackground"
            >
              {currencyPrefix}
            </Box>
          </>
        }
      />
      <Box
        py="S"
        px="M"
        mb="-1rem"
        borderRadius="L"
        bg="accentActive"
        position="relative"
        color={dark ? 'text' : 'textInverted'}
      >
        <Typography fontSize="S" variant="normal" textTransform="capitalize">
          {t('common.balance')}:{' '}
          <Typography fontSize="S" variant="normal" fontWeight="bold" as="span">
            {balance}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default InputBalance;
