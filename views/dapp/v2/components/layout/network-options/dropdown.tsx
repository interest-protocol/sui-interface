import { Network } from '@interest-protocol/sui-amm-sdk';
import {
  Box,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CheckmarkSVG } from '@/components/svg/v2';
import SUI from '@/components/svg/v2/sui';
import { wrapperVariants } from '@/constants';
import { useNetwork } from '@/hooks';

import { DropdownProps } from './network-options.types';

const NetworkOptionsDropdown: FC<DropdownProps> = ({ isOpen }) => {
  const { dark, colors } = useTheme() as Theme;
  const { network, setNetwork } = useNetwork();
  const handleChangeNetwork = (selectedNetwork: Network) => () => {
    setNetwork(selectedNetwork);
  };

  return (
    <Motion
      width="200px"
      right="0.8rem"
      cursor="pointer"
      initial="closed"
      position="absolute"
      top="calc(100% - 0.5rem)"
      variants={wrapperVariants}
      animate={isOpen ? 'open' : 'closed'}
    >
      <Box
        width="100%"
        bg="surface.container"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
      >
        <Box width="100%" display="flex" flexDirection="column">
          <Box
            p="l"
            gap="s"
            width="100%"
            display="flex"
            alignItems="center"
            transition="background-color .5s"
            nHover={{ bg: colors['outline.outlineVariant'] }}
            onClick={handleChangeNetwork(Network.MAINNET)}
          >
            <Box
              display="flex"
              width="1.5rem"
              height="1.5rem"
              borderRadius="full"
              alignItems="center"
              justifyContent="center"
              bg={dark ? 'white' : 'black'}
              color="primary.primaryContainer"
            >
              <SUI maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
            </Box>
            <Typography variant="small">SUI</Typography>
            {network === Network.MAINNET && (
              <Box
                width="1rem"
                display="flex"
                height="1rem"
                marginLeft="auto"
                borderRadius="full"
                alignItems="center"
                justifyContent="center"
                color="surface.container"
                bg={dark ? '#D9F99D' : '#84CC16'}
              >
                <CheckmarkSVG
                  width="100%"
                  maxWidth="0.438rem"
                  maxHeight="0.438rem"
                />
              </Box>
            )}
          </Box>
          <Box
            p="l"
            gap="s"
            width="100%"
            display="flex"
            alignItems="center"
            transition="background-color .5s"
            nHover={{ bg: colors['outline.outlineVariant'] }}
            onClick={handleChangeNetwork(Network.TESTNET)}
          >
            <Box
              display="flex"
              width="1.5rem"
              height="1.5rem"
              borderRadius="full"
              alignItems="center"
              bg={dark ? 'white' : 'black'}
              justifyContent="space-between"
              color="primary.primaryContainer"
            >
              <SUI maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
            </Box>
            <Typography variant="small">SUI Testnet</Typography>
            {network === Network.TESTNET && (
              <Box
                width="1rem"
                display="flex"
                height="1rem"
                marginLeft="auto"
                borderRadius="full"
                alignItems="center"
                justifyContent="center"
                color="surface.container"
                bg={dark ? '#D9F99D' : '#84CC16'}
              >
                <CheckmarkSVG
                  width="100%"
                  maxWidth="0.438rem"
                  maxHeight="0.438rem"
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Motion>
  );
};

export default NetworkOptionsDropdown;
