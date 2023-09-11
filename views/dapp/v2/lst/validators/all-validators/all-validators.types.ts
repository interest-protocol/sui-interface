import { SuiSystemStateSummary } from '@mysten/sui.js/src/types';

export interface AllValidatorsProps {
  activeValidators: SuiSystemStateSummary['activeValidators'];
}
