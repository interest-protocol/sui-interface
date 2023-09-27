import { Box, TextField } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { SearchSVG } from '@/components/svg/v2';
import { capitalize } from '@/utils';
import { ValidatorSearchProps } from '@/views/dapp/v2/lst/validators/all-validators/all-validators.types';

const ValidatorSearch: FC<ValidatorSearchProps> = ({ register }) => {
  const t = useTranslations();

  return (
    <Box
      pb="s"
      gap="m"
      display="flex"
      color="onSurface"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Box width={['100%', '100%', '100%', '100%']}>
        <TextField
          fontSize="14px"
          {...register('search')}
          placeholder={capitalize(t('lst.validators.tableSection.searchInput'))}
          fieldProps={{
            borderRadius: 'full',
          }}
          Prefix={
            <Box
              height="1.5rem"
              width="1.5rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="onSurface"
            >
              <SearchSVG
                width="100%"
                height="100%"
                maxWidth="1rem"
                maxHeight="1rem"
              />
            </Box>
          }
        />
      </Box>
    </Box>
  );
};

export default ValidatorSearch;
