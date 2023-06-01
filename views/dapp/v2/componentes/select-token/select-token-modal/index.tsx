import { Box, Button, TextField, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { Chip } from '@/components';
import { LeftArrowSVG, SearchSVG } from '@/components/svg/v2';
import { useLocalStorage } from '@/hooks';
import { CoinData } from '@/interface';
import { TimesSVG } from '@/svg';

import { SelectTokenModalProps } from '../select-token.types';
import TokenModalItem from './token-modal-item';
import { RECOMMENDED_TOKENS } from './tokens.data';

const SelectTokenModal: FC<SelectTokenModalProps> = ({
  closeModal,
  onSelectToken,
  type: selectedType,
}) => {
  const t = useTranslations();

  const [tokenOrigin, setTokenOrigin] = useState<
    'recommended' | 'favorites' | 'wallet'
  >('recommended');

  const [favoriteTokens, setFavorites] = useLocalStorage<ReadonlyArray<string>>(
    'sui-interest-favorite-tokens',
    []
  );

  const handleSelectToken = (data: CoinData) => () => {
    onSelectToken(data);
    closeModal();
  };

  return (
    <Box
      bg="#1F1F23"
      width="100%"
      display="flex"
      maxHeight="90vh"
      overflow="hidden"
      maxWidth="24.375rem"
      borderRadius="1rem"
      flexDirection="column"
      boxShadow="0 0 5px #3334"
    >
      <Box
        py="m"
        px="xl"
        color="text"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button variant="icon" onClick={closeModal}>
          <LeftArrowSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
        <Typography variant="medium" color="text">
          {t('swap.modal.preview.selectToken.title')}
        </Typography>
        <Button variant="icon" onClick={closeModal}>
          <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
      </Box>
      <Box m="xl">
        <TextField
          fontSize="medium"
          placeholder="Search Token"
          PrefixIcon={
            <SearchSVG maxWidth="1.2rem" maxHeight="1.2rem" width="100%" />
          }
        />
      </Box>
      <Box p="xl" display="flex" gap="s" flexWrap="wrap">
        <Chip
          isActive={tokenOrigin === 'recommended'}
          onClick={() => setTokenOrigin('recommended')}
          text={t('swap.modal.preview.selectToken.recommended')}
        />
        <Chip
          isActive={tokenOrigin === 'favorites'}
          onClick={() => setTokenOrigin('favorites')}
          text={t('swap.modal.preview.selectToken.favorite')}
        />
        <Chip
          isActive={tokenOrigin === 'wallet'}
          onClick={() => setTokenOrigin('wallet')}
          text={t('swap.modal.preview.selectToken.wallet')}
        />
      </Box>
      <Box
        p="2xl"
        gap="xl"
        flex="1"
        display="flex"
        bg="background"
        overflowY="auto"
        flexDirection="column"
      >
        {RECOMMENDED_TOKENS.map(({ symbol, balance, Icon, type, decimals }) => (
          <TokenModalItem
            key={v4()}
            Icon={Icon}
            type={type}
            symbol={symbol}
            balance={balance}
            setFavorites={setFavorites}
            favoriteTokens={favoriteTokens}
            selected={selectedType === type}
            recommended={tokenOrigin === 'recommended'}
            onClick={handleSelectToken({ symbol, decimals, type })}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SelectTokenModal;
