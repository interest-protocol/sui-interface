import { SUISVG, UsersSVG } from '@/components/svg/v2';
import { ISuiPCSVG, ISuiSVG, ISuiYNSVG } from '@/svg';

export const OVERVIEW_DATA = [
  {
    description: 'lst.overview.totalSuiStaked',
    Icon: SUISVG,
    value: 574.34,
  },
  {
    description: 'lst.overview.totalStakers',
    Icon: UsersSVG,
    value: 96,
  },
  {
    description: 'lst.overview.validators',
    Icon: UsersSVG,
    value: 96,
  },
  {
    description: 'lst.overview.totalISUIMinted',
    Icon: ISuiSVG,
    value: 1.123,
  },
  {
    description: 'lst.overview.totalISUIPCMinted',
    Icon: ISuiPCSVG,
    value: 1.123,
  },
  {
    description: 'lst.overview.totalISUIYNMinted',
    Icon: ISuiYNSVG,
    value: 5,
  },
];
