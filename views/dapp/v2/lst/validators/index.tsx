import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { FixedPointMath } from '@/lib';

import Overview from '../components/overview';
import { useLstData } from '../lst.hooks';
import { DERIVATED_SUI_SYMBOL } from '../lst.types';
import { OverviewItem } from '../stats/stats.type';
import AllValidators from './all-validators';

const OverViewWrapper: FC = () => {
  const t = useTranslations();

  const { activeValidators, iSuiExchangeRate, isLoading, lstStorage } =
    useLstData();

  const OVERVIEW_DATA: ReadonlyArray<OverviewItem> = [
    {
      description: 'lst.overview.totalSuiStaked',
      type: 'SUI' as DERIVATED_SUI_SYMBOL,
      // Sui has 9 decimals
      value: FixedPointMath.toNumber(lstStorage.totalPrincipal),
    },
    {
      description: 'lst.exchangeRate',
      type: 'users',
      value: iSuiExchangeRate,
    },
    {
      type: 'users',
      description: 'lst.overview.validators',
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
