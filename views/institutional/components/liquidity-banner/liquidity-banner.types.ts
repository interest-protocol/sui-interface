import { FC } from 'react';

import { TTranslatedMessage } from '@/interface';

export interface ILiquidityBannerCardButton {
  link: string;
  name: TTranslatedMessage;
}

export interface LiquidityBannerCardProps {
  Illustration: FC;
  colors: [string, string];
  title: TTranslatedMessage;
  label: TTranslatedMessage;
  description: TTranslatedMessage;
  buttons: [ILiquidityBannerCardButton, ILiquidityBannerCardButton];
}
