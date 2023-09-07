import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import DollarCoin from '@/components/svg/v2/dollar-coin';

const DollarCoinIllustration: FC = () => {
  const t = useTranslations();
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      p="4xl"
    >
      <Motion
        animate={{ y: -5 }}
        initial={{ y: 0 }}
        transition={{
          duration: 0.4,
          type: 'spring',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <DollarCoin width="100%" maxWidth="6.875rem" maxHeight="7.5rem" />
      </Motion>

      <Typography
        mt="4xl"
        fontWeight="700"
        variant="medium"
        color="onSurface"
        textAlign="center"
      >
        {t('common.v2.menu.noTokensYet')}
      </Typography>
      <Typography
        mt="m"
        variant="small"
        textAlign="center"
        color="onSurface"
        maxWidth="17.1875rem"
      >
        {t('common.v2.menu.noTokensYetDescription')}
      </Typography>
    </Box>
  );
};

export default DollarCoinIllustration;
