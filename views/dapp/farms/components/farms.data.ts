import { UseFormSetValue } from 'react-hook-form';

import { ISwitchOption } from '@/components/switch/switch.types';
import { logGenericEvent } from '@/utils/analytics';

import { IFarmsForm } from '../farms.types';

export const getFilterSwitchDefaultData = (
  values: ReadonlyArray<string>,
  setValue: UseFormSetValue<IFarmsForm>,
  name: 'onlyStaked' | 'onlyFinished'
): [ISwitchOption, ISwitchOption] => [
  {
    value: values[0],
    onSelect: () => {
      logGenericEvent(`Filter_Farms_${name}_off`);
      setValue(name, false);
    },
  },
  {
    value: values[1],
    onSelect: () => {
      logGenericEvent(`Filter_Farms_${name}_on`);
      setValue(name, true);
    },
  },
];
