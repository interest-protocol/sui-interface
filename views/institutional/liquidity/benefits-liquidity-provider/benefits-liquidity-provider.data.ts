import { MessageSVG, SecuritySVG, TrophySVG, UserPlusSVG } from '@/svg';

import { BenefitsCardProps } from './benefits-liquidity-provider.types';

export const BENEFITS_LIQUIDITY_PROVIDER_LIST: ReadonlyArray<BenefitsCardProps> =
  [
    {
      title: 'liquidity.benefitsLiquidityProvider.simplicity.title',
      description: 'liquidity.benefitsLiquidityProvider.simplicity.description',
      Icon: UserPlusSVG,
      colorBase: '#99BBFF',
    },
    {
      title: 'liquidity.benefitsLiquidityProvider.security.title',
      description: 'liquidity.benefitsLiquidityProvider.security.description',
      hasLink: {
        caption: 'MoveBit',
        url: 'https://movebit.xyz/',
      },
      Icon: SecuritySVG,
      colorBase: '#E9D5FF',
    },
    {
      title: 'liquidity.benefitsLiquidityProvider.support.title',
      description: 'liquidity.benefitsLiquidityProvider.support.description',
      Icon: MessageSVG,
      colorBase: '#FED7AA',
    },
    {
      title: 'liquidity.benefitsLiquidityProvider.reward.title',
      description: 'liquidity.benefitsLiquidityProvider.reward.description',
      Icon: TrophySVG,
      colorBase: '#D9F99D',
    },
  ];
