import { SUI_TYPE_ARG } from '@mysten/sui.js';
import { createContext, FC, PropsWithChildren, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { DEFAULT_VALIDATOR } from '@/constants/lst';
import { useNetwork } from '@/hooks';
import { formatDollars } from '@/utils';

import { BondsForm, IBondsContext } from './bonds-context.types';

const bondsContext = createContext<IBondsContext>({} as IBondsContext);

export const BondsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { network } = useNetwork();
  const { Provider } = bondsContext;

  const form = useForm<BondsForm>({
    defaultValues: {
      amount: '0',
      amountUSD: formatDollars(0),
      validator: DEFAULT_VALIDATOR[network],
      maturity: { date: '', id: '' },
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
