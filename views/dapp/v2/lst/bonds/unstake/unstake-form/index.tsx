import { Box, Typography } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ISuiPSVG, ISuiYNSVG } from '@/components/svg/v2';

import SelectCard from '../../components/select-card';
import StepTitle from '../../step-title';
import UnstakeInput from './unstake-input';

const BondsUnstakeForm: FC = () => {
  const t = useTranslations();

  return (
    <Box my="xl" display="flex" flexDirection="column" gap="xl">
      <Box>
        <StepTitle title={t('lst.bonds.unstake.form.selectRedeem')} step={1} />
        <Box display="flex" gap="l">
          <SelectCard
            title={
              <Box display="flex" alignItems="center" gap="l">
                <ISuiPSVG maxHeight="2rem" maxWidth="2rem" height="100%" />
                <Typography variant="medium">iSuiP</Typography>
              </Box>
            }
          />
          <SelectCard
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
      </Box>
      <Box>
        <StepTitle
          step={2}
          title={t('lst.bonds.unstake.form.selectMaturity')}
        />
        <Box display="flex" gap="l">
          <SelectCard
            content={
              <Box>
                <Typography variant="medium">30 • Dec • 2027</Typography>
                <Typography variant="small">Day left: 1563</Typography>
              </Box>
            }
          />
          <SelectCard
            content={
              <Box>
                <Typography variant="medium">30 • Dec • 2027</Typography>
                <Typography variant="small">Day left: 1563</Typography>
              </Box>
            }
          />
        </Box>
      </Box>
      <Box>
        <StepTitle title={t('lst.bonds.unstake.form.selectAmount')} step={3} />
        <UnstakeInput
          suiPrice={0}
          exchangeRate={1}
          totalBalance={BigNumber(0)}
        />
      </Box>
    </Box>
  );
};

export default BondsUnstakeForm;
