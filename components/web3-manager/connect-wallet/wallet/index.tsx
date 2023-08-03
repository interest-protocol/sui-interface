import {
  Box,
  darkTheme,
  lightTheme,
  Motion,
  Typography,
} from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC, ReactNode } from 'react';
import { v4 } from 'uuid';

import { TimesSVG } from '@/components/svg/v2';

import { IWalletItem, WalletListSectionProps } from '../connect-wallet.types';
import WalletItem from './wallet-item';

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

const DEFAULT_WALLETS: Array<IWalletItem> = [
  {
    name: 'Sui Wallet',
    installLink:
      'https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil',
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjcyIiBoZWlnaHQ9IjcyIiByeD0iMTYiIGZpbGw9IiM2RkJDRjAiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC40MjEzIDUyLjc4MzhDMjMuNjQ5NiA1OC4zNzYgMjkuNDMyMSA2MS43MTQyIDM1Ljg4ODggNjEuNzE0MkM0Mi4zNDU1IDYxLjcxNDIgNDguMTI3IDU4LjM3NiA1MS4zNTY0IDUyLjc4MzhDNTQuNTg0OCA0Ny4xOTI2IDU0LjU4NDggNDAuNTE2MyA1MS4zNTY0IDM0LjkyNEwzNy43NTI0IDExLjM2MTVDMzYuOTI0MSA5LjkyNzAxIDM0Ljg1MzUgOS45MjcwMSAzNC4wMjUzIDExLjM2MTVMMjAuNDIxMyAzNC45MjRDMTcuMTkyOSA0MC41MTUyIDE3LjE5MjkgNDcuMTkxNSAyMC40MjEzIDUyLjc4MzhaTTMyLjA1NjYgMjIuNTcxM0wzNC45NTcxIDE3LjU0NzRDMzUuMzcxMiAxNi44MzAxIDM2LjQwNjUgMTYuODMwMSAzNi44MjA2IDE3LjU0NzRMNDcuOTc5MSAzNi44NzQ4QzUwLjAyOTEgNDAuNDI1NCA1MC40MTM5IDQ0LjUzNSA0OS4xMzM1IDQ4LjI5NTRDNDkuMDAwMiA0Ny42ODE5IDQ4LjgxMzggNDcuMDU0MiA0OC41NjI2IDQ2LjQyMDFDNDcuMDIxMyA0Mi41MzA0IDQzLjUzNjMgMzkuNTI4OSAzOC4yMDIzIDM3LjQ5ODJDMzQuNTM1MSAzNi4xMDcxIDMyLjE5NDMgMzQuMDYxMyAzMS4yNDMxIDMxLjQxNzFDMzAuMDE4IDI4LjAwODkgMzEuMjk3NiAyNC4yOTI0IDMyLjA1NjYgMjIuNTcxM1pNMjcuMTEwNyAzMS4xMzc5TDIzLjc5ODYgMzYuODc0OEMyMS4yNzQ4IDQxLjI0NTkgMjEuMjc0OCA0Ni40NjQxIDIzLjc5ODYgNTAuODM1M0MyNi4zMjIzIDU1LjIwNjQgMzAuODQxMyA1Ny44MTUgMzUuODg4OCA1Ny44MTVDMzkuMjQxMyA1Ny44MTUgNDIuMzYxNSA1Ni42NjMzIDQ0LjgxODQgNTQuNjA4OEM0NS4xMzg4IDUzLjgwMjEgNDYuMTMxIDUwLjg0OTIgNDQuOTA1MiA0Ny44MDU4QzQzLjc3MyA0NC45OTU0IDQxLjA0ODIgNDIuNzUxOSAzNi44MDYxIDQxLjEzNkMzMi4wMTEgMzkuMzE3MSAyOC44OTU4IDM2LjQ3NzQgMjcuNTQ4NiAzMi42OTg0QzI3LjM2MzEgMzIuMTc4MSAyNy4yMTg5IDMxLjY1NjggMjcuMTEwNyAzMS4xMzc5WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+',
  },
  {
    name: 'Martian Sui Wallet',
    installLink:
      'https://chrome.google.com/webstore/detail/martian-wallet-for-sui-ap/efbglgofoippbgcjepnhiblaibcnclgk',
    icon: 'https://cdn.martianwallet.xyz/assets/icon.png',
  },
  {
    name: 'Ethos Wallet',
    installLink:
      'https://chrome.google.com/webstore/detail/ethos-sui-wallet/mcbigmjiafegjnnogedioegffbooigli',
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAzIiBoZWlnaHQ9IjIwNCIgdmlld0JveD0iMCAwIDIwMyAyMDQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHk9IjAuOTYwMjA1IiB3aWR0aD0iMjAyLjQ2OSIgaGVpZ2h0PSIyMDIuNDY5IiByeD0iNTcuMDc2NCIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTYwLjE0NTYgNTguODcxSDEyMC4wODNDMTI0Ljk1MSA1OC44NzEgMTI4Ljg5NyA2Mi44NzYxIDEyOC44OTcgNjcuODE2NlYxMzcuMzExQzEyOC44OTcgMTQyLjI1MSAxMjQuOTUxIDE0Ni4yNTYgMTIwLjA4MyAxNDYuMjU2SDYwLjE0NTZDNTUuMjc3MyAxNDYuMjU2IDUxLjMzMDggMTQyLjI1MSA1MS4zMzA4IDEzNy4zMTFWNjcuODE2NkM1MS4zMzA4IDYyLjg3NjEgNTUuMjc3MyA1OC44NzEgNjAuMTQ1NiA1OC44NzFaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfOTcxXzIyMjA0KSIvPgo8cGF0aCBkPSJNNjEuMzQ4NiA1OS41NDc1TDEwMy42MTYgNzkuNTA3MkMxMDYuMTAzIDgwLjY4MTQgMTA3LjY5MyA4My4yMTIzIDEwNy42OTMgODUuOTk1NlYxNTguMDA5QzEwNy42OTMgMTYzLjE4NyAxMDIuNDQxIDE2Ni42NTIgOTcuNzc4IDE2NC41NDlMNTUuNTEwMyAxNDUuNDkxQzUyLjk2MzMgMTQ0LjM0MiA1MS4zMjE4IDE0MS43NzkgNTEuMzIxOCAxMzguOTUxVjY2LjAzNkM1MS4zMjE4IDYwLjgwMzYgNTYuNjc0IDU3LjM0MDEgNjEuMzQ4NiA1OS41NDc1WiIgZmlsbD0iIzlBNDJGRiIvPgo8cGF0aCBkPSJNMTQxLjk5IDM0LjAxMjFMMTQyLjg3MyAzNi4zOTczQzE0NC45NTIgNDIuMDE2NSAxNDkuMzgzIDQ2LjQ0NjggMTU1LjAwMiA0OC41MjZMMTU3LjM4NyA0OS40MDg3TDE1NS4wMDIgNTAuMjkxM0MxNDkuMzgzIDUyLjM3MDUgMTQ0Ljk1MiA1Ni44MDA5IDE0Mi44NzMgNjIuNDJMMTQxLjk5IDY0LjgwNTJMMTQxLjEwOCA2Mi40MkMxMzkuMDI5IDU2LjgwMDkgMTM0LjU5OCA1Mi4zNzA1IDEyOC45NzkgNTAuMjkxM0wxMjYuNTk0IDQ5LjQwODdMMTI4Ljk3OSA0OC41MjZDMTM0LjU5OCA0Ni40NDY4IDEzOS4wMjkgNDIuMDE2NSAxNDEuMTA4IDM2LjM5NzNMMTQxLjk5IDM0LjAxMjFaIiBmaWxsPSIjOUE0MkZGIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfOTcxXzIyMjA0IiB4MT0iMTQwLjI4IiB5MT0iNDIuODk5NyIgeDI9IjYxLjU4NiIgeTI9IjEzNi45OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjOUE0MkZGIiBzdG9wLW9wYWNpdHk9IjAuNzQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOUE0MkZGIiBzdG9wLW9wYWNpdHk9IjAuMDUiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K',
  },
  {
    name: 'Nightly',
    installLink: 'https://linktr.ee/nightlyapp',
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAxIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMSAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjM5MDYyNSAxMDBDMC4zOTA2MjUgNDQuNzcxNSA0NS4xNjIyIDAgMTAwLjM5MSAwQzE1NS42MTkgMCAyMDAuMzkxIDQ0Ljc3MTUgMjAwLjM5MSAxMDBDMjAwLjM5MSAxNTUuMjI4IDE1NS42MTkgMjAwIDEwMC4zOTEgMjAwQzQ1LjE2MjIgMjAwIDAuMzkwNjI1IDE1NS4yMjggMC4zOTA2MjUgMTAwWiIgZmlsbD0iIzYwNjdGOSIvPgo8cGF0aCBkPSJNMTQ2LjgzOCA0MEMxMzguMDU0IDUyLjI2MDcgMTI3LjA2MSA2MC43NjM0IDExNC4wNzIgNjYuNDQ3NEMxMDkuNTYzIDY1LjIwMjYgMTA0LjkzNiA2NC41Njg0IDEwMC4zNzkgNjQuNjE1NEM5NS44MjIzIDY0LjU2ODQgOTEuMTk1MSA2NS4yMjYxIDg2LjY4NTUgNjYuNDQ3NEM3My42OTY2IDYwLjczOTkgNjIuNzA0MiA1Mi4yODQyIDUzLjkxOTggNDBDNTEuMjY1NiA0Ni42NzA2IDQxLjA0ODMgNjkuNjg4OCA1My4zMDkxIDEwMS44NjdDNTMuMzA5MSAxMDEuODY3IDQ5LjM4NjYgMTE4LjY2MSA1Ni41OTc0IDEzMy4wODNDNTYuNTk3NCAxMzMuMDgzIDY3LjAyNiAxMjguMzYyIDc1LjMxNzMgMTM1LjAwOUM4My45ODQzIDE0Mi4wMzIgODEuMjEyOCAxNDguNzk2IDg3LjMxOTYgMTU0LjYyMUM5Mi41ODA5IDE2MCAxMDAuNDAyIDE2MCAxMDAuNDAyIDE2MEMxMDAuNDAyIDE2MCAxMDguMjI0IDE2MCAxMTMuNDg1IDE1NC42NDVDMTE5LjU5MiAxNDguODQzIDExNi44NDQgMTQyLjA3OSAxMjUuNDg4IDEzNS4wMzJDMTMzLjc1NSAxMjguMzg1IDE0NC4yMDcgMTMzLjEwNiAxNDQuMjA3IDEzMy4xMDZDMTUxLjM5NSAxMTguNjg1IDE0Ny40OTYgMTAxLjg5MSAxNDcuNDk2IDEwMS44OTFDMTU5LjcxIDY5LjY4ODggMTQ5LjUxNiA0Ni42NzA2IDE0Ni44MzggNDBaTTU5LjgzODcgOTcuNDI4MUM1My4xNjgxIDgzLjczNDYgNTEuMzM2MSA2NC45NDQyIDU1LjU0MDQgNTAuMDk5OEM2MS4xMDcxIDY0LjE5MjYgNjguNjcwMiA3MC41MTA5IDc3LjY2NjEgNzcuMTgxNEM3My44NjEgODUuMDk2OSA2Ni42OTcyIDkyLjU2NjEgNTkuODM4NyA5Ny40MjgxWk03OS4wMjg0IDEyMS41NUM3My43NjcxIDExOS4yMjUgNzIuNjYzMSAxMTQuNjQ1IDcyLjY2MzEgMTE0LjY0NUM3OS44MjcgMTEwLjEzNSA5MC4zNzMxIDExMy41ODggOTAuNzAxOSAxMjQuMjUxQzg1LjE1ODcgMTIwLjg5MyA4My4zMDMyIDEyMy40MDYgNzkuMDI4NCAxMjEuNTVaTTEwMC4zNzkgMTU5LjQxM0M5Ni42MjA5IDE1OS40MTMgOTMuNTY3NCAxNTYuNzEyIDkzLjU2NzQgMTUzLjRDOTMuNTY3NCAxNTAuMDg4IDk2LjYyMDkgMTQ3LjM4NyAxMDAuMzc5IDE0Ny4zODdDMTA0LjEzNyAxNDcuMzg3IDEwNy4xOSAxNTAuMDg4IDEwNy4xOSAxNTMuNEMxMDcuMTkgMTU2LjczNSAxMDQuMTM3IDE1OS40MTMgMTAwLjM3OSAxNTkuNDEzWk0xMjEuNzUzIDEyMS41NUMxMTcuNDc4IDEyMy40MjkgMTE1LjY0NiAxMjAuODkzIDExMC4wNzkgMTI0LjI1MUMxMTAuNDMyIDExMy41ODggMTIwLjkzMSAxMTAuMTM1IDEyOC4xMTggMTE0LjY0NUMxMjguMTE4IDExNC42MjEgMTI2Ljk5MSAxMTkuMjI1IDEyMS43NTMgMTIxLjU1Wk0xNDAuOTE5IDk3LjQyODFDMTM0LjA4NCA5Mi41NjYxIDEyNi44OTcgODUuMTIwNCAxMjMuMDY4IDc3LjE4MTRDMTMyLjA2NCA3MC41MTA5IDEzOS42NTEgNjQuMTY5MSAxNDUuMTk0IDUwLjA5OThDMTQ5LjQ0NSA2NC45NDQyIDE0Ny42MTMgODMuNzU4MSAxNDAuOTE5IDk3LjQyODFaIiBmaWxsPSIjRjdGN0Y3Ii8+Cjwvc3ZnPgo=',
  },
  {
    name: 'Spacecy Wallet',
    installLink:
      'https://chrome.google.com/webstore/detail/spacecy-wallet/mkchoaaiifodcflmbaphdgeidocajadp',
    icon: 'https://spacecywallet.com/favicon.ico',
  },
];

