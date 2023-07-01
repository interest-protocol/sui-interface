import {
  Box,
  Button,
  Motion,
  ProgressIndicator,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { LeftArrowSVG } from '@/components/svg/v2';
import { TimesSVG } from '@/svg';
import { formatDollars, formatMoney } from '@/utils';

import { getSVG } from '../../market-table.utils';
import LoadingModal from '../collateral/loading-collateral';
import LineModal from '../lines';
import { BorrowMarketModalPreviewProps } from './borrow-modal.types';

const BorrowMarketPreviewModal: FC<BorrowMarketModalPreviewProps> = ({
  assetData,
  closeModal,
  isBorrow,
  backRowBorrowMarketModal,
  openRowBorrowMarketResultModal,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const [FromIcon] = [getSVG(assetData.coin.token.type)];

  const [isLoading, setIsLoading] = useState(false);

  const handleIsLoading = () => {
    setIsLoading(not);
  };

  const handleResult = () => {
    const RANDOM_RESULT = Math.random() < 0.5;
    openRowBorrowMarketResultModal({
      isBorrow: isBorrow,
      isSuccess: RANDOM_RESULT,
      txLink: '',
    });
  };

  const handleCollateral = () => {
    handleIsLoading();
    setTimeout(handleResult, (Math.floor(Math.random() * 5) + 3) * 1000);
  };

  return isLoading ? (
    <LoadingModal
      title={t(isBorrow ? 'lend.borrow' : 'lend.repay')}
      content={t('lend.modal.borrow.loading.content', {
        isBorrow: +isBorrow,
      })}
    />
  ) : (
    <Motion
      layout
      width="24.375rem"
      display="flex"
      maxHeight="90vh"
      maxWidth="26rem"
      overflowY="auto"
      overflowX="hidden"
      color="onSurface"
      borderRadius="1rem"
      bg="surface.container"
      flexDirection="column"
      boxShadow="0 0 5px #3334"
      transition={{ duration: 0.3 }}
    >
      <Box
        p="xl"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        color="onSurface"
      >
        <Button
          variant="icon"
          onClick={() => {
            backRowBorrowMarketModal(false);
          }}
        >
          <LeftArrowSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center">
            {getSVG(assetData.coin.token.type)}
          </Box>
          <Typography variant="title5" ml="0.5rem" color="onSurface">
            {assetData.coin.token.symbol}
          </Typography>
        </Box>
        <Button variant="icon" onClick={closeModal}>
          <TimesSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
      </Box>
      <Box mx="-0.5rem" px="xl">
        <Box bg="surface.containerLowest" borderRadius="m">
          <Box
            p="xl"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box display="flex" alignItems="center" gap="xl">
              {FromIcon}
              <Typography variant="medium" color="">
                {assetData.coin.token.symbol}
              </Typography>
            </Box>
            <Box textAlign="right">
              <Typography variant="medium" color={dark ? 'white' : 'black'}>
                0.000
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box p="xl" bg="surface.containerLow">
        <LineModal
          description="lend.firstSection.newBorrowLimit"
          value={formatDollars(1000)}
        />
        <LineModal
          description="lend.firstSection.borrowLimit"
          value={formatDollars(1000)}
        />
        <LineModal
          description="lend.firstSection.borrowLimitUsed"
          value={`${formatMoney(0.0)}%`}
        />
        <Box p="1rem" display="flex" justifyContent="space-between">
          <ProgressIndicator value={75} variant="bar" />
        </Box>
        <Box
          as="hr"
          mx="4xl"
          my="1.5rem"
          border="none"
          borderBottom="1px solid"
          borderColor="outline.outlineVariant"
        />
        <LineModal
          description="lend.modal.supply.preview.sectionTitle"
          value=""
        />
        <LineModal
          description="lend.modal.supply.preview.inToken"
          value={formatMoney(0.0)}
        />
        <LineModal
          description="lend.modal.supply.preview.inUSD"
          value={formatDollars(0.2)}
        />
      </Box>
      <Box
        p="xl"
        bg="surface.containerLow"
        display="flex"
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Button
          variant="filled"
          fontSize="s"
          width="100%"
          display="flex"
          justifyContent="center"
          onClick={handleCollateral}
        >
          {t('lend.modal.borrow.preview.button', {
            isBorrow: +isBorrow,
          })}
        </Button>
      </Box>
    </Motion>
  );
};

export default BorrowMarketPreviewModal;
