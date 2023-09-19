import { Motion, MotionProps } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { dropdownItemVariants } from './animations-variants';
import { DropdownBoxProps } from './dropdown-box.types';

const DropdownItem: FC<PropsWithChildren<DropdownBoxProps & MotionProps>> = ({
  isOpen,
  children,
  ...props
}) => {
  return (
    <Motion
      {...props}
      initial={isOpen ? 'open' : 'closed'}
      variants={dropdownItemVariants}
      animate={isOpen ? 'open' : 'closed'}
    >
      {children}
    </Motion>
  );
};

export default DropdownItem;
