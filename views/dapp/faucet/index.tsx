import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Container } from '@/components';
import { Routes, RoutesEnum } from '@/constants';
import { Box, Button, Typography } from '@/elements';

import GoBack from '../components/go-back';
import { FaucetProps } from './faucet.types';
import FaucetForm from './faucet-form';

const Faucet: FC<FaucetProps> = ({ form }) => {
  const t = useTranslations();

  return (
    <Box display="flex" flexDirection="column">
      <Container
        dapp
        px="M"
        width="100%"
        position="relative"
        py={['XL', 'XL', 'XL', 'XXL']}
      >
        <Box
          left={['unset', 'unset', '-5rem', 'unset', '-5rem']}
          position={['static', 'static', 'absolute', 'static', 'absolute']}
        >
          <GoBack routeBack />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="normal" textTransform="capitalize">
            {t('common.recommendedToken')}
          </Typography>
          <Link href={Routes[RoutesEnum.CreateToken]}>
            <Button variant="primary">
              {t('common.createTokenModalButton', { isLoading: Number(false) })}
            </Button>
          </Link>
        </Box>
        <FaucetForm form={form} />
      </Container>
    </Box>
  );
};

export default Faucet;
