import { Box, ProgressIndicator, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { formatDollars, noop } from '@/utils';

import LSTFormConfirmModal from '../../../components/your-info-container/modal/confirm-modal';
import LSTFormFailModal from '../../../components/your-info-container/modal/fail-modal';
import HeaderModal from '../../../components/your-info-container/modal/header-modal';
import PreviewTransaction from './modal/preview';
import TokenIcon from './token-icon';
import {
  StakePreviewModalProps,
  UnstakePreviewModalProps,
} from './your-info.types';

export const StakePreviewModal: FC<StakePreviewModalProps> = ({
  handleClose,
  lstForm,
  provider,
  network,
  coinsMap,
  account,
  suiUsdPrice,
  mutate,
  stakeTokenList,
  receiveTokenList,
}) => {
  const t = useTranslations();
  const loading = false;
  const transactionFailed = false;
  const transactionSuccess = '';
  const suiAmount = '0';

  console.log(lstForm, provider, network, coinsMap, account, mutate); //TODO

  if (transactionFailed)
    return <LSTFormFailModal isStake={true} handleClose={handleClose} />;

  if (transactionSuccess)
    return (
      <LSTFormConfirmModal
        txLink={transactionSuccess}
        isStake={true}
        handleClose={handleClose}
      />
    );

  if (loading)
    return (
      <Box
        width={['90vw', '90vw', '90vw', '27rem']}
        borderRadius="1rem"
        bg="surface.container"
        display="flex"
        flexDirection="column"
        pb="l"
      >
        <HeaderModal
          title={t('lst.modal.preview.title')}
          handleClose={handleClose}
        />
        <Box
          px="l"
          pt="l"
          gap="l"
          display="flex"
          minHeight="12rem"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <ProgressIndicator variant="loading" />
          <Typography variant="medium" color="onSurface">
            {t(
              loading
                ? 'lst.modal.preview.fetchingExchangeRate'
                : 'lst.modal.preview.submitting',
              loading ? undefined : { isStake: 1 }
            )}
          </Typography>
        </Box>
      </Box>
    );

  return (
    <PreviewTransaction
      rewards="2.5%"
      depositFee={0}
      handleClose={handleClose}
      lines={[
        {
          title: t('lst.modal.preview.stakeLabel'),
          fields: stakeTokenList.map((stakeToken) => ({
            token: {
              main: stakeToken,
              secondary:
                stakeToken == 'SUI'
                  ? stakeToken
                  : t('lst.maturity', {
                      date: lstForm.getValues('maturity.date'),
                    }),
            },
            Icon: <TokenIcon symbol={stakeToken} size={3} lessRadius />,
            children: (
              <Box textAlign="right">
                <Typography
                  variant="small"
                  fontWeight="400"
                  fontSize="1rem"
                  color="onSurface"
                >
                  {suiAmount}
                </Typography>
                <Typography
                  variant="extraSmall"
                  fontWeight="400"
                  fontSize="0.6875rem"
                  color="onSurface"
                  opacity="0.6"
                >
                  {formatDollars(+suiAmount * suiUsdPrice)}
                </Typography>
              </Box>
            ),
          })),
        },
        {
          title: t('lst.modal.preview.receiveLabel'),
          fields: receiveTokenList.map((receiveToken) => ({
            token: {
              main: receiveToken,
              secondary:
                receiveToken == 'SUI'
                  ? receiveToken
                  : t('lst.maturity', {
                      date: lstForm.getValues('maturity.date'),
                    }),
            },
            Icon: <TokenIcon symbol={receiveToken} size={3} lessRadius />,
            children: (
              <Box textAlign="right">
                <Typography
                  variant="small"
                  fontWeight="400"
                  fontSize="1rem"
                  color="onSurface"
                >
                  {suiAmount}
                </Typography>
              </Box>
            ),
          })),
        },
      ]}
      onClick={noop}
      isStake
    />
  );
};

export const UnstakePreviewModal: FC<UnstakePreviewModalProps> = ({
  handleClose,
  lstForm,
  provider,
  network,
  coinsMap,
  account,
  mutate,
  suiUsdPrice,
  stakeTokenList,
  receiveTokenList,
}) => {
  const loading = false;
  const t = useTranslations();
  const transactionFailed = false;
  const transactionSuccess = '';

  console.log(lstForm, provider, network, coinsMap, account, mutate); //TODO

  if (transactionFailed)
    return <LSTFormFailModal isStake={true} handleClose={handleClose} />;

  if (transactionSuccess)
    return (
      <LSTFormConfirmModal
        txLink={transactionSuccess}
        isStake={true}
        handleClose={handleClose}
      />
    );

  if (loading)
    return (
      <Box
        width={['90vw', '90vw', '90vw', '27rem']}
        borderRadius="1rem"
        bg="surface.container"
        display="flex"
        flexDirection="column"
        pb="l"
      >
        <HeaderModal
          title={t('lst.modal.preview.title')}
          handleClose={handleClose}
        />
        <Box
          px="l"
          pt="l"
          gap="l"
          display="flex"
          minHeight="12rem"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <ProgressIndicator variant="loading" />
          <Typography variant="medium" color="onSurface">
            {t(
              loading
                ? 'lst.modal.preview.fetchingExchangeRate'
                : 'lst.modal.preview.submitting',
              loading ? undefined : { isStake: 0 }
            )}
          </Typography>
        </Box>
      </Box>
    );

  const suiAmountToReceive = 0;

  return (
    <PreviewTransaction
      rewards="2.5%"
      depositFee={0}
      handleClose={handleClose}
      isStake={false}
      lines={[
        {
          title: t('lst.modal.preview.stakeLabel'),
          fields: stakeTokenList.map((stakeToken) => ({
            token: {
              main: stakeToken,
              secondary:
                stakeToken == 'SUI'
                  ? stakeToken
                  : t('lst.maturity', {
                      date: lstForm.getValues('maturity.date'),
                    }),
            },
            Icon: <TokenIcon symbol={stakeToken} size={3} lessRadius />,
            children: (
              <Box textAlign="right">
                <Typography
                  variant="small"
                  fontWeight="400"
                  fontSize="1rem"
                  color="onSurface"
                >
                  {suiAmountToReceive}
                </Typography>
                <Typography
                  variant="extraSmall"
                  fontWeight="400"
                  fontSize="0.6875rem"
                  color="onSurface"
                  opacity="0.6"
                >
                  {formatDollars(suiAmountToReceive * suiUsdPrice)}
                </Typography>
              </Box>
            ),
          })),
        },
        {
          title: t('lst.modal.preview.receiveLabel'),
          fields: receiveTokenList.map((receiveToken) => ({
            token: {
              main: receiveToken,
              secondary:
                receiveToken == 'SUI'
                  ? receiveToken
                  : t('lst.maturity', {
                      date: lstForm.getValues('maturity.date'),
                    }),
            },
            Icon: <TokenIcon symbol={receiveToken} size={3} lessRadius />,
            children: (
              <Box textAlign="right">
                <Typography
                  variant="small"
                  fontWeight="400"
                  fontSize="1rem"
                  color="onSurface"
                >
                  {suiAmountToReceive}
                </Typography>
              </Box>
            ),
          })),
        },
      ]}
      onClick={noop}
    />
  );
};
