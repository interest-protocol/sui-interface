import { Network } from '@interest-protocol/sui-amm-sdk';
import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import { DownArrowSecondarySVG } from '@/components/svg/v2';
import SUI from '@/components/svg/v2/sui';
import { RefBox } from '@/elements';
import { useNetwork } from '@/hooks';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';

import NetworkOptionsDropdown from './dropdown';

const BOX_ID = 'network-options';

const NetworkOptions: FC = () => {
  const { dark } = useTheme() as Theme;
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const { network } = useNetwork();

  const closeDropdown = (event: any) => {
    if (
      event?.path?.some((node: any) => node?.id == BOX_ID) ||
      event?.composedPath()?.some((node: any) => node?.id == BOX_ID)
    )
      return;

    setIsOptionsOpen(false);
  };

  const connectedBoxRef =
    useClickOutsideListenerRef<HTMLDivElement>(closeDropdown);

  return (
    <RefBox id={BOX_ID} ref={connectedBoxRef}>
      <Box
        p="m"
        gap="m"
        display="flex"
        color="onSurface"
        width="fit-content"
        position="relative"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          size="small"
          display="flex"
          variant="filled"
          color="onSurface"
          borderRadius="full"
          bg="surface.container"
          justifyContent="space-between"
          onClick={() => setIsOptionsOpen(!isOptionsOpen)}
        >
          <Box
            display="flex"
            width="1.5rem"
            height="1.5rem"
            marginLeft="-0.6rem"
            borderRadius="full"
            alignItems="center"
            bg={dark ? 'white' : 'black'}
            justifyContent="space-between"
            color="primary.primaryContainer"
          >
            <SUI maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
          </Box>
          <Typography variant="small">
            {network === Network.MAINNET
              ? 'SUI'
              : network === Network.TESTNET
              ? 'SUI Testnet'
              : ''}
          </Typography>
          <DownArrowSecondarySVG
            width="100%"
            maxWidth="1.5rem"
            maxHeight="1.5rem"
          />
        </Button>
        <NetworkOptionsDropdown isOpen={isOptionsOpen} />
      </Box>
    </RefBox>
  );
};

export default NetworkOptions;
