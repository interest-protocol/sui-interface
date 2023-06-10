import {
  Box,
  Button,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { DotsSVG } from '@/components/svg/v2';
import { COIN_TYPE_TO_SYMBOL, TOKENS_SVG_MAP_V2 } from '@/constants';
import { useModal, useNetwork, useProvider, useWeb3 } from '@/hooks';

import { SelectTokenProps } from './select-token.types';
import SelectTokenModal from './select-token-modal';

const SelectToken: FC<SelectTokenProps> = ({
  onSelectToken,
  currentTokenType,
  searchTokenModalState,
  currentTokenSymbol,
}) => {
  const t = useTranslations();
  const { network } = useNetwork();
  const { provider } = useProvider();
  const { dark } = useTheme() as Theme;
  const { coinsMap, coins } = useWeb3();
  const { setModal, handleClose } = useModal();

  const openModal = () =>
    setModal(
      <Motion
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.3,
        }}
      >
        <SelectTokenModal
          coins={coins}
          network={network}
          provider={provider}
          coinsMap={coinsMap}
          closeModal={handleClose}
          onSelectToken={onSelectToken}
          currentTokenType={currentTokenType}
          searchTokenModalState={searchTokenModalState}
        />
      </Motion>,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
        onClose: handleClose,
        hasCloseButton: true,
      }
    );

  if (!currentTokenType)
    return (
      <Button
        size="small"
        variant="filled"
        whiteSpace="nowrap"
        onClick={openModal}
        bg="surface.container"
        color={dark ? 'white' : 'black'}
        SuffixIcon={
          <Box as="span" display="inline-block" ml="m">
            <DotsSVG
              maxWidth="1rem"
              maxHeight="1rem"
              height="100%"
              width="100%"
              filled
            />
          </Box>
        }
      >
        <Typography variant="medium" minWidth="6rem">
          {t('swap.form.selectToken')}
        </Typography>
      </Button>
    );

  const Icon =
    TOKENS_SVG_MAP_V2[currentTokenType || ''] ?? TOKENS_SVG_MAP_V2.default;

  const symbol =
    currentTokenSymbol ??
    (COIN_TYPE_TO_SYMBOL[network][currentTokenType || ''] || '???');

  return (
    <Button
      size="small"
      variant="filled"
      whiteSpace="nowrap"
      onClick={openModal}
      bg="surface.container"
      color={dark ? 'white' : 'black'}
      SuffixIcon={
        <Box as="span" display="inline-block" ml="m">
          <DotsSVG
            maxWidth="1rem"
            maxHeight="1rem"
            height="100%"
            width="100%"
            filled
          />
        </Box>
      }
      PrefixIcon={
        <Box as="span" display="inline-block">
          <Icon maxWidth="2rem" maxHeight="2rem" height="100%" width="100%" />
        </Box>
      }
    >
      <Typography variant="medium" minWidth="6rem">
        {symbol}
      </Typography>
    </Button>
  );
};

export default SelectToken;
