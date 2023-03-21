import { useTheme } from '@emotion/react';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FC } from 'react';

import { Box, Input, Typography } from '@/elements';
import { parseInputEventToNumberString } from '@/utils';

import { InputBalanceProps } from './input-balance.types';
import MaxButton from './max-button';

const InputBalance: FC<InputBalanceProps> = ({
  max,
  name,
  Prefix,
  Suffix,
  isLarge,
  balance,
  disabled,
  register,
  setValue,
  customFunction,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as { dark: boolean };
  const onFocus = (v: ChangeEvent<HTMLInputElement>) => {
    const value = v.target.value;

    value === '0.0' && setValue?.(name, '');
  };

  return (
    <Box
      display="flex"
      position="relative"
      alignItems="flex-end"
      flexDirection="column-reverse"
    >
      <Input
        type="text"
        max={balance}
        onFocus={onFocus}
        placeholder="0.0"
        disabled={disabled || false}
        fontSize={isLarge ? 'L' : 'M'}
        opacity={disabled == undefined ? 1 : disabled ? 0.7 : 1}
        {...register(name, {
          onChange: (v: ChangeEvent<HTMLInputElement>) => {
            setValue?.(
              name,
              parseInputEventToNumberString(v, balance ? +balance : undefined)
            );
            customFunction && customFunction(name);
          },
        })}
        shieldProps={{
          my: 'M',
          width: '100%',
          overflow: 'hidden',
          border: '1px solid',
          p: isLarge ? 'L' : 'S',
          pl: isLarge ? 'XL' : 'M',
          borderColor: 'transparent',
          borderRadius: isLarge ? '5rem' : '2rem',
          nHover: !disabled && {
            borderColor: 'accentActive',
          },
          bg: disabled
            ? dark
              ? 'background'
              : 'bottomBackground'
            : dark
            ? 'bottomBackground'
            : 'background',
        }}
        Prefix={Prefix}
        Bottom={
          max && (
            <MaxButton
              name={name}
              max={balance}
              disabled={disabled}
              setValue={setValue}
              customFunction={customFunction}
            />
          )
        }
        Suffix={Suffix}
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
