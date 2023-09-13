import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { SUISVG, UsersSVG } from '@/components/svg/v2';
import { FixedPointMath } from '@/lib';
import { OverviewWrapperProps } from '@/views/dapp/v2/lst/validators/validators.types';

import Overview from '../components/overview';
import { useLstData } from '../lst.hooks';
import { useGetActiveValidators } from '../lst.hooks';
import AllValidators from './all-validators';

const OverViewWrapper: FC<OverviewWrapperProps> = ({ validatorsCount }) => {
  const t = useTranslations();

  const { iSuiExchangeRate, isLoading, lstStorage } = useLstData();

  if (isLoading) return <div>loading...</div>;

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
      value: validatorsCount,
    },
  ];
  return <Overview title={t('lst.overview.title')} data={OVERVIEW_DATA} />;
};

const Validators: FC = () => {
  const { data: activeValidators, isLoading } = useGetActiveValidators();

  console.log({ isLoading });

  return (
    <Box variant="container" display="flex" flexDirection="column">
      <OverViewWrapper validatorsCount={activeValidators.length} />
      <AllValidators activeValidators={activeValidators} />
    </Box>
  );
};

export default Validators;
