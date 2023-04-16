import {
  Box,
  RadioButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useTranslations } from 'use-intl';
import { v4 } from 'uuid';

import { FLAG_ICON_MAP } from '@/constants/locale';
import { useLocale } from '@/hooks';

const SwitchLang: FC<{ onClose: () => void; isOpen: boolean }> = ({
  onClose,
  isOpen,
}) => {
  const t = useTranslations();
  const { colors } = useTheme() as Theme;
  const { currentLocale, changeLocale, locales } = useLocale();

  if (!isOpen) return null;

  return (
    <>
      <Box
        top="0"
        left="0"
        right="0"
        bottom="0"
        position="fixed"
        onClick={onClose}
      />
      <Box
        top="3rem"
        borderRadius="m"
        position="absolute"
        backgroundImage={`linear-gradient(#FFFFFF1A,#FFFFFF1A), linear-gradient(${colors.background},${colors.background})`}
      >
        <Typography
          m="xl"
          as="h3"
          fontWeight="400"
          variant="medium"
          fontFamily="Roboto"
        >
          Language
        </Typography>
        {locales.map((locale) => {
          const Icon = FLAG_ICON_MAP[locale];

          return (
            <Box
              py="l"
              gap="l"
              px="xl"
              key={v4()}
              title={locale}
              display="grid"
              alignItems="center"
              fontFamily="Roboto"
              nHover={{ bg: '#FFFFFF1A' }}
              gridTemplateColumns="1fr 8rem 1fr"
              onClick={() => changeLocale(locale)}
              bg={currentLocale === locale ? '#FFFFFF1A' : 'none'}
            >
              <Box width="1rem" height="1rem">
                <Icon
                  maxHeight="1rem"
                  maxWidth="1rem"
                  width="100%"
                  height="100%"
                />
              </Box>
              {t(`common.v2.languages.${locale}`)}
              <RadioButton name={locale} checked={currentLocale === locale} />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default SwitchLang;
