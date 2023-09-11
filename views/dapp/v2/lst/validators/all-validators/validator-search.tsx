import { Box, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { SearchSVG } from '@/components/svg/v2';
import { capitalize } from '@/utils';

const ValidatorSearch: FC = () => {
  const t = useTranslations();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      color="onSurface"
      pb="s"
      gap="m"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Typography variant="medium" textTransform="uppercase">
        {t('lst.validators.tableSection.title')}
      </Typography>
      <Box width={['100%', '100%', '100%', '26rem']}>
        <TextField
          fontSize="14px"
          fieldProps={{
            borderRadius: 'full',
          }}
          placeholder={capitalize(t('lst.validators.tableSection.searchInput'))}
          Prefix={
            <Box
              height="1.5rem"
              width="1.5rem"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <SearchSVG
                maxHeight="1rem"
                maxWidth="1rem"
                width="100%"
                height="100%"
              />
            </Box>
          }
        />
      </Box>
    </Box>
  );
};

export default ValidatorSearch;
