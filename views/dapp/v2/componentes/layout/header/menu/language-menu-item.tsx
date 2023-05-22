import { Box, RadioButton, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { useTranslations } from 'use-intl';

import { FLAG_ICON_MAP } from '@/constants/locale';
import { useLocale } from '@/hooks';
import { CarteLeftSVG } from '@/svg';
import { capitalize } from '@/utils';

import { LanguageMenuItemProps } from './menu.types';

const LanguageMenuItem: FC<LanguageMenuItemProps> = ({ name }) => {
  const t = useTranslations();
  const { currentLocale } = useLocale();

  const Icon = name === 'title' ? CarteLeftSVG : FLAG_ICON_MAP[name];

  return (
    <>
      <Box display="grid" gridTemplateColumns="2rem auto" alignItems="center">
        <Box
          as="span"
          lineHeight="0"
          width={name === 'title' ? '0.5rem' : '1rem'}
        >
          <Icon
            maxWidth={name === 'title' ? '0.5rem' : '1rem'}
            maxHeight={name === 'title' ? '0.5rem' : '1rem'}
            width="100%"
          />
        </Box>
        <Typography
          variant="medium"
          whiteSpace="nowrap"
          letterSpacing="0.031rem"
          fontFamily="'Roboto', sans-serif"
        >
          {capitalize(t(`common.v2.languages.${name}`))}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        {name !== 'title' && (
          <RadioButton
            name={name}
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChange={() => {}}
            checked={currentLocale === name}
          />
        )}
      </Box>
    </>
  );
};

export default LanguageMenuItem;
