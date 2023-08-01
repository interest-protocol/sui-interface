import { Motion, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { wrapperVariants } from '@/constants';
import { FLAG_ICON_MAP } from '@/constants/locale';
import { useLocale } from '@/hooks';
import { capitalize } from '@/utils';

import LangItem from './lang-item';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const SwitchLang: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const t = useTranslations();
  const { currentLocale, locales, changeLocale } = useLocale();

  return (
    <Motion
      zIndex={1}
      top="3rem"
      initial="closed"
      borderRadius="m"
      position="absolute"
      variants={wrapperVariants}
      animate={isOpen ? 'open' : 'closed'}
      pointerEvents={isOpen ? 'auto' : 'none'}
      bg="#292A2D"
    >
      <Typography
        m="xl"
        as="h3"
        fontWeight="400"
        variant="medium"
        fontFamily="Roboto"
      >
        {capitalize(t('common.v2.languages.title'))}
      </Typography>
      {locales.map((locale) => (
        <Motion
          py="l"
          cursor="pointer"
          gap="l"
          px="xl"
          key={v4()}
          display="grid"
          alignItems="center"
          fontFamily="Roboto"
          variants={itemVariants}
          initial={itemVariants.closed}
          nHover={{ bg: '#FFFFFF1A' }}
          gridTemplateColumns="1fr 8rem 1fr"
          onClick={() => changeLocale(locale)}
          bg={currentLocale === locale ? '#FFFFFF1A' : 'none'}
        >
          <LangItem locale={locale} Icon={FLAG_ICON_MAP[locale]} />
        </Motion>
      ))}
    </Motion>
  );
};

export default SwitchLang;
