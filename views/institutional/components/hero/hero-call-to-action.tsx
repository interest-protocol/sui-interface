import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';

const HeroCallToAction: FC = () => {
  const t = useTranslations();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems={['center', 'center', 'center', 'flex-start']}
    >
      <Typography
        py="l"
        color="outline"
        variant="medium"
        textAlign={['center', 'center', 'center', 'left']}
      >
        {t('landingPage.hero.description')}
      </Typography>
      <Link href={Routes[RoutesEnum.DEX]}>
        <Button my="4xl" variant="filled">
          {t('landingPage.hero.button')}
        </Button>
      </Link>
    </Box>
  );
};

export default HeroCallToAction;
