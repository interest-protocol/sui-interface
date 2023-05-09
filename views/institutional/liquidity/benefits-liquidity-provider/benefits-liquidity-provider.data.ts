import { MessageSVG, SecuritySVG, TrophySVG, UserPlusSVG } from '@/svg';

import { BenefitsCardProps } from './benefits-liquidity-provider.types';

export const BENEFITS_LIQUIDITY_PROVIDER_LIST: ReadonlyArray<BenefitsCardProps> =
  [
    {
      title: 'liquidity.rewardDistribution.simplicity.title',
      description: 'liquidity.rewardDistribution.simplicity.description',
      Icon: UserPlusSVG,
      colorBase: '#99BBFF',
    },
    {
      title: 'liquidity.rewardDistribution.security.title',
      description: 'liquidity.rewardDistribution.security.description',
      hasLink: {
        caption: 'MoveBit',
        url: 'https://movebit.xyz/',
      },
      Icon: SecuritySVG,
      colorBase: '#E9D5FF',
    },
    {
      title: 'liquidity.rewardDistribution.support.title',
      description: 'liquidity.rewardDistribution.support.description',
      Icon: MessageSVG,
      colorBase: '#FED7AA',
    },
    {
      title: 'liquidity.rewardDistribution.reward.title',
      description: 'liquidity.rewardDistribution.reward.description',
      Icon: TrophySVG,
      colorBase: '#D9F99D',
    },
  ];
