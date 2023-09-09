import {
  ISuiPCSVG,
  ISuiSVG,
  ISuiYNSVG,
  SUISVG,
  UsersSVG,
} from '@/components/svg/v2';

export const OVERVIEW_DATA = [
  {
    description: 'lsd.overview.totalSuiStaked',
    Icon: SUISVG,
    value: 574.34,
  },
  {
    description: 'lsd.overview.totalStakers',
    Icon: UsersSVG,
    value: 96,
  },
  {
    description: 'lsd.overview.validators',
    Icon: UsersSVG,
    value: 96,
  },
  {
    description: 'lsd.overview.totalISUIMinted',
    Icon: ISuiSVG,
    value: 1.123,
  },
  {
    description: 'lsd.overview.totalISUIPCMinted',
    Icon: ISuiPCSVG,
    value: 1.123,
  },
  {
    description: 'lsd.overview.totalISUIYNMinted',
    Icon: ISuiYNSVG,
    value: 5,
  },
];
