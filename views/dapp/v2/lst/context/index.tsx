import { Network } from '@interest-protocol/sui-amm-sdk';
import { ValidatorsApy } from '@mysten/sui.js';
import { last } from 'ramda';
import { createContext, FC, PropsWithChildren } from 'react';

import { COINS } from '@/constants';
import { DEFAULT_LST_STORAGE } from '@/constants/lst';
import { useGetCoinsUSDInfo } from '@/hooks/use-get-coins-usd-info';
import { FixedPointMath, ONE_COIN } from '@/lib';
import { noop } from '@/utils';
import {
  useGetActiveValidators,
  useGetLstStorage,
  useGetValidatorsApy,
  useGetValidatorsStakePosition,
} from '@/views/dapp/v2/lst/lst.hooks';

import { ILSTContext } from './context.types';

const lstContext = createContext({
  mutate: noop,
  isLoading: true,
  suiCoinInfo: null,
  totalISuiMinted: 0,
  iSuiExchangeRate: 1,
  last30daysPrice: [],
  activeValidators: [],
  validatorStakeRecord: {},
  lstStorage: DEFAULT_LST_STORAGE,
  validatorsApy: { epoch: '', apys: [] } as ValidatorsApy,
} as ILSTContext);

export const LSTProvider: FC<PropsWithChildren> = ({ children }) => {
  const { Provider } = lstContext;
  const {
    data: lstStorage,
    isLoading: storageIsLoading,
    mutate: storageMutate,
  } = useGetLstStorage();

  const { data: coinData, isLoading } = useGetCoinsUSDInfo([
    COINS[Network.MAINNET].SUI.type,
  ]);

  const {
    isLoading: isGetValidatorStakePositionLoading,
    data: validatorStakeRecord,
  } = useGetValidatorsStakePosition(
    lstStorage.validatorTable.head,
    lstStorage.validatorTable.tail
  );

  const { data: validatorsApy, isLoading: validatorsApyLoading } =
    useGetValidatorsApy();

  const { data: activeValidators, isLoading: isActiveValidatorsLoading } =
    useGetActiveValidators();

  const suiCoinInfo = coinData[COINS[Network.MAINNET].SUI.type].info;

  const totalStakedSui = FixedPointMath.toNumber(lstStorage.pool.elastic);
  const iSuiExchangeRate =
    totalStakedSui === 0
      ? 1
      : FixedPointMath.toNumber(lstStorage.pool.toElastic(ONE_COIN));
  const totalISuiMinted = FixedPointMath.toNumber(lstStorage.pool.base);

  const data: ILSTContext = {
    suiCoinInfo: isLoading ? null : last(suiCoinInfo) ?? null,
    last30daysPrice: suiCoinInfo.map(({ price, timestamp }) => ({
      price,
      timestamp,
    })),
    isLoading:
      storageIsLoading ||
      isGetValidatorStakePositionLoading ||
      isLoading ||
      isActiveValidatorsLoading ||
      validatorsApyLoading,
    lstStorage,
    activeValidators,
    validatorsApy,
    validatorStakeRecord,
    iSuiExchangeRate,
    totalISuiMinted,
    mutate: async () => {
      await storageMutate();
    },
  };

  return <Provider value={data}>{children}</Provider>;
};

export default lstContext;
