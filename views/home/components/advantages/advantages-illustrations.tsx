import { FC } from 'react';

import ResponsiveImage from '@/elements/responsive-image';

export const StepsIllustration: FC = () => (
  <ResponsiveImage alt="profits" path="home/profits" />
);
export const BlocksIllustration: FC = () => (
  <ResponsiveImage alt="rewards" path="home/rewards" />
);
export const CoinsIllustration: FC = () => (
  <ResponsiveImage alt="tokens" path="home/tokens" />
);
