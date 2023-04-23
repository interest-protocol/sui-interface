import { useTheme } from '@emotion/react';
import { Box } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC, useCallback, useState } from 'react';

import { Routes, RoutesEnum } from '@/constants';
import useEventListener from '@/hooks/use-event-listener';
import { LogoSVG } from '@/svg';

import MenuItem from './menu-item';
import OptionButton from './option';
import Wallet from './wallet';

const Header: FC = () => {
  const t = useTranslations();
  const { setDark, dark } = useTheme() as any;

  const [isMobile, setIsMobile] = useState(false);

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 55em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);

  return (
    <Box>
      <Box
        pt="2.5rem"
        px="4rem"
        pb="1.25rem"
        bg={dark ? '#1B1B1F' : '#F2F0F4'}
        alignItems="center"
        justifyContent="space-between"
        display={['flex', 'flex', 'flex', 'grid']}
        gridTemplateColumns="repeat(2, 1fr)"
      >
        <Box display="flex" alignItems="center">
          <Link href={Routes[RoutesEnum.Home]}>
            <Box
              mr="L"
              color="foreground"
              width="3rem"
              height="3rem"
              maxWidth="3.125rem"
              maxHeight="3.125rem"
              cursor="pointer"
              nHover={{ color: 'accent' }}
              nActive={{ color: 'accentActive' }}
            >
              <LogoSVG
                maxHeight="3rem"
                maxWidth="3rem"
                width="100%"
                aria-label="Logo"
                fill="currentColor"
              />
            </Box>
          </Link>
          <Box display="flex">
            <MenuItem label="DEX" url={Routes[RoutesEnum.DEX]} />
            <MenuItem label="FARMS" url={Routes[RoutesEnum.Farms]} />
            <MenuItem label="FAUCET" url={Routes[RoutesEnum.Faucet]} />
          </Box>
        </Box>
        <Box>
          <Wallet />
          <Box
            color="text"
            display="flex"
            position="relative"
            alignItems="flex-end"
            flexDirection="column"
            gridColumn={['2/5', '2/9', '2/13']}
          >
            <OptionButton />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
