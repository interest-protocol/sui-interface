import { Button, Motion } from '@interest-protocol/ui-kit';
import { formatAddress } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import toast from 'react-hot-toast';

import { CheckmarkSVG } from '@/components/svg/v2';
import { useWeb3 } from '@/hooks';
import { CopySVG } from '@/svg';
import { capitalize } from '@/utils';

import MenuItemWrapper from '../../header/menu/menu-item-wrapper';
import {
  WalletDropdownProps,
  WalletDropdownWrapperProps,
} from '../wallet.types';
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

const WalletDropdown: FC<WalletDropdownProps> = ({
  isOpen,
  loading,
  suiNSRecord,
  handleClose,
}) => {
  const t = useTranslations();
  const { account } = useWeb3();
  const { disconnect, accounts, selectAccount } = useWalletKit();

  const copyToClipboard = (address: string) => {
    window.navigator.clipboard.writeText(address || '');
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
      {accounts.map((walletAccount) => (
        <MenuItemWrapper
          key={walletAccount.address}
          onClick={() => {
            if (!(walletAccount.address === account)) {
              selectAccount(walletAccount);
              handleClose();
            }
          }}
        >
          {walletAccount.address === account && (
            <CheckmarkSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
          )}
          <WalletItem>
            {loading || suiNSRecord[walletAccount.address]
              ? suiNSRecord[walletAccount.address]
              : formatAddress(walletAccount.address)}
          </WalletItem>
          <Button
            size="small"
            variant="icon"
            p="0 !important"
            nHover={{
              color: 'primary',
              bg: 'transparent',
            }}
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard(walletAccount.address);
            }}
          >
            <CopySVG maxWidth="1rem" maxHeight="1rem" width="100%" />
          </Button>
        </MenuItemWrapper>
      ))}
      <MenuItemWrapper
        onClick={async () => {
          await disconnect();
          handleClose();
        }}
      >
        <WalletItem name="disconnect" />
      </MenuItemWrapper>
    </Motion>
  );
};

const WalletDropdownWrapper: FC<WalletDropdownWrapperProps> = ({
  isOpen,
  ...props
}) => (
  <AnimatePresence>
    {isOpen && <WalletDropdown isOpen={isOpen} {...props} />}
  </AnimatePresence>
);

export default WalletDropdownWrapper;
