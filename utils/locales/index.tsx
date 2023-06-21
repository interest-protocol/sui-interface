import { ReactElement } from 'react';

import { FLAG_ICON_MAP, Locales } from '@/constants/locale';
import { USFlagSVG } from '@/svg';

export const getSafeLocaleSVG = (locale: Locales): ReactElement => {
  const FlagIcon = FLAG_ICON_MAP[locale] ?? USFlagSVG;

  return (
    <FlagIcon
      width="100%"
      height="100%"
      maxWidth="1.25rem"
      maxHeight="1.25rem"
    />
  );
};
