import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { NoSearchSVG } from '@/components/svg/v2';

const NotFound: FC = () => {
  const t = useTranslations();

  return (
    <Box
      p="4xl"
      gap="xl"
      flex="1"
      color="text"
      display="flex"
      overflowY="auto"
      alignItems="center"
      flexDirection="column"
      bg="surface.containerLow"
    >
      <NoSearchSVG maxHeight="4rem" maxWidth="4rem" width="100%" />
      <Typography variant="medium" textTransform="capitalize">
        {t('common.notFound')}
      </Typography>
    </Box>
  );
};

export default NotFound;
