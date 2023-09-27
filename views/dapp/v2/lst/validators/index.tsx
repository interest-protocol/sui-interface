import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { SUISVG, UsersSVG } from '@/components/svg/v2';
import { FixedPointMath } from '@/lib';

import Overview from '../components/overview';
import { useLstData } from '../lst.hooks';
import AllValidators from './all-validators';

const OverViewWrapper: FC = () => {
  const t = useTranslations();

  const { activeValidators, iSuiExchangeRate, isLoading, lstStorage } =
    useLstData();

  const OVERVIEW_DATA = [
    {
      description: 'lst.overview.totalSuiStaked',
      Icon: SUISVG,
      // Sui has 9 decimals
      value: FixedPointMath.toNumber(lstStorage.totalPrincipal),
    },
    {
      description: 'lst.exchangeRate',
      Icon: UsersSVG,
      value: iSuiExchangeRate,
    },
    {
      description: 'lst.overview.validators',
      Icon: UsersSVG,
      value: activeValidators?.length || 0,
    },
  ];
  return (
    <Overview
      title={t('lst.overview.title')}
      data={OVERVIEW_DATA}
      isLoading={isLoading}
    />
  );
};

const Validators: FC = () => (
  <Box variant="container" display="flex" flexDirection="column">
    <OverViewWrapper />
    <AllValidators />
  </Box>
);

export default Validators;
