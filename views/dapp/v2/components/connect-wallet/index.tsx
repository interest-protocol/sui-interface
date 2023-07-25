import { Box, darkTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import IllustrationSection from './illustration/illustration-section';
import WalletListSection from './wallet/wallet-list-section';

const ConnectWallet: FC = () => {
  return (
    <Box display="flex" background={[darkTheme.colors.surface]}>
      <WalletListSection />
      <IllustrationSection />
    </Box>
  );
};

export default ConnectWallet;
