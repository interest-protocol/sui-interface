import { always } from 'ramda';

import { Routes, RoutesEnum } from '@/constants';
import { TTranslatedMessage } from '@/interface';

import { BannerDApp, BannerZealy } from '../share-section/share-illustration';
import { HeroIllustration } from '../svg/liquidity';
import { LiquidityBannerCardProps } from './liquidity-banner.types';

export const LIQUIDITY_BANNER_DATA: ReadonlyArray<LiquidityBannerCardProps> = [
  {
    title: 'common.v2.banner.zealy.title' as TTranslatedMessage,
    label: 'common.v2.banner.zealy.label' as TTranslatedMessage,
    colors: ['#ECFCCB', '#68B00B'],
    description: 'common.v2.banner.zealy.description' as TTranslatedMessage,
    buttons: [
      {
        link: 'https://zealy.io/c/interestprotocol/questboard',
        name: 'common.v2.banner.zealy.buttons.main' as TTranslatedMessage,
      },
      {
        link: 'https://medium.com/@interestprotocol/interest-protocol-liquidity-program-e704f58e3e04',
        name: 'common.v2.banner.zealy.buttons.secondary' as TTranslatedMessage,
      },
    ],
    Illustration: BannerZealy,
  },
  {
    title: 'common.v2.banner.liquidity.title' as TTranslatedMessage,
    label: 'common.v2.banner.liquidity.label' as TTranslatedMessage,
    colors: ['#B4C5FF', '#003EA8'],
    description: 'common.v2.banner.liquidity.description' as TTranslatedMessage,
    Illustration: always(
      <HeroIllustration maxWidth="30rem" maxHeight="30rem" width="100%" />
    ),
    buttons: [
      {
        link: Routes[RoutesEnum.LiquidityCampaign],
        name: 'common.v2.banner.liquidity.buttons.main' as TTranslatedMessage,
      },
      {
        link: 'https://medium.com/@interestprotocol/interest-protocol-liquidity-program-e704f58e3e04',
        name: 'common.v2.banner.liquidity.buttons.secondary' as TTranslatedMessage,
      },
    ],
  },
  {
    title: 'common.v2.banner.swap.title' as TTranslatedMessage,
    label: 'common.v2.banner.swap.label' as TTranslatedMessage,
    colors: ['#A5F3FC', '#00CCE3'],
    description: 'common.v2.banner.swap.description' as TTranslatedMessage,
    buttons: [
      {
        link: Routes[RoutesEnum.DEX],
        name: 'common.v2.banner.swap.buttons.main' as TTranslatedMessage,
      },
      {
        link: 'https://medium.com/@interestprotocol/interest-protocol-liquidity-program-e704f58e3e04',
        name: 'common.v2.banner.swap.buttons.secondary' as TTranslatedMessage,
      },
    ],
    Illustration: BannerDApp,
  },
];

export const slideShowSettings = {
  dots: true,
  speed: 500,
  arrows: false,
  autoplay: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
