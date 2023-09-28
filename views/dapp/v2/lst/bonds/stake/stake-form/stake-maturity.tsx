import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import { MONTHS } from '@/constants';

import { useBondsContext } from '../../bonds.hooks';
import SelectCard from '../../components/select-card';

// TODO NEEDS TO BE UPDATED
const MATURITIES = [
  { date: 1695914399504 + 1000 * 60 * 60 * 24 * 2, epoch: 143 },
  { date: 1695914399504 + 1000 * 60 * 60 * 24 * 20, epoch: 161 },
  { date: 1695914399504 + 1000 * 60 * 60 * 24 * 200, epoch: 341 },
  { date: 1695914399504 + 1000 * 60 * 60 * 24 * 2000, epoch: 2141 },
];

const StakeMaturity: FC = () => {
  const { form } = useBondsContext();
  const maturityId = useWatch({
    control: form.control,
    name: 'maturity.epoch',
  });

  return (
    <Box display="grid" gap="l" gridTemplateColumns="1fr 1fr">
      {MATURITIES.map(({ date, epoch }) => (
        <SelectCard
          key={v4()}
          checked={maturityId == String(epoch)}
          onSelect={() =>
            form.setValue('maturity', {
              epoch: String(epoch),
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
