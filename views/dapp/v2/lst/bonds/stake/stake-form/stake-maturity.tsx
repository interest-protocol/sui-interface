import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import { MONTHS } from '@/constants';

import { useBondsContext } from '../../bonds.hooks';
import SelectCard from '../../components/select-card';

const DATES = [
  Date.now() + 1000 * 60 * 60 * 24 * 2,
  Date.now() + 1000 * 60 * 60 * 24 * 20,
  Date.now() + 1000 * 60 * 60 * 24 * 200,
  Date.now() + 1000 * 60 * 60 * 24 * 2000,
];

const StakeMaturity: FC = () => {
  const { form } = useBondsContext();
  const maturityId = useWatch({ control: form.control, name: 'maturity.id' });

  return (
    <Box display="grid" gap="l" gridTemplateColumns="1fr 1fr">
      {DATES.map((date, index) => (
        <SelectCard
          key={v4()}
          checked={maturityId == String(index)}
          onSelect={() =>
            form.setValue('maturity', {
              id: String(index),
              date: String(date),
            })
          }
          content={
            <Box>
              <Typography variant="medium">
                {new Date(date).getDate()}
                {' • '}
                {MONTHS[new Date(date).getMonth()]}
                {' • '}
                {new Date(date).getFullYear()}
              </Typography>
              <Typography variant="small">
                Day left:{' '}
                {((date - Date.now()) / (1000 * 60 * 60 * 24)).toFixed(0)}
              </Typography>
            </Box>
          }
        />
      ))}
    </Box>
  );
};

export default StakeMaturity;
