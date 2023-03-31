import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Container } from '@/components';
import Web3Manager from '@/components/web3-manager';
import { Box, Button, Typography } from '@/elements';
import { useModal } from '@/hooks/use-modal';

import GoBack from '../components/go-back';
import CreateTokenForm from './create-token-form';
import { FaucetProps } from './faucet.types';
import FaucetForm from './faucet-form';

const Faucet: FC<FaucetProps> = ({ form }) => {
  const t = useTranslations();

  const { setModal, handleClose } = useModal();

  const openModal = () =>
    setModal(
      <Web3Manager>
        <CreateTokenForm handleCloseModal={handleClose} />
      </Web3Manager>
    );

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
          <Button variant="primary" onClick={openModal}>
            {t('faucet.modalButton', { isLoading: Number(false) })}
          </Button>
        </Box>
        <FaucetForm form={form} />
      </Container>
    </Box>
  );
};

export default Faucet;
