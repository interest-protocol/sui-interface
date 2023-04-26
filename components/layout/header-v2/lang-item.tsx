import { ListItem, RadioButton } from '@interest-protocol/ui-kit';
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
  changeLocale: () => void;
}> = ({ locale, Icon, changeLocale }) => {
  const t = useTranslations();
  const { currentLocale } = useLocale();

  return (
    <ListItem
      onClick={() => changeLocale()}
      width={'14.688rem'}
      PrefixIcon={
        <Icon maxHeight="1rem" maxWidth="1rem" width="1rem" height="1rem" />
      }
      title={t(`common.v2.languages.${locale}`)}
      SuffixIcon={
        <RadioButton
          name={locale}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onChange={() => {}}
          checked={currentLocale === locale}
        />
      }
    ></ListItem>
  );
};

export default LangItem;
