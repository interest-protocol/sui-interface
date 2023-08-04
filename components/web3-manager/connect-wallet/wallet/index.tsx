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
    name: 'Sui Wallet',
    installLink: 'https://foxwallet.com/download',
    icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDciIHZpZXdCb3g9IjAgMCA0NSA0NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy43Nzg5IDI2LjEzNDRDMTcuODggMjYuMTY3NSAxNy45ODQ0IDI2LjE4OTcgMTguMDkwMiAyNi4yMDA4QzE4LjA5MDIgMjYuMjAwOCAxNy42NTE3IDI2LjM2NTEgMTYuNzQ0NSAyNi4wNTc5QzE2Ljc0NDUgMjYuMDU3OSAxNi4wNjU3IDI1Ljc4MTcgMTUuNTU2OSAyNS44MjgxQzE0Ljk2NiAyNS44ODE1IDE0LjU1ODUgMjYuNjQ5NyAxNC41NTg1IDI2LjY0OTdDMTQuNjc1MiAyNi41ODY1IDE0Ljc5OTEgMjYuNTM3NyAxNC45Mjc1IDI2LjUwNDFDMTUuMzMwMSAyNi40MjIzIDE1LjE5MTEgMjYuNDkwNiAxNS4xOTExIDI2LjQ5MDZDMTUuMTkxMSAyNi40OTA2IDE0LjQxNyAyNi44MTUgMTQuMzY0MyAyNy4xMDM1QzE0LjM1MTcgMjcuMTc1NSAxNC41Njg1IDI2Ljk3MjMgMTUuMTQwOSAyNi45OTAzQzE1Ljg0MzkgMjcuMDEyNCAxNi40NTQ5IDI3LjQyMDQgMTYuNzA1OSAyNy40ODc3QzE3LjIyMDYgMjcuNjI1NCAxNy45NTg4IDI3LjY1NjggMTguNjM1OSAyNy4xMjU5QzE4LjYzNTkgMjcuMTI1OSAxOS4yNjEgMjYuNzMzOCAxOS40NTQ0IDI2LjAwOTRDMTkuNTA0NCAyNS44MDg0IDE5LjUzMzggMjUuNjAyOSAxOS41NDIyIDI1LjM5NkMxOS41NDU0IDI1LjIxMzkgMTkuNTI2OCAyNS4wMzIxIDE5LjQ4NyAyNC44NTQ0QzE5LjQ4NyAyNC44NTQ0IDE5LjEyMTMgMjUuNzAxMyAxNy43Nzg5IDI2LjEzNDRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMxLjA3NDYgMzQuMDgwMUMzMi40Mzg0IDMyLjM3MDUgMzMuMTgxMSAzMC4yNDgzIDMzLjE4MTEgMjguMDYxM0MzMy4xODExIDI1Ljg3NDMgMzIuNDM4NCAyMy43NTIyIDMxLjA3NDYgMjIuMDQyNUwzOS44MTExIDIxLjA4MTVDMzkuODExMSAyMS4wODE1IDQwLjcxOTIgMjMuNTcxOSA0MC45NTg1IDI0LjkwMzVDNDAuOTg5NSAyNS4wNzQyIDQxLjA0MyAyNS40MTc5IDQxLjA0MyAyNS40MTc5QzQxLjA0MyAyNS40MTc5IDM5LjY4ODEgMjguNzA3OSAzNy42MDc1IDMwLjUxNTdDMzQuODExNCAzMi45NDU1IDMxLjA3NDYgMzQuMDgwMSAzMS4wNzQ2IDM0LjA4MDFaTTEwLjM4NjggMzMuOTYwMUw3LjAzODE0IDM0LjU4MDlDNS45NzU1IDMxLjg4OTkgNS41ODcyIDI4Ljk3OTkgNS45MDcxMiAyNi4xMDQ1QzYuMjI3MDMgMjMuMjI5MSA3LjI0NTQ0IDIwLjQ3NTYgOC44NzM1NiAxOC4wODRDOC45NDQyOCAxNy45ODAzIDkuMDg5MDYgMTcuNzc1NCA5LjA4OTA2IDE3Ljc3NTRMMTIuNzg5IDI4LjE5NTNMMTAuMzg2OCAzMy45NjAxWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzBfMSkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMi41MDA2IDEyLjU5MTNDMjIuNTExNSAxMi41NzcxIDIyLjUyMDcgMTIuNTcwOCAyMi41MzI0IDEyLjU1NjVDMjIuNjIyIDEyLjQ2MTggMjQuNzAwOCAxMC4yMjQ3IDIyLjIyMTkgNi40NDEwOEMyMC4zOTI0IDMuNjUwOTEgMTUuNzM0MiAzLjcyOTQ5IDEzLjgzMjggMi4yNzczN0MxMy45NzM0IDMuMzk1OSAxNS4wNjk3IDQuNDA0MTMgMTQuOTUwOSA1LjkzNjkyQzE0LjkwNDMgNi40NDIwNyAxNC44MDk4IDYuOTQxNjYgMTQuNjY4OCA3LjQyODk2QzE0LjQ0MiA4LjMwNDAzIDE0LjIzMjggOS4xMzM3NSAxNC41NDY2IDEwLjc2NDdDMTQuNzkxOSAxMi4wMzU0IDE1LjM3MSAxMi45NjI1IDE2LjI2OTggMTMuNTIwNUMxNy4yOTg0IDE0LjE1ODIgMTguNzIyOCAxNC4yOTgzIDIwLjE4NDEgMTMuOTAwOUMyMS4xNjMyIDEzLjYzNDYgMjIuMDI5NCAxMy4xNDI3IDIyLjUwMDYgMTIuNTkxM1oiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8wXzEpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUuNjAyMSAxMC45NTk0QzI2LjEzNjEgMTAuMDM3OSAyNi4yMzc0IDguOTYyNzYgMjUuOTA5MyA3Ljc3MDI1QzI1LjQ1MjMgNi4xMDQxNCAyNC41Nzk0IDUuMDExNjQgMjMuODc1NiA0LjEzMzE0QzIzLjY1NTUgMy44NTUxMSAyMy40NDcxIDMuNTk1OTMgMjMuMjgwNiAzLjM1MTU1QzIyLjYxMTQgMi4zNzEwNyAyMi4zMjMgMS4xODAwNyAyMi40Njk2IDAuMDAyMDc1MkMyMS42MjEgMC42MTE4NDYgMTkuOTg4MiAxLjc2NTI3IDE4Ljk0MjkgMi45OTI4NUMyMC40NTE4IDMuNzE1NiAyMS42MjkzIDQuNTA0MyAyMi41NjI1IDUuOTI1ODhDMjQuMTUwMSA4LjM0NzA1IDI0LjEyNSAxMC4zMDQxIDIzLjgyMzcgMTEuNTE5MUMyMy43MzkyIDExLjg1MzkgMjQuMzc5NCAxMi4xNSAyNC4yNjA2IDEyLjQwOTJDMjQuODAyOCAxMi4wMjM0IDI1LjI1OTUgMTEuNTI5OCAyNS42MDIxIDEwLjk1OTRaIiBmaWxsPSJ1cmwoI3BhaW50Ml9saW5lYXJfMF8xKSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM3LjE3MzIgMjEuMDE4MkMzNS4zOTg5IDIwLjg0OTQgMzEuODA1MyAyMC40MTI1IDMxLjgwNTMgMjAuNDEyNUMyMy43MjI0IDE5Ljk2MjIgMTkuMTM1MyAyMi4zODgxIDE1LjY3MTMgMjUuNTYyQzEyLjk5ODMgMjguMjE2MiAxMC42MTgxIDM1LjA5ODkgMTAuNjE4MSAzNS4wOTg5TDcuNzIyOSAzNC45NDE4QzcuNzIyOSAzNC45NDE4IDguNjQ1NDIgMzIuMTk1NCA5LjcxMTIzIDMwLjE5NzdDMTAuOTMzMSAyNy45MDc0IDExLjIwNzYgMjguMDk0NiAxMC45MzAyIDI3LjcxMzJDOS42MzgyNSAyNS45MzczIDkuMDMyODMgMjQuNTQxNyA4LjUxMzI3IDIxLjU1NjZDOC41MTMyNyAyMS41NTY2IDkuMTIxMDQgMjIuMDMzNyA5LjU4MDc1IDIxLjc0MjRDOS41ODA3NSAyMS43NDI0IDguNTM2NTQgMTkuOTMgOC4zNzU2MSAxNy45NzUzQzguMDkwMyAxNC41MSA5LjcxMzIzIDkuNzggOS43NTA5IDkuNjcwODdDOS43MzU0MSA5LjcyMDUgOS42NDg1NCAxMC4xMjcyIDEwLjYwMDkgMTAuNzM0MkMxMC42NjkxIDEwLjQ0NzcgMTAuNzQxMyAxMC4xNjc1IDEwLjgxNzYgOS44OTM4MkMxMS4xNTM0IDguMjU4OTIgMTIuMDQ4NCA0LjY5MDUxIDEzLjgzOTQgMi4yNzExOEMxMy44Mzk0IDIuMjcxMTggMTQuODQxMSA1Ljc2ODg3IDE3LjM1NjkgNy4zNTUzOUMyMi4yNTQ1IDEwLjQ0NDggMjUuMzIwOSAxMC40NjE0IDI1LjMyMDkgMTAuNDYxNEMzMi4yMzk2IDExLjIzNSAzNS4xOTM5IDE0LjYyOTIgMzUuMTkzOSAxNC42MjkyQzQwLjE1OTMgMTkuOTg1NCA0NC42Njk0IDE5LjkzNTIgNDQuNjY5NCAxOS45MzUyQzQzLjA0OTEgMjEuNDg0NSAzNy4xNzMyIDIxLjAxODIgMzcuMTczMiAyMS4wMTgyWk05Ljc1MDkgOS42NzA4N0M5Ljc1MTM5IDkuNjY5MTQgOS43NTE5OCA5LjY2NzQzIDkuNzUyNjUgOS42NjU3Nkw5Ljc1MDkgOS42NzA4N1oiIGZpbGw9InVybCgjcGFpbnQzX2xpbmVhcl8wXzEpIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDQuNzUzOSAxOS45MzZDNDQuNzUzOSAxOS45MzYgNDQuMDUwMSAyMy44MzI0IDQwLjM1ODUgMjQuMjg2OEM0MC4zNTg1IDI0LjI4NjggMjYuOTczIDI0LjIwMDUgMjUuOTk3MSAzNi4zNjAzTDI1Ljc3MDMgMzkuNzc2M0w5LjcxMjE2IDM1LjA5NjJDOS43MTIxNiAzNS4wOTYyIDExLjIyNjUgMjkuOTMzMiAxNC41MzU3IDI1Ljc4OEMxNC41MzU3IDI1Ljc4OCAyMC4xNTY0IDE3Ljg0NzUgMzYuMTczOSAxOS45Mzk4QzM2LjE3MzkgMTkuOTM5OCAzOC4wNDQ0IDIwLjMxNjUgNDAuNjY5IDIwLjU2MjNDNDIuODg2OCAyMC43Njk5IDQ0Ljc1MzkgMTkuOTM2IDQ0Ljc1MzkgMTkuOTM2WiIgZmlsbD0idXJsKCNwYWludDRfbGluZWFyXzBfMSkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNS42NDY1IDE4LjA4MjlDMzUuNjQ2NSAxOC4wODI5IDMyLjE2OTEgMTYuMjc0MiAyNy44NDQgMTYuNDQ0OUMyNy44NDQgMTYuNDQ0OSAzMC4xOTY1IDE0LjYwNjYgMzMuMzc2IDE1LjA1NTdMMzUuNjQ2NSAxOC4wODI5WiIgZmlsbD0iIzcyMkIwMCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2Ljg1NTkgMzQuNjkzN0MyNi44NTU5IDM0LjY5MzcgMjcuOTg2NSAzNS40NzQyIDI5Ljc4MjUgMzUuMDU5NkMyOS43ODI1IDM1LjA1OTYgMjYuODgxIDM2Ljc0MTggMjAuNzY1NyAzNC40MzU0QzIwLjc2NTcgMzQuNDM1NCAxNC40NTg3IDMxLjYxNDMgMTAuMDIyMyAzMi4yNTc2QzcuMTcwNzggMzIuNjcxIDQuNjQ5MzUgMzQuOTM2NSAzLjEyMjQxIDM2LjY2MTNDMS4yNzc1MyAzOC43NDUyIDEuNTA3MTggMzcuNzcxIDYuMTQwMyAzNy4xOTc2QzcuMjU0MDYgMzcuMDU5OCA2LjYxMjY1IDM3LjM3NjUgNi42MTI2NSAzNy4zNzY1QzYuNjEyNjUgMzcuMzc2NSAwLjQyMjcxMiAzOS45NjkzIDAuMDA0NDI1MzEgNDIuMjc1NUMtMC4xMDAwMjEgNDIuODUxMiAxLjYzNDk3IDQxLjIyNjQgNi4yMTAxOCA0MS4zNzA0QzExLjgyNjcgNDEuNTQ3MyAxNi43MTM0IDQ0LjgwOSAxOC43MjI4IDQ1LjM0NjdDMjIuODM2MiA0Ni40NDcyIDI4LjczNjQgNDYuNjk4NCAzNC4xNDg3IDQyLjQ1NEMzNC4xNDg3IDQyLjQ1NCAzOS4xNDMzIDM5LjMyMDMgNDAuNjg3NCAzMy41Mjk4QzQxLjA4OTIgMzEuOTIzMyA0MS4zMjU5IDMwLjI4IDQxLjM5MzggMjguNjI1NUM0MS40NzU4IDI2LjQ2OTQgNDAuODE5NyAyNC4xOTk1IDQwLjgxOTcgMjQuMTk5NUM0MC44MTk3IDI0LjE5OTUgMzcuMTY5OSAzMi4yODQ2IDI2Ljg1NTkgMzQuNjkzN1oiIGZpbGw9InVybCgjcGFpbnQ1X2xpbmVhcl8wXzEpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMF8xIiB4MT0iMjIuNzIyIiB5MT0iMTcuMjQyNCIgeDI9IjIzLjQyMDciIHkyPSIzNC41ODA5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNEQURCNDgiLz4KPHN0b3Agb2Zmc2V0PSIwLjY1NjI1IiBzdG9wLWNvbG9yPSIjNjM3NjIxIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8wXzEiIHgxPSIyMy40MzM0IiB5MT0iOS4xNjYyMSIgeDI9IjE0LjkzODgiIHkyPSI5LjE2NjIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNFQzZGMDEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjRCMjNEIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl8wXzEiIHgxPSIyNC4xNDQ4IiB5MT0iOS41NDI4MyIgeDI9IjIzLjY0MjYiIHkyPSIxLjM0MTEzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGNEIzM0UiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkI2RjFCIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhcl8wXzEiIHgxPSIxMC41ODY4IiB5MT0iOS41ODQ2OCIgeDI9IjQwLjQ2NDQiIHkyPSIyMS4zODUxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGQjZEMUEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjNCMjNFIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ0X2xpbmVhcl8wXzEiIHgxPSIxMy43MjUyIiB5MT0iMzMuNDM2NiIgeDI9IjQyLjA5NjQiIHkyPSIyMC45NjY3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGM0I2M0YiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkI3MDFDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl8wXzEiIHgxPSIxMi43MjEiIHkxPSI0Ni4wMzE5IiB4Mj0iMzcuMjg0MyIgeTI9IjMwLjcxNjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0VDNkYwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGNEIzM0UiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K',
  },
  {
    name: 'Spacecy Sui Wallet',
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

  const mixedWallets: Array<IWalletItem> = wallets
    .reduce(
      (acc, { name, icon }) => [
        {
          name,
          icon,
        },
        ...acc.filter((item) => item.icon !== icon),
      ],
      DEFAULT_WALLETS
    )
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
