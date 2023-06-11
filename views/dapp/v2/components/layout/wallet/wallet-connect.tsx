import { Box } from '@interest-protocol/ui-kit';
import { ConnectModal } from '@mysten/wallet-kit';
import { FC, useState } from 'react';

import { WalletConnectProps } from './wallet.types';

const WalletConnect: FC<WalletConnectProps> = ({ setIsConnected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <ConnectModal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
            setIsConnected(true);
          }}
        />
      )}
      <Box
        bg="textSoft"
        height="3rem"
        display="flex"
        alignItems="center"
        borderRadius="2.5rem"
        justifyContent="space-between"
      >
        <Box
          fontSize="M"
          width="auto"
          border="none"
          display="inline-flex"
          bg="bottomBackground"
          borderRadius="2.5rem"
        >
          <button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            {isOpen ? 'connecting...' : 'connect'}
          </button>
        </Box>
      </Box>
    </>
  );
};

export default WalletConnect;
