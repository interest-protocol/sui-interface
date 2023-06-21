import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import Earn from '@/components/svg/earn';
import Swap from '@/components/svg/swap';
import { PoolSVG } from '@/components/svg/v2';

const SmallCards: FC = () => {
  const t = useTranslations();

  return (
    <Box display="flex" gap=".25rem" color="onSurface">
      <Motion
        flex="1"
        cursor="pointer"
        bg="surface.containerLow"
        whileHover={{ scale: 0.95 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="#">
          <Box
            p=".5rem"
            display="flex"
            height="7.5rem"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Swap maxHeight="25px" maxWidth="25px" width="100%" />
            <Typography variant="medium">{t('dapp.swap')}</Typography>
          </Box>
        </Link>
      </Motion>
      <Motion
        flex="1"
        cursor="pointer"
        bg="surface.containerLow"
        whileHover={{ scale: 0.95 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="#">
          <Box
            p=".5rem"
            display="flex"
            height="7.5rem"
            flexDirection="column"
            justifyContent="space-between"
          >
            <PoolSVG maxHeight="27px" maxWidth="27px" width="100%" />
            <Typography variant="medium">{t('dapp.earn')}</Typography>
          </Box>
        </Link>
      </Motion>
    </Box>
  );
};

export default SmallCards;
