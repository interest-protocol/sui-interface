import { Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { capitalize } from '@/utils';

import BondsContainer from '../../components/bonds-container';
import { MaturityProps } from './maturity.types';
import BondsClaimRewardsMaturityList from './maturity-list';

const BondsClaimRewardsMaturity: FC<MaturityProps> = ({ maturityList }) => {
  const t = useTranslations();

  return (
    <BondsContainer
      title={capitalize(t('lst.clamRewards.maturity.title'))}
      description={capitalize(t('lst.clamRewards.maturity.description'))}
    >
      <Typography
        variant="medium"
        color="onSurface"
        fontSize={['0.75rem', '0.75rem', '0.75rem', 'l']}
        mb={['xs', 'xs', 'xs', 'l']}
      >
        {t('lst.clamRewards.maturity.selectRedeem')}
      </Typography>
      <BondsClaimRewardsMaturityList maturityList={maturityList} />
    </BondsContainer>
  );
};

export default BondsClaimRewardsMaturity;
