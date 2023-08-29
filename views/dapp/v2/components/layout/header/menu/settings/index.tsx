import { Button, Motion, Theme, useTheme } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';

import { CogsSVG } from '@/components/svg/v2';
import { RightMenuVariants } from '@/components/web3-manager/connect-wallet/wallet/wallet-variants';
import { RefBox } from '@/elements';
import { useLocale } from '@/hooks';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';

import MenuLanguage from './menu-language';
import MenuSettings from './menu-settings';

const BOX_ID = 'settings-dropdown';

const Settings: FC = () => {
  const { query } = useRouter();
  const [isOpenSettings, setIsOpenSettings] = useState(Boolean(query.settings));
  const { colors } = useTheme() as Theme;
  const { locales } = useLocale();

  const closeDropdown = (event: any) => {
    if (
      event?.path?.some((node: any) => node?.id == BOX_ID) ||
      event?.composedPath()?.some((node: any) => node?.id == BOX_ID)
    )
      return;
  };

  const connectedBoxRef =
    useClickOutsideListenerRef<HTMLDivElement>(closeDropdown);

  const handleOpenSettings = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('settings', 'true');
    window.history.pushState('', '', url.toString());
    setIsOpenSettings(true);
  };

  const handleCloseSettings = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('settings');
    window.history.pushState('', '', url.toString());
    setIsOpenSettings(false);
  };

  return (
    <>
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
          onClick={handleOpenSettings}
        >
          <CogsSVG maxWidth="1.7rem" maxHeight="1.7rem" width="100%" />
        </Button>
      </RefBox>
      <Motion
        top="0"
        right="0"
        zIndex="6"
        width="22rem"
        height="100vh"
        initial="closed"
        position="absolute"
        background="surface"
        borderLeft="1px solid"
        variants={RightMenuVariants}
        borderLeftColor="outline.outlineVariant"
        animate={isOpenSettings ? 'open' : 'closed'}
      >
        <MenuSettings setSettingsClosed={handleCloseSettings} />
        <MenuLanguage locales={locales} />
      </Motion>
    </>
  );
};

export default Settings;
