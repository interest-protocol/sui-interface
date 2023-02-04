import { forwardRef, RefAttributes } from 'react';

import stylin, { variant } from '@/stylin';

import { ButtonProps } from './button.types';

const Button = forwardRef((props: ButtonProps, ref) => {
  const ButtonElement = stylin<ButtonProps & RefAttributes<unknown>>('button')(
    variant({ scale: 'buttons', property: 'variant' })
  );

  return <ButtonElement {...props} ref={ref} />;
});

Button.displayName = 'Button';

export default Button;
