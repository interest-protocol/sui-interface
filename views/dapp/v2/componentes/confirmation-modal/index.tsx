import {
  Box,
  Modal,
  ProgressIndicator,
  Typography,
} from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';

import Confirmed from '../svg/confirmation-modal';

interface ConfirmationModalProps {
  title: string;
  borrowLimit: number;
  limitUsed: number;
  inToken: number;
  inUSD: number;
}

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  title,
  borrowLimit,
  limitUsed,
  inToken,
  inUSD,
}) => {
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

  return (
    <Modal
      isOpen={!closed}
      allowClose
      ariaHideApp
      hasCloseButton
      buttonProps={{
        display: loading ? 'none' : 'flex',
        variant: 'filled',
        textAlign: 'center',
        justifyContent: 'center',
        onClick: !loading && !confirm ? handleConfirm : backToLend,
      }}
      buttonText={confirm ? 'Back to lend' : 'Confirm'}
      onClose={handleClosed}
      title={title}
    >
      <Box
        gap="m"
        p="4xl"
        display={loading ? 'none' : confirm ? 'none' : 'flex'}
        alignItems="center"
        borderTop="1px solid"
        justifyContent="center"
        borderColor="
          #b6c4ff33"
      >
        <Box>SUI</Box>
        <Box>
          <Typography variant="title6">1.123</Typography>
        </Box>
      </Box>
      <Box
        borderColor="#b6c4ff33"
        borderTop="1px solid"
        p="4xl"
        display={loading ? 'none' : confirm ? 'none' : 'unset'}
      >
        <Typography mb=".75rem" variant="medium">
          New Borrow Limit
        </Typography>
        <Box display="flex" mb=".4375rem" justifyContent="space-between">
          <Typography variant="medium" color="foreground">
            Borrow Limit
          </Typography>
          <Typography variant="medium" color="foreground">
            ${borrowLimit}
          </Typography>
        </Box>
        <Box display="flex" mb="1.5625rem" justifyContent="space-between">
          <Typography variant="medium" color="foreground">
            Borrow Limit Used
          </Typography>
          <Typography variant="medium" color="foreground">
            {limitUsed}%
          </Typography>
        </Box>
        <Box>
          <ProgressIndicator value={limitUsed} variant="bar" />
        </Box>
      </Box>
      <Box
        borderColor="#b6c4ff33"
        borderTop="1px solid"
        p="4xl"
        display={loading ? 'none' : confirm ? 'none' : 'unset'}
      >
        <Typography mb=".75rem" variant="medium">
          New Borrow Balance
        </Typography>
        <Box display="flex" mb=".75rem" justifyContent="space-between">
          <Typography variant="medium" color="foreground">
            In Token
          </Typography>
          <Typography variant="medium" color="foreground">
            {inToken}
          </Typography>
        </Box>
        <Box display="flex" mb=".75rem" justifyContent="space-between">
          <Typography variant="medium" color="foreground">
            IN USD
          </Typography>
          <Typography variant="medium" color="foreground">
            ${inUSD}
          </Typography>
        </Box>
      </Box>
      <Box
        borderColor="#b6c4ff33"
        borderTop="1px solid"
        p="4xl"
        gap="xl"
        flexDirection="column"
        alignItems="center"
        display={loading ? 'flex' : 'none'}
      >
        <Box>
          <ProgressIndicator variant="loading" />
        </Box>
        <Typography variant="title6" maxWidth="11.3125rem" color="foreground">
          Repaying Token please wait ...
        </Typography>
      </Box>
      <Box
        borderColor="#b6c4ff33"
        borderTop="1px solid"
        p="4xl"
        display={confirm ? 'block' : 'none'}
      >
        <Box display="flex" gap="xl" flexDirection="column" alignItems="center">
          <Confirmed maxHeight="100%" maxWidth="100%" width="2.5rem" />
          <Typography variant="title6" color="foreground">
            Tokens Repayed
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};
