import { Network } from '@interest-protocol/sui-amm-sdk';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Container, SocialMediaCard } from '@/components';
import { Routes, RoutesEnum, SOCIAL_MEDIAS } from '@/constants';
import { Box, Button } from '@/elements';
import { useNetwork } from '@/hooks';
import {
  BridgeSVG,
  DexSVG,
  EarnSVG,
  FaucetSVG,
  GitBookSVG,
  LiquiditySVG,
} from '@/svg';

const Footer: FC = () => {
  const t = useTranslations();
  const { network } = useNetwork();
  const { pathname } = useRouter();

  return (
    <Box
      zIndex={3}
      as="footer"
      id="footer"
      width="100%"
      boxShadow="0 0 0.5rem #0003"
      bottom={['0', '0', '0', 'unset']}
      pt={['NONE', 'NONE', 'XL']}
      pb={['env(safe-area-inset-bottom)', 'env(safe-area-inset-bottom)', 'XL']}
      position={['fixed', 'fixed', 'fixed', 'static']}
      bg={['foreground', 'foreground', 'foreground', 'foreground']}
    >
      <Container dapp width="100%">
        <Box display={['none', 'none', 'flex']} justifyContent="center">
          {[
            ...SOCIAL_MEDIAS,
            {
              title: 'Docs',
              Logo: GitBookSVG,
              link: 'https://docs.interestprotocol.com/',
            },
          ].map((item) => (
            <SocialMediaCard key={v4()} {...item} />
          ))}
        </Box>
        <Box
          alignItems="center"
          justifyContent="center"
          display={['flex', 'flex', 'none']}
        >
          <Link href={Routes[RoutesEnum.Swap]}>
            <Button
              ml="S"
              px="0.8rem"
              fontSize="M"
              display="flex"
              flexDirection="column"
              variant="primary"
              alignItems="center"
              borderRadius="M"
              justifyContent="space-between"
              bg={
                pathname.includes(Routes[RoutesEnum.Swap])
                  ? 'accentActive'
                  : 'transparent'
              }
              nHover={{ bg: 'accent', color: 'text' }}
              nActive={{ bg: 'accentActive', color: 'text' }}
              color={
                pathname.includes(Routes[RoutesEnum.Swap]) ? 'textSoft' : 'text'
              }
            >
              <DexSVG
                width="1.1rem"
                height="1.1rem"
                fill="currentColor"
                maxHeight="2.5rem"
                maxWidth="auto"
                style={{ marginBottom: '8px' }}
              />
              Dex
            </Button>
          </Link>{' '}
          {network === Network.MAINNET && (
            <Link href={Routes[RoutesEnum.LiquidityFarms]}>
              <Button
                ml="S"
                px="0.8rem"
                fontSize="M"
                display="flex"
                flexDirection="column"
                variant="primary"
                alignItems="center"
                borderRadius="M"
                justifyContent="space-between"
                bg={
                  pathname.includes(Routes[RoutesEnum.LiquidityFarms])
                    ? 'accentActive'
                    : 'transparent'
                }
                nHover={{ bg: 'accent', color: 'text' }}
                nActive={{ bg: 'accentActive', color: 'text' }}
                color={
                  pathname.includes(Routes[RoutesEnum.LiquidityFarms])
                    ? 'textSoft'
                    : 'text'
                }
                textTransform="capitalize"
              >
                <LiquiditySVG
                  width="1.1rem"
                  height="1.1rem"
                  fill="currentColor"
                  maxHeight="2.5rem"
                  maxWidth="auto"
                  style={{ marginBottom: '8px' }}
                />
                {t('common.liquidity')}
              </Button>
            </Link>
          )}
          {network !== Network.MAINNET && (
            <Link href={Routes[RoutesEnum.Farms]}>
              <Button
                ml="S"
                px="0.8rem"
                fontSize="M"
                display="flex"
                flexDirection="column"
                variant="primary"
                alignItems="center"
                borderRadius="M"
                justifyContent="space-between"
                bg={
                  pathname.includes(Routes[RoutesEnum.Farms]) ||
                  pathname.includes(Routes[RoutesEnum.FarmDetails])
                    ? 'accentActive'
                    : 'transparent'
                }
                nHover={{ bg: 'accent', color: 'text' }}
                nActive={{ bg: 'accentActive', color: 'text' }}
                color={
                  pathname.includes(Routes[RoutesEnum.Farms]) ||
                  pathname.includes(Routes[RoutesEnum.FarmDetails])
                    ? 'textSoft'
                    : 'text'
                }
              >
                <EarnSVG
                  width="1.1rem"
                  height="1.1rem"
                  stroke="currentColor"
                  fill="transparent"
                  maxHeight="2.5rem"
                  maxWidth="auto"
                  style={{ marginBottom: '8px' }}
                />
                Farms
              </Button>
            </Link>
          )}
          {network !== Network.MAINNET && (
            <Link href={Routes[RoutesEnum.Faucet]}>
              <Button
                ml="S"
                px="0.8rem"
                fontSize="M"
                display="flex"
                flexDirection="column"
                variant="primary"
                alignItems="center"
                justifyContent="space-between"
                borderRadius="M"
                bg={
                  pathname.includes(Routes[RoutesEnum.Faucet])
                    ? 'accentActive'
                    : 'transparent'
                }
                nHover={{ bg: 'accent', color: 'text' }}
                nActive={{ bg: 'accentActive', color: 'text' }}
                color={
                  pathname.includes(Routes[RoutesEnum.Faucet])
                    ? 'textSoft'
                    : 'text'
                }
              >
                <FaucetSVG
                  width="1.1rem"
                  height="1.1rem"
                  maxHeight="2.5rem"
                  maxWidth="auto"
                  style={{ marginBottom: '8px' }}
                />
                Faucet
              </Button>
            </Link>
          )}
          {network === Network.MAINNET && (
            <a
              target="_blank"
              href={Routes[RoutesEnum.Wormhole]}
              rel="noreferrer"
            >
              <Button
                ml="S"
                px="0.8rem"
                fontSize="M"
                display="flex"
                borderRadius="M"
                variant="primary"
                alignItems="center"
                flexDirection="column"
                justifyContent="space-between"
                bg={
                  pathname.includes(Routes[RoutesEnum.Wormhole])
                    ? 'accentActive'
                    : 'transparent'
                }
                nHover={{ bg: 'accent', color: 'text' }}
                nActive={{ bg: 'accentActive', color: 'text' }}
                color={
                  pathname.includes(Routes[RoutesEnum.Wormhole])
                    ? 'textSoft'
                    : 'text'
                }
              >
                <BridgeSVG
                  width="1.1rem"
                  height="1.1rem"
                  maxHeight="2.5rem"
                  maxWidth="auto"
                  style={{ marginBottom: '8px' }}
                />
                Bridge
              </Button>
            </a>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
