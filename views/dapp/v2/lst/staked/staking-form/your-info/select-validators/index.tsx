import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { isEmpty } from 'ramda';
import { FC, useState } from 'react';

import { useModal } from '@/hooks';
import { ArrowTrendSVG } from '@/svg';

import ValidatorList from '../modal/validator-list';
import { CurrentValidatorProps } from '../your-info.types';

const SelectValidators: FC = () => {
  const t = useTranslations();
  const { setModal, handleClose } = useModal();

  const [currentValidator, setCurrentValidator] =
    useState<CurrentValidatorProps>({
      name: '',
      imageUrl: '',
      suiAddress: '',
    });

  const fillValidator = (fillCurrentValidator: CurrentValidatorProps) => {
    setCurrentValidator(fillCurrentValidator);
  };

  const openValidatorModals = () => {
    setModal(
      <ValidatorList
        handleClose={handleClose}
        currentValidator={currentValidator}
        fillValidator={fillValidator}
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
            backgroundColor={
              isEmpty(currentValidator.imageUrl)
                ? 'surface.dim'
                : currentValidator.imageUrl
            }
            backgroundSize="contain"
            backgroundPosition="center center"
            backgroundImage={`url(${currentValidator.imageUrl})`}
          />
          <Typography variant="medium">
            {isEmpty(currentValidator.name) ? '???' : currentValidator.name}
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
