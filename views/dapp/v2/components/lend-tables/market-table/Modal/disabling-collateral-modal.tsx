import {
  Box,
  Button,
  Motion,
  ProgressIndicator,
  Typography,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { setTimeout } from 'timers';

import HeaderModal from './header';
import LineModal from './lines';
import LoadingModal from './loading-collateral';
import { CollateralModalProps } from './modal.types';

const DisablingCollateralModal: FC<CollateralModalProps> = ({
  assetApy,
  closeModal,
  resultModal,
}) => {
  const t = useTranslations();
  const [isLoading, setIsLoading] = useState(false);

  const handleIsLoading = () => {
    setIsLoading(not);
  };

  const handleCollateral = () => {
    handleIsLoading();
    setTimeout(resultModal, (Math.floor(Math.random() * 5) + 3) * 1000);
  };

  return isLoading ? (
    <LoadingModal
      title={t('Lend.modal.collateral.loading.title', { isEnable: 0 })}
      content={t('Lend.modal.collateral.loading.content', {
        walletName: '###',
        isEnable: 0,
      })}
    />
  ) : (
    <Motion
      layout
      width="24.375rem"
      display="flex"
      maxHeight="90vh"
      maxWidth="26rem"
      overflow="hidden"
      color="onSurface"
      borderRadius="1rem"
      bg="surface.container"
      flexDirection="column"
      boxShadow="0 0 5px #3334"
      transition={{ duration: 0.3 }}
    >
      <HeaderModal
        type={assetApy.coin.token.type}
        symbol={assetApy.coin.token.symbol}
        closeModal={closeModal}
      />
      <Box p="xl">
        <Typography
          variant="medium"
          mb="1rem"
          fontSize="1.375rem"
          fontWeight="400"
          color="onSurface"
        >
          {t('Lend.modal.collateral.preview.title', { isEnable: 0 })}
        </Typography>
        <Typography variant="small" color="onSurface" lineHeight="1.25rem">
          {t('Lend.modal.collateral.preview.content', { isEnable: 0 })}
        </Typography>
      </Box>
      <Box p="xl" bg="surface.containerLow">
        <LineModal
          description="common.v2.lend.firstSection.borrowLimit"
          value="$ 1000"
        />
        <LineModal
          description="common.v2.lend.firstSection.borrowLimitUsed"
          value="0 %"
        />
        <Box p="1rem" display="flex" justifyContent="space-between">
          <ProgressIndicator value={75} variant="bar" />
        </Box>
      </Box>
      <Box
        p="xl"
        bg="surface.containerLow"
        display="flex"
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Button variant="text" fontSize="s" onClick={closeModal}>
          {t('common.v2.cancel')}
        </Button>
        <Button variant="filled" fontSize="s" onClick={handleCollateral}>
          {t('Lend.modal.collateral.preview.button', { isEnable: 0 })}
        </Button>
      </Box>
    </Motion>
  );
};

export default DisablingCollateralModal;
