import {
  Box,
  Modal,
  ProgressIndicator,
  Typography,
} from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import { Done, SuiSVG } from '@/svg';

import CardSection from './card-section';
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

const ModalPreview: FC = () => {
  const [closed, setClosed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleClosed = () => {
    setClosed(true);
  };

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirm(true);
    }, 5000);
  };

  const backToLend = () => {
    setClosed(true);
  };

  const message = 'Message';

  return (
    <Modal
      isOpen={!closed}
      allowClose={true}
      title="Borrow"
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
      <Box
        p="2.5rem"
        borderTop="1px solid"
        borderColor="#B6C4FF33"
        bg="transparent"
        gap="0.875rem"
        alignItems="center"
        justifyContent="center"
        display={loading ? 'none' : confirm ? 'none' : 'flex'}
      >
        <Box
          width="2.5rem"
          height="2.5rem"
          bg="#A5F3FC"
          color="#1D2947"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="2px"
        >
          <SuiSVG
            maxHeight="1.5rem"
            maxWidth="1.5rem"
            width="100%"
            height="100%"
            filled
          />
        </Box>
        <Typography variant="title5">1.123</Typography>
      </Box>
      <Box display={loading ? 'none' : confirm ? 'none' : 'unset'}>
        <CardSection
          title="New Borrow Limit"
          isModal
          lines={[
            { description: 'Borrow Limit', value: '$300' },
            { description: 'Borrow Limit Used', value: '25%' },
          ]}
        >
          <Box mb="1.125rem">
            <ProgressIndicator value={25} variant="bar" />
          </Box>
        </CardSection>
      </Box>
      <Box display={loading ? 'none' : confirm ? 'none' : 'unset'}>
        <CardSection
          title="New Borrow Balance "
          isModal
          lines={[
            { description: 'Borrow Limit', value: '$300' },
            { description: 'Borrow Limit Used', value: '50%' },
          ]}
        />
      </Box>
      <Box
        pb="3.375rem"
        pt="3.375rem"
        flexDirection="column"
        alignItems="center"
        display={loading ? 'flex' : 'none'}
        width="21.25rem"
      >
        <ProgressIndicator variant="loading" size={48} />
        <Typography variant="medium" mt="1rem" px="5rem">
          {message}
        </Typography>
      </Box>
      <Box
        pb="3.375rem"
        pt="3.375rem"
        flexDirection="column"
        alignItems="center"
        display={confirm ? 'flex' : 'none'}
        width="21.25rem"
      >
        <Done maxHeight="100%" maxWidth="100%" width="2.5rem" />
        <Typography variant="medium" mt="1rem" px="5rem">
          {message}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalPreview;
