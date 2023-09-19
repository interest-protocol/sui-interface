import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { noop } from 'swr/_internal';

import { InfoSVG } from '@/svg';
import { capitalize } from '@/utils';
import HeaderModal from '@/views/dapp/v2/lst/components/your-info-container/modal/header-modal';

import AssetSearch from './asset-search';
import AssetsTableBody from './assets-table-body';
import { SelectAssetProps } from './select-asset.types';

const SelectAssetModal: FC<SelectAssetProps> = ({ handleClose }) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;

  return (
    <Box
      display="flex"
      borderRadius="1rem"
      flexDirection="column"
      bg={dark ? 'black' : 'white'}
      height={['90vh', '90vh', '90vh', 'auto']}
      width={['90vw', '90vw', '90vw', '44rem']}
    >
      <Box bg="surface.dim" borderRadius="1rem 1rem 0 0">
        <HeaderModal
          withoutBack
          handleClose={handleClose}
          title={capitalize(t('lst.modal.asset.title'))}
        />
      </Box>
      <Box px="xl" pb="0.875rem" borderRadius="0 0 1rem 1rem" bg="surface.dim">
        <Box
          mb="xl"
          p="0.75rem"
          display="flex"
          bg="#A5F3FC"
          color="#155E75"
          alignItems="center"
          borderRadius="0.25rem"
        >
          <Box width="1.25rem" height="1.25rem" mr="0.75rem">
            <InfoSVG maxWidth="1.25rem" maxHeight="1.25rem" width="100%" />
          </Box>
          <Typography
            fontSize="0.75rem"
            variant="extraSmall"
            textTransform="capitalize"
          >
            {t('lst.modal.asset.info')}
          </Typography>
        </Box>
        <AssetSearch />
      </Box>
      <Box overflow="auto">
        <AssetsTableBody />
      </Box>
      <Box
        px="xl"
        py="0.75rem"
        display="flex"
        bg="surface.dim"
        justifyContent="flex-end"
        borderRadius="0 0 1rem 1rem"
      >
        <Button
          bg="primary"
          color="white"
          variant="filled"
          p="0.654rem 1.5rem !important"
          onClick={() => {
            noop();
          }}
        >
          {capitalize(t('lst.modal.asset.confirmButton'))}
        </Button>
      </Box>
    </Box>
  );
};

export default SelectAssetModal;
