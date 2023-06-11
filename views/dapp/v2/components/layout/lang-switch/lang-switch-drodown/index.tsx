import { Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { useLocale } from '@/hooks';

import LanguageMenuItem from '../../header/menu/language-menu-item';
import MenuItemWrapper from '../../header/menu/menu-item-wrapper';
import { LangSwitchDropdownProps } from '../lang-switch.types';

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

const LangSwitchDropdown: FC<LangSwitchDropdownProps> = ({ isOpen }) => {
  const { locales, changeLocale } = useLocale();

  return (
    <Motion
      right="0"
      top="3rem"
      zIndex={1}
      initial="closed"
      borderRadius="m"
      position="absolute"
      bg="surface.container"
      variants={wrapperVariants}
      animate={isOpen ? 'open' : 'closed'}
      pointerEvents={isOpen ? 'auto' : 'none'}
    >
      {locales.map((locale) => (
        <MenuItemWrapper key={v4()} onClick={() => changeLocale(locale)}>
          <LanguageMenuItem name={locale} />
        </MenuItemWrapper>
      ))}
    </Motion>
  );
};

export default LangSwitchDropdown;
