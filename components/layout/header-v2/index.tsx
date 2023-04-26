import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
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
  const { setDark, dark, colors } = useTheme() as Theme;

  const [isMobile, setIsMobile] = useState(false);

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 55em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);

  return (
    <Box>
      <Box
        pt={['0.5rem', '0.5rem', '0.5rem', '2.5rem']}
        pl="1rem"
        pb={['0.5rem', '0.5rem', '0.5rem', '1.25rem']}
        bg="background"
        alignItems="center"
        justifyContent="space-between"
        display={['flex', 'flex', 'flex', 'grid']}
        gridTemplateColumns="repeat(2, 1fr)"
      >
        <Box display="flex">
          <Link href={Routes[RoutesEnum.Home]}>
            <Box
              mr="L"
              color="foreground"
              width="3rem"
              height="3rem"
              cursor="pointer"
              display="flex"
              nHover={{ color: colors.primary }}
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
          <Box display={['none', 'none', 'none', 'flex']}>
            <MenuItem label="DEX" url={Routes[RoutesEnum.DEX]} />
            <MenuItem label="FARMS" url={Routes[RoutesEnum.Farms]} />
            <MenuItem label="FAUCET" url={Routes[RoutesEnum.Faucet]} />
          </Box>
        </Box>
        <Box
          color="text"
          display="flex"
          position="relative"
          alignItems={['flex-start', 'flex-start', 'flex-start', 'flex-end']}
          justifyContent="flex-end"
          height="48px"
        >
          <Wallet />
          <OptionButton />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
