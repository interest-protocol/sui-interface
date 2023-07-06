import {
  Box,
  Motion,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { pathOr } from 'ramda';
import { FC, useState } from 'react';

import { DOUBLE_SCALAR } from '@/constants';
import { useModal, useWeb3 } from '@/hooks';
import { formatDollars, formatMoney } from '@/utils';

import { useLendProviderValue } from '../../lend.provider';
import { SupplyRow } from '../lend-table.types';
import {
  ConfirmCollateralModal,
  DisableCollateralModal,
  EnableCollateralModal,
  FailCollateralModal,
} from './market-table-modals/market-table-collateral-modal';
import { ResultCollateralModalProps } from './market-table-modals/market-table-collateral-modal/collateral-modal.types';
import {
  SupplyMarketConfirmModal,
  SupplyMarketFailModal,
  SupplyMarketModal,
  SupplyMarketPreviewModal,
} from './market-table-modals/market-table-supply-modal';
import { ResultRowModalProps } from './market-table-modals/market-table-supply-modal/supply-modal.types';
import { OpenSupplyMarketPreviewModalArgs } from './market-table-modals/modal.types';
import { MarketTableTokenIcon } from './market-table-token-icon';

const SupplyMarketTableRow: FC<SupplyRow> = ({
  asset,
  supplied,
  wallet,
  collateral,
  isEngaged,
  marketKey,
}) => {
  const t = useTranslations();
  const { setModal, handleClose } = useModal();
  const [isCollateralEnabled, setCollateralSwitchState] = useState(collateral);
  const {
    userBalancesInUSD,
    mutate,
    marketRecord,
    priceMap,
    moneyMarketStorage,
    ipxPrice,
  } = useLendProviderValue();
  const { coinsMap } = useWeb3();

  const { dark } = useTheme() as Theme;
  const hoverColor = dark
    ? 'linear-gradient(0deg, rgba(182, 196, 255, 0.08), rgba(182, 196, 255, 0.08)), #1B1B1F'
    : 'linear-gradient(0deg, rgba(0, 85, 255, 0.08), rgba(0, 85, 255, 0.08)), #F2F0F4';

  const openEnableCollateralModal = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setModal(
      <Motion
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.3,
        }}
      >
        <EnableCollateralModal
          closeModal={handleClose}
          asset={asset}
          resultModal={openResultModal}
          userBalancesInUSD={userBalancesInUSD}
          setCollateralSwitchState={setCollateralSwitchState}
          mutate={mutate}
          marketKey={marketKey}
          marketRecord={marketRecord}
          priceMap={priceMap}
        />
      </Motion>,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  const openDisableCollateralModal = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setModal(
      <Motion
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.3,
        }}
      >
        <DisableCollateralModal
          closeModal={handleClose}
          asset={asset}
          resultModal={openResultModal}
          userBalancesInUSD={userBalancesInUSD}
          setCollateralSwitchState={setCollateralSwitchState}
          mutate={mutate}
          marketKey={marketKey}
          marketRecord={marketRecord}
          priceMap={priceMap}
        />
      </Motion>,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  const openResultModal = ({
    txLink,
    tokenName,
    isSuccess,
    isEnabled,
  }: ResultCollateralModalProps) => {
    setModal(
      isSuccess ? (
        <ConfirmCollateralModal
          tokenName={tokenName}
          closeModal={handleClose}
          isEnabled={isEnabled}
          txLink={txLink}
        />
      ) : (
        <FailCollateralModal
          tokenName={tokenName}
          closeModal={handleClose}
          isEnabled={isEnabled}
        />
      ),
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  const openRowMarketResultModal = ({
    txLink,
    isSuccess,
    isDeposit,
  }: ResultRowModalProps) => {
    setModal(
      isSuccess ? (
        <SupplyMarketConfirmModal
          closeModal={handleClose}
          title={t(isDeposit ? 'lend.supply' : 'lend.withdraw')}
          content={t('lend.modal.supply.confirm.content', {
            isDeposit: +isDeposit,
          })}
          additionalText={t('lend.modal.supply.confirm.additionInfo')}
          activityLink={txLink as string}
        />
      ) : (
        <SupplyMarketFailModal
          closeModal={handleClose}
          title={t(isDeposit ? 'lend.supply' : 'lend.withdraw')}
          content={t('lend.modal.supply.error.content', {
            isDeposit: +isDeposit,
          })}
          description=""
        />
      ),
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  const openRowMarketPreviewModal = ({
    value,
    isMax,
    isDeposit,
  }: OpenSupplyMarketPreviewModalArgs) => {
    setModal(
      <SupplyMarketPreviewModal
        closeModal={handleClose}
        asset={asset}
        isDeposit={isDeposit}
        backRowMarketModal={openRowMarketModal}
        openRowMarketResultModal={openRowMarketResultModal}
        marketRecord={marketRecord}
        priceMap={priceMap}
        userBalancesInUSD={userBalancesInUSD}
        coinsMap={coinsMap}
        marketKey={marketKey}
        value={value}
        isMax={isMax}
        mutate={mutate}
      />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  const openRowMarketModal = (isDeposit: boolean) => {
    setModal(
      <SupplyMarketModal
        closeModal={handleClose}
        asset={asset}
        openRowMarketPreviewModal={openRowMarketPreviewModal}
        marketKey={marketKey}
        marketRecord={marketRecord}
        priceMap={priceMap}
        userBalancesInUSD={userBalancesInUSD}
        coinsMap={coinsMap}
        moneyMarketStorage={moneyMarketStorage}
        ipxPrice={ipxPrice}
        isDeposit={isDeposit}
      />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  return (
    <Motion
      mb="1rem"
      pr="0.5rem"
      pl="0.75rem"
      width="100%"
      display="grid"
      cursor="pointer"
      whileHover={{ background: hoverColor }}
      onClick={() => openRowMarketModal(true)}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      gridTemplateColumns={['repeat(3, 1fr)', 'repeat(4, 1fr)']}
    >
      <Box
        gap="m"
        py="1.5rem"
        pl="1.125rem"
        display="flex"
        borderLeft="2px solid"
        borderColor={isEngaged ? 'success' : dark ? 'black' : 'white'}
      >
        <MarketTableTokenIcon type={asset.coin.token.type} />
        <Box display="flex" flexDirection="column">
          <Typography variant="medium">{asset.coin.token.symbol}</Typography>
          <Typography
            variant="small"
            color={
              asset.coin.color != undefined && dark
                ? asset.coin.color.dark
                : asset.coin.color != undefined && !dark
                ? asset.coin.color.light
                : dark
                ? '#77767A'
                : '#47464A'
            }
          >
            {asset.percentage}%
          </Typography>
        </Box>
      </Box>
      <Box
        gap="2xs"
        display="flex"
        textAlign="center"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="medium">
          {formatMoney(supplied.amount)} {asset.coin.token.symbol}
        </Typography>
        <Typography variant="small" color={dark ? '#77767A' : '#47464A'}>
          {formatDollars(supplied.value)}
        </Typography>

        <Typography variant="small" color={dark ? '#77767A' : '#47464A'}>
          {marketRecord[marketKey].LTV.dividedBy(DOUBLE_SCALAR).toNumber() *
            100}
          % LTV
        </Typography>
      </Box>
      <Box
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        display={['none', 'flex']}
      >
        <Typography variant="medium">{formatMoney(wallet)}</Typography>
      </Box>
      <Box
        px="l"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        onClick={(e) => e.stopPropagation()}
      >
        <Box>
          <SwitchButton
            activation
            name={asset.coin.token.symbol}
            defaultValue={isCollateralEnabled}
            disabled={
              !pathOr(false, [marketKey, 'canBeCollateral'], marketRecord)
            }
            onClick={
              isCollateralEnabled
                ? openDisableCollateralModal
                : openEnableCollateralModal
            }
          />
        </Box>
      </Box>
    </Motion>
  );
};

export default SupplyMarketTableRow;
