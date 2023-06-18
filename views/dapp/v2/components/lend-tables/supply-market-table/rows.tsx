import {
  Box,
  Motion,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { not } from 'ramda';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { Routes, RoutesEnum } from '@/constants';
import { useModal } from '@/hooks';

import { MarketTableSupplyProps } from '../market-table/market-table.types';
import { getSVG } from '../market-table/market-table.utils';
import CollateralModal from './Modal/collateral-modal';
import DisablingCollateralModal from './Modal/disabling-collateral-modal';
import ResultCollateralModal from './Modal/result-collateral';

const SupplyMarketTableRow: FC<
  MarketTableSupplyProps & { isEngaged: boolean }
> = ({ assetApy, supplied, wallet, collateral, isEngaged }) => {
  const { setModal, handleClose } = useModal();
  const [collateralSwitch, setCollateralSwitch] = useState(collateral);
  const { dark } = useTheme() as Theme;
  const surface1 = dark
    ? 'linear-gradient(0deg, rgba(182, 196, 255, 0.04), rgba(182, 196, 255, 0.04)), #1B1B1F'
    : 'linear-gradient(0deg, rgba(0, 85, 255, 0.04), rgba(0, 85, 255, 0.04)), #F2F0F4';
  const surface2 = dark
    ? 'linear-gradient(0deg, rgba(182, 196, 255, 0.08), rgba(182, 196, 255, 0.08)), #1B1B1F'
    : 'linear-gradient(0deg, rgba(0, 85, 255, 0.08), rgba(0, 85, 255, 0.08)), #F2F0F4';

  const handleCollateralSwitch = () => {
    setCollateralSwitch(not);
  };

  const openCollateralModal = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    handleCollateralSwitch();
    setModal(
      <Motion
        initial={{ scale: 0.85 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.3,
        }}
      >
        {!collateralSwitch ? (
          <CollateralModal
            closeModal={handleClose}
            assetApy={assetApy}
            resultModal={openResultModal}
          />
        ) : (
          <DisablingCollateralModal
            closeModal={handleClose}
            assetApy={assetApy}
            resultModal={openResultModal}
          />
        )}
      </Motion>,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  const openResultModal = () => {
    const RANDOM_RESULT = Math.random() < 0.5;
    setModal(
      <ResultCollateralModal
        title={'Enable as Collateral'}
        content={
          RANDOM_RESULT
            ? 'You have enable [Token name] as a Collateral'
            : 'You have NOT enable [Token name] as a Collateral'
        }
        closeModal={handleClose}
        isSuccess={RANDOM_RESULT}
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
    <Link
      key={v4()}
      href={{
        pathname: Routes[RoutesEnum.Lend],
        query: { type: assetApy.coin.token.type },
      }}
    >
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
      >
        <Box
          borderLeft="2px solid"
          borderColor={isEngaged ? '#D9F99D' : 'surface.containerLow'}
          py="1.5rem"
          pl="1.125rem"
          gap="m"
          display="flex"
        >
          <Box display="flex" alignItems="center">
            {getSVG(assetApy.coin.token.type)}
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography variant="medium">
              {assetApy.coin.token.symbol}
            </Typography>
            <Typography
              variant="small"
              color={
                assetApy.coin.color !== undefined && dark
                  ? assetApy.coin.color.dark
                  : assetApy.coin.color !== undefined && !dark
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
            {supplied.percentage}
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
              defaultValue={collateralSwitch}
              name={assetApy.coin.token.symbol}
              labels={''}
              onClick={openCollateralModal}
            />
          </Box>
        </Box>
      </Motion>
    </Link>
  );
};

export default SupplyMarketTableRow;
