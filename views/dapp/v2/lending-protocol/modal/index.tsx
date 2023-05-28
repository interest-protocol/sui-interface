import { Modal } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import { capitalize } from '@/utils';

import LoadingContent from './loading-content';
import { ModalLendingProps } from './modal.types';
import PreviewContent from './preview-content';
import ResultContent from './result-content';
// import { ModalLoadingProps } from './lending-protocol.types';

// export const ModalResult: FC<ModalLoadingProps> = ({ message }) => {
//   return (
//     <Modal
//       isOpen={true}
//       allowClose={true}
//       title="Borrow"
//       hasCloseButton={true}
//       onClose={() => console.log('>>>closed')}
//       ariaHideApp={false}
//       buttonText="Back to lend"
//       buttonProps={{
//         variant: 'filled',
//         p: '1.25rem 2rem',
//       }}
//     >
//       <Box
//         pb="2.25rem"
//         pt="0.625rem"
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         width="21.25rem"
//       >
//         <ProgressIndicator variant="loading" size={48} />
//         <Typography variant="medium" mt="1rem" px="5rem">
//           {message}
//         </Typography>
//       </Box>
//     </Modal>
//   );
// };

// export const ModalLoading: FC<ModalLoadingProps> = ({ message }) => {
//   return (
//     <Modal
//       isOpen={true}
//       allowClose={true}
//       title="Borrow"
//       hasCloseButton={true}
//       onClose={() => console.log('>>>closed')}
//       ariaHideApp={false}
//     >
//       <Box
//         pb="2.25rem"
//         pt="0.625rem"
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         width="21.25rem"
//       >
//         <ProgressIndicator variant="loading" size={48} />
//         <Typography variant="medium" mt="1rem" px="5rem">
//           {message}
//         </Typography>
//       </Box>
//     </Modal>
//   );
// };

const Modallending: FC<ModalLendingProps> = ({
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

export default Modallending;
