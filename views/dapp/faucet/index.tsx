import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Container } from '@/components';
import { Box, Typography } from '@/elements';

import GoBack from '../components/go-back';
import FaucetForm from './faucet-form';

const Faucet: FC = () => {
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
        </Box>
        <FaucetForm />
      </Container>
    </Box>
  );
};

export default Faucet;
