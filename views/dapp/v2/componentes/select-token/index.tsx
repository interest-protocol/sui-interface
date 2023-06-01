import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { DotsSVG } from '@/components/svg/v2';
import { useModal } from '@/hooks';

import { SelectTokenProps } from './select-token.types';
import SelectTokenModal from './select-token-modal';
import { RECOMMENDED_TOKENS } from './select-token-modal/tokens.data';

const SelectToken: FC<SelectTokenProps> = ({ onSelectToken, type }) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const { setModal, handleClose } = useModal();

  const openModal = () =>
    setModal(
      <SelectTokenModal
        type={type}
        closeModal={handleClose}
        onSelectToken={onSelectToken}
      />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
        onClose: handleClose,
        hasCloseButton: true,
      }
    );

  if (!type)
    return (
      <Button
        size="small"
        bg={dark ? '#1F1F23' : '#EFEDF1'}
        color="text"
        variant="filled"
        whiteSpace="nowrap"
        onClick={openModal}
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

  const { Icon, symbol } = RECOMMENDED_TOKENS.find(
    (item) => item.type === type
  )!;

  return (
    <Button
      size="small"
      bg={dark ? '#1F1F23' : '#EFEDF1'}
      color="text"
      variant="filled"
      whiteSpace="nowrap"
      onClick={openModal}
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
          <Icon maxWidth="1rem" maxHeight="1rem" height="100%" width="100%" />
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
