import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

const Rewards: FC = () => {
  const t = useTranslations();
  return (
    <Box>
      <Typography
        variant="extraSmall"
        fontSize="0.688rem"
        color="onSurface"
        my="l"
        textTransform="capitalize"
      >
        {t('lsd.rewards')}
      </Typography>
      <Typography
        variant="extraSmall"
        fontSize="0.688rem"
        color="onSurface"
        mb="l"
        opacity={0.6}
        textTransform="uppercase"
      >
        {t('lsd.epochsDescription')}
      </Typography>
      <Box
        height="2rem"
        width="100%"
        background="linear-gradient(90deg, #7997FF 0%, #9BF 100%)"
        borderRadius="0.35rem"
      />
    </Box>
  );
};

export default Rewards;
