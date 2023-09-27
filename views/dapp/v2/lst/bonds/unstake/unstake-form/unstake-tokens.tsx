import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { ISuiPSVG, ISuiYNSVG } from '@/components/svg/v2';
import { ISUI_PRINCIPAL_TYPE, ISUI_YIELD_TYPE } from '@/constants/lst';

import { useBondsContext } from '../../bonds.hooks';
import SelectCard from '../../components/select-card';

const UnstakeTokens: FC = () => {
  const { form } = useBondsContext();
  const { tokens } = useWatch({ control: form.control });

  return (
    <Box display="flex" gap="l">
      <SelectCard
        checked={
          JSON.stringify(tokens) === JSON.stringify([ISUI_PRINCIPAL_TYPE])
        }
        onSelect={() => {
          form.setValue('tokens', [ISUI_PRINCIPAL_TYPE]);
          form.setValue('maturity', { date: '', id: '' });
        }}
        title={
          <Box display="flex" alignItems="center" gap="l">
            <ISuiPSVG maxHeight="2rem" maxWidth="2rem" height="100%" />
            <Typography variant="medium">iSuiP</Typography>
          </Box>
        }
      />
      <SelectCard
        checked={
          JSON.stringify(tokens) ===
          JSON.stringify([ISUI_PRINCIPAL_TYPE, ISUI_YIELD_TYPE])
        }
        onSelect={() => {
          form.setValue('tokens', [ISUI_PRINCIPAL_TYPE, ISUI_YIELD_TYPE]);
          form.setValue('maturity', { date: '', id: '' });
        }}
        title={
          <Box display="flex" alignItems="center" gap="l">
            <Box display="flex" alignItems="center" gap="l">
              <ISuiPSVG
                maxHeight="2rem"
                maxWidth="2rem"
                height="100%"
                width="100%"
              />
              <Typography variant="medium">iSuiP</Typography>
            </Box>
            +
            <Box display="flex" alignItems="center" gap="l">
              <ISuiYNSVG
                maxHeight="2rem"
                maxWidth="2rem"
                height="100%"
                width="100%"
              />
              <Typography variant="medium">iSuiYN</Typography>
            </Box>
          </Box>
        }
      />
    </Box>
  );
};

export default UnstakeTokens;
