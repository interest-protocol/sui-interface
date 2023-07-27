import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface MenuProfileProps {
  isOpen: boolean;
  loading: boolean;
  handleOpen: () => void;
  avatarUrlRecord: Record<string, string>;
  suiNSRecord: Record<string, string>;
}

export interface ProfileMenuItemProps {
  name: string;
  description: string;
  Icon: FC<SVGProps>;
  hasBorder: boolean;
  disabled?: boolean;
}

export interface MenuSwitchAccountProps {
  isOpen: boolean;
  onBack: () => void;
  loading: boolean;
  suiNSRecord: Record<string, string>;
}

export interface UserInfoProps {
  avatarUrlRecord: Record<string, string>;
  suiNSRecord: Record<string, string>;
}