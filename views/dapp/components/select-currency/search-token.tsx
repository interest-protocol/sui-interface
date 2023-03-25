import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Box, Input } from '@/elements';
import { TimesSVG } from '@/svg';
import { capitalize } from '@/utils';

import { SearchTokenProps } from './select-currency.types';

const SearchToken: FC<SearchTokenProps> = ({ register, setValue }) => {
  const t = useTranslations();

  return (
    <Input
      {...register('search')}
      placeholder={capitalize(t('common.searchTokenInputDescription'))}
      shieldProps={{
        py: 'M',
        bg: 'background',
        borderRadius: '2rem',
        minWidth: ['17rem', '25rem'],
      }}
      Suffix={
        <Box
          bg="#0002"
          width="1.5rem"
          height="1.5rem"
          cursor="pointer"
          borderRadius="50%"
          alignItems="center"
          display="inline-flex"
          justifyContent="center"
          nHover={{ bg: '#0003' }}
          transition="background 300ms ease-in-out"
          onClick={() => setValue('search', '')}
        >
          <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Box>
      }
    />
  );
};
export default SearchToken;
