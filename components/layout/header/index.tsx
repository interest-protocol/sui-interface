import { useTheme } from '@emotion/react';
import { Network } from '@interest-protocol/sui-amm-sdk';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC, useCallback, useState } from 'react';

import { SwitchLang } from '@/components';
import { Routes, RoutesEnum } from '@/constants';
import { Box, Typography } from '@/elements';
import { useNetwork } from '@/hooks';
import useEventListener from '@/hooks/use-event-listener';
import { LogoSVG, MoonSVG, SunSVG } from '@/svg';

import FeedbackButton from './feedback-button';
import MobileMenu from './mobile-menu';
import SelectNetwork from './select-network';
import Wallet from './wallet';

const Header: FC = () => {
  const t = useTranslations();
  const { network } = useNetwork();
  const { pathname } = useRouter();
  const { setDark, dark } = useTheme() as any;

  const [isMobile, setIsMobile] = useState(false);

  const handleSetDesktop = useCallback(() => {
    const mediaIsMobile = !window.matchMedia('(min-width: 55em)').matches;
    setIsMobile(mediaIsMobile);
  }, []);

  useEventListener('resize', handleSetDesktop, true);

  const handleChangeTheme = () => setDark(!dark);

  return (
    <Box>
      <Box bg={dark ? 'bottomBackground' : 'accentActive'} p="L">
        <Link href={Routes[RoutesEnum.LiquidityCampaign]}>
          <Typography
            fontSize="S"
            fontWeight="600"
            variant="normal"
            textAlign="center"
            color={dark ? 'text' : 'textSoft'}
          >
            {t('common.bannerHeader')}
          </Typography>
        </Link>
      </Box>
      <Box
        py="M"
        as="header"
        bg="foreground"
        px={['M', 'L']}
        alignItems="center"
        justifyContent="space-between"
        display={['flex', 'flex', 'flex', 'grid']}
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
              nHover={{ color: 'accent' }}
              nActive={{ color: 'accentActive' }}
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
          <Box display={['none', 'none', 'flex']}>
            <FeedbackButton />
          </Box>
        </Box>
        <Box
          alignItems="center"
          justifyContent="center"
          display={['none', 'none', 'flex']}
        >
          <Link href={Routes[RoutesEnum.Swap]}>
            <Typography
              px="XL"
              cursor="pointer"
              variant="normal"
              borderRight="1px solid"
              borderColor="bottomBackground"
              color={
                pathname.includes(Routes[RoutesEnum.Swap])
                  ? 'accent'
                  : 'inherit'
              }
              nHover={{ color: 'accentActive' }}
            >
              DEX
            </Typography>
          </Link>
          {network === Network.MAINNET && (
            <Box
              alignItems="center"
              justifyContent="center"
              display={['none', 'none', 'flex']}
            >
              <Link href={Routes[RoutesEnum.LiquidityFarms]}>
                <Typography
                  px="XL"
                  cursor="pointer"
                  variant="normal"
                  borderRight="1px solid"
                  textTransform="uppercase"
                  borderColor="bottomBackground"
                  color={
                    pathname.includes(Routes[RoutesEnum.LiquidityFarms])
                      ? 'accent'
                      : 'inherit'
                  }
                  nHover={{ color: 'accentActive' }}
                >
                  {t('common.liquidity')}
                </Typography>
              </Link>
            </Box>
          )}
          {network !== Network.MAINNET && (
            <Link href={Routes[RoutesEnum.Farms]}>
              <Typography
                px="XL"
                cursor="pointer"
                variant="normal"
                borderRight="1px solid"
                borderColor="bottomBackground"
                color={
                  pathname.includes(Routes[RoutesEnum.Farms])
                    ? 'accent'
                    : 'inherit'
                }
                nHover={{ color: 'accentActive' }}
              >
                FARMS
              </Typography>
            </Link>
          )}
          {network !== Network.MAINNET && (
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
                nHover={{ color: 'accentActive' }}
              >
                FAUCET
              </Typography>
            </Link>
          )}
          {network === Network.MAINNET && (
            <a
              target="_blank"
              href={Routes[RoutesEnum.Bridge]}
              rel="noreferrer"
            >
              <Typography
                px="XL"
                cursor="pointer"
                variant="normal"
                color={
                  pathname.includes(Routes[RoutesEnum.Faucet])
                    ? 'accent'
                    : 'inherit'
                }
                nHover={{ color: 'accentActive' }}
              >
                BRIDGE
              </Typography>
            </a>
          )}
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Box>
            <SelectNetwork />
          </Box>
          <Wallet />
          <Box display="flex" justifyContent="flex-end" alignItems="stretch">
            {!isMobile && (
              <Box display="flex" alignItems="stretch">
                <SwitchLang isMobile={false} />
                <Box
                  px="S"
                  height="2.8rem"
                  alignItems="center"
                  display="inline-flex"
                  justifyContent="center"
                  onClick={handleChangeTheme}
                  color="text"
                  cursor="pointer"
                  nHover={{ color: 'accent' }}
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
            )}
          </Box>
        </Box>
        {isMobile && <MobileMenu dark={dark} changeTheme={handleChangeTheme} />}
      </Box>
    </Box>
  );
};

export default Header;
