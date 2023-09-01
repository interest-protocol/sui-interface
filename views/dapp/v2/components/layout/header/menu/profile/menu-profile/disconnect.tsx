import { Box, Button, Theme, useTheme } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { FC, useCallback } from 'react';

import { LogoutSVG } from '@/components/svg/v2';
import { SEMANTIC_COLORS } from '@/constants';

const DisconnectWallet: FC = () => {
  const { disconnect } = useWalletKit();
  const { dark } = useTheme() as Theme;

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
      color={dark ? SEMANTIC_COLORS[1].dark : SEMANTIC_COLORS[1].light}
      nHover={{
        bg: dark ? SEMANTIC_COLORS[1].light : SEMANTIC_COLORS[1].dark,
        color: 'white',
      }}
      borderColor={dark ? SEMANTIC_COLORS[1].dark : SEMANTIC_COLORS[1].light}
    >
      <Button
        size="small"
        variant="icon"
        color="inherit"
        onClick={handleDisconnect}
        nHover={{ bg: 'transparent' }}
      >
        <LogoutSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
      </Button>
    </Box>
  );
};

export default DisconnectWallet;
