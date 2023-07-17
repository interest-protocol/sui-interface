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
import { FC } from 'react';

import { wrapperVariants } from '@/constants';
import { useNetwork } from '@/hooks';
import { AppTheme } from '@/interface';
import { capitalize } from '@/utils';

import MenuItemWrapper from '../../header/menu/menu-item-wrapper';
import LangSwitch from '../../lang-switch';
import { GlobalMenuDropdownProps } from '../menu-dropdown.types';

const GlobalMenuDropdown: FC<GlobalMenuDropdownProps> = ({ isOpen }) => {
  const t = useTranslations();

  const { dark, setDark } = useTheme() as AppTheme<Theme>;
  const { asPath } = useRouter();
  const { network, setNetwork } = useNetwork();

  const handleChangeNetwork = (selectedNetwork: Network) => () => {
    setNetwork(selectedNetwork);
  };
  return (
    <Motion
      right="0"
      top="3rem"
      zIndex={1}
      initial="closed"
      borderRadius="m"
      position="absolute"
      bg="surface.container"
      variants={wrapperVariants}
      textTransform="capitalize"
      animate={isOpen ? 'open' : 'closed'}
      pointerEvents={isOpen ? 'auto' : 'none'}
    >
      <Box p="xl">
        <Typography variant="large" color="onSurface">
          {t('common.v2.menu.settings')}
        </Typography>
      </Box>
      <MenuItemWrapper>
        <Typography variant="small" color="onSurface">
          {capitalize(t('common.v2.menu.darkMode'))}
        </Typography>
        <SwitchButton
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
        {(asPath.includes('dapp/alpha') ||
          process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production') && (
          <SwitchButton
            name="network"
            size="medium"
            defaultValue={network === Network.TESTNET}
            onChange={handleChangeNetwork(
              network === Network.TESTNET ? Network.MAINNET : Network.TESTNET
            )}
          />
        )}
      </MenuItemWrapper>
      <LangSwitch />
    </Motion>
  );
};

export default GlobalMenuDropdown;
