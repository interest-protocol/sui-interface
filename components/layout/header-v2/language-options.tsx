import { ListItem, Motion, Theme, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { FLAG_ICON_MAP } from '@/constants/locale';
import { useLocale } from '@/hooks';
import { ArrowLeftSVG } from '@/svg';

import { SubOptionProps } from './header.types';
import LangItem from './lang-item';

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

const LanguageOptions: FC<SubOptionProps> = ({
  isOpen,
  setOpenLanguageOptions,
  openLanguageOptions,
}) => {
  const t = useTranslations();
  const { colors } = useTheme() as Theme;
  const { locales, changeLocale } = useLocale();

  return (
    <Motion
      zIndex={1}
      top="4.5rem"
      initial="closed"
      borderRadius="m"
      position="absolute"
      variants={wrapperVariants}
      animate={isOpen ? 'open' : 'closed'}
      pointerEvents={isOpen ? 'auto' : 'none'}
      backgroundImage={`linear-gradient(#FFFFFF1A,#FFFFFF1A), linear-gradient(${colors.background},${colors.background})`}
      width={'14.688rem'}
    >
      <ListItem
        width={'14.688rem'}
        onClick={() => setOpenLanguageOptions(!openLanguageOptions)}
        PrefixIcon={
          <ArrowLeftSVG
            maxWidth={'0.313rem'}
            maxHeight={'0.625rem'}
            width="100%"
            height="100%"
          />
        }
        title="Language"
        nHover={{ bg: `${colors.text}08` }}
        cursor="pointer"
      />
      {locales.map((locale) => (
        <LangItem
          locale={locale}
          Icon={FLAG_ICON_MAP[locale]}
          key={v4()}
          changeLocale={() => changeLocale(locale)}
        />
      ))}
    </Motion>
  );
};

export default LanguageOptions;
