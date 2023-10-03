import { SuiSystemStateSummary } from '@mysten/sui.js/src/types';
import { useRouter } from 'next/router';
import { createContext, FC, PropsWithChildren } from 'react';
import { useForm } from 'react-hook-form';

import { Routes, RoutesEnum } from '@/constants';
import {
  DEFAULT_VALIDATOR,
  getISuiPrincipalType,
  getISuiYieldType,
} from '@/constants/lst';
import { useNetwork } from '@/hooks';
import { formatDollars } from '@/utils';
import { useGetLatestSuiSystemState } from '@/views/dapp/v2/lst/lst.hooks';

import { BondsForm, IBondsContext } from './bonds-context.types';

const bondsContext = createContext<IBondsContext>({} as IBondsContext);

const FORM_TYPE = {
  [Routes[RoutesEnum.LSTBondsStake]]: 'stake',
  [Routes[RoutesEnum.LSTBondsUnstake]]: 'unstake',
  [Routes[RoutesEnum.LSTBondsRewards]]: 'claim',
};

export const BondsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { asPath } = useRouter();
  const { network } = useNetwork();
  const { Provider } = bondsContext;
  // TODO need to handle loading states
  const { data: systemSummary, isLoading } = useGetLatestSuiSystemState();

  const form = useForm<BondsForm>({
    defaultValues: {
      tokens: [],
      amount: '0',
      amountUSD: formatDollars(0),
      maturity: { date: '', epoch: '' },
      validator: DEFAULT_VALIDATOR[network],
      totalBalance: '0',
      type: FORM_TYPE[asPath] as BondsForm['type'],
    },
  });

  return (
    <Provider
      value={{
        form,
        principalType: getISuiPrincipalType(network),
        couponType: getISuiYieldType(network),
        isLoading,
        suiSystem: systemSummary
          ? systemSummary
          : ({} as SuiSystemStateSummary),
      }}
    >
      {children}
    </Provider>
  );
};

export default bondsContext;
