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
      <Box
        gap="s"
        my="4xl"
        display="flex"
        width="min-content"
        alignItems="center"
        flexDirection="column"
      >
        <Link href={Routes[RoutesEnum.Swap]}>
          <Button variant="filled" justifyContent="center" whiteSpace="nowrap">
            {t('landingPage.hero.dappCTA')}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HeroCallToAction;
