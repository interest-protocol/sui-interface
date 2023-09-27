import { Box, Typography } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { indexOf, pathOr } from 'ramda';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import { v4 } from 'uuid';

import { useModal } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { ArrowTrendSVG } from '@/svg';
import { formatMoney } from '@/utils';

import { useLstData } from '../../../lst.hooks';
import ValidatorList from '../modal/validator-list';
import { IValidatorModal } from '../your-info.types';
import { SelectValidatorsProps } from './select-validators.types';

const SelectValidators: FC<SelectValidatorsProps> = ({ form, isStake }) => {
  const t = useTranslations();
  const { setModal, handleClose } = useModal();
  const { validatorsApy, validatorStakeRecord, activeValidators } =
    useLstData();

  const apyMap = (validatorsApy?.apys?.reduce(
    (acc, { address, apy }) => ({ ...acc, [address]: apy }),
    {}
  ) ?? {}) as Record<string, number>;

  const validators: ReadonlyArray<IValidatorModal> = activeValidators
    .map(
      ({
        name,
        imageUrl,
        projectUrl,
        suiAddress,
        description,
        commissionRate,
        stakingPoolSuiBalance,
      }) => ({
        name,
        imageUrl,
        projectUrl,
        suiAddress,
        description,
        commissionRate: +commissionRate / 100,
        stakingPoolSuiBalanceString: stakingPoolSuiBalance,
        apy: Number((apyMap[suiAddress] * 100 ?? 0).toFixed(2)).toPrecision(),
        stakingPoolSuiBalance: formatMoney(
          FixedPointMath.toNumber(BigNumber(stakingPoolSuiBalance))
        ),
        lstStaked: Number(
          FixedPointMath.toNumber(
            BigNumber(
              pathOr('0', [suiAddress, 'principal'], validatorStakeRecord)
            )
          ).toFixed(4)
        ).toPrecision(),
      })
    )
    .sort((a, b) =>
      +a.stakingPoolSuiBalanceString > +b.stakingPoolSuiBalanceString ? -1 : 0
    )
    .sort((a, b) => (+a.lstStaked > +b.lstStaked ? -1 : 0));

  const currentValidatorAddress = useWatch({
    control: form.control,
    name: 'validator',
  });

  const currentValidator = activeValidators
    .map(({ suiAddress, name, imageUrl }) => ({ suiAddress, name, imageUrl }))
    .filter(({ suiAddress }) =>
      isStake
        ? suiAddress === currentValidatorAddress
        : indexOf(suiAddress, currentValidatorAddress.split(';')) !== -1
    );

  const fillValidator = (suiAddress: string) => {
    form.setValue('validator', suiAddress);
  };

  const openValidatorModals = () => {
    setModal(
      <ValidatorList
        handleClose={handleClose}
        handleSelected={fillValidator}
        validators={validators}
        currentValidatorAddress={
          isStake ? currentValidator[0].suiAddress : currentValidatorAddress
        }
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
    <Box mt="1.75rem">
      <Typography
        variant="extraSmall"
        textTransform="uppercase"
        color="onSurface"
        opacity={0.6}
      >
        {t('lst.selectValidator')}
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p="m"
        mt="0.5rem"
        position="relative"
        borderRadius="0.25rem"
        bg="surface.containerHigh"
        color="onSurface"
        cursor="pointer"
        onClick={openValidatorModals}
      >
        <Box
          display="flex"
          alignItems="center"
          gap={isStake ? '0.75rem' : '4px'}
        >
          {currentValidator.map((validator) => (
            <Box key={v4()} display="flex" gap="0.75rem" alignItems="center">
              <Box
                width="2.5rem"
                height="2.5rem"
                borderRadius="0.25rem"
                backgroundSize="contain"
                backgroundPosition="center center"
                backgroundImage={`url(${validator.imageUrl})`}
                backgroundColor={validator.imageUrl || 'surface.dim'}
              />
              {isStake && (
                <Typography variant="medium">
                  {validator.name ? validator.name : '???'}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
        <Box
          width="1.5rem"
          height="1.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mr="0.25rem"
          cursor="pointer"
        >
          <ArrowTrendSVG
            maxWidth="1.5rem"
            maxHeight="1.5rem"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SelectValidators;
