import {
  Box,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { RoundedPlusSVG } from '@/svg';

const CollectRewardCard: FC = () => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;

  return (
    <Motion
      gap=".25rem"
      display="flex"
      cursor="pointer"
      color="onSurface"
      p="2.0625rem 1.5rem"
      borderRadius=".5rem"
      whileHover={{ scale: 1.05 }}
      bg="primary.primaryContainer"
      transition={{ duration: 0.6 }}
    >
      <Link href="">
        <Box display="flex" flex="1" alignItems="center" p=".5rem">
          <Box
            bg={dark ? 'white' : 'primary'}
            p="0.5rem"
            mr="1.5rem"
            display="flex"
            color="surface"
            width="fit-content"
            borderRadius=".25rem"
          >
            <RoundedPlusSVG maxHeight="25px" maxWidth="25px" width="100%" />
          </Box>
          <Box>
            <Typography variant="large" color={dark ? 'white' : 'onSurface'}>
              {t('dapp.rewards')}
            </Typography>
            <Typography variant="small">
              {t('dapp.collectYourIPXTokens')}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Motion>
  );
};

export default CollectRewardCard;
