import { TOKEN_SYMBOL } from 'lib';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Routes, RoutesEnum, StakeState } from '@/constants';
import { Typography } from '@/elements';
import Box from '@/elements/box';
import Button from '@/elements/button';
import { useNetwork } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { capitalize, formatDollars, formatMoney } from '@/utils';
import Loading from '@/views/dapp/components/loading';
import { makeFarmSymbol } from '@/views/dapp/farms/farms.utils';

import HarvestButton from '../buttons/harvest-button';
import EarnCard from '../farm-card';
import FarmStakeModal from '../farm-modals';
import { FarmOptionsProps } from './farm-options.types';

const FarmOptions: FC<FarmOptionsProps> = ({
  farm,
  mutateFarms,
  mutatePools,
  mutatePendingRewards,
  modalState,
  setModalState,
  loading,
  form,
}) => {
  const t = useTranslations();
  const { push } = useRouter();
  const { network } = useNetwork();

  const farmSymbol = makeFarmSymbol(network, farm.coin0.type, farm.coin1.type);

  const handleChangeModal = (target: StakeState) => {
    setModalState({ isOpen: true, state: target });
  };

  if (loading)
    return (
      <Box display="flex" justifyContent="center" my="XXXL">
        <Loading />
      </Box>
    );

  return (
    <Box
      bg="foreground"
      borderRadius="L"
      columnGap="1rem"
      p={['S', 'S', 'S', 'L']}
      gridTemplateColumns="1fr 1fr 1fr"
      display={['flex', 'flex', 'flex', 'grid']}
      flexDirection={['column', 'column', 'column', 'unset']}
    >
      <EarnCard
        title={capitalize(t('common.yourBalance'))}
        amountUSD={formatDollars(
          FixedPointMath.toNumber(
            farm.lpCoinData.totalBalance.multipliedBy(farm.lpCoinPrice),
            farm.lpCoinData.decimals
          )
        )}
        amount={`${formatMoney(
          FixedPointMath.toNumber(
            farm.lpCoinData.totalBalance,
            farm.lpCoin.decimals
          )
        )} ${farmSymbol}`}
        button={
          <Button
            variant="primary"
            onClick={() =>
              push({
                pathname: Routes[RoutesEnum.DEXPoolDetails],
                query: { objectId: farm.poolObjectId },
              }).then()
            }
            nHover={{
              bg: farm.isLive ? 'accentActive' : 'disabled',
              cursor: farm.isLive ? 'pointer' : 'not-allowed',
            }}
            disabled={!farm.isLive}
            bg={farm.isLive ? 'accent' : 'disabled'}
          >
            <Typography
              as="span"
              variant="normal"
              ml="M"
              fontSize="S"
              textTransform="capitalize"
            >
              {t('common.get') + ' ' + farmSymbol}
            </Typography>
          </Button>
        }
      />
      <EarnCard
        title={t('farmsDetails.secondCardTitle')}
        amountUSD={formatDollars(
          FixedPointMath.toNumber(
            farm.accountBalance.multipliedBy(farm.lpCoinPrice),
            farm.lpCoin.decimals
          )
        )}
        amount={`${formatMoney(
          FixedPointMath.toNumber(farm.accountBalance, farm.lpCoin.decimals)
        )} ${farmSymbol}`}
        button={
          <Box
            display="flex"
            justifyContent="space-evenly"
            px={['NONE', 'NONE', 'NONE', 'XL']}
          >
            <Button
              variant="primary"
              disabled={farm.totalStakedAmount.isZero()}
              onClick={() => handleChangeModal(StakeState.Unstake)}
              bg={farm.accountBalance.isZero() ? 'disabled' : 'error'}
              cursor={farm.accountBalance.isZero() ? 'not-allowed' : 'pointer'}
              nHover={{
                bg: farm.accountBalance.isZero() ? 'disabled' : 'errorActive',
              }}
            >
              -
            </Button>
            <Button
              ml="S"
              variant="primary"
              disabled={farm.lpCoinData.totalBalance.isZero() || !farm.isLive}
              onClick={() => handleChangeModal(StakeState.Stake)}
              bg={
                farm.lpCoinData.totalBalance.isZero() || !farm.isLive
                  ? 'disabled'
                  : 'accent'
              }
              cursor={
                farm.lpCoinData.totalBalance.isZero() || !farm.isLive
                  ? 'not-allowed'
                  : 'pointer'
              }
              nHover={{
                bg:
                  farm.lpCoinData.totalBalance.isZero() || !farm.isLive
                    ? 'disabled'
                    : 'accentActive',
              }}
            >
              +
            </Button>
          </Box>
        }
      />
      <EarnCard
        title={t('farmsDetails.thirdCardTitle')}
        shadow={!farm.pendingRewards.isZero()}
        amountUSD={formatDollars(
          // IPX price is hard coded to be 0.04
          farm.pendingRewards.multipliedBy(0.04).toNumber()
        )}
        amount={`${formatMoney(farm.pendingRewards.toNumber())} ${
          TOKEN_SYMBOL.AIPX
        }`}
        button={
          <HarvestButton
            farm={farm}
            mutatePendingRewards={mutatePendingRewards}
          />
        }
      />
      <FarmStakeModal
        farm={farm}
        farmSymbol={farmSymbol}
        mutatePools={mutatePools}
        mutateFarms={mutateFarms}
        mutatePendingRewards={mutatePendingRewards}
        setModalState={setModalState}
        modalState={modalState}
        form={form}
      />
    </Box>
  );
};

export default FarmOptions;
