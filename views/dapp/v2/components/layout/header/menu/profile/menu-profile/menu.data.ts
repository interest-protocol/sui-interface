import {
  ActivitySVG,
  AssetsSVG,
  LinkSVG,
  LogoutSVG,
  SwitchSVG,
} from '@/components/svg/v2';

import { ProfileMenuItemProps } from '../profile.types';

export const MenuProfileData: ReadonlyArray<ProfileMenuItemProps> = [
  {
    name: 'activity',
    description: 'common.v2.wallet.activity',
    Icon: ActivitySVG,
    hasBorder: false,
    disabled: true,
  },
  {
    name: 'assets',
    description: 'common.v2.wallet.assets',
    Icon: AssetsSVG,
    hasBorder: false,
    disabled: true,
  },
  {
    name: 'viewInExplorer',
    description: 'common.v2.wallet.viewInExplorer',
    Icon: LinkSVG,
    hasBorder: false,
    disabled: false,
  },
  {
    name: 'switch',
    description: 'common.v2.wallet.switch',
    Icon: SwitchSVG,
    hasBorder: false,
    disabled: false,
  },
  {
    name: 'disconnect',
    description: 'common.v2.wallet.disconnect',
    Icon: LogoutSVG,
    hasBorder: true,
    disabled: false,
  },
];
