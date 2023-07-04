import { Box, Button, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import ArrowSpecial from '@/components/svg/arrow-special';
import { FAUCET_TOKENS_V2, TOKENS_SVG_MAP_V2 } from '@/constants';
import { useModal, useNetwork } from '@/hooks';
import { capitalize } from '@/utils';

import BalanceList from './balance-list';
import { FaucetSearchTokenForm, GetSVGProps } from './faucet.types';
import MintButton from './mint-button';
import SelectTokenModal from './modal/faucet-choose-token-modal';
import FaucetMintConfirmModal from './modal/faucet-mint-confirm-modal';
import FaucetMintFailModal from './modal/faucet-mint-fail-modal';
import FaucetMintLoadingModal from './modal/faucet-mint-loading-modal';

const GetSVG: FC<GetSVGProps> = ({ type }) => {
  const SVG = TOKENS_SVG_MAP_V2[type] || TOKENS_SVG_MAP_V2.default;
  return (
    <SVG maxHeight="100%" maxWidth="2.5rem" width="1.5rem" height="1.5rem" />
  );
};

const Faucet: FC = () => {
  const { network } = useNetwork();

  const t = useTranslations();
  const { setModal, handleClose } = useModal();

  const tokens = FAUCET_TOKENS_V2[network];

  const form = useForm<FaucetSearchTokenForm>({
    defaultValues: {
      search: '',
      type: tokens?.[0]?.type ?? '',
      symbol: tokens?.[0]?.symbol ?? capitalize(t('faucet.select')),
    },
  });

  useEffect(() => {
    form.setValue('type', tokens?.[0]?.type ?? '');
    form.setValue(
      'symbol',
      tokens?.[0]?.symbol ?? capitalize(t('faucet.select'))
    );
  }, [network]);

  const onSelectCurrency = (type: string, symbol: string) => {
    form.setValue('type', type);
    form.setValue('symbol', symbol);
    handleClose();
  };

  const openModal = () => {
    setModal(
      <SelectTokenModal
        register={form.register}
        control={form.control}
        onSelectCurrency={onSelectCurrency}
        closeModal={handleClose}
      />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  const loadingModal = () => {
    setModal(<FaucetMintLoadingModal />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: true,
    });
  };

  const confirmModal = (txLink: string) => {
    setModal(
      <FaucetMintConfirmModal txLink={txLink} closeModal={handleClose} />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  const failModal = (message: string) => {
    setModal(
      <FaucetMintFailModal message={message} closeModal={handleClose} />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Box pb="1rem" width="100%" gridColumn="1/-1">
        <Typography
          display={['block', 'block', 'block', 'none']}
          variant="displayLarge"
          color="onSurface"
          textTransform="capitalize"
          textAlign="center"
          mb="3xl"
        >
          {t('faucet.metadata.title')}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          gap="2xl"
          flexDirection="column"
        >
          <Box
            width={['100%', '100%', '100%', '32.375rem']}
            bg="inverseOnSurface"
            p="2xl"
            borderRadius="m"
          >
            <Typography variant="small" mb="l" color="onSurface">
              {capitalize(t('faucet.tokenInput'))}
            </Typography>
            <TextField
              Prefix={
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bg="primary"
                  borderRadius="m"
                  color="inverseOnSurface"
                  height="2.5rem"
                  width="2.5rem"
                  mr="l"
                >
                  <GetSVG type={form.getValues('type')} />
                </Box>
              }
              Suffix={
                <Button
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="m"
                  color="onSurface"
                  variant="icon"
                  onClick={openModal}
                >
                  <ArrowSpecial
                    maxHeight="100%"
                    maxWidth="2.5rem"
                    width="1.5rem"
                    height="1.5rem"
                  />
                </Button>
              }
              fieldProps={{
                bg: 'surface.containerLowest',
                border: 'none',
                height: '58px',
              }}
              fontSize="m"
              value={form.getValues('symbol') || capitalize(t('faucet.select'))}
              disabled
            />
            <MintButton
              getValues={form.getValues}
              loadingModal={loadingModal}
              failModal={failModal}
              confirmModal={confirmModal}
            />
          </Box>
          <Box
            width={['100%', '100%', '100%', '32.375rem']}
            bg="inverseOnSurface"
            py="2xl"
            px="m"
            borderRadius="m"
          >
            <Typography
              textTransform="capitalize"
              variant="small"
              mb="l"
              px="m"
              color="onSurface"
            >
              {t('common.balance')}
            </Typography>
            <BalanceList />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Faucet;
