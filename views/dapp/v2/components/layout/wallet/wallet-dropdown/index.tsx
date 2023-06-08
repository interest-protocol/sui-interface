import { Motion } from '@interest-protocol/ui-kit';
import { formatAddress } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import { capitalize, noop } from '@/utils';

import MenuItemWrapper from '../../header/menu/menu-item-wrapper';
import { WalletDropdownProps } from '../wallet.types';
import WalletItem from './wallet-item';

const wrapperVariants = {
  open: {
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  closed: {
    clipPath: 'inset(10% 50% 90% 50% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
    },
  },
};

const WalletDropdown: FC<WalletDropdownProps> = ({ isOpen }) => {
  const t = useTranslations();
  const { account } = useWeb3();
  const { network } = useNetwork();
  const { disconnect } = useWalletKit();
  const { suiNSProvider } = useProvider();
  const [loading, setLoading] = useState(false);
  const [suiNs, setSuiNS] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (account) {
      setLoading(true);
      suiNSProvider
        .getName(account)
        .then(setSuiNS)
        .catch(noop)
        .finally(() => setLoading(false));
    }
  }, [network, account]);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(account || '');
    toast(capitalize(t('common.v2.wallet.copy')));
  };

  return (
    <Motion
      right="0"
      zIndex={1}
      top="3rem"
      initial="closed"
      borderRadius="m"
      position="absolute"
      bg="surface.container"
      variants={wrapperVariants}
      animate={isOpen ? 'open' : 'closed'}
      pointerEvents={isOpen ? 'auto' : 'none'}
    >
      <MenuItemWrapper onClick={copyToClipboard}>
        <WalletItem>
          {loading || !suiNs ? formatAddress(account ?? '') : suiNs}
        </WalletItem>
      </MenuItemWrapper>
      <MenuItemWrapper onClick={disconnect}>
        <WalletItem name="disconnect" />
      </MenuItemWrapper>
    </Motion>
  );
};

export default WalletDropdown;
