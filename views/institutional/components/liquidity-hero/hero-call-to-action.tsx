import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';

import { ArrowDown } from '../svg/arrow';

const HeroCallToAction: FC = () => {
  const t = useTranslations();

  return (
    <Box
      display="flex"
      flexDirection="column"
      // alignItems={['center', 'center', 'center', 'flex-start']}
    >
      <Typography py="0" color="white" variant="title5" textAlign="left">
        {t('liquidity.hero.title2')}
      </Typography>
      <Typography
        paddingBottom="l"
        paddingTop="m"
        color="white"
        variant="small"
        textAlign="left"
      >
        {t('liquidity.hero.paragraph')}
      </Typography>
      <Link href={Routes[RoutesEnum.DEX]}>
        <Button
          my="4xl"
          mx={['auto', 'auto', 'auto', '0']}
          width="115px"
          PrefixIcon={<ArrowDown maxHeight="16.25px" maxWidth="13.12px" />}
          variant="text"
        >
          {t('liquidity.hero.button')}
        </Button>
      </Link>
    </Box>
  );
};

export default HeroCallToAction;
