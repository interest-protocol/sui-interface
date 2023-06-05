import { Button } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { path, pathOr } from 'ramda';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { useModal } from '@/hooks';

import SwapFormConfirmModal from './swap-form-confirm-modal';
import { SwapFormPreviewProps } from './swap-form-preview.types';
import SwapFormPreviewModal from './swap-form-preview-modal';

const SwapFormPreview: FC<SwapFormPreviewProps> = ({
  formSwap,
  formSettings,
  dexMarket,
  mutate,
}) => {
  const { setModal, handleClose } = useModal();
  const t = useTranslations();
  const formValues = useWatch({ control: formSwap.control });

  const isDisabled =
    formValues.lock ||
    formValues.to?.locked ||
    formValues.from?.locked ||
    !path(['to', 'type'], formValues) ||
    !path(['from', 'type'], formValues) ||
    !+pathOr(0, ['to', 'value'], formValues) ||
    !+pathOr(0, ['from', 'value'], formValues) ||
    formValues.disabled;

  const openConfirmModal = () =>
    setModal(
      <SwapFormConfirmModal
        txLink="link"
        loading={true}
        handleClose={handleClose}
      />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: false,
      }
    );

  const openPreviewModal = () => {
    if (isDisabled) return;

    setModal(
      <SwapFormPreviewModal
        closeModal={handleClose}
        openConfirmModal={openConfirmModal}
        dexMarket={dexMarket}
        formSwap={formSwap}
        formSettings={formSettings}
        mutate={mutate}
      />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
        onClose: handleClose,
      }
    );
  };

  return (
    <Button
      disabled={isDisabled}
      mx="auto"
      size="small"
      variant="filled"
      boxSizing="border-box"
      justifyContent="center"
      mt={['4xl', '4xl', '2xl']}
      onClick={openPreviewModal}
      width={['100%', '100%', 'auto']}
    >
      {t('swap.form.preview')}
    </Button>
  );
};
export default SwapFormPreview;
