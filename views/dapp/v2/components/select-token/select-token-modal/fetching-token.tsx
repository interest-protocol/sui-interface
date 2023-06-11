import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const FetchingToken: FC = () => {
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
      <ProgressIndicator variant="loading" />
      <Typography variant="medium" textTransform="capitalize">
        {t('common.loading')}
      </Typography>
    </Box>
  );
};

export default FetchingToken;
