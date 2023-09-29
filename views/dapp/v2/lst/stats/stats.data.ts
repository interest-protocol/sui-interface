import { DERIVATED_SUI_SYMBOL } from '../lst.types';

export const OVERVIEW_DATA: ReadonlyArray<{
  description: string;
  type: DERIVATED_SUI_SYMBOL | 'users';
  value: number;
}> = [
  {
    description: 'lst.overview.totalSuiStaked',
    type: 'SUI',
    value: 574.34,
  },
  {
    description: 'lst.overview.totalStakers',
    type: 'users',
    value: 96,
  },
  {
    description: 'lst.overview.validators',
    type: 'users',
    value: 96,
  },
  {
    description: 'lst.overview.totalISUIMinted',
    type: 'iSui',
    value: 1.123,
  },
  {
    description: 'lst.overview.totalISUIPCMinted',
    type: 'iSUIP',
    value: 1.123,
  },
  {
    description: 'lst.overview.totalISUIYNMinted',
    type: 'iSUIY',
    value: 5,
  },
];
