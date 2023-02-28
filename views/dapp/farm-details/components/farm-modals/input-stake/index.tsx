import { useTheme } from '@emotion/react';
import { ChangeEvent, FC } from 'react';

import { Box, Button, Input, Typography } from '@/elements';
import { numberToString, parseInputEventToNumberString } from '@/utils';

import { InputStakeProps } from './input-stake.types';

const InputStake: FC<InputStakeProps> = ({
  label,
  amount,
  register,
  setValue,
  currencyPrefix,
}) => {
  const { dark } = useTheme() as { dark: boolean };

  return (
    <Box mb="L">
      <Typography
        as="label"
        fontSize="S"
        variant="normal"
        display="inline-block"
      >
        {label}:
      </Typography>
      <Input
        type="string"
        {...register('amount', {
          onChange: (v: ChangeEvent<HTMLInputElement>) => {
            v.stopPropagation();
            setValue?.(
              'amount',
              parseInputEventToNumberString(v, amount ? amount : undefined)
            );
          },
        })}
        shieldProps={{
          p: 'S',
          my: 'M',
          height: '3rem',
          bg: 'background',
          borderRadius: 'M',
          overflow: 'visible',
          border: '1px solid',
          borderColor: 'transparent',
          hover: {
            borderColor: 'accentBackground',
          },
        }}
        Prefix={
          <>
            <Button
              p="NONE"
              fontSize="S"
              width="2.4rem"
              height="2.4rem"
              variant="primary"
              bg="accentActive"
              hover={{ bg: 'accent' }}
              active={{ bg: 'accentActive' }}
              color={dark ? 'text' : 'textInverted'}
              onClick={() => {
                setValue('amount', numberToString(amount));
              }}
            >
              max
            </Button>
            <Box
              px="L"
              display="flex"
              alignItems="center"
              borderRight="1px solid"
              borderColor="bottomBackground"
            >
              {currencyPrefix}
            </Box>
          </>
        }
      />
    </Box>
  );
};

export default InputStake;
