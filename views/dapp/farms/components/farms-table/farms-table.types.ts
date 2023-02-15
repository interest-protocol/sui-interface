import { BigNumber } from 'ethers';
import { Control } from 'react-hook-form';

import { IFarmsForm, SafeFarmSummaryData } from '../../farms.types';

export interface FarmsTableProps {
  loading: boolean;
  isDesktop: boolean;
  farms: SafeFarmSummaryData['farms'];
  intUSDPrice: BigNumber;
  control: Control<IFarmsForm>;
}
