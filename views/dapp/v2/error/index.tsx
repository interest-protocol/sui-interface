import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ComputerEyesSVG, DiedComputerSVG } from '@/components/svg/v2';
import { Routes, RoutesEnum } from '@/constants';
import { ArrowLeft } from '@/svg';
import { capitalize } from '@/utils';

const ErrorPage: FC<{ message?: string; linkGoTo?: string }> = ({
  message,
  linkGoTo,
}) => {
  const t = useTranslations();
  const { push } = useRouter();
  return (
    <Box variant="container">
      <Box
        width="100%"
        color="onSurface"
        gridColumn={['1/-1', '1/-1', '1/-1', '2/12']}
      >
        <Box width={['unset', 'unset', 'unset', '100%']} position="relative">
          <Motion
            top="22%"
            width="6%"
            left="40.2%"
            position="absolute"
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 2.5,
              repeatType: 'mirror',
            }}
            animate={{ scaleY: [1, 0, 1] }}
          >
            <ComputerEyesSVG maxHeight="100%" maxWidth="100%" />
          </Motion>
          <DiedComputerSVG maxHeight="100%" maxWidth="100%" width="100%" />
        </Box>
        <Typography variant="displayLarge" mb=".5rem" textAlign="center">
          OOPS!
        </Typography>
        <Typography
          mb="1rem"
          textAlign="center"
          variant="title2"
          fontFamily="Share Tech Mono"
        >
          {message || capitalize(t('error.generic'))}
        </Typography>
        <Button
          mx="auto"
          size="small"
          bg="onSurface"
          variant="filled"
          color="inverseOnSurface"
          onClick={() => push(linkGoTo || Routes[RoutesEnum.Swap])}
          PrefixIcon={
            <ArrowLeft maxHeight="100%" maxWidth="100%" width="1rem" />
          }
        >
          {t('common.goBackHome')}
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;
