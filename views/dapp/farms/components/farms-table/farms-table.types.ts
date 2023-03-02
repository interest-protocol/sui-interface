import { Control } from 'react-hook-form';

import { IFarmsForm, ParseFarmDataReturn } from '../../farms.types';

export interface FarmsTableProps {
  isDesktop: boolean;
  control: Control<IFarmsForm>;
  data: ParseFarmDataReturn;
}
