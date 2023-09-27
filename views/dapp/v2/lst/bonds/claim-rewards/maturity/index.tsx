import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { capitalize } from '@/utils';

import BondsContainer from '../../components/bonds-container';
import BondsClaimRewardsMaturityList from './maturity-list';

const BondsClaimRewardsMaturity: FC = () => {
  const t = useTranslations();

  return (
    <BondsContainer
      title={capitalize(t('lst.bonds.clamRewards.maturity.title'))}
      description={capitalize(t('lst.bonds.clamRewards.maturity.description'))}
    >
      <Typography
        variant="medium"
        color="onSurface"
        mb={['xs', 'xs', 'xs', 'l']}
        fontSize={['0.75rem', '0.75rem', '0.75rem', 'l']}
      >
        {t('lst.bonds.clamRewards.maturity.selectRedeem')}
      </Typography>
      <BondsClaimRewardsMaturityList />
    </BondsContainer>
  );
};

export default BondsClaimRewardsMaturity;
