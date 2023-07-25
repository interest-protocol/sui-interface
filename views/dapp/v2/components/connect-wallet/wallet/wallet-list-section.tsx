import {
  Box,
  darkTheme,
  lightTheme,
  Motion,
  Typography,
} from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
// import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TimesSVG } from '@/components/svg/v2';

import WalletItem from './wallet-item';

const WalletListSection: FC = () => {
  const { wallets } = useWalletKit();

  const menuVariants = {
    open: {
      rotate: '0deg',
      scaleY: 1,
    },
    closed: {
      rotate: '180deg',
      scaleY: 0,
    },
  };

  return (
    <Box
      background={[lightTheme.colors.surface]}
      color="text"
      overflowY="auto"
      maxHeight="100vh"
      height="100vh"
      width={['100%', '100%', '100%', '50%']}
      borderBottomRightRadius={[0, 0, 0, 32]}
      borderTopRightRadius={[0, 0, 0, 32]}
    >
      <Box
        variant="container"
        display="flex"
        flexDirection="column"
        minHeight="calc(98.9vh - 8.5rem)"
      >
        <Box display="grid" gridColumn="1/-1" height="100%" margin={0}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <Box
              px={['unset', 'unset', 'unset', '15%']}
              width="100%"
              mx="auto"
              pt={['0rem', '0rem', '0rem', '8.125rem']}
            >
              <Motion
                as="span"
                display={['flex', 'flex', 'flex', 'none']}
                borderRadius="50%"
                p=".8rem"
                border="1px solid"
                width="fit-content"
                margin="1.5rem 0 1.5rem auto"
                alignItems="center"
                justifyContent="center"
                animate={menuVariants.open}
                initial={menuVariants.closed}
                borderColor={darkTheme.colors['outline.outlineVariant']}
                color={['dark', 'dark', 'dark', 'white']}
              >
                <TimesSVG
                  width="100%"
                  height="100%"
                  maxWidth=".9rem"
                  maxHeight=".9rem"
                />
              </Motion>
              <Typography
                variant="displaySmall"
                fontSize={['5xl', '5xl', '5xl', '7xl']}
                color="#000"
              >
                Choose the wallet
              </Typography>
              <Typography
                variant="small"
                color="#000"
                mb={['1.5rem', '1.5rem', '1.5rem', '3.5rem']}
              >
                Securely connect your wallet to start your Web3 journey.
              </Typography>
              <Box>
                {/*

                  <Button
                    variant="filled"
                    key={v4()}
                    onClick={async () => {
                      await connect(wallet.name);
                    }}
                  >
                    {wallet.name}
                  </Button>*/}
                {wallets.map((wallet) => (
                  <WalletItem
                    key={v4()}
                    icon={wallet.icon}
                    name={wallet.name}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        mt="xl"
        p="3xl"
        bg={lightTheme.colors['surface.container']}
        borderBottomRightRadius={[0, 0, 0, 32]}
      >
        <Typography variant="extraSmall" textAlign="center">
          By connecting your wallet, you agree to our Terms of Service and our
          Privacy Policy.
        </Typography>
      </Box>
    </Box>
  );
};

export default WalletListSection;
