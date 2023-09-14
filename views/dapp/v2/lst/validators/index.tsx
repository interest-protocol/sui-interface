import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { SUISVG, UsersSVG } from '@/components/svg/v2';
import { FixedPointMath } from '@/lib';

import Overview from '../components/overview';
import { useLstData } from '../lst.hooks';
import { useGetActiveValidators } from '../lst.hooks';
import AllValidators from './all-validators';

const OverViewWrapper: FC = () => {
  const t = useTranslations();

  const {
    data: activeValidators,
    isLoading: isLoadingActiveValidators,
    error: errorActiveValidator,
  } = useGetActiveValidators();
  const { iSuiExchangeRate, isLoading, lstStorage } = useLstData();

  if (errorActiveValidator) return <>error!</>; // TODO: handle loading

  if (isLoading || isLoadingActiveValidators) return <div>loading...</div>; // TODO: handle loading

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
  return <Overview title={t('lst.overview.title')} data={OVERVIEW_DATA} />;
};

const Validators: FC = () => {
  const {
    data: activeValidators,
    isLoading: activeValidatorsLoading,
    error: activeValidatorsError,
  } = useGetActiveValidators();

  if (activeValidatorsError) return <>error</>; // TODO fix this error

  if (activeValidatorsLoading) return <>loading</>; // TODO fix this loading

  return (
    <Box variant="container" display="flex" flexDirection="column">
      <OverViewWrapper />
      <AllValidators activeValidators={activeValidators} />
    </Box>
  );
};

export default Validators;
