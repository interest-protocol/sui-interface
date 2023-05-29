import { Box, Button, TextField, Typography } from '@interest-protocol/ui-kit';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { Chip } from '@/components';
import { LeftArrowSVG, SearchSVG } from '@/components/svg/v2';
import { useLocalStorage } from '@/hooks';
import { TimesSVG } from '@/svg';

import TokenModalItem from './token-modal-item';
import { RECOMMENDED_TOKENS } from './tokens.data';

const SelectTokenModal: FC<{ closeModal: () => void }> = ({ closeModal }) => {
  const [tokenOrigin, setTokenOrigin] = useState<
    'recommended' | 'favorites' | 'wallet'
  >('recommended');

  const [favoriteTokens, setFavorites] = useLocalStorage<ReadonlyArray<string>>(
    'sui-interest-favorite-tokens',
    []
  );

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
          Select Token
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
      <Box p="xl" display="flex" gap="s">
        <Chip
          text="Recommended"
          isActive={tokenOrigin === 'recommended'}
          onClick={() => setTokenOrigin('recommended')}
        />
        <Chip
          text="Favorite"
          isActive={tokenOrigin === 'favorites'}
          onClick={() => setTokenOrigin('favorites')}
        />
        <Chip
          text="Wallet"
          isActive={tokenOrigin === 'wallet'}
          onClick={() => setTokenOrigin('wallet')}
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
        {RECOMMENDED_TOKENS.map(({ symbol, balance, Icon, address }) => (
          <TokenModalItem
            key={v4()}
            Icon={Icon}
            symbol={symbol}
            address={address}
            balance={balance}
            setFavorites={setFavorites}
            favoriteTokens={favoriteTokens}
            recommended={tokenOrigin === 'recommended'}
            onClick={() => console.log('>> address :: ', address)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SelectTokenModal;
