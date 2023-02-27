import BigNumber from 'bignumber.js';
import { Control } from 'react-hook-form';

import { IFarmsForm, ParseFarmListDataReturn } from '../../farms.types';

export interface FarmsTableProps {
  loading: boolean;
  isDesktop: boolean;
  intUSDPrice: BigNumber;
  control: Control<IFarmsForm>;
  data: ParseFarmListDataReturn;
}
