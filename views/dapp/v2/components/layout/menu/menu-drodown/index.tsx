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
import { not } from 'ramda';
import { FC } from 'react';

import { wrapperVariants } from '@/constants';
import { useNetwork } from '@/hooks';
import { AppTheme } from '@/interface';

import MenuItemWrapper from '../../header/menu/menu-item-wrapper';
import LangSwitch from '../../lang-switch';
import { GlobalMenuDropdownProps } from '../menu-dropdown.types';

const GlobalMenuDropdown: FC<GlobalMenuDropdownProps> = ({ isOpen }) => {
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
      overflow="visible"
      zIndex={1}
      initial="closed"
      borderRadius="m"
      position="absolute"
      bg="surface.container"
      variants={wrapperVariants}
      animate={isOpen ? 'open' : 'closed'}
      pointerEvents={isOpen ? 'auto' : 'none'}
    >
      <Box p="xl">
        <Typography variant="large" color="onSurface">
          Global Settings
        </Typography>
      </Box>
      <MenuItemWrapper>
        <Typography variant="small" color="onSurface">
          Dark mode
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
          Testnet
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
