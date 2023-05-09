import { FC } from 'react';

export interface ShareProps {
  title: string;
  subtitle: string;
  description: string;
  hasLink?: {
    caption: string;
    url: string;
  };
  Illustration: FC;
  color: string;
}
