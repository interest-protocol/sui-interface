import { Modal } from '@interest-protocol/ui-kit';
import { FC, useEffect, useState } from 'react';

import { capitalize } from '@/utils';

import LoadingContent from './loading-content';
import { ModalLendingProps } from './modal.types';
import PreviewContent from './preview-content';
import ResultContent from './result-content';

const ModalLending: FC<ModalLendingProps> = ({
  amount,
  type,
  handleClosed,
  backToLend,
  closed,
}) => {
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirm(true);
    }, 5000);
  };

  useEffect(() => {
    setLoading(false);
    setConfirm(false);
  }, [closed]);

  return (
    <Modal
      isOpen={!closed}
      allowClose={true}
      title={capitalize(type)}
      hasCloseButton={true}
      onClose={handleClosed}
      ariaHideApp={false}
      buttonProps={{
        display: loading ? 'none' : 'block',
        variant: 'filled',
        textAlign: 'center',
        padding: 'min(20px, 5%)',
        onClick: !loading && !confirm ? handleConfirm : backToLend,
      }}
      buttonText={confirm ? 'Back to lend' : 'Confirm'}
    >
      {loading ? (
        <LoadingContent
          message={
            type == 'borrow'
              ? 'Borrowing Token please wait ...'
              : 'Repaying Token please wait ...'
          }
        />
      ) : confirm ? (
        <ResultContent
          message={type == 'borrow' ? 'Tokens Borrowed' : 'Tokens Repayed'}
        />
      ) : (
        <PreviewContent amount={amount} />
      )}
    </Modal>
  );
};

export default ModalLending;
