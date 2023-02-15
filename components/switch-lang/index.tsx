import { FC } from 'react';

import { Box, Dropdown, Typography } from '@/elements';
import { IDropdownData } from '@/elements/dropdown/dropdown.types';
import { useLocale } from '@/hooks';
import { getSafeLocaleSVG } from '@/utils';

import { SwitchLangProps } from './switch-lang.types';

const SwitchLang: FC<SwitchLangProps> = ({ isMobile }) => {
  const { currentLocale, changeLocale, locales } = useLocale();

  return (
    <Dropdown
      title={
        <Box
          width="1.25rem"
          height="1.25rem"
          borderRadius="2rem"
          mx={['M', '0.75rem']}
        >
          {getSafeLocaleSVG(currentLocale)}
        </Box>
      }
      mode="menu"
      customItems={isMobile}
      defaultValue={currentLocale}
      wrapperProps={{
        display: ['grid', 'block'],
        gridTemplateColumns: ['1fr 1fr 1fr', 'unset'],
        top: '2rem',
      }}
      data={
        locales.map((locale) => ({
          value: locale,
          displayOption: (
            <Box
              pl="M"
              height="3rem"
              display="flex"
              alignItems="center"
              hover={{
                color: currentLocale === locale ? 'unset' : 'textInverted',
              }}
            >
              <Box
                mx="0.75rem"
                borderRadius="2rem"
                backgroundSize="cover"
                width={['1.5rem', '1.25rem']}
                height={['1.5rem', '1.25rem']}
              >
                {getSafeLocaleSVG(locale)}
              </Box>
              <Typography
                variant="button"
                fontWeight="500"
                fontSize="1rem"
                lineHeight="1.625rem"
                display={['none', 'inline-block']}
              >
                {locale}
              </Typography>
            </Box>
          ),
          onSelect: () => currentLocale !== locale && changeLocale(locale),
        })) as ReadonlyArray<IDropdownData>
      }
    />
  );
};

export default SwitchLang;
