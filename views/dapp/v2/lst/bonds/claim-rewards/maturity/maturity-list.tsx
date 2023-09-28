import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import { MONTHS } from '@/constants';
import { ISuiYNSVG } from '@/svg';

import { useBondsContext } from '../../bonds.hooks';
import SelectCard from '../../components/select-card';
import { MATURITY_LIST } from '../claim-rewards.mock';

const BondsClaimRewardsMaturityList: FC = () => {
  const { form } = useBondsContext();
  const control = form.control;
  const maturity = useWatch({ control, name: 'maturity' });

  const handleMaturitySelected = (date: number, amount: string, id: string) => {
    form.setValue('amount', amount);
    form.setValue('maturity', { date: String(date), epoch: id });
  };

  return (
    <Box
      gap="m"
      display={['flex', 'flex', 'flex', 'grid']}
      flexDirection="column"
      gridTemplateColumns="1fr 1fr"
    >
      {MATURITY_LIST.map(({ date, id, amount }) => (
        <SelectCard
          key={v4()}
          checked={maturity.epoch === id}
          onSelect={() => handleMaturitySelected(date, '10', id)}
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
              <Box>
                <Typography variant="small" fontSize="0.875rem">
                  {`${new Date(date).getDate()} • ${
                    MONTHS[new Date(date).getMonth()]
                  } • ${new Date(date).getFullYear()}`}
                </Typography>
                <Typography variant="small" fontSize="0.875rem" opacity="0.6">
                  {amount ?? '--'}
                </Typography>
              </Box>
            </Box>
          }
        />
      ))}
    </Box>
  );
};

export default BondsClaimRewardsMaturityList;
