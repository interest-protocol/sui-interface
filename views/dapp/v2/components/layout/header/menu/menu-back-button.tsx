import { Button } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import ArrowLeft from '@/components/svg/arrow-left';

import { MenuBackButtonProps } from './menu.types';

const MenuBackButton: FC<MenuBackButtonProps> = ({
  showButton,
  handleBack,
}) => {
  if (!showButton) return null;

  return (
    <Button
      color="onSurface"
      variant="icon"
      onClick={handleBack}
      display={['block', 'block', 'block', 'none']}
      p="0 !important"
      nHover={{
        color: 'primary',
        bg: 'transparent',
      }}
    >
      <ArrowLeft maxWidth="1rem" maxHeight="1rem" width="100%" />
    </Button>
  );
};

export default MenuBackButton;
