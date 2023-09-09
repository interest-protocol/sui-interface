import {
  ISuiPCSVG,
  ISuiSVG,
  ISuiYNSVG,
  SUISVG,
  UsersSVG,
} from '@/components/svg/v2';

export const OVERVIEW_DATA = [
  {
    description: 'totalSuiStaked',
    Icon: SUISVG,
    value: 574.34,
  },
  {
    description: 'totalStakers',
    Icon: UsersSVG,
    value: 96,
  },
  {
    description: 'validators',
    Icon: UsersSVG,
    value: 96,
  },
  {
    description: 'totalISUIMinted',
    Icon: ISuiSVG,
    value: 1.123,
  },
  {
    description: 'totalISUIPCMinted',
    Icon: ISuiPCSVG,
    value: 1.123,
  },
  {
    description: 'totalISUIYNMinted',
    Icon: ISuiYNSVG,
    value: 5,
  },
];
