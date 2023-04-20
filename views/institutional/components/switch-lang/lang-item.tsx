import { Box, RadioButton } from '@interest-protocol/ui-kit';
// import { Variants } from 'framer-motion';
import { FC } from 'react';
import { useTranslations } from 'use-intl';

import { SVGProps } from '@/components/svg/svg.types';
import { Locales } from '@/constants/locale';
import { useLocale } from '@/hooks';

// const itemVariants: Variants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: { type: 'spring', stiffness: 300, damping: 24 },
//   },
//   closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
// };

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
