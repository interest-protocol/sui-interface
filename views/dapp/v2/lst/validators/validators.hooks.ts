import { getAllDynamicFields } from '@interest-protocol/sui-amm-sdk';
import useSWR from 'swr';

import { LST_OBJECTS } from '@/constants/lst';
import { useNetwork, useProvider } from '@/hooks';
import { makeSWRKey } from '@/utils';

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
