import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { useModal } from '@/hooks';
import { ArrowTrendSVG } from '@/svg';

import { useGetActiveValidators } from '../../../../lst.hooks';
import ValidatorList from '../modal/validator-list';
import { CurrentValidatorProps } from '../your-info.types';
import { SelectValidatorsProps } from './select-validators.types';

const SelectValidators: FC<SelectValidatorsProps> = ({ form }) => {
  const t = useTranslations();
  const { setModal, handleClose } = useModal();

  const {
    data: activeValidators,
    isLoading: activeValidatorsLoading,
    error: activeValidatorsError,
  } = useGetActiveValidators();

  const currentValidatorAddress = useWatch({
    control: form.control,
    name: 'validator',
  });

  // TODO: handle error case and loading case
  if (activeValidatorsError || activeValidatorsLoading)
    return <>Loading | Error</>;

  const currentValidator = activeValidators
    .map(({ suiAddress, name, imageUrl }) => ({ suiAddress, name, imageUrl }))
    .find(({ suiAddress }) => suiAddress === currentValidatorAddress) ?? {
    name: '',
    imageUrl: '',
    suiAddress: '',
  };

  const fillValidator = ({ suiAddress }: CurrentValidatorProps) => {
    form.setValue('validator', suiAddress);
  };

  const openValidatorModals = () => {
    setModal(
      <ValidatorList
        handleClose={handleClose}
        fillValidator={fillValidator}
        activeValidators={activeValidators}
        currentValidator={currentValidator}
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
        <Box display="flex" alignItems="center" gap="0.75rem">
          <Box
            width="2.5rem"
            height="2.5rem"
            borderRadius="0.25rem"
            backgroundSize="contain"
            backgroundPosition="center center"
            backgroundImage={`url(${currentValidator.imageUrl})`}
            backgroundColor={currentValidator.imageUrl || 'surface.dim'}
          />
          <Typography variant="medium">
            {currentValidator.name ? currentValidator.name : '???'}
          </Typography>
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
