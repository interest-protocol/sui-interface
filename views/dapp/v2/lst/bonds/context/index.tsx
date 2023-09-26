import { createContext, FC, PropsWithChildren } from 'react';
import { useForm } from 'react-hook-form';

import { formatDollars } from '@/utils';

import { BondsForm, IBondsContext } from './bonds-context.types';

const bondsContext = createContext<IBondsContext>({} as IBondsContext);

export const BondsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { Provider } = bondsContext;
  const form = useForm<BondsForm>({
    defaultValues: { amount: '0', amountUSD: formatDollars(0), validator: '' },
  });

  return <Provider value={{ form }}>{children}</Provider>;
};

export default bondsContext;
