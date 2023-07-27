import { Button, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import { FLAG_ICON_MAP } from '@/constants/locale';
import { RefBox } from '@/elements';
import { useLocale } from '@/hooks';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';

import LangSwitchDropdown from './lang-switch-drodown';

const BOX_ID = 'lang-switch-box-id-123';

const LangSwitch: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colors } = useTheme() as Theme;

  const { currentLocale, locales } = useLocale();

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

  const LangIcon = FLAG_ICON_MAP[currentLocale];

  return (
    <RefBox
      id={BOX_ID}
      ml={['0.5rem', '0.5rem', '0.5rem', 'unset']}
      display="flex"
      position="relative"
      ref={connectedBoxRef}
      flexDirection="column"
      justifyContent="center"
      borderRadius="100%"
      border="1px solid"
      transition="background-color .5s"
      borderColor={colors['outline.outlineVariant']}
      nHover={{ bg: colors['outline.outlineVariant'] }}
    >
      <Button
        variant="icon"
        nHover={{ bg: 'transparent' }}
        onClick={() => setIsOpen(true)}
      >
        <LangIcon maxWidth="1.7rem" maxHeight="1.7rem" width="100%" />
      </Button>
      <LangSwitchDropdown isOpen={isOpen} locales={locales} />
    </RefBox>
  );
};

export default LangSwitch;
