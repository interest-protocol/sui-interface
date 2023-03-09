import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { FAUCET_TOKENS, Network } from '@/constants';
import { Box, Typography } from '@/elements';

import { WalletGuardButton } from '../../components';
import { FaucetProps } from '../faucet.types';
import BalanceList from './balance-list';
import FaucetSelectCurrency from './faucet-select-currency';
import MintButton from './mint-button';

const tokens = FAUCET_TOKENS[Network.DEVNET];

const FaucetForm: FC<FaucetProps> = ({ form }) => {
  const t = useTranslations();

  const onSelectCurrency = (type: string) => {
    form.setValue('type', type);
    form.setValue('amount', 0);
  };

  return (
    <>
      <Box
        py="XL"
        color="text"
        width="100%"
        display="grid"
        gridGap="1rem"
        height={['auto', 'auto', 'auto', '22rem']}
        gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
      >
        <Box
          py="L"
          display="flex"
          bg="foreground"
          px={['L', 'XL']}
          borderRadius="M"
          flexDirection="column"
        >
          <FaucetSelectCurrency
            label={t('faucet.tokenInput')}
            tokens={tokens}
            defaultValue={tokens?.[0]?.type ?? ''}
            onSelectCurrency={onSelectCurrency}
          />
          <WalletGuardButton>
            <MintButton getValues={form.getValues} />
          </WalletGuardButton>
        </Box>
        <Box
          py="L"
          display="flex"
          bg="foreground"
          px={['L', 'XL']}
          borderRadius="M"
          flexDirection="column"
        >
          <Typography variant="normal" textTransform="uppercase" my="L">
            {t('common.balance')}
          </Typography>
          <BalanceList />
        </Box>
      </Box>
    </>
  );
};

export default FaucetForm;
