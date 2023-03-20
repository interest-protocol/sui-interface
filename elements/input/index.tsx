import stylin from '@stylin.js/react';
import { forwardRef } from 'react';

import Box from '../box';
import { InputElementProps, InputProps } from './input.types';

const Input = forwardRef(
  (
    {
      Prefix,
      Suffix,
      Bottom,
      shieldProps,
      onClickPrefix,
      onClickSuffix,
      ...props
    }: InputProps,
    ref
  ) => {
    const InputField = stylin<InputElementProps>('input')({
      width: '100%',
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      overflow: 'hidden',
      '&:-internal-autofill-selected': {
        background: 'transparent',
      },
      '&:focus-visible': {
        outline: 'none',
      },
    });

    return (
      <Box display="flex" overflow="hidden" {...shieldProps}>
        {Prefix && (
          <Box
            display="flex"
            alignItems="center"
            onClick={onClickPrefix}
            {...(onClickPrefix && { cursor: 'pointer' })}
          >
            {Prefix}
          </Box>
        )}
        <Box
          flex="1"
          {...(!!Bottom && {
            display: 'flex',
            flexDirection: 'column',
          })}
        >
          <InputField
            px="L"
            color="text"
            ref={ref}
            {...props}
            {...(!!Bottom && {
              py: 'M',
            })}
          />
          {Bottom}
        </Box>
        {Suffix && (
          <Box
            display="flex"
            minWidth="3rem"
            alignItems="center"
            justifyContent="center"
            onClick={onClickSuffix}
            {...(onClickSuffix && { cursor: 'pointer' })}
          >
            {Suffix}
          </Box>
        )}
      </Box>
    );
  }
);

Input.displayName = 'Input';

export default Input;
