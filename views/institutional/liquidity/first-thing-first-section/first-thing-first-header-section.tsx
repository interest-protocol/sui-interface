import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const FirstThingFirstHeader: FC = () => {
  const t = useTranslations();

  return (
    <Box maxWidth="29rem">
      <Typography
        variant="displaySmall"
        color="primary"
        mb={['0.5rem', '0.5rem', '0.5rem', '1.5rem']}
      >
        {t('liquidity.firstThingFirst.title')}
      </Typography>
      <Typography variant="medium" color="textSoft">
        {t('liquidity.firstThingFirst.description')}
      </Typography>
    </Box>
  );
};

export default FirstThingFirstHeader;
