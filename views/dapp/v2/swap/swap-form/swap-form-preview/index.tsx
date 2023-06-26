import { Button } from '@interest-protocol/ui-kit';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { path, pathOr } from 'ramda';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { LoadingPage } from '@/components';
import { useModal } from '@/hooks';

import SwapFormConfirmModal from './swap-form-confirm-modal';
import SwapFormFailModal from './swap-form-fail-modal';
import { SwapFormPreviewProps } from './swap-form-preview.types';
import SwapFormPreviewModal from './swap-form-preview-modal';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const SwapFormPreview: FC<SwapFormPreviewProps> = ({
  mutate,
  formSwap,
  dexMarket,
  formSettings,
}) => {
  const { setModal, handleClose } = useModal();
  const t = useTranslations();
  const formValues = useWatch({ control: formSwap.control });

  const isDisabled =
    !path(['to', 'type'], formValues) ||
    !path(['from', 'type'], formValues) ||
    !+pathOr(0, ['to', 'value'], formValues) ||
    !+pathOr(0, ['from', 'value'], formValues) ||
    formValues.disabled;

  const openFailModal = (message?: string) =>
    setModal(
      <Web3Manager>
        <SwapFormFailModal message={message} handleClose={handleClose} />
      </Web3Manager>,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );

  const openConfirmModal = (link: string) =>
    setModal(
      <Web3Manager>
        <SwapFormConfirmModal txLink={link} handleClose={handleClose} />
      </Web3Manager>,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );

  const openPreviewModal = () => {
    if (isDisabled) return;

    setModal(
      <Web3Manager>
        <SwapFormPreviewModal
          mutate={mutate}
          formSwap={formSwap}
          dexMarket={dexMarket}
          closeModal={handleClose}
          formSettings={formSettings}
          openFailModal={openFailModal}
          openConfirmModal={openConfirmModal}
        />
      </Web3Manager>,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: false,
      }
    );
  };

  return (
    <Button
      mx="auto"
      size="small"
      variant="filled"
      disabled={isDisabled}
      boxSizing="border-box"
      justifyContent="center"
      mt={['4xl', '4xl', '2xl']}
      width={['100%', '100%', 'auto']}
      onClick={isDisabled ? undefined : openPreviewModal}
    >
      {t('swap.form.preview')}
    </Button>
  );
};
export default SwapFormPreview;
