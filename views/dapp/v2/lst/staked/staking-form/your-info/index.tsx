import { FC } from 'react';

import { useModal, useNetwork, useProvider, useWeb3 } from '@/hooks';
import { useLstData } from '@/views/dapp/v2/lst/lst.hooks';
import { YourInfoProps } from '@/views/dapp/v2/lst/staked/staking-form/your-info/your-info.types';

import YourInfoContainer from '../../../components/your-info-container';
import AmountField from './amount-field';
import Overview from './overview';
import { StakePreviewModal, UnstakePreviewModal } from './preview-modal';

const YourInfo: FC<YourInfoProps> = ({ form, isStake, handleChangeStake }) => {
  const { provider } = useProvider();
  const { network } = useNetwork();
  const { coinsMap, account } = useWeb3();
  const { iSuiExchangeRate, suiCoinInfo, validatorStakeRecord, mutate } =
    useLstData();

  const { setModal, handleClose } = useModal();

  const openStakeModal = () => {
    setModal(
      isStake ? (
        <StakePreviewModal
          lstForm={form}
          mutate={mutate}
          network={network}
          account={account}
          provider={provider}
          coinsMap={coinsMap}
          handleClose={handleClose}
          suiUsdPrice={suiCoinInfo?.price || 0}
        />
      ) : (
        <UnstakePreviewModal
          lstForm={form}
          mutate={mutate}
          network={network}
          account={account}
          provider={provider}
          coinsMap={coinsMap}
          handleClose={handleClose}
          suiUsdPrice={suiCoinInfo?.price || 0}
          validatorStakeRecord={validatorStakeRecord}
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
    <YourInfoContainer
      form={form}
      handleChangeStake={handleChangeStake}
      isStakeTabStake={isStake}
      AmountField={
        <AmountField
          form={form}
          isStake={isStake}
          exchangeRate={iSuiExchangeRate}
        />
      }
      openStakeModal={openStakeModal}
      Overview={<Overview form={form} isStake={isStake} />}
    />
  );
};

export default YourInfo;
