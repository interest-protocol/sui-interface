import { Box, Button, Theme, useTheme } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { FC, useCallback } from 'react';

import { LogoutSVG } from '@/components/svg/v2';

const DisconnectWallet: FC = () => {
  const { disconnect } = useWalletKit();
  const { colors } = useTheme() as Theme;

  const handleDisconnect = useCallback(() => {
    disconnect();
  }, [disconnect]);

  return (
    <Box
      ml="unset"
      display="flex"
      border="1px solid"
      borderRadius="100%"
      position="relative"
      flexDirection="column"
      justifyContent="center"
      transition="background-color .5s"
      borderColor={colors['outline.outlineVariant']}
      nHover={{ bg: colors['outline.outlineVariant'] }}
    >
      <Button
        nHover={{ bg: 'transparent' }}
        onClick={handleDisconnect}
        variant="icon"
        size="small"
      >
        <LogoutSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
      </Button>
    </Box>
  );
};

export default DisconnectWallet;
