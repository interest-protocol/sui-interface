import { Box, Motion, TextField, Typography } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import ArrowSpecial from '@/components/svg/arrow-special';
import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import {
  COIN_DECIMALS,
  COIN_TYPE_TO_SYMBOL,
  FAUCET_TOKENS_V2,
  TOKENS_SVG_MAP_V2,
} from '@/constants';
import { useModal, useNetwork, useProvider, useWeb3 } from '@/hooks';
import { CoinData } from '@/interface';
import { capitalize } from '@/utils';

import SelectTokenModal from '../components/select-token-modal';
import BalanceList from './balance-list';
import { FaucetSearchTokenForm, GetSVGProps } from './faucet.types';
import MintButton from './mint-button';
import FaucetMintConfirmModal from './modal/faucet-mint-confirm-modal';
import FaucetMintFailModal from './modal/faucet-mint-fail-modal';
import FaucetMintLoadingModal from './modal/faucet-mint-loading-modal';

const TokenIcon: FC<GetSVGProps> = ({ type }) => {
  const SVG = TOKENS_SVG_MAP_V2[type] || TOKENS_SVG_MAP_V2.default;
  return (
    <SVG maxHeight="100%" maxWidth="2.5rem" width="1.5rem" height="1.5rem" />
  );
};

const Faucet: FC = () => {
  const { coinsMap } = useWeb3();
  const { network } = useNetwork();
  const { provider } = useProvider();

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

  const onSelectCurrency = ({ type, symbol }: CoinData) => {
    form.setValue('type', type);
    form.setValue('symbol', symbol);
    handleClose();
  };

  const recommendedTokens: ReadonlyArray<Web3ManagerSuiObject> =
    FAUCET_TOKENS_V2[network].map(
      ({ type }) =>
        coinsMap[type] ?? {
          type,
          symbol: COIN_TYPE_TO_SYMBOL[network][type],
          decimals: COIN_DECIMALS[network][type],
          objects: [],
          totalBalance: BigNumber(0),
        }
    );

  const openModal = () =>
    setModal(
      <Motion
        animate={{ scale: 1 }}
        initial={{ scale: 0.85 }}
        transition={{ duration: 0.3 }}
      >
        <SelectTokenModal
          simple
          network={network}
          provider={provider}
          coinsMap={coinsMap}
          closeModal={handleClose}
          searchTokenModalState={null}
          onSelectToken={onSelectCurrency}
          recommendedTokens={recommendedTokens}
          currentTokenType={form.getValues('symbol')}
        />
      </Motion>,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );

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
            <Motion
              cursor="pointer"
              onClick={openModal}
              transform="scale(1)"
              whileHover={{ transform: 'scale(0.99)' }}
            >
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
                    <TokenIcon type={form.getValues('type')} />
                  </Box>
                }
                Suffix={
                  <Box mr="l">
                    <ArrowSpecial
                      width="100%"
                      height="100%"
                      maxWidth="0.8rem"
                      maxHeight="0.8rem"
                    />
                  </Box>
                }
                fieldProps={{
                  bg: 'surface.containerLowest',
                  border: 'none',
                  height: '58px',
                }}
                fontSize="m"
                value={
                  form.getValues('symbol') || capitalize(t('faucet.select'))
                }
                disabled
              />
            </Motion>
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
