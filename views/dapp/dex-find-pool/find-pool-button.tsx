import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { prop } from 'ramda';
import { FC, useState } from 'react';

import { Routes, RoutesEnum } from '@/constants';
import { Box, Button } from '@/elements';
import { useModal } from '@/hooks/use-modal';
import { capitalize, showToast } from '@/utils';
import { WalletGuardButton } from '@/views/dapp/components';

import CreatePoolPopup from './create-pool-popup';
import { FindPoolButtonProps } from './dex-find-pool.types';
import { getRecommendedPairId } from './dex-find-pool.utils';

const FindPoolButton: FC<FindPoolButtonProps> = ({
  tokenBType,
  tokenAType,
  isCreatingPair,
  setCreatingPair,
}) => {
  const t = useTranslations();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const { setModal, handleClose } = useModal();

  const enterPool = async () => {
    setLoading(true);

    try {
      const pairId = getRecommendedPairId(tokenAType, tokenBType);

      if (pairId)
        return await push({
          pathname: Routes[RoutesEnum.DEXPoolDetails],
          query: { objectId: pairId },
        });

      setCreatingPair(true);
    } catch {
      throw new Error('Error connecting'); // TODO: translate this message
    } finally {
      setLoading(false);
    }
  };

  const handleEnterPool = () =>
    showToast(enterPool(), {
      loading: capitalize(t('common.check', { isLoading: 1 })),
      success: capitalize(t('common.success')),
      error: prop('message'),
    });

  const handleCreatePair = () =>
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    showToast((async () => {})(), {
      loading: t('dexPoolFind.buttonPool', { isLoading: 1 }),
      success: capitalize(t('common.success')),
      error: prop('message'),
    });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const openModal = () =>
    setModal(
      <CreatePoolPopup onCancel={handleClose} onContinue={handleCreatePair} />
    );

  return (
    <Box
      p="L"
      my="L"
      color="text"
      bg="foreground"
      maxWidth="30rem"
      borderRadius="M"
      width={['100%', '100%', '100%', '30rem']}
    >
      <WalletGuardButton>
        {tokenAType == tokenBType ? (
          <Button width="100%" variant="primary" disabled={true} bg="disabled">
            {t('dexPoolFind.buttonSameToken')}
          </Button>
        ) : isCreatingPair ? (
          <Button width="100%" variant="primary" disabled={loading}>
            {t('dexPoolFind.buttonPool', { isLoading: Number(loading) })}
          </Button>
        ) : (
          <Button
            width="100%"
            variant="primary"
            disabled={loading}
            onClick={handleEnterPool}
            bg={loading ? 'accentActive' : 'accent'}
            hover={{ bg: loading ? 'disabled' : 'accentActive' }}
          >
            {t('dexPoolFind.button', { isLoading: Number(loading) })}
          </Button>
        )}
      </WalletGuardButton>
    </Box>
  );
};

export default FindPoolButton;
