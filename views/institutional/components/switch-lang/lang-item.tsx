import { Box, RadioButton } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useTranslations } from 'use-intl';

import { SVGProps } from '@/components/svg/svg.types';
import { Locales } from '@/constants/locale';
import { useLocale } from '@/hooks';

const LangItem: FC<{
  locale: Locales;
  Icon: FC<SVGProps>;
}> = ({ locale, Icon }) => {
  const t = useTranslations();
  const { currentLocale } = useLocale();

  return (
    <>
      <Box width="1rem" height="1rem">
        <Icon maxHeight="1rem" maxWidth="1rem" width="100%" height="100%" />
      </Box>
      {t(`common.v2.languages.${locale}`)}
      <RadioButton
        name={locale}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
        checked={currentLocale === locale}
      />
    </>
  );
};

export default LangItem;
