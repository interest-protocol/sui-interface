import { Box, Typography } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { ISuiPSVG, ISuiYNSVG } from '@/components/svg/v2';
import { useGetLstBondObjects } from '@/hooks';
import { RequiredBondsMap } from '@/hooks/use-get-lst-bond-objects/use-get-lst-bond-objects.types';

import { useBondsContext } from '../../bonds.hooks';
import SelectCard from '../../components/select-card';

const UnstakeTokens: FC = () => {
  const { form, principalType, couponType, suiSystem } = useBondsContext();
  const { tokens } = useWatch({ control: form.control });
  const { bondsMap, epochs: bondEpochs } = useGetLstBondObjects();

  const currentEpoch = BigNumber(suiSystem.epoch);

  const principalMaturedEpochs = bondEpochs
    .filter((x) => currentEpoch.gt(BigNumber(x)))
    .filter((x) => !!bondsMap[x]?.principal);

  console.log('>> principalMaturedEpochs :: ', principalMaturedEpochs);

  const bondObjectsPairs = Object.values(bondsMap).filter(
    (x) =>
      !!x &&
      !!x.principal &&
      !!x.coupon &&
      x.principal.value.isPositive() &&
      x.coupon.value.isPositive()
  ) as ReadonlyArray<RequiredBondsMap>;

  return (
    <Box display="flex" gap="l">
      <SelectCard
        checked={JSON.stringify(tokens) === JSON.stringify([principalType])}
        onSelect={() => {
          form.setValue('tokens', [principalType]);
          form.setValue('maturity', { date: '', epoch: '' });
        }}
        title={
          <Box display="flex" alignItems="center" gap="l">
            <ISuiPSVG maxHeight="2rem" maxWidth="2rem" height="100%" />
            <Typography variant="medium">iSUIP</Typography>
          </Box>
        }
        disabled={!principalMaturedEpochs.length}
      />
      <SelectCard
        checked={
          JSON.stringify(tokens) === JSON.stringify([principalType, couponType])
        }
        onSelect={() => {
          form.setValue('tokens', [principalType, couponType]);
          form.setValue('maturity', { date: '', epoch: '' });
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
              <Typography variant="medium">iSUIP</Typography>
            </Box>
            +
            <Box display="flex" alignItems="center" gap="l">
              <ISuiYNSVG
                maxHeight="2rem"
                maxWidth="2rem"
                height="100%"
                width="100%"
              />
              <Typography variant="medium">iSUIY</Typography>
            </Box>
          </Box>
        }
        disabled={!bondObjectsPairs.length}
      />
    </Box>
  );
};

export default UnstakeTokens;
