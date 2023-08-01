import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface MenuProfileProps {
  isOpen: boolean;
  loading: boolean;
  handleOpenSwitch: () => void;
  suiNSRecord: Record<string, string>;
  avatarUrlRecord: Record<string, string>;
  handleCloseProfile: () => void;
}

export interface ProfileMenuItemProps {
  name: string;
  description: string;
  Icon: FC<SVGProps>;
  hasBorder: boolean;
  disabled?: boolean;
  handleAction?: Record<string, () => void | Promise<void>>;
}

export interface MenuSwitchAccountProps {
  isOpen: boolean;
  loading: boolean;
  onBack: () => void;
  suiNSRecord: Record<string, string>;
  avatarUrlRecord: Record<string, string>;
  handleCloseProfile: () => void;
}

export interface MenuSwitchAccountHeaderProps {
  onBack: () => void;
  handleCloseProfile: () => void;
  size: number;
}

export interface UserInfoProps {
  loading: boolean;
  suiNSRecord: Record<string, string>;
  avatarUrlRecord: Record<string, string>;
}
