import { Control } from 'react-hook-form';

import { IFarmsForm, ParseFarmListDataReturn } from '../../farms.types';

export interface FarmsTableProps {
  isDesktop: boolean;
  control: Control<IFarmsForm>;
  data: ParseFarmListDataReturn;
}
