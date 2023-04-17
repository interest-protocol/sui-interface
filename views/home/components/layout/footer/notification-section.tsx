import {
  Box,
  Button,
  TextField,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { useTranslations } from 'next-intl';

const NotificationSection: FC = () => {
  const t = useTranslations();
  const { colors } = useTheme() as Theme;
  return (
    <Box bg="background">
      <Box
        gap="2rem"
        display="flex"
        flexDirection="column"
        width={['unset', 'unset', '34.75rem']}
        margin={['1.25rem', '1.25rem', '0 auto']}
      >
        <Typography
          as="h1"
          my="2xl"
          gridColumn="1/8"
          fontWeight="400"
          variant="displayLarge"
        >
          <Typography
            as="span"
            display="block"
            textAlign="center"
            variant="displayLarge"
            letterSpacing="-0.15rem"
            background={`linear-gradient(90deg, ${colors.primary} 27.62%, ${colors.primary}33 82.41%)`}
            WebkitBackgroundClip="text"
            WebkitTextFillColor="transparent"
            backgroundClip="text"
          >
            {t('common.getEarly', { isMobile: Number(false) })}
          </Typography>
          <Typography
            as="span"
            display="block"
            textAlign="center"
            variant="displayLarge"
            letterSpacing="-0.15rem"
            background={`linear-gradient(270deg, ${colors.primary} 18.13%, ${colors.primary}33 102.01%)`}
            WebkitBackgroundClip="text"
            WebkitTextFillColor="transparent"
            backgroundClip="text"
          >
            {t('common.notifications', { isMobile: Number(false) })}
          </Typography>
          <Typography
            as="span"
            display="block"
            textAlign="center"
            variant="displaySmall"
            justifyContent="center"
            letterSpacing="-0.15rem"
            background={`linear-gradient(90deg, ${colors.primary} 13.04%, ${colors.primary}33 96.06%)`}
            WebkitBackgroundClip="text"
            WebkitTextFillColor="transparent"
            backgroundClip="text"
          >
            {t('common.onNewFeatures', { isMobile: Number(false) })}
          </Typography>
        </Typography>
        <TextField
          my="0rem"
          fontSize="1rem"
          minHeight="1rem"
          placeholder="Your@gmail.com"
        />
        <Button variant={'filled'} justifyContent="center">
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default NotificationSection;
