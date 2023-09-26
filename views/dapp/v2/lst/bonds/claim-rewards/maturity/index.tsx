import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import { capitalize } from '@/utils';

import BondsContainer from '../../components/bonds-container';
import MaturityCard from '../../components/maturity-card';
import { MaturityProps } from './maturity.type';

const BondsClaimRewardsMaturity: FC<MaturityProps> = ({
  form,
  maturityList,
}) => {
  const t = useTranslations();
  const control = form.control;
  const maturity = useWatch({ control, name: 'maturity' });
  const [maturitySelected, setMaturitySelected] = useState(maturity.id);

  const handleMaturitySelected = (date: string, amount: string, id: string) => {
    form?.setValue('amount', amount);
    form?.setValue('maturity', { date, id });
    setMaturitySelected(id);
  };

  useEffect(() => {
    setMaturitySelected(maturity.id);
  }, [maturity]);

  return (
    <BondsContainer
      title={capitalize(t('lst.claimnRewards.maturity.title'))}
      description={capitalize(t('lst.claimnRewards.maturity.description'))}
    >
      <Typography
        variant="medium"
        color="onSurface"
        fontSize={['0.75rem', '0.75rem', '0.75rem', 'l']}
        mb={['xs', 'xs', 'xs', 'l']}
      >
        {t('lst.claimnRewards.maturity.selectRedeem')}
      </Typography>
      <Box
        gap="m"
        display={['flex', 'flex', 'flex', 'grid']}
        flexDirection="column"
        gridTemplateColumns="1fr 1fr"
      >
        {maturityList.map((maturityItem) => (
          <MaturityCard
            key={v4()}
            {...maturityItem}
            selected={maturitySelected == maturityItem.id}
            onSelected={handleMaturitySelected}
          />
        ))}
      </Box>
    </BondsContainer>
  );
};

export default BondsClaimRewardsMaturity;
