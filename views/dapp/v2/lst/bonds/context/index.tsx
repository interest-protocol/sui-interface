import { SUI_TYPE_ARG } from '@mysten/sui.js';
import { useRouter } from 'next/router';
import { createContext, FC, PropsWithChildren, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Routes, RoutesEnum } from '@/constants';
import { DEFAULT_VALIDATOR } from '@/constants/lst';
import { useNetwork } from '@/hooks';
import { formatDollars } from '@/utils';

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

  const form = useForm<BondsForm>({
    defaultValues: {
      tokens: [],
      amount: '0',
      amountUSD: formatDollars(0),
      maturity: { date: '', id: '' },
      validator: DEFAULT_VALIDATOR[network],
      type: FORM_TYPE[asPath] as BondsForm['type'],
    },
  });

  const stakeForm = useForm({
    defaultValues: {
      amount: '0',
      coinType: SUI_TYPE_ARG,
      amountUSD: formatDollars(0),
      validator: DEFAULT_VALIDATOR[network],
      maturity: { date: '', id: '' },
    },
  });

  useEffect(() => {
    stakeForm.setValue('coinType', SUI_TYPE_ARG);
    stakeForm.setValue('amount', '0');
    stakeForm.setValue('validator', DEFAULT_VALIDATOR[network]);
    stakeForm.setValue('maturity', { date: '', id: '' });
  }, [network]);

  return <Provider value={{ form }}>{children}</Provider>;
};

export default bondsContext;
