import { Network } from '@interest-protocol/sui-amm-sdk';
import {
  Box,
  Motion,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { FLAG_ICON_MAP } from '@/constants/locale';
import { useLocale, useNetwork } from '@/hooks';
import { AppTheme } from '@/interface';
import { ArrowLeft } from '@/svg';
import { capitalize } from '@/utils';

import MenuItemWrapper from '../../menu-item-wrapper';
import { MenuSettingsListProps } from './settings-list.types';
// import { MenuSettingsListProps } from '../menu.types';
import MenuSettingsListHeaderMobile from './settings-list-header-mobile';

const MenuSettingsList: FC<MenuSettingsListProps> = ({ setSettingsClosed }) => {
  const t = useTranslations();

  const { dark, setDark } = useTheme() as AppTheme<Theme>;
  const { asPath } = useRouter();
  const { network, setNetwork } = useNetwork();

  const { currentLocale } = useLocale();

  const LangIcon = FLAG_ICON_MAP[currentLocale];
  const handleChangeNetwork = (selectedNetwork: Network) => () => {
    setNetwork(selectedNetwork);
  };
  const [toggle, setToggle] = useState(true);

  const closeDropdownSettingsMenu = () => {
    setToggle(not);
  };

  return (
    <>
      <Box
        p="xl"
        mt="2xs"
        borderTopColor="outline.outlineVariant"
        display={['none', 'none', 'none', 'flex']}
        borderTop={['1px solid', '1px solid', '1px solid', 'unset']}
      >
        <Box cursor="pointer">
          <ArrowLeft
            width="100%"
            maxWidth="1.25rem"
            maxHeight="1.25rem"
            onClick={setSettingsClosed}
          />
        </Box>
        <Typography
          variant="small"
          color="onSurface"
          textAlign="center"
          mx="auto"
        >
          {capitalize(t('common.v2.menu.settings'))}
        </Typography>
      </Box>
      <MenuSettingsListHeaderMobile
        handleButton={closeDropdownSettingsMenu}
        isOpen={toggle}
      />
      <Motion
        overflow="hidden"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        animate={{ height: toggle ? 'auto' : '0' }}
      >
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
            {t('common.v2.menu.testnet')}
          </Typography>
          <SwitchButton
            activation
            name="network"
            size="medium"
            disabled={
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
          <Typography variant="small">
            {t('common.v2.menu.languages')}
          </Typography>
          <LangIcon maxWidth="1.125rem" maxHeight="1.125rem" width="100%" />
        </MenuItemWrapper>
      </Motion>
    </>
  );
};

export default MenuSettingsList;
