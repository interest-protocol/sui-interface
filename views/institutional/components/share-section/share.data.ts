import { TTranslatedMessage } from '@/interface';

import { ShareProps } from './share.types';
import { DApp, Zealy } from './share-illustration';

export const SHARE_LIST: ReadonlyArray<ShareProps> = [
  {
    title: 'liquidity.share.card1.title' as TTranslatedMessage,
    subtitle: 'liquidity.share.card1.subtitle' as TTranslatedMessage,
    description: 'liquidity.share.card1.description' as TTranslatedMessage,
    Illustration: DApp,
    color: '#A5F3FC',
  },
  {
    title: 'liquidity.share.card2.title' as TTranslatedMessage,
    subtitle: 'liquidity.share.card2.subtitle' as TTranslatedMessage,
    description: 'liquidity.share.card2.description' as TTranslatedMessage,
    link: {
      caption: 'Zealy',
      url: 'https://zealy.io/c/interestprotocol/questboard',
    },
    Illustration: Zealy,
    color: '#D9F99D',
  },
];
