import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Container, SocialMediaCard } from '@/components';
import { Routes, RoutesEnum, SOCIAL_MEDIAS } from '@/constants';
import { Box, Button } from '@/elements';
import { DexSVG, FaucetSVG, GitBookSVG } from '@/svg';

const Footer: FC = () => {
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
          <Link href={Routes[RoutesEnum.DEX]}>
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
                pathname.includes(Routes[RoutesEnum.DEX])
                  ? 'accentActive'
                  : 'transparent'
              }
              hover={{ bg: 'accent', color: 'text' }}
              active={{ bg: 'accentActive', color: 'text' }}
              color={
                pathname.includes(Routes[RoutesEnum.DEX]) ? 'textSoft' : 'text'
              }
            >
              <DexSVG
                width="1.1rem"
                height="1.1rem"
                fill="currentColor"
                maxHeight={'2.5rem'}
                maxWidth={'auto'}
                style={{ marginBottom: '8px' }}
              />
              Dex
            </Button>
          </Link>
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
              hover={{ bg: 'accent', color: 'text' }}
              active={{ bg: 'accentActive', color: 'text' }}
              color={
                pathname.includes(Routes[RoutesEnum.Faucet])
                  ? 'textSoft'
                  : 'text'
              }
            >
              <FaucetSVG
                width="1.1rem"
                height="1.1rem"
                maxHeight={'2.5rem'}
                maxWidth={'auto'}
                style={{ marginBottom: '8px' }}
              />
              Faucet
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
