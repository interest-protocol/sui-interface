import {
  Box,
  Button,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { FLAG_ICON_MAP } from '@/constants/locale';
import { useLocale } from '@/hooks';
import { DotsSVG, TimesSVG } from '@/svg';

import LangItem from './lang-item';

const MotionExample: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { colors } = useTheme() as Theme;
  const { locales, currentLocale, changeLocale } = useLocale();
  const t = useTranslations();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <Box
          top="0"
          left="0"
          right="0"
          bottom="0"
          position="fixed"
          onClick={handleClose}
        />
      )}
      <Button
        color="text"
        variant="icon"
        bg={isOpen ? '#FFFFFF1A' : 'none'}
        onClick={!isOpen ? handleOpen : handleClose}
      >
        {isOpen ? (
          <TimesSVG
            width="100%"
            height="100%"
            maxWidth="1.75rem"
            maxHeight="1.75rem"
          />
        ) : (
          <DotsSVG
            width="100%"
            height="100%"
            maxWidth="1.75rem"
            maxHeight="1.75rem"
          />
        )}
      </Button>
      <Motion
        top="3rem"
        borderRadius="m"
        position="absolute"
        backgroundImage={`linear-gradient(#FFFFFF1A,#FFFFFF1A), linear-gradient(${colors.background},${colors.background})`}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: {
            clipPath: 'inset(0% 0% 0% 0% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.7,
              delayChildren: 1.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <Typography
          m="xl"
          as="h3"
          fontWeight="400"
          variant="medium"
          fontFamily="Roboto"
        >
          {t('common.v2.languages.title')}
        </Typography>
        {locales.map((locale) => (
          <Motion
            py="l"
            gap="l"
            px="xl"
            key={v4()}
            display="grid"
            alignItems="center"
            fontFamily="Roboto"
            nHover={{ bg: '#FFFFFF1A' }}
            gridTemplateColumns="1fr 8rem 1fr"
            onClick={() => changeLocale(locale)}
            animate={isOpen ? 'open' : 'closed'}
            bg={currentLocale === locale ? '#FFFFFF1A' : 'none'}
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: { type: 'spring', stiffness: 300, damping: 24 },
              },
              closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
            }}
          >
            <LangItem locale={locale} Icon={FLAG_ICON_MAP[locale]} />
          </Motion>
        ))}
      </Motion>
    </>
  );
};

export default MotionExample;
