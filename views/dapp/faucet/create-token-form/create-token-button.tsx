import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { prop } from 'ramda';
import { FC, useState } from 'react';
import { useWatch } from 'react-hook-form';

import { incrementCreatedCoins } from '@/api/analytics';
import { getTokenByteCode } from '@/api/token';
import { Box, Button, Typography } from '@/elements';
import { useWeb3 } from '@/hooks';
import { AddressZero } from '@/sdk';
import { LoadingSVG } from '@/svg';
import { capitalize, showToast, showTXSuccessToast } from '@/utils';

import { CreateTokenButtonProps } from './create-token-form.types';

const CreateTokenButton: FC<CreateTokenButtonProps> = ({
  control,
  handleCloseModal,
}) => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations();
  const { name, symbol, amount } = useWatch({ control });
  const { signAndExecuteTransaction } = useWalletKit();
  const { account } = useWeb3();
  const isValid = name && symbol && amount && +amount > 0;

  const createToken = async () => {
    try {
      setLoading(true);
      if (isValid) {
        const byteCode = await getTokenByteCode({
          decimals: 9,
          symbol: symbol.trim().split(' ')[0], // make sure it is one word
          name,
          mintAmount: +amount * 10 ** 9,
        });

        const tx = await signAndExecuteTransaction({
          kind: 'publish',
          data: { compiledModules: byteCode, gasBudget: 15000 },
        });

        await showTXSuccessToast(tx);
        await incrementCreatedCoins(account || AddressZero);
      }
    } catch (error) {
      throw new Error(t('faucet.errorCreateToken'));
    } finally {
      setLoading(false);
      handleCloseModal();
    }
  };

  const safeCreateToken = () =>
    showToast(createToken(), {
      loading: `${t('faucet.modalButton', { isLoading: 1 })}`,
      success: capitalize(t('common.success')),
      error: prop('message'),
    });

  return (
    <Button
      mt="L"
      width="100%"
      variant="primary"
      onClick={safeCreateToken}
      disabled={loading || !isValid}
    >
      {loading ? (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box as="span" display="inline-block" width="1rem">
            <LoadingSVG width="100%" maxHeight="1rem" maxWidth="1rem" />
          </Box>
          <Typography
            fontSize="S"
            variant="normal"
            ml="M"
            textTransform="capitalize"
          >
            {t('faucet.modalButton', { isLoading: 1 })}
          </Typography>
        </Box>
      ) : (
        t('faucet.modalButton', { isLoading: 0 })
      )}
    </Button>
  );
};

export default CreateTokenButton;
