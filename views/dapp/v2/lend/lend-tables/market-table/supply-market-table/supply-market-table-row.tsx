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
import { formatMoney } from '@/utils';
import { useLendProviderValue } from '@/views/dapp/v2/lend/lend.provider';

import { SupplyRow } from '../../lend-table.types';
import { getSVG } from '../market-table.utils';
import {
  ConfirmCollateralModal,
  DisableCollateralModal,
  EnableCollateralModal,
  FailCollateralModal,
} from '../modals/collateral';
import { ResultCollateralModalProps } from '../modals/collateral/collateral-modal.types';
import {
  SupplyMarketConfirmModal,
  SupplyMarketFailModal,
  SupplyMarketModal,
  SupplyMarketPreviewModal,
} from '../modals/supply-row';
import {
  OpenRowMarketPreviewModalArgs,
  ResultRowModalProps,
} from '../modals/supply-row/supply-modal.types';

const SupplyMarketTableRow: FC<SupplyRow & { isEngaged: boolean }> = ({
  assetData,
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
          assetData={assetData}
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
          assetData={assetData}
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
        assetData={assetData}
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
        assetData={assetData}
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
            isDeposit: 1,
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
        gap="m"
        py="1.5rem"
        pl="1.125rem"
        display="flex"
        borderLeft="2px solid"
        borderColor={isEngaged ? 'success' : dark ? 'black' : 'white'}
      >
        {getSVG(assetData.coin.token.type)}
        <Box display="flex" flexDirection="column">
          <Typography variant="medium">
            {assetData.coin.token.symbol}
          </Typography>
          <Typography
            variant="small"
            color={
              assetData.coin.color != undefined && dark
                ? assetData.coin.color.dark
                : assetData.coin.color != undefined && !dark
                ? assetData.coin.color.light
                : dark
                ? '#77767A'
                : '#47464A'
            }
          >
            {assetData.percentage}%
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
          {supplied.amount}
        </Typography>
        <Typography
          variant="small"
          textAlign="center"
          color={dark ? '#77767A' : '#47464A'}
        >
          ${supplied.value}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Typography variant="medium" textAlign="center">
          {formatMoney(wallet)}
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
            labels=""
            defaultValue={isCollateralEnabled}
            name={assetData.coin.token.symbol}
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
