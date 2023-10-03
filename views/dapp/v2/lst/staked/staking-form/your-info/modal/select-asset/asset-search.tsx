import { Box, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { SearchSVG } from '@/components/svg/v2';
import { capitalize } from '@/utils';

const AssetSearch: FC = () => {
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
      <Typography variant="medium" textTransform="uppercase" px="s">
        {t('lst.modal.asset.title')}
      </Typography>
      <Box width={['100%', '100%', '100%', '16rem']}>
        <TextField
          fontSize="14px"
          placeholder={capitalize(t('lst.assetsTable.searchInput'))}
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

export default AssetSearch;
