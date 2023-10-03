import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { pathOr } from 'ramda';
import { FC, useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';

import ArrowSpecial from '@/components/svg/arrow-special';
import { useModal } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { formatMoney } from '@/utils';

import ValidatorList from '../../../../components/your-info-container/modal/validator-list';
import { IValidatorModal } from '../../../../components/your-info-container/your-info.types';
import { useLstData } from '../../../../lst.hooks';
import { useBondsContext } from '../../../bonds.hooks';

const ValidatorSelector: FC = () => {
  const { form } = useBondsContext();
  const { validatorsApy, validatorStakeRecord, activeValidators } =
    useLstData();

  const { setModal, handleClose } = useModal();

  const control = form.control;
  const validatorAddress = useWatch({ control, name: 'validator' });

  const currentValidator = activeValidators.find(
    (data) => data.suiAddress == validatorAddress
  );

  const [currentValidatorData, setCurrentValidatorData] = useState({
    imageUrl: currentValidator?.imageUrl,
    name: currentValidator?.name,
  });

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

  useEffect(() => {
    const tmpValidator = validators.find(
      (data) => data.suiAddress == validatorAddress
    );

    setCurrentValidatorData(tmpValidator ?? currentValidatorData);
  }, [validatorAddress]);

  const handleSelected = (suiAddress: string) => {
    form.setValue('validator', suiAddress);
    handleClose();
  };

  const openValidatorModals = () => {
    setModal(
      <ValidatorList
        validators={validators}
        handleClose={handleClose}
        handleSelected={handleSelected}
        currentValidatorAddress={validatorAddress}
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
    <Box
      mt="l"
      pr="unset"
      p="0.75rem"
      display="flex"
      cursor="pointer"
      border="1px solid"
      borderRadius="0.25rem"
      onClick={openValidatorModals}
      justifyContent="space-between"
      borderColor="outline.outlineVariant"
    >
      <Box display="flex" gap="m" alignItems="center">
        <Box display="flex">
          <Box
            width="2.5rem"
            height="2.5rem"
            borderRadius="0.25rem"
            backgroundColor="white"
            backgroundSize="contain"
            backgroundPosition="center center"
            backgroundImage={`url(${currentValidatorData.imageUrl})`}
          />
        </Box>
        <Typography variant="medium">{currentValidatorData.name}</Typography>
      </Box>
      <Button variant="icon" mr="xs" display="flex" alignItems="center">
        <ArrowSpecial
          width="100%"
          height="100%"
          maxWidth="0.8rem"
          maxHeight="0.8rem"
        />
      </Button>
    </Box>
  );
};

export default ValidatorSelector;
