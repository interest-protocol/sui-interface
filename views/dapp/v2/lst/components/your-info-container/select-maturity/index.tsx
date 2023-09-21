import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { isEmpty } from 'ramda';
import { FC } from 'react';

import { useModal } from '@/hooks';
import { ArrowTrendSVG } from '@/svg';

import MaturityModal from '../modal/maturity';
import { SelectMaturityProps } from './select-maturity.types';

const SelectMaturityDate: FC<SelectMaturityProps> = ({ form }) => {
  const t = useTranslations();
  const { setModal, handleClose } = useModal();

  const openValidatorModals = () => {
    setModal(<MaturityModal form={form} handleClose={handleClose} />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: true,
    });
  };

  return (
    <Box mt="1rem" mb="2xl">
      <Typography
        variant="extraSmall"
        textTransform="uppercase"
        color="onSurface"
        opacity={0.6}
      >
        {t('lst.maturitySelector.title')}
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
        height="4rem"
      >
        <Box display="flex" alignItems="center" gap="0.75rem">
          <Typography variant="medium">
            {isEmpty(form.getValues('maturity.date'))
              ? 'DD/MM/YYYY'
              : form.getValues('maturity.date')}
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
      {!isEmpty(form.getValues('maturity.date')) && (
        <Typography
          px="l"
          pt="0.25rem"
          variant="small"
          fontSize="0.75rem"
          color="onSurfaceVariant"
        >
          {t('lst.maturitySelector.daysLeft')}:{' '}
          {form.getValues('maturity.daysLeft')}
        </Typography>
      )}
    </Box>
  );
};

export default SelectMaturityDate;
