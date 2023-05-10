import { ShareProps } from './share.types';
import { DApp, Zealy } from './share-illustration';

export const SHARE_LIST: ReadonlyArray<ShareProps> = [
  {
    title: 'liquidity.share.card1.title',
    subtitle: 'liquidity.share.card1.subtitle',
    description: 'liquidity.share.card1.description',
    Illustration: DApp,
    color: '#A5F3FC',
  },
  {
    title: 'liquidity.share.card2.title',
    subtitle: 'liquidity.share.card2.subtitle',
    description: 'liquidity.share.card2.description',
    hasLink: {
      caption: 'Zealy',
      url: 'https://zealy.io/c/interestprotocol/questboard',
    },
    Illustration: Zealy,
    color: '#D9F99D',
  },
];
