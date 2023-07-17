import { Button, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import { CogsSVG } from '@/components/svg/v2';
import { RefBox } from '@/elements';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';

import GlobalMenuDropdown from './menu-drodown';

const BOX_ID = 'lang-switch-box-id-123';

const GlobalMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colors } = useTheme() as Theme;

  const closeDropdown = (event: any) => {
    if (
      event?.path?.some((node: any) => node?.id == BOX_ID) ||
      event?.composedPath()?.some((node: any) => node?.id == BOX_ID)
    )
      return;

    setIsOpen(false);
  };

  const connectedBoxRef =
    useClickOutsideListenerRef<HTMLDivElement>(closeDropdown);

  return (
    <RefBox
      id={BOX_ID}
      display="flex"
      border="1px solid"
      borderRadius="100%"
      position="relative"
      flexDirection="column"
      ref={connectedBoxRef}
      justifyContent="center"
      transition="background-color .5s"
      ml={['0.5rem', '0.5rem', '0.5rem', 'unset']}
      borderColor={colors['outline.outlineVariant']}
      nHover={{ bg: colors['outline.outlineVariant'] }}
    >
      <Button
        variant="icon"
        nHover={{ bg: 'transparent' }}
        onClick={() => setIsOpen(true)}
      >
        <CogsSVG maxWidth="1.7rem" maxHeight="1.7rem" width="100%" />
      </Button>
      <GlobalMenuDropdown isOpen={isOpen} />
    </RefBox>
  );
};

export default GlobalMenu;