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
      color="text"
      variant="icon"
      border="1px solid"
      onClick={handleBack}
      borderColor="#FFFFFF1A"
      display={['block', 'none']}
    >
      <ArrowLeft maxWidth="1rem" maxHeight="1rem" width="100%" />
    </Button>
  );
};

export default MenuBackButton;
