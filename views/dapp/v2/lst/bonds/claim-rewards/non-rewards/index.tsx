import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';
import { ArrowLeft } from '@/svg';

import NonRewardsIllustration from './illustration';

const NonRewards: FC = () => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const { push } = useRouter();
  return (
    <Box
      p="l"
      mx="auto"
      mt="xl"
      width={['90vw', '90vw', '90vw', '21.5rem']}
      bg="surface.container"
      borderRadius="0.5rem"
      height="max-content"
    >
      <Box mb="2rem" display="flex" gap="2rem" flexDirection="column">
        <Button
          variant="text"
          p="0 !important"
          color="onSurface"
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
            variant="title4"
            fontSize="1.3rem !important"
            fontWeight="400"
            textAlign="center"
          >
            {t('lst.bonds.clamRewards.noRewards.title')}
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="1.875rem"
      >
        <NonRewardsIllustration />
        <Typography
          variant="small"
          color="onSurface"
          fontSize="0.75rem"
          textAlign="center"
          px="4xl"
        >
          {t('lst.bonds.clamRewards.noRewards.description')}
        </Typography>
        <Button
          variant="filled"
          p="0.625rem 0 !important"
          width="100%"
          onClick={() => push(Routes[RoutesEnum.LSTStake])}
        >
          <Typography
            variant="small"
            fontSize="0.875rem"
            textAlign="center"
            width="100%"
            textTransform="capitalize"
          >
            {t('lst.tabs.stake')} Sui
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};
export default NonRewards;
