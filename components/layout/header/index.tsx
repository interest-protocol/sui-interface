import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { not } from 'ramda';
import { FC, useCallback, useState } from 'react';

import { SwitchLang } from '@/components';
import { Routes, RoutesEnum } from '@/constants';
import { Box, Typography } from '@/elements';
import useEventListener from '@/hooks/use-event-listener';
import { LogoSVG, MoonSVG, SunSVG } from '@/svg';

import MobileMenu from './mobile-menu';
import Wallet from './wallet';

const Header: FC = () => {
  const { setDark, dark } = useTheme() as any;
  const { pathname } = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 64em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);

  const handleChangeTheme = () => setDark(not);
  return (
    <Box>
      <Box bg={dark ? 'bottomBackground' : 'accentSecondary'} p="L">
        <Typography
          variant="normal"
          textAlign="center"
          color={dark ? 'text' : 'textSoft'}
          fontSize="S"
          fontWeight="600"
        >
          This is an alpha product deployed on a Devnet. It might be down
          because of version updates or unexpected issues.
        </Typography>
      </Box>
      <Box
        py="M"
        as="header"
        bg="foreground"
        px={['M', 'L']}
        alignItems="center"
        justifyContent="space-between"
        display={['flex', 'flex', 'grid']}
        gridTemplateColumns="repeat(3, 1fr)"
      >
        <Box display="flex" alignItems="center">
          <Link href={Routes[RoutesEnum.Home]}>
            <Box
              mr="L"
              color="text"
              width="2.5rem"
              height="2.5rem"
              maxWidth="50px"
              maxHeight="50px"
              cursor="pointer"
              hover={{ color: 'accent' }}
              active={{ color: 'accentSecondary' }}
            >
              <LogoSVG
                maxHeight="2.5rem"
                maxWidth="2.5rem"
                width="100%"
                aria-label="Logo"
                fill="currentColor"
              />
            </Box>
          </Link>
        </Box>
        <Box
          alignItems="center"
          justifyContent="center"
          display={['none', 'none', 'flex']}
        >
          <Link href={Routes[RoutesEnum.DEX]}>
            <Typography
              px="XL"
              cursor="pointer"
              variant="normal"
              borderRight="1px solid"
              borderColor="bottomBackground"
              color={
                pathname.includes(Routes[RoutesEnum.DEX]) ? 'accent' : 'inherit'
              }
              hover={{ color: 'accentSecondary' }}
            >
              DEX
            </Typography>
          </Link>
          <Link href={Routes[RoutesEnum.Faucet]}>
            <Typography
              px="XL"
              cursor="pointer"
              variant="normal"
              color={
                pathname.includes(Routes[RoutesEnum.Faucet])
                  ? 'accent'
                  : 'inherit'
              }
              hover={{ color: 'accentSecondary' }}
            >
              FAUCET
            </Typography>
          </Link>
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Wallet />
          <Box display="flex" justifyContent="flex-end" alignItems="stretch">
            <Box display="flex" alignItems="stretch">
              <SwitchLang />
              <Box
                mr="S"
                width="3rem"
                height="2.8rem"
                borderRadius="M"
                alignItems="center"
                display="inline-flex"
                bg="transparent"
                justifyContent="center"
                onClick={handleChangeTheme}
                color="text"
              >
                {!dark ? (
                  <MoonSVG
                    width="1rem"
                    maxHeight="3rem"
                    maxWidth="3rem"
                    fill="currentColor"
                  />
                ) : (
                  <SunSVG
                    width="1rem"
                    maxHeight="3rem"
                    maxWidth="3rem"
                    fill="currentColor"
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Box>
        {isMobile && <MobileMenu />}
      </Box>
    </Box>
  );
};

export default Header;
