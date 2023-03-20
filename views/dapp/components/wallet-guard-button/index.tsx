import { FC, PropsWithChildren } from 'react';

import { ConnectWallet } from '@/components';
import { Box } from '@/elements';
import { useWeb3 } from '@/hooks';
import { IEmptyObj } from '@/interface';

const WalletGuardButton: FC<PropsWithChildren<IEmptyObj>> = ({ children }) =>
  useWeb3().connected ? (
    <>{children}</>
  ) : (
    <Box display="flex" flexDirection="column" my="M">
      <ConnectWallet />
    </Box>
  );

export default WalletGuardButton;
