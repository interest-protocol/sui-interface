import stylin, { variant } from '@stylin.js/react';
import { forwardRef, PropsWithChildren } from 'react';

import { ButtonElementProps, ButtonProps } from './button.types';

const Button = forwardRef((props: PropsWithChildren<ButtonProps>, ref) => {
  const ButtonElement = stylin<ButtonElementProps>('button')(
    variant({ scale: 'buttons', property: 'variant' })
  );

  return <ButtonElement {...props} ref={ref} />;
});

Button.displayName = 'Button';

export default Button;
