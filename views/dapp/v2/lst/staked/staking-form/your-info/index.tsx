import { Box, Checkbox, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC, useState } from 'react';

import { useModal, useNetwork, useProvider, useWeb3 } from '@/hooks';
import { capitalize } from '@/utils';
import { useLstData } from '@/views/dapp/v2/lst/lst.hooks';
import { YourInfoProps } from '@/views/dapp/v2/lst/staked/staking-form/your-info/your-info.types';

import Switcher from '../../../components/switch';
import AmountField from './amount-field';
import Overview from './overview';
import PreviewButton from './preview-button';
import { StakePreviewModal, UnstakePreviewModal } from './preview-modal';
import SelectValidators from './select-validators';

const YourInfo: FC<YourInfoProps> = ({
  form,
  setStakeTabState,
  isStakeTabStake: isStake,
}) => {
  const t = useTranslations();

  const [selectValidator, setSelectValidator] = useState(false);
  const { provider } = useProvider();
  const { network } = useNetwork();
  const { coinsMap, account } = useWeb3();
  const { iSuiExchangeRate, suiCoinInfo, mutate } = useLstData();
  const handleSelect = () => {
    form.reset();
    setStakeTabState(not(isStake));
  };

  const { setModal, handleClose } = useModal();

  const handleSelectValidator = () => {
    setSelectValidator(not);
  };

  const openStakeModal = () => {
    setModal(
      isStake ? (
        <StakePreviewModal
          provider={provider}
          handleClose={handleClose}
          lstForm={form}
          network={network}
          coinsMap={coinsMap}
          account={account}
          suiUsdPrice={suiCoinInfo?.price || 0}
          mutate={mutate}
        />
      ) : (
        <UnstakePreviewModal
          provider={provider}
          handleClose={handleClose}
          lstForm={form}
          network={network}
          coinsMap={coinsMap}
          account={account}
          suiUsdPrice={suiCoinInfo?.price || 0}
          mutate={mutate}
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
              onSelect: handleSelect,
              displayValue: capitalize(t('common.stake', { isLoading: 0 })),
            },
            {
              value: +false,
              onSelect: handleSelect,
              displayValue: capitalize(t('common.unstake', { isLoading: 0 })),
            },
          ]}
        />
      </Box>
      <Typography variant="extraSmall" color="onSurface" display="none">
        {capitalize(
          t(`common.${isStake ? 'stake' : 'unstake'}`, { isLoading: 0 })
        )}
      </Typography>
      <AmountField
        form={form}
        isStake={isStake}
        exchangeRate={iSuiExchangeRate}
      />
      <Checkbox
        label={capitalize(t('lst.selectValidator'))}
        onClick={handleSelectValidator}
        defaultValue={selectValidator}
      />
      {selectValidator && <SelectValidators />}
      <PreviewButton
        isStake={isStake}
        lstForm={form}
        openModal={openStakeModal}
        network={network}
      />
      <Overview form={form} isStake={isStake} />
    </Box>
  );
};

export default YourInfo;
