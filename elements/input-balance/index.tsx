import { useTheme } from '@emotion/react';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FC } from 'react';

import { Box, Button, Input, Typography } from '@/elements';
import { parseInputEventToNumberString } from '@/utils';

import { ButtonMaxProps, InputBalanceProps } from './input-balance.types';

const ButtonMax: FC<ButtonMaxProps> = ({
  max,
  disabled,
  setValue,
  customFunction,
  name,
}) => {
  const { dark } = useTheme() as { dark: boolean };

  return max ? (
    <Button
      p="NONE"
      fontSize="S"
      width="2.4rem"
      height="2.4rem"
      variant="primary"
      bg="accentActive"
      disabled={disabled || false}
      color={dark ? 'text' : 'textInverted'}
      hover={{ bg: 'accent' }}
      active={{ bg: 'accentActive' }}
      onClick={() => {
        if (disabled || !setValue) return;

        setValue?.(name, max);

        customFunction && customFunction(name);
      }}
    >
      max
    </Button>
  ) : (
    <></>
  );
};

const InputBalance: FC<InputBalanceProps> = ({
  name,
  balance,
  max,
  disabled,
  register,
  setValue,
  Prefix,
  Suffix,
  buttonMaxPosition,
  isLarge,
  customFunction,
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
        disabled={disabled || false}
        {...register(name, {
          onChange: (v: ChangeEvent<HTMLInputElement>) => {
            setValue?.(
              name,
              parseInputEventToNumberString(v, max ? +max : undefined)
            );
            customFunction && customFunction(name);
          },
        })}
        shieldProps={{
          p: isLarge ? 'L' : 'S',
          my: 'M',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '6.9rem 1fr auto',
          bg: disabled
            ? dark
              ? 'background'
              : 'bottomBackground'
            : dark
            ? 'bottomBackground'
            : 'background',
          overflow: 'visible',
          border: '1px solid',
          borderRadius: isLarge ? '5rem' : '2rem',
          borderColor: 'transparent',
          opacity: disabled == undefined ? 1 : disabled ? 0.7 : 1,
          hover: !disabled && {
            borderColor: 'accentActive',
          },
        }}
        Prefix={
          <>
            {buttonMaxPosition == 'left' && (
              <ButtonMax
                name={name}
                disabled={disabled}
                setValue={setValue}
                customFunction={customFunction}
                max={max}
              />
            )}
            {Prefix && Prefix}
          </>
        }
        Suffix={
          <>
            {buttonMaxPosition == 'right' && (
              <ButtonMax
                name={name}
                disabled={disabled}
                setValue={setValue}
                customFunction={customFunction}
                max={max}
              />
            )}
            {Suffix && Suffix}
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
