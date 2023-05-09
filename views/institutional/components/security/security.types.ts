import { ReactNode } from 'react';

export interface SecurityCardProps {
  title: string;
  color: string;
  icon: ReactNode;
  text: ReactNode;
  cat: { link: string; name: string };
}
