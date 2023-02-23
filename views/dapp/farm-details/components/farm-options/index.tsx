import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { Routes, RoutesEnum } from '@/constants';
import { Typography } from '@/elements';
import Box from '@/elements/box';
import Button from '@/elements/button';
import { TOKEN_SYMBOL } from '@/sdk';
import { FixedPointMath } from '@/sdk/entities/fixed-point-math';
import { capitalize, formatDollars, formatMoney } from '@/utils';
import { makeFarmSymbol } from '@/views/dapp/farms/farms.utils';

import { StakeState } from '../../farm-details.types';
import HarvestButton from '../buttons/harvest-button';
import EarnCard from '../farm-card';
import FarmStakeModal from '../farm-stake-modal';
import { FarmOptionsProps } from './farm-options.types';

const FarmOptions: FC<FarmOptionsProps> = ({
  farm,
  refetch,
  loading,
  intUSDPrice,
  hasAccountManager: [hasAccount, setHasAccount],
}) => {
  console.log('>> farm :: ', farm, hasAccount);

  const t = useTranslations();
  const { push } = useRouter();
  const [modal, setModal] = useState<StakeState | undefined>();

  const farmSymbol =
    farm.id === 0 ? TOKEN_SYMBOL.IPX : makeFarmSymbol(farm.token1);

  const handleCloseModal = () => setModal(undefined);

  const handleChangeModal = (target: StakeState) => () => setModal(target);

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
        loading={loading}
        title={capitalize(t('common.yourBalance'))}
        amountUSD={formatDollars(
          FixedPointMath.from(farm.stakingTokenPrice)
            .mul(farm.balance)
            .toNumber()
        )}
        amount={`${formatMoney(
          FixedPointMath.toNumber(farm.balance)
        )} ${farmSymbol}`}
        button={
          <Button
            variant="primary"
            onClick={() =>
              farm.id === 0
                ? push({ pathname: Routes[RoutesEnum.DEX] }).then()
                : push({
                    pathname: Routes[RoutesEnum.DEXPoolDetails],
                    query: { objectId: farm.stakingTokenObjectId },
                  }).then()
            }
            hover={{
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
        loading={loading}
        amountUSD={formatDollars(
          FixedPointMath.from(farm.stakingTokenPrice)
            .mul(farm.stakingAmount)
            .toNumber()
        )}
        amount={`${formatMoney(
          FixedPointMath.toNumber(farm.stakingAmount)
        )} ${farmSymbol}`}
        button={
          <Box
            display="flex"
            justifyContent="space-evenly"
            px={['NONE', 'NONE', 'NONE', 'XL']}
          >
            <Button
              mr="S"
              variant="primary"
              disabled={farm.balance.isZero() || !farm.isLive}
              onClick={handleChangeModal(StakeState.Stake)}
              bg={farm.balance.isZero() || !farm.isLive ? 'disabled' : 'accent'}
              cursor={
                farm.balance.isZero() || !farm.isLive
                  ? 'not-allowed'
                  : 'pointer'
              }
              hover={{
                bg:
                  farm.balance.isZero() || !farm.isLive
                    ? 'disabled'
                    : 'accentActive',
              }}
            >
              +
            </Button>
            <Button
              variant="primary"
              disabled={farm.stakingAmount.isZero()}
              onClick={handleChangeModal(StakeState.Unstake)}
              bg={farm.stakingAmount.isZero() ? 'disabled' : 'error'}
              cursor={farm.stakingAmount.isZero() ? 'not-allowed' : 'pointer'}
              hover={{
                bg: farm.stakingAmount.isZero() ? 'disabled' : 'errorActive',
              }}
            >
              -
            </Button>
          </Box>
        }
      />
      <EarnCard
        title={t('farmsDetails.thirdCardTitle')}
        loading={loading}
        shadow={!farm.pendingRewards.isZero()}
        amountUSD={formatDollars(
          FixedPointMath.from(intUSDPrice).mul(farm.pendingRewards).toNumber()
        )}
        amount={`${formatMoney(FixedPointMath.toNumber(farm.pendingRewards))} ${
          TOKEN_SYMBOL.SUI
        }`}
        button={<HarvestButton farm={farm} refetch={refetch} />}
      />
      <FarmStakeModal
        farm={farm}
        modal={modal}
        handleClose={handleCloseModal}
        setHasAccount={setHasAccount}
        amount={FixedPointMath.toNumber(
          modal === StakeState.Stake ? farm.balance : farm.stakingAmount
        )}
        farmSymbol={farmSymbol}
        refetch={refetch}
      />
    </Box>
  );
};

export default FarmOptions;
