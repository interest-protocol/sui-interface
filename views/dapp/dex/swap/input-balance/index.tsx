import { useTheme } from '@emotion/react';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FC } from 'react';

import { Box, Button, Input, Typography } from '@/elements';
import { parseInputEventToNumberString } from '@/utils';

import { InputBalanceProps } from './input-balance.types';

const InputBalance: FC<InputBalanceProps> = ({
  max,
  name,
  balance,
  register,
  setValue,
  disabled,
  currencySelector,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as { dark: boolean };

  const onFocus = (v: ChangeEvent<HTMLInputElement>) => {
    const value = v.target.value;

    +value === 0 && setValue?.(`${name}.value`, '');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <Box
        py="S"
        px="M"
        mb="-1rem"
        bg="accentSecondary"
        borderRadius="M"
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
      <Input
        min="0"
        fontSize="L"
        type="string"
        placeholder="0.0"
        onFocus={onFocus}
        disabled={!!disabled}
        {...register(`${name}.value`, {
          onChange: (v: ChangeEvent<HTMLInputElement>) =>
            setValue?.(
              `${name}.value`,
              parseInputEventToNumberString(v, max ? +max : undefined)
            ),
        })}
        shieldProps={{
          px: 'S',
          py: 'L',
          my: 'M',
          width: '100%',
          display: 'grid',
          bg: 'background',
          borderRadius: 'M',
          overflow: 'visible',
          border: '1px solid',
          borderColor: 'transparent',
          gridTemplateColumns: '6.9rem 1fr auto',
          hover: {
            borderColor: 'accentBackground',
          },
        }}
        Prefix={currencySelector}
        Suffix={
          !!max && (
            <Button
              px="M"
              fontSize="S"
              minWidth="2.7rem"
              height="2.7rem"
              variant="secondary"
              bg="accentSecondary"
              color={dark ? 'text' : 'textInverted'}
              hover={{ bg: 'accent' }}
              active={{ bg: 'accentActive' }}
              onClick={() => setValue?.(`${name}.value`, max)}
            >
              max
            </Button>
          )
        }
      />
    </Box>
  );
};

export default InputBalance;
