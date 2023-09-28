import { getReturnValuesFromInspectResults } from '@interest-protocol/sui-amm-sdk';
import { Rebase } from '@interest-protocol/sui-money-market-sdk';
import { BCS } from '@mysten/bcs';
import {
  bcs,
  normalizeSuiAddress,
  SUI_SYSTEM_STATE_OBJECT_ID,
  SuiObjectResponse,
  TransactionBlock,
} from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { pathOr } from 'ramda';
import { useContext } from 'react';
import useSWR from 'swr';

import { DEFAULT_LST_STORAGE, LST_OBJECTS } from '@/constants/lst';
import { useNetwork, useProvider } from '@/hooks';
import { AddressZero } from '@/lib';
import { makeSWRKey } from '@/utils';

import lstContext from './context';
import { ILSTContext } from './context/context.types';
import {
  LstStorage,
  ValidatorStakePosition,
  ValidatorStakePositionRecord,
} from './lst.types';

bcs.registerStructType(
  `0xd6bb0d552b866ed8d24e6b036f8094c669df0720f2d37e7a60c8d3107af369a::query::StakePosition`,
  {
    epoch: BCS.U64,
    amount: BCS.U64,
  }
);

bcs.registerStructType(
  `0xd6bb0d552b866ed8d24e6b036f8094c669df0720f2d37e7a60c8d3107af369a::query::ValidatorStakePosition`,
  {
    validator: BCS.ADDRESS,
    total_principal: BCS.U64,
    stakes: `vector<0xd6bb0d552b866ed8d24e6b036f8094c669df0720f2d37e7a60c8d3107af369a::query::StakePosition>`,
  }
);

export const useLstData = (): ILSTContext => useContext(lstContext);

export const useGetValidatorsStakePosition = (
  from: string | null,
  to: string | null
) => {
  const { provider } = useProvider();
  const { network } = useNetwork();

  const objects = LST_OBJECTS[network];

  const { data: raw, ...other } = useSWR(
    makeSWRKey([network, from, to], useGetValidatorsStakePosition.name),
    async () => {
      if (!from || !to) return null;
      const txb = new TransactionBlock();

      txb.moveCall({
        target: `${objects.PACKAGE_ID}::query::get_validators_stake_position`,
        arguments: [
          txb.object(objects.POOL_STORAGE),
          txb.pure(from, BCS.ADDRESS),
          txb.pure(to, BCS.ADDRESS),
        ],
      });

      return provider.devInspectTransactionBlock({
        transactionBlock: txb,
        sender: AddressZero,
      });
    },
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
    }
  );

  const result = raw ? getReturnValuesFromInspectResults(raw) : [];

  const data =
    !result || !result.length
      ? []
      : bcs.de(result[0][1], Uint8Array.from(result[0][0]));

  return {
    ...other,
    data: (data as ReadonlyArray<ValidatorStakePosition>).reduce(
      (
        acc: ValidatorStakePositionRecord,
        { validator, total_principal, stakes }
      ) => ({
        ...acc,
        [normalizeSuiAddress(validator, true)]: {
          principal: total_principal,
          stakes,
        },
      }),
      {} as ValidatorStakePositionRecord
    ),
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
    totalActivateStakedSui: BigNumber(
      pathOr(
        '0',
        ['data', 'content', 'fields', 'total_activate_staked_sui'],
        data
      )
    ),
    averageAPY: BigNumber(
      pathOr('0', ['data', 'content', 'fields', 'rate'], data)
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
    validatorTable: {
      size: BigNumber(
        pathOr(
          '0',
          ['data', 'content', 'fields', 'validators_table', 'fields', 'size'],
          data
        )
      ),
      head: pathOr(
        null,
        ['data', 'content', 'fields', 'validators_table', 'fields', 'head'],
        data
      ),
      tail: pathOr(
        null,
        ['data', 'content', 'fields', 'validators_table', 'fields', 'tail'],
        data
      ),
    },
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

export const useGetLatestSuiSystemState = () => {
  const { provider } = useProvider();
  const { network } = useNetwork();

  return useSWR(
    makeSWRKey([network], useGetLatestSuiSystemState.name),
    async () => provider.getLatestSuiSystemState(),
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
    }
  );
};

export const useGetValidatorsApy = () => {
  const { provider } = useProvider();
  const { network } = useNetwork();

  return useSWR(
    makeSWRKey([network], useGetValidatorsApy.name),
    async () => provider.getValidatorsApy(),
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
    }
  );
};

export const useGetExchangeRateSuiToISui = (amount: string) => {
  return useGetSuiExchangeRate(amount, 'get_exchange_rate_sui_to_isui');
};

export const useGetExchangeRateISuiToSui = (amount: string) => {
  return useGetSuiExchangeRate(amount, 'get_exchange_rate_isui_to_sui');
};

const useGetSuiExchangeRate = (amount: string, fn: string) => {
  const { provider } = useProvider();
  const { network } = useNetwork();

  const objects = LST_OBJECTS[network];

  const txb = new TransactionBlock();

  txb.moveCall({
    target: `${objects.PACKAGE_ID}::pool::${fn}`,
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
