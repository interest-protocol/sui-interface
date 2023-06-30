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
import { useLendProviderValue } from '@/views/dapp/v2/lend/lend.provider';
import ConfirmCollateralModal from '@/views/dapp/v2/lend/lend-tables/market-table/modals/confirm-collateral';
import DisableCollateralModal from '@/views/dapp/v2/lend/lend-tables/market-table/modals/disable-collateral-modal';
import EnableCollateralModal from '@/views/dapp/v2/lend/lend-tables/market-table/modals/enable-collateral-modal';
import FailCollateralModal from '@/views/dapp/v2/lend/lend-tables/market-table/modals/fail-collateral';
import {
  OpenRowMarketPreviewModalArgs,
  ResultCollateralModalProps,
} from '@/views/dapp/v2/lend/lend-tables/market-table/modals/modal.types';
import SupplyMarketConfirmModal from '@/views/dapp/v2/lend/lend-tables/market-table/modals/supply-row/supply-row-confirm-modal';
import SupplyMarketFailModal from '@/views/dapp/v2/lend/lend-tables/market-table/modals/supply-row/supply-row-fail-modal';
import SupplyMarketModal from '@/views/dapp/v2/lend/lend-tables/market-table/modals/supply-row/supply-row-modal';
import SupplyMarketPreviewModal from '@/views/dapp/v2/lend/lend-tables/market-table/modals/supply-row/supply-row-preview-modal';

import { SupplyRow } from '../../lend-table.types';
import { getSVG } from '../market-table.utils';

const SupplyMarketTableRow: FC<SupplyRow & { isEngaged: boolean }> = ({
  assetApy,
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
          assetApy={assetApy}
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
          assetApy={assetApy}
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
    tokenName,
    isSuccess,
    isEnabled,
    txLink,
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
        assetApy={assetApy}
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
    isDeposit,
    value,
    isMax,
  }: OpenRowMarketPreviewModalArgs) => {
    setModal(
      <SupplyMarketPreviewModal
        closeModal={handleClose}
        assetApy={assetApy}
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
      width="100%"
      display="grid"
      cursor="pointer"
      whileHover={{
        background: surface2,
      }}
      initial={{
        background: surface1,
      }}
      gridTemplateColumns="repeat(4, 1fr)"
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      pl="0.75rem"
      pr="0.5rem"
      mb="1rem"
      onClick={() => openRowMarketModal(true)}
    >
      <Box
        borderLeft="2px solid"
        borderColor={isEngaged ? 'success' : dark ? 'black' : 'white'}
        py="1.5rem"
        pl="1.125rem"
        gap="m"
        display="flex"
      >
        {getSVG(assetApy.coin.token.type)}
        <Box display="flex" flexDirection="column">
          <Typography variant="medium">{assetApy.coin.token.symbol}</Typography>
          <Typography
            variant="small"
            color={
              assetApy.coin.color != undefined && dark
                ? assetApy.coin.color.dark
                : assetApy.coin.color != undefined && !dark
                ? assetApy.coin.color.light
                : dark
                ? '#77767A'
                : '#47464A'
            }
          >
            {assetApy.percentage}%
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
            defaultValue={isCollateralEnabled}
            name={assetApy.coin.token.symbol}
            labels={''}
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