const WalletListSection: FC<WalletListSectionProps> = ({
  setOpenWallet,
  openWalletModal,
}) => {
  const t = useTranslations();
  const { wallets } = useWalletKit();

  console.log('>> wallets :: ', wallets);

  const mixedWallets: Array<IWalletItem> = wallets
    .reduce((acc, { name, icon }) => {
      return [
        {
          name,
          icon,
        },
        ...acc.filter((item) => item.name !== name),
      ];
    }, DEFAULT_WALLETS)
    .sort(({ installLink }) => (installLink ? 1 : -1));

  return (
    <Box
      color="text"
      height="100vh"
      overflowY="auto"
      maxHeight="100vh"
      borderTopRightRadius={[0, 0, 0, 32]}
      background={lightTheme.colors.surface}
      borderBottomRightRadius={[0, 0, 0, 32]}
      width={['100%', '100%', '100%', '50%']}
    >
      <Box
        display="flex"
        variant="container"
        flexDirection="column"
        minHeight="calc(98.9vh - 8.5rem)"
      >
        <Box display="grid" gridColumn="1/-1" height="100%" margin={0}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box
              mx="auto"
              width="100%"
              px={['unset', 'unset', 'unset', '15%']}
              pt={['0rem', '0rem', '0rem', '8.125rem']}
            >
              <Motion
                p=".8rem"
                as="span"
                border="1px solid"
                borderRadius="50%"
                width="fit-content"
                alignItems="center"
                margin="1.5rem 0 1.5rem auto"
                justifyContent="center"
                animate={menuVariants.open}
                initial={menuVariants.closed}
                color={['black', 'black', 'black', 'white']}
                display={['flex', 'flex', 'flex', 'none']}
                borderColor={darkTheme.colors['outline.outlineVariant']}
                cursor="pointer"
                onClick={() => setOpenWallet(false)}
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
                color="black"
              >
                {t('common.v2.connectWallet.title')}
              </Typography>
              <Typography
                variant="small"
                color="black"
                mb={['2xl', '2xl', '2xl', '3.5rem']}
              >
                {t('common.v2.connectWallet.subtitle')}
              </Typography>
              <Box>
                {mixedWallets.map(({ icon, name, installLink }) => (
                  <WalletItem
                    key={v4()}
                    icon={icon}
                    name={name}
                    installLink={installLink}
                    openWalletModal={openWalletModal}
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
          {t.rich('common.v2.connectWallet.footer', {
            termsAndService: (chunks: ReactNode) => (
              <a href="/" target="_blank" rel="noopener noreferrer">
                <Typography
                  variant="extraSmall"
                  as="span"
                  color={lightTheme.colors.primary}
                >
                  {chunks}
                </Typography>
              </a>
            ),
            privacyPolicy: (chunks: ReactNode) => (
              <a href="/" target="_blank" rel="noopener noreferrer">
                <Typography
                  variant="extraSmall"
                  as="span"
                  color={lightTheme.colors.primary}
                >
                  {chunks}
                </Typography>
              </a>
            ),
          })}
        </Typography>
      </Box>
    </Box>
  );
};

export default WalletListSection;
