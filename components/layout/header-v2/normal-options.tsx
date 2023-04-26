import {
  ListItem,
  Motion,
  SwitchButton,
  Theme,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ArrowRightSVG } from '@/svg';

import { SubOptionProps } from './header.types';

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

const NormalOptions: FC<SubOptionProps> = ({
  isOpen,
  setOpenLanguageOptions,
  openLanguageOptions,
}) => {
  const t = useTranslations();
  const { colors, dark } = useTheme() as Theme;

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
      width={'14.688rem'}
      backgroundImage={`linear-gradient(#FFFFFF1A,#FFFFFF1A), linear-gradient(${colors.background},${colors.background})`}
    >
      <ListItem
        width={'14.688rem'}
        SuffixIcon={
          <SwitchButton labels="" name="langSwitch" defaultValue={dark} />
        }
        metadata={dark ? 'On' : 'Off'}
        title="Darkmode"
        nHover={{ bg: `${colors.text}08` }}
        cursor="pointer"
      />
      <ListItem
        width={'14.688rem'}
        onClick={() => setOpenLanguageOptions(!openLanguageOptions)}
        SuffixIcon={
          <ArrowRightSVG
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
    </Motion>
  );
};

export default NormalOptions;
