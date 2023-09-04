import { Network } from '@interest-protocol/sui-amm-sdk';
import {
  Box,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC, useCallback, useState } from 'react';

import { NETWORK_RESTRICTION } from '@/constants';
import { useLocale, useNetwork } from '@/hooks';
import useEventListener from '@/hooks/use-event-listener';
import { AppTheme } from '@/interface';
import { ArrowLeft } from '@/svg';
import { capitalize } from '@/utils';

import MenuItemWrapper from '../../menu-item-wrapper';
import MenuLanguage from '../menu-language';
import { MenuSettingsListProps } from './settings-list.types';
import MenuSettingsListHeaderMobile from './settings-list-header-mobile';

const MenuSettingsList: FC<MenuSettingsListProps> = ({ setSettingsClosed }) => {
  const t = useTranslations();

  const { dark, setDark } = useTheme() as AppTheme<Theme>;
  const { asPath } = useRouter();
  const { network, setNetwork } = useNetwork();

  const handleChangeNetwork = (selectedNetwork: Network) => () => {
    setNetwork(selectedNetwork);
  };

  const { locales } = useLocale();

  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 55em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);

  return (
    <>
      <Box p="xl" mt="2xs" display="flex" overflow="auto">
        {!isMobile && (
          <Box cursor="pointer">
            <ArrowLeft
              width="100%"
              maxWidth="1.25rem"
              maxHeight="1.25rem"
              onClick={setSettingsClosed}
            />
          </Box>
        )}
        <Typography
          variant="small"
          color="onSurface"
          textAlign="center"
          mx="auto"
        >
          {capitalize(t('common.v2.menu.settings'))}
        </Typography>
      </Box>
      <Typography
        p="l"
        mt={['unset', 'unset', 'unset', '4xl']}
        variant="small"
        fontWeight="500"
        color="onSurface"
      >
        {capitalize(t('common.v2.menu.preferences'))}
      </Typography>
      <MenuSettingsListHeaderMobile />
      <Box overflow="hidden" height="auto">
        <MenuItemWrapper>
          <Typography variant="small" color="onSurface">
            {capitalize(t('common.v2.menu.darkMode'))}
          </Typography>
          <SwitchButton
            activation
            name="theme"
            size="medium"
            defaultValue={dark}
            onChange={() => setDark(not)}
          />
        </MenuItemWrapper>
        <MenuItemWrapper>
          <Typography variant="small" color="onSurface">
            {t('common.v2.menu.showTestnets')}
          </Typography>
          <SwitchButton
            activation
            name="network"
            size="medium"
            disabled={
              NETWORK_RESTRICTION[network].includes(asPath) ||
              !(
                asPath.includes('dapp/alpha') ||
                process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'
              )
            }
            defaultValue={network === Network.TESTNET}
            onChange={handleChangeNetwork(
              network === Network.TESTNET ? Network.MAINNET : Network.TESTNET
            )}
          />
        </MenuItemWrapper>
        <MenuItemWrapper>
          <Typography variant="small" color="onSurface">
            {t('common.v2.menu.showDeprecated')}
          </Typography>
          <SwitchButton
            activation
            name="network"
            size="medium"
            disabled={
              NETWORK_RESTRICTION[network].includes(asPath) ||
              !(
                asPath.includes('dapp/alpha') ||
                process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'
              )
            }
            defaultValue={network === Network.TESTNET}
            onChange={handleChangeNetwork(
              network === Network.TESTNET ? Network.MAINNET : Network.TESTNET
            )}
          />
        </MenuItemWrapper>
        <Box
          p="l"
          mb="2xl"
          mx="auto"
          borderBottom="1px solid"
          width="calc(100% - 3rem)"
          borderBottomColor="outline.outlineVariant"
        />
        <Typography variant="small" fontWeight="500" color="onSurface" p="l">
          {capitalize(t('common.v2.menu.language'))}
        </Typography>
        <MenuLanguage locales={locales} />
      </Box>
    </>
  );
};

export default MenuSettingsList;
