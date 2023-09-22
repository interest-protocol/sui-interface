import { Box, Checkbox, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { useNetwork } from '@/hooks';
import { capitalize } from '@/utils';

import Switcher from '../switch';
import PreviewButton from './preview-button';
import SelectValidators from './select-validators';
import { YourInfoContainerProps } from './your-info.types';

const YourInfoContainer: FC<YourInfoContainerProps> = ({
  form,
  handleChangeStake,
  Overview,
  AmountField,
  openStakeModal,
  isStakeTabStake: isStake,
}) => {
  const t = useTranslations();

  const [selectValidator, setSelectValidator] = useState(false);
  const { network } = useNetwork();

  const handleSelectValidator = () => {
    setSelectValidator(not);
  };

  return (
    <Box
      p="2xl"
      display="flex"
      borderRadius="0.5rem"
      flexDirection="column"
      bg="surface.container"
    >
      <Box mb="2xl">
        <Typography
          variant="medium"
          textTransform="uppercase"
          fontWeight="700"
          color="inverseSurface"
          mb="2xl"
        >
          {t('lst.stakingForm.title')}
        </Typography>
        <Switcher
          defaultValue={+isStake}
          options={[
            {
              value: +true,
              onSelect: handleChangeStake,
              displayValue: capitalize(t('common.stake', { isLoading: 0 })),
            },
            {
              value: +false,
              onSelect: handleChangeStake,
              displayValue: capitalize(t('common.unstake', { isLoading: 0 })),
            },
          ]}
        />
      </Box>
      {AmountField}
      {isStake && (
        <Checkbox
          label={capitalize(t('lst.selectValidator'))}
          onClick={handleSelectValidator}
          defaultValue={selectValidator}
        />
      )}
      {isStake && selectValidator && (
        <SelectValidators form={form} isStake={isStake} />
      )}
      <PreviewButton
        isStake={isStake}
        lstForm={form}
        openModal={openStakeModal}
        network={network}
      />
      {Overview}
    </Box>
  );
};

export default YourInfoContainer;
