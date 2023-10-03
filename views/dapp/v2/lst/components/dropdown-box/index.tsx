import { Motion } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { dropdownVariants } from './animations-variants';
import { DropdownBoxProps } from './dropdown-box.types';

const DropdownBox: FC<PropsWithChildren<DropdownBoxProps>> = ({
  isOpen,
  children,
}) => {
  return (
    <Motion
      initial={isOpen ? 'open' : 'closed'}
      transformOrigin="top"
      variants={dropdownVariants}
      animate={isOpen ? 'open' : 'closed'}
    >
      {children}
    </Motion>
  );
};

export default DropdownBox;
