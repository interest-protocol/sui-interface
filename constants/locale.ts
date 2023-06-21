import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';
import { BRFlagSVG, ESFlagSVG, PTFlagSVG, USFlagSVG } from '@/svg';

export enum LocalesEnum {
  PT = 'pt-PT',
  BR = 'pt-BR',
  EN = 'en-US',
  ES = 'es-ES',
}

export type Locales = 'pt-PT' | 'pt-BR' | 'en-US' | 'es-ES';

export const FLAG_ICON_MAP: Record<Locales, FC<SVGProps>> = {
  'en-US': USFlagSVG,
  'es-ES': ESFlagSVG,
  'pt-PT': PTFlagSVG,
  'pt-BR': BRFlagSVG,
};
