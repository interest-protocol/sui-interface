import { Network } from '@interest-protocol/sui-amm-sdk';
import {
  Box,
  Button,
  Motion,
  ProgressIndicator,
  Slider,
  Tabs,
  TextField,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { COINS } from '@/constants';

import { getSVG } from '../../market-table.utils';
import HeaderModal from '../header';
import LineModal from '../lines';
import { RowModalProps } from '../modal.types';

const BorrowMarketModal: FC<RowModalProps> = ({
  assetApy,
  closeModal,
  openRowMarketPreviewModal,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const [isSupplyOrBorrow, setIsSupplyOrBorrow] = useState(true);
  const TO_TOKEN = COINS[Network.DEVNET].IPX;
  const [FromIcon, ToIcon] = [
    getSVG(assetApy.coin.token.type),
    getSVG(TO_TOKEN.type),
  ];

  const handleTab = () => {
    setIsSupplyOrBorrow(not);
  };

  const handlePreview = () => {
    openRowMarketPreviewModal(isSupplyOrBorrow);
  };

  return (
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
        isCenter
      />
      <Box display="flex" justifyContent="center">
        <Tabs
          items={[t('common.v2.lend.borrow'), t('common.v2.lend.repay')]}
          onChangeTab={handleTab}
          defaultTabIndex={+!isSupplyOrBorrow}
        />
      </Box>
      <Box p="xl" display="flex" flexDirection="column" pb="2rem">
        <Typography variant="extraSmall" textAlign="end" mb="2.313rem">
          {t('common.balance')}: 0.0000
        </Typography>
        <TextField
          placeholder="0"
          fontSize="3.563rem"
          mb="1rem"
          fieldProps={{
            border: 'none',
            textAlign: 'center',
          }}
        />
        <Slider max={100} onChange={() => 1} />
      </Box>
      <Box overflowX="hidden" overflowY="auto">
        <Box p="xl">
          <LineModal
            description="common.v2.lend.firstSection.newBorrowLimit"
            value="$ 1000"
          />
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
                  {assetApy.coin.token.symbol}{' '}
                  {' ' + t('common.v2.lend.supply') + ' '} APY
                </Typography>
              </Box>
              <Box textAlign="right">
                <Typography variant="medium" color={dark ? 'white' : 'black'}>
                  0.000
                </Typography>
              </Box>
            </Box>
            <Box
              as="hr"
              mx="4xl"
              border="none"
              borderBottom="1px solid"
              borderColor="outline.outlineVariant"
            />
            <Box
              p="xl"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center" gap="xl">
                {ToIcon}
                <Typography variant="medium" color="">
                  {TO_TOKEN.symbol} {' ' + t('common.v2.lend.rewards') + ' '}
                  APY
                </Typography>
              </Box>
              <Box textAlign="right">
                <Typography variant="medium" color={dark ? 'white' : 'black'}>
                  0.0000
                </Typography>
              </Box>
            </Box>
          </Box>
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
            onClick={() => handlePreview()}
          >
            {isSupplyOrBorrow ? 'Preview Borrow' : 'Preview Repay'}
          </Button>
        </Box>
      </Box>
    </Motion>
  );
};

export default BorrowMarketModal;
