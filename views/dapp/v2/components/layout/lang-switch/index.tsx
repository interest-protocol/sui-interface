import { Typography } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import { FLAG_ICON_MAP } from '@/constants/locale';
import RefBox from '@/elements/ref-box';
import { useLocale } from '@/hooks';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';

import MenuItemWrapper from '../header/menu/menu-item-wrapper';
import LangSwitchDropdown from './lang-switch-drodown';

const BOX_ID = 'lang-switch-box-id-1234';

const LangSwitch: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { currentLocale, locales } = useLocale();

  const LangIcon = FLAG_ICON_MAP[currentLocale];

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
    <MenuItemWrapper onClick={() => setIsOpen(true)}>
      <RefBox
        id={BOX_ID}
        width="100%"
        display="flex"
        ref={connectedBoxRef}
        alignContent="center"
        justifyContent="space-between"
      >
        <Typography variant="small">Language</Typography>
        <LangIcon maxWidth="1.125rem" maxHeight="1.125rem" width="100%" />
        <LangSwitchDropdown isOpen={isOpen} locales={locales} />
      </RefBox>
    </MenuItemWrapper>
  );
};

export default LangSwitch;
