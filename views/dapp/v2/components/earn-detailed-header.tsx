import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ArrowLeft } from '@/svg';

const DetailedHeader: FC = () => {
  const t = useTranslations();

  return (
    <Box display="flex" gap="1.5rem">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="2.5rem"
        height="2.5rem"
        border="1px solid"
        borderColor="outiline.outlineVariant"
        borderRadius="50%"
        color="onSurface"
      >
        <ArrowLeft maxHeight="100%" maxWidth="100%" width="60%" />
      </Box>
      <Box display="flex" alignItems="center">
        <Typography variant="title4" fontSize="1.5rem">
          SUI{' '}
        </Typography>
        <Typography variant="title4" fontSize="1.5rem">
          - BTCB
        </Typography>
      </Box>
      <Box display="flex" gap=".5rem">
        <Button variant="filled" size="small" bg="#FED7AA">
          <Typography variant="small" margin="0 auto" color="#92400E">
            {t('earn.buttons.volatile')}
          </Typography>
        </Button>
        <Button variant="filled" size="small" bg="#D9F99D">
          <Typography variant="small" margin="0 auto" color="#3F6212">
            {t('earn.buttons.farm')}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
export default DetailedHeader;
