import { FC, useEffect, useState } from 'react';

import { useModal, useNetwork, useProvider, useWeb3 } from '@/hooks';
import { useLstData } from '@/views/dapp/v2/lst/lst.hooks';

import YourInfoContainer from '../../../components/your-info-container';
import { DERIVATED_SUI_SYMBOL } from '../../../lst.types';
import AmountField from './amount-field';
import Overview from './overview';
import { StakePreviewModal, UnstakePreviewModal } from './preview-modal';
import { YourInfoProps } from './your-info.types';

const YourInfo: FC<YourInfoProps> = ({ form, handleChangeStake, isStake }) => {
  const [unstakeAmountType, setUnstakeAmountType] = useState<
    ReadonlyArray<DERIVATED_SUI_SYMBOL>
  >(['SUI']);

  const [changeTab, setChangeTab] = useState<number>(0);
  const { provider } = useProvider();
  const { network } = useNetwork();
  const { coinsMap, account } = useWeb3();
  const { iSuiExchangeRate, suiCoinInfo, validatorStakeRecord, mutate } =
    useLstData();

  const tabHandle = (tabIndex: number) => setChangeTab(tabIndex);

  useEffect(() => {
    setUnstakeAmountType(
      changeTab == 0
        ? ['iSui-PC', 'iSui-YN']
        : changeTab == 1
        ? ['iSui-PC']
        : ['iSui-YN']
    );
  }, [changeTab]);

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
          stakeTokenList={['SUI']}
          receiveTokenList={['iSui-YN', 'iSui-PC']}
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
          stakeTokenList={unstakeAmountType}
          receiveTokenList={['SUI']}
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
          tabIndex={changeTab}
          tabHandle={tabHandle}
          exchangeRate={iSuiExchangeRate}
          unstakeAmountType={unstakeAmountType}
        />
      }
      openStakeModal={openStakeModal}
      Overview={
        <Overview
          form={form}
          isStake={isStake}
          unstakeAmountType={unstakeAmountType}
        />
      }
      hasMaturity
    />
  );
};

export default YourInfo;
