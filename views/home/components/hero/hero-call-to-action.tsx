import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const HeroCallToAction: FC = () => {
  const t = useTranslations();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={['center', 'center', 'flex-start']}
    >
      <Typography
        py="l"
        color="outline"
        variant="medium"
        textAlign={['center', 'center', 'left']}
      >
        {t('landingPage.hero.description')}
      </Typography>
      <Button my="4xl" variant="filled">
        {t('landingPage.hero.button')}
      </Button>
    </Box>
  );
};

export default HeroCallToAction;
