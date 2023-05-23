import { TTranslatedMessage } from '@/interface';
import { MessageSVG, SecuritySVG, TrophySVG, UserPlusSVG } from '@/svg';

import { BenefitsCardProps } from './reward-distribution.types';

export const REWARD_DISTRIBUTION_BENEFITS_LIST: ReadonlyArray<BenefitsCardProps> =
  [
    {
      title:
        'liquidity.rewardDistribution.simplicity.title' as TTranslatedMessage,
      description:
        'liquidity.rewardDistribution.simplicity.description' as TTranslatedMessage,
      Icon: UserPlusSVG,
      colorBase: '#99BBFF',
    },
    {
      title:
        'liquidity.rewardDistribution.security.title' as TTranslatedMessage,
      description:
        'liquidity.rewardDistribution.security.description' as TTranslatedMessage,
      link: {
        caption: 'MoveBit',
        url: 'https://movebit.xyz/',
      },
      Icon: SecuritySVG,
      colorBase: '#E9D5FF',
    },
    {
      title: 'liquidity.rewardDistribution.support.title' as TTranslatedMessage,
      description:
        'liquidity.rewardDistribution.support.description' as TTranslatedMessage,
      Icon: MessageSVG,
      colorBase: '#FED7AA',
    },
    {
      title: 'liquidity.rewardDistribution.reward.title' as TTranslatedMessage,
      description:
        'liquidity.rewardDistribution.reward.description' as TTranslatedMessage,
      Icon: TrophySVG,
      colorBase: '#D9F99D',
    },
  ];
