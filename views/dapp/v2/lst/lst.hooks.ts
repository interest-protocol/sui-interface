import {
  getAllDynamicFields,
  getReturnValuesFromInspectResults,
} from '@interest-protocol/sui-amm-sdk';
import { Rebase } from '@interest-protocol/sui-money-market-sdk';
import { BCS } from '@mysten/bcs';
import {
  bcs,
  SUI_CLOCK_OBJECT_ID,
  SUI_SYSTEM_STATE_OBJECT_ID,
  SuiObjectResponse,
  TransactionBlock,
} from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { pathOr } from 'ramda';
import useSWR from 'swr';

import { LST_OBJECTS } from '@/constants/lst';
import { useNetwork, useProvider } from '@/hooks';
import { AddressZero } from '@/lib';
import { ZERO_BIG_NUMBER } from '@/utils';
import { makeSWRKey } from '@/utils';

import { LstStorage } from './lst.type';
export const useGetValidatorTableFields = () => {
  const { provider } = useProvider();
  const { network } = useNetwork();

  const objects = LST_OBJECTS[network];

  const { data, ...other } = useSWR(
    makeSWRKey(
      [network, objects.VALIDATORS_TABLE_ID],
      useGetValidatorTableFields.name
    ),
    async () => getAllDynamicFields(provider, objects.VALIDATORS_TABLE_ID),
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
    }
  );

  return {
    ...other,
    data: data,
  };
};

export const useGetActiveValidators = () => {
  const { provider } = useProvider();
  const { network } = useNetwork();

  const { data, ...other } = useSWR(
    makeSWRKey([network], provider.getLatestSuiSystemState.name),
    async () => provider.getLatestSuiSystemState(),
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
    }
  );

  return {
    ...other,
    data: data ? data.activeValidators : [],
  };
};

const DEFAULT_LST_STORAGE: LstStorage = {
  totalPrincipal: ZERO_BIG_NUMBER,
  fee: { base: ZERO_BIG_NUMBER, jump: ZERO_BIG_NUMBER, kink: ZERO_BIG_NUMBER },
  lastEpoch: ZERO_BIG_NUMBER,
  validatorCount: 0,
  whiteListedValidators: [],
  pool: new Rebase(ZERO_BIG_NUMBER, ZERO_BIG_NUMBER),
};

const parseStorage = (data: SuiObjectResponse | undefined): LstStorage => {
  if (!data) return DEFAULT_LST_STORAGE;

  return {
    totalPrincipal: BigNumber(
      pathOr('0', ['data', 'content', 'fields', 'total_principal'], data)
    ),
    fee: {
      base: BigNumber(
        pathOr(
          '0',
          ['data', 'content', 'fields', 'fee', 'fields', 'base'],
          data
        )
      ),
      jump: BigNumber(
        pathOr(
          '0',
          ['data', 'content', 'fields', 'fee', 'fields', 'jump'],
          data
        )
      ),
      kink: BigNumber(
        pathOr(
          '0',
          ['data', 'content', 'fields', 'fee', 'fields', 'kink'],
          data
        )
      ),
    },
    lastEpoch: BigNumber(
      pathOr('0', ['data', 'content', 'fields', 'last_epoch'], data)
    ),
    validatorCount: +pathOr(
      '0',
      ['data', 'content', 'fields', 'validator_table', 'fields', 'size'],
      data
    ),
    whiteListedValidators: pathOr(
      [],
      ['data', 'content', 'fields', 'whitelist_validators'],
      data
    ),
    pool: new Rebase(
      BigNumber(
        pathOr(
          '0',
          ['data', 'content', 'fields', 'pool', 'fields', 'base'],
          data
        )
      ),
      BigNumber(
        pathOr(
          '0',
          ['data', 'content', 'fields', 'pool', 'fields', 'elastic'],
          data
        )
      )
    ),
  };
};

export const useGetLstStorage = () => {
  const { provider } = useProvider();
  const { network } = useNetwork();
  const objects = LST_OBJECTS[network];

  const { data, ...rest } = useSWR(
    makeSWRKey([objects.POOL_STORAGE], useGetLstStorage.name),
    async () =>
      provider.getObject({
        id: objects.POOL_STORAGE,
        options: { showContent: true },
      }),
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
    }
  );

  return {
    ...rest,
    data: parseStorage(data),
  };
};

export const useGetCurrentEpoch = () => {
  const { provider } = useProvider();
  const { network } = useNetwork();

  return useSWR(
    makeSWRKey([network], useGetCurrentEpoch.name),
    async () => provider.getLatestSuiSystemState(),
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
    }
  );
};

export const useGetExchangeRateSuiToISui = (amount: string) => {
  const { provider } = useProvider();
  const { network } = useNetwork();

  const objects = LST_OBJECTS[network];

  const txb = new TransactionBlock();

  txb.moveCall({
    target: `${objects.PACKAGE_ID}::pool::get_exchange_rate_sui_to_isui`,
    arguments: [
      txb.object(SUI_SYSTEM_STATE_OBJECT_ID),
      txb.object(objects.POOL_STORAGE),
      txb.pure(amount, BCS.U64),
    ],
  });

  const { data, ...other } = useSWR(
    makeSWRKey([network, amount], useGetExchangeRateSuiToISui.name),
    async () =>
      provider.devInspectTransactionBlock({
        transactionBlock: txb,
        sender: AddressZero,
      }),
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
    }
  );

  const result = data ? getReturnValuesFromInspectResults(data) : undefined;

  return {
    ...other,
    data:
      !result || !result.length
        ? 0
        : bcs.de(result[0][1], Uint8Array.from(result[0][0])),
  };
};
