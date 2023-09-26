import { Box, Typography } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';
import { ArrowLeft } from '@/svg';

const GoBackToBonds: FC = () => {
  const t = useTranslations();
  const { push } = useRouter();

  return (
    <Box
      gap="m"
      display="flex"
      cursor="pointer"
      alignItems="center"
      nHover={{ color: 'primary' }}
      onClick={() => push(Routes[RoutesEnum.LSTBonds])}
    >
      <ArrowLeft maxHeight="1.2rem" maxWidth="1.2rem" width="100%" />
      <Typography variant="small" textTransform="capitalize">
        {t('common.back')}
      </Typography>
    </Box>
  );
};

export default GoBackToBonds;
