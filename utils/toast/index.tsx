import { Network, SuiTransactionResponse } from '@mysten/sui.js';
import { propOr } from 'ramda';
import toast from 'react-hot-toast';

import { SUI_EXPLORER } from '@/constants';
import { Box, Typography } from '@/elements';
import { SuiSVG } from '@/svg';
import { tryCatch } from '@/utils/promise';

import { ToastMsgs, ToastOpts } from './toast.types';

const NETWORK_RECORD = {
  [Network.DEVNET]: 'devnet',
};

export const showTXSuccessToast = async (
  tx: SuiTransactionResponse
): Promise<void> => {
  toast(
    <a
      target="__black"
      rel="noreferrer nofollow"
      href={`${SUI_EXPLORER[Network.DEVNET]}/transaction/${
        tx.certificate.transactionDigest
      }?network=${NETWORK_RECORD[Network.DEVNET]}`}
    >
      <Box display="flex" alignItems="center">
        <Box width="1.5rem" height="1.5rem" mr="M">
          <SuiSVG
            width="100%"
            height="100%"
            maxHeight="1.5rem"
            maxWidth="1.5rem"
          />
        </Box>
        <Typography
          variant="normal"
          color="accent"
          textDecoration="underline"
          fontWeight="700"
          cursor="pointer"
        >
          Sui Explorer
        </Typography>
      </Box>
    </a>
  );
};

export function showToast<T>(
  fn: Promise<T>,
  msgs: ToastMsgs = {
    loading: 'Submitting tx...',
    success: 'Success!',
    error: propOr('Something went wrong', 'message'),
  },
  options: ToastOpts = undefined
): Promise<T | undefined> {
  return tryCatch(toast.promise(fn, msgs, options), (x) => x);
}
