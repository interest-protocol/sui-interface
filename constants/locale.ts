import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';
import { BRFlagSVG, PTFlagSVG, USFlagSVG } from '@/svg';

export enum LocalesEnum {
  PT = 'pt-PT',
  BR = 'pt-BR',
  EN = 'en-US',
}

export type Locales = 'pt-PT' | 'pt-BR' | 'en-US';

export const FLAG_ICON_MAP: Record<Locales, FC<SVGProps>> = {
  'en-US': USFlagSVG,
  'pt-PT': PTFlagSVG,
  'pt-BR': BRFlagSVG,
};
