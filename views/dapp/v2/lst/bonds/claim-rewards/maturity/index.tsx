import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import { ISuiYNSVG } from '@/svg';
import { capitalize } from '@/utils';

import { useBondsContext } from '../../bonds.hooks';
import BondsContainer from '../../components/bonds-container';
import SelectCard from '../../select-card';
import { MaturityProps } from './maturity.types';

const BondsClaimRewardsMaturity: FC<MaturityProps> = ({ maturityList }) => {
  const t = useTranslations();
  const { form } = useBondsContext();
  const control = form.control;
  const maturity = useWatch({ control, name: 'maturity' });
  const [maturitySelected, setMaturitySelected] = useState(maturity.id);

  const handleMaturitySelected = (date: string, amount: string, id: string) => {
    form.setValue('amount', amount);
    form.setValue('maturity', { date, id });
    setMaturitySelected(id);
  };

  useEffect(() => {
    setMaturitySelected(maturity.id);
  }, [maturity]);

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
      <Box
        gap="m"
        display={['flex', 'flex', 'flex', 'grid']}
        flexDirection="column"
        gridTemplateColumns="1fr 1fr"
      >
        {maturityList.map(({ date, id }) => (
          <SelectCard
            key={v4()}
            content={
              <Box display="flex">
                <Box color="white" mr="0.5rem">
                  <ISuiYNSVG
                    maxHeight="2.5rem"
                    maxWidth="2.5rem"
                    width="100%"
                    filled
                  />
                </Box>
                <Box
                  color={
                    maturitySelected === id ? 'primary.onPrimary' : 'onSurface'
                  }
                >
                  <Typography variant="small" fontSize="0.875rem">
                    {date}
                  </Typography>
                  <Typography variant="small" fontSize="0.875rem" opacity="0.6">
                    0
                  </Typography>
                </Box>
              </Box>
            }
            onSelect={() => handleMaturitySelected(date, '0', id)}
          />
        ))}
      </Box>
    </BondsContainer>
  );
};

export default BondsClaimRewardsMaturity;
