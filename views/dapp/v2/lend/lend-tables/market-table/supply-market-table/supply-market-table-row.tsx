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

import { useModal, useWeb3 } from '@/hooks';
import { formatDollars, formatMoney } from '@/utils';

import { useLendProviderValue } from '../../../lend.provider';
import { SupplyRow } from '../../lend-table.types';
import { getSVG } from '../market-table.utils';
import ConfirmCollateralModal from '../modals/confirm-collateral';
import DisableCollateralModal from '../modals/disable-collateral-modal';
import EnableCollateralModal from '../modals/enable-collateral-modal';
import FailCollateralModal from '../modals/fail-collateral';
import {
  OpenRowMarketPreviewModalArgs,
  ResultCollateralModalProps,
} from '../modals/modal.types';
import SupplyMarketConfirmModal from '../modals/supply-row/supply-row-confirm-modal';
import SupplyMarketFailModal from '../modals/supply-row/supply-row-fail-modal';
import SupplyMarketModal from '../modals/supply-row/supply-row-modal';
import SupplyMarketPreviewModal from '../modals/supply-row/supply-row-preview-modal';

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
  const surface1 = dark
    ? 'linear-gradient(0deg, rgba(182, 196, 255, 0.04), rgba(182, 196, 255, 0.04)), #1B1B1F'
    : 'linear-gradient(0deg, rgba(0, 85, 255, 0.04), rgba(0, 85, 255, 0.04)), #F2F0F4';
  const surface2 = dark
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

  const openRowMarketModal = (isDeposit: boolean) => {
    setModal(
      <SupplyMarketModal
        closeModal={handleClose}
        isDeposit={isDeposit}
        asset={asset}
        openRowMarketPreviewModal={openRowMarketPreviewModal}
        marketKey={marketKey}
        marketRecord={marketRecord}
        priceMap={priceMap}
        userBalancesInUSD={userBalancesInUSD}
        coinsMap={coinsMap}
        moneyMarketStorage={moneyMarketStorage}
        ipxPrice={ipxPrice}
      />,
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
  }: OpenRowMarketPreviewModalArgs) => {
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

  const openRowMarketResultModal = (isSuccess: boolean, isDeposit: boolean) => {
    setModal(
      isSuccess ? (
        <SupplyMarketConfirmModal
          closeModal={handleClose}
          title={t(
            isDeposit ? 'common.v2.lend.supply' : 'common.v2.lend.withdraw'
          )}
          content={t('Lend.modal.supply.confirm.content', {
            isDeposit: 1,
          })}
          additionalText={t('Lend.modal.supply.confirm.additionInfo')}
          activityLink="#"
        />
      ) : (
        <SupplyMarketFailModal
          closeModal={handleClose}
          title={t(
            isDeposit ? 'common.v2.lend.supply' : 'common.v2.lend.withdraw'
          )}
          content={t('Lend.modal.supply.error.content', {
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

  return (
    <Motion
      mb="1rem"
      pr="0.5rem"
      pl="0.75rem"
      width="100%"
      display="grid"
      cursor="pointer"
      initial={{ background: surface1 }}
      gridTemplateColumns="repeat(4, 1fr)"
      whileHover={{ background: surface2 }}
      onClick={() => openRowMarketModal(true)}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <Box
        borderLeft="2px solid"
        borderColor={isEngaged ? 'success' : dark ? 'black' : 'white'}
        py="1.5rem"
        pl="1.125rem"
        gap="m"
        display="flex"
      >
        {getSVG(asset.coin.token.type)}
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
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="medium" textAlign="center">
          {formatMoney(supplied.amount)}
        </Typography>
        <Typography
          variant="small"
          textAlign="center"
          color={dark ? '#77767A' : '#47464A'}
        >
          {formatDollars(supplied.value)}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography variant="medium" textAlign="center">
          {wallet}
        </Typography>
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
