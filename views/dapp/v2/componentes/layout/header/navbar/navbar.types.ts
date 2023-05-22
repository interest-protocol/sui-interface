export interface NavItemProps {
  path: string;
  item: 'home' | 'swap' | 'pool' | 'lend';
}

export interface NavItemTextProps {
  isSelected?: boolean;
}

export interface NavbarProps {
  isMobile?: boolean;
}
