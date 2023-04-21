import { Motion, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

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
const wrapperVariants = {
  open: {
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  closed: {
    clipPath: 'inset(10% 50% 90% 50% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
    },
  },
};

const SwitchLang: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const t = useTranslations();
  const { colors } = useTheme() as Theme;
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
      backgroundImage={`linear-gradient(#FFFFFF1A,#FFFFFF1A), linear-gradient(${colors.background},${colors.background})`}
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
