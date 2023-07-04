import {
  Box,
  Button,
  Motion,
  TextField,
  Typography,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { LeftArrowSVG, SearchSVG, TimesSVG } from '@/components/svg/v2';
import { capitalize } from '@/utils';

import { FaucetChooseTokenModalProps } from '../faucet.types';
import FaucetChooseTokenModalBody from './faucet-choose-token-modal-body';

const FaucetChooseTokenModal: FC<FaucetChooseTokenModalProps> = ({
  register,
  control,
  onSelectCurrency,
  closeModal,
}) => {
  const t = useTranslations();

  return (
    <Motion
      initial={{ scale: 0.85 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.3,
      }}
    >
      <Motion
        layout
        pb="2xl"
        width="100%"
        display="flex"
        maxHeight="90vh"
        maxWidth="26rem"
        overflow="hidden"
        color="onSurface"
        borderRadius="m"
        bg="surface.container"
        flexDirection="column"
        boxShadow="0 0 5px #3334"
        transition={{ duration: 0.3 }}
      >
        <Box
          py="m"
          px="xl"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button variant="icon" onClick={closeModal}>
            <LeftArrowSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
          </Button>
          <Typography variant="medium" color="text">
            {capitalize(t('faucet.tokenInput'))}
          </Typography>
          <Button variant="icon" onClick={closeModal}>
            <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
          </Button>
        </Box>
        <Box m="xl">
          <TextField
            {...register('search')}
            fontSize="medium"
            placeholder={t('faucet.select')}
            PrefixIcon={
              <SearchSVG maxWidth="1.2rem" maxHeight="1.2rem" width="100%" />
            }
          />
        </Box>
        <FaucetChooseTokenModalBody
          onSelectCurrency={onSelectCurrency}
          control={control}
        />
      </Motion>
    </Motion>
  );
};

export default FaucetChooseTokenModal;
