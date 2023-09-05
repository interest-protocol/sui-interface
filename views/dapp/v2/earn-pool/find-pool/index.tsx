import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Web3ManagerSuiObject } from '@/components/web3-manager/web3-manager.types';
import {
  BASE_TOKENS_TYPES,
  EARN_TOKENS_DATA,
  RECOMMENDED_TOKENS_TYPES,
} from '@/constants';
import { useModal, useNetwork, useProvider, useWeb3 } from '@/hooks';
import { CoinData } from '@/interface';
import { capitalize } from '@/utils';

import { Layout } from '../../components';
import SelectTokenModal from '../../components/select-token-modal';
import { FavoriteTokensForm } from '../../components/select-token-modal/select-token-modal.types';
import DepositAmountSection from '../components/deposit-amount-section';
import DetailedHeader from '../components/earn-detailed-header';
import { CreatePoolSearchTokenForm } from '../earn.types';
import AdviceModal from '../modal/advice';
import ChoosePairTokenSection from './choose-tokens';

const EarnFindPool: FC = () => {
  const t = useTranslations();
  const { coinsMap, coins } = useWeb3();
  const { network } = useNetwork();
  const { provider } = useProvider();
  const [isNewPair, setIsNewPair] = useState(false);

  const { setModal, handleClose } = useModal();

  const tokens = EARN_TOKENS_DATA[network];

  const form = useForm<CreatePoolSearchTokenForm>({
    defaultValues: {
      token1: {
        search: '',
        type: tokens?.[0]?.type ?? '',
        symbol: tokens?.[0]?.symbol ?? 'Select',
      },
      token2: {
        search: '',
        type: tokens?.[1]?.type ?? '',
        symbol: tokens?.[1]?.symbol ?? 'Select',
      },
    },
  });

  const walletTokens = coins.filter(
    ({ type }) =>
      !BASE_TOKENS_TYPES[network].includes(type) &&
      !RECOMMENDED_TOKENS_TYPES[network].includes(type)
  );

  const favoritesForm = useForm<FavoriteTokensForm>({
    defaultValues: { tokens: [] },
  });

  const recommendedTokens: ReadonlyArray<Web3ManagerSuiObject> =
    EARN_TOKENS_DATA[network].map(
      ({ type, symbol, decimals }) =>
        coinsMap[type] ?? {
          type,
          symbol,
          decimals,
          objects: [],
          totalBalance: BigNumber(0),
        }
    );

  const onSelectCurrencyToken1 = ({ type, symbol }: CoinData) => {
    form.setValue('token1', { type, symbol });
    handleClose();
  };

  const onSelectCurrencyToken2 = ({ type, symbol }: CoinData) => {
    form.setValue('token2', { type, symbol });
    handleClose();
  };

  const openModal = (isFirstToken: boolean) =>
    setModal(
      <Motion
        animate={{ scale: 1 }}
        initial={{ scale: 0.85 }}
        transition={{ duration: 0.3 }}
      >
        <SelectTokenModal
          network={network}
          provider={provider}
          coinsMap={coinsMap}
          closeModal={handleClose}
          searchTokenModalState={null}
          walletTokens={walletTokens}
          favoriteForm={favoritesForm}
          onSelectToken={
            isFirstToken ? onSelectCurrencyToken1 : onSelectCurrencyToken2
          }
          recommendedTokens={recommendedTokens}
          currentTokenType={form.getValues(
            isFirstToken ? 'token1.symbol' : 'token2.symbol'
          )}
        />
      </Motion>,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );

  const openAdviceModal = () =>
    setModal(
      <Motion
        animate={{ scale: 1 }}
        initial={{ scale: 0.85 }}
        transition={{ duration: 0.3 }}
      >
        <AdviceModal handleClose={handleClose} />
      </Motion>,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  return (
    <Layout
      dashboard
      titlePage={
        <DetailedHeader description={t('earnFindPool.metadata.title')} />
      }
    >
      <Box display="flex" variant="container">
        <Box display="grid" gridColumn="1/-1" width="100%">
          <Box
            display="flex"
            width="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Box width={['100%', '100%', '100%', '38rem']}>
              <Typography
                variant="small"
                mb="l"
                fontWeight="500"
                color="onSurface"
              >
                {capitalize(t('common.v2.selectToken.choose'))}
              </Typography>
              <Box
                width={['100%', '100%', '100%', '32.375rem']}
                bg="inverseOnSurface"
                p="2xl"
                borderRadius="m"
              >
                <ChoosePairTokenSection
                  form={form}
                  openModal={openModal}
                  action={() => setIsNewPair(true)}
                />
              </Box>
              {isNewPair && (
                <Box
                  width={['100%', '100%', '100%', '32.375rem']}
                  bg="inverseOnSurface"
                  p="2xl"
                  borderRadius="m"
                  mt="l"
                >
                  <Typography
                    variant="small"
                    pb="0.625rem"
                    fontWeight="400"
                    color="onSurface"
                  >
                    {capitalize(t('earnFindPool.pairExist'))}
                  </Typography>
                  <DepositAmountSection form={form} action={openAdviceModal} />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default EarnFindPool;
