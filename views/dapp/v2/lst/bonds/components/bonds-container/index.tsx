import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC, PropsWithChildren } from 'react';

import { Routes, RoutesEnum } from '@/constants';
import { ArrowLeft } from '@/svg';

import { BondsContainerProps } from './bonds-container.types';

const BondsContainer: FC<PropsWithChildren<BondsContainerProps>> = ({
  title,
  children,
  description,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const { push } = useRouter();
  return (
    <Box
      bg="surface.container"
      p="l"
      borderRadius="0.5rem"
      height="max-content"
    >
      <Box mb={['1.5rem', '1.5rem', '1.5rem', '3rem']}>
        <Button
          variant="text"
          p="0 !important"
          color="onSurface"
          mb="1.313rem"
          nHover={{
            backgroundColor: 'unset',
          }}
          PrefixIcon={
            <ArrowLeft maxHeight="1.125rem" maxWidth="1.125rem" width="100%" />
          }
          onClick={() => push(Routes[RoutesEnum.LSTBonds])}
        >
          <Typography
            variant="small"
            font="0.875rem"
            textTransform="capitalize"
          >
            {t('common.back')}
          </Typography>
        </Button>
        <Box color={dark ? 'white' : 'black'}>
          <Typography
            variant="title1"
            fontFamily="'Share Tech Mono', monospace"
            textTransform="capitalize"
            fontSize={['1.8rem', '1.8rem', '2rem', '2.25rem']}
          >
            {title}
          </Typography>
          <Typography
            variant="medium"
            opacity="0.6"
            fontSize={['0.75rem', '0.75rem', '0.75rem', 'l']}
          >
            {description}
          </Typography>
        </Box>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};
export default BondsContainer;
