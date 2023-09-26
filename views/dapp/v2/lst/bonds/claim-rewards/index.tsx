import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { isEmpty } from 'ramda';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';
import { noop } from 'swr/_internal';

import { useModal } from '@/hooks';

import BondsFormConfirmModal from '../components/modal/confirm-modal';
import BondsFormFailModal from '../components/modal/fail-modal';
import BondsFormLoadingModal from '../components/modal/loading-modal';
import TransactionSummaryContainer from '../components/transaction-summary';
import { AmountProps } from '../components/transaction-summary/amount/amount.type';
import { OverviewProps } from '../components/transaction-summary/overview/overview.type';
import { ValidatorDetailsProps } from '../components/transaction-summary/validator-details/validator-details.type';
import { ClaimRewardsProps } from './claim-rewards.types';
import BondsClaimRewardsMaturity from './maturity';
import NonRewards from './non-rewards';

const MATURITY_LIST = [
  {
    date: '30 • Dec • 2027',
    amount: '0.5532',
    id: '1',
  },
  {
    date: '31 • Dec • 2028',
    amount: '0.3433',
    id: '2',
  },
];

const BondsClaimRewards: FC<ClaimRewardsProps> = ({ hasRewards, form }) => {
  const t = useTranslations();
  const { setModal, handleClose } = useModal();
  const control = form.control;
  const maturity = useWatch({ control, name: 'maturity' });
  const amount = useWatch({ control, name: 'amount' });

  const IS_MATURITY_EMPTY = isEmpty(maturity.date);

  const handleSubmit = () => {
    openModal('loading');
    setTimeout(() => {
      openModal('success');
    }, 4000);
  };

  const handleClear = () => {
    form.setValue('maturity', { date: '', id: '' });
    form.setValue('amount', '0');
  };

  const openModal = (type: 'loading' | 'success' | 'error') => {
    setModal(
      type == 'loading' ? (
        <BondsFormLoadingModal handleClose={handleClose} />
      ) : type == 'error' ? (
        <BondsFormFailModal handleClose={handleClose} />
      ) : (
        <BondsFormConfirmModal handleClose={handleClose} onClick={noop} />
      ),
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  const AmountList: ReadonlyArray<AmountProps> = [
    {
      label: t('lst.claimnRewards.transactionSummary.receive'),
      fieldList: [
        {
          symbol: 'SUI',
          title: 'SUI',
        },
      ],
      value: amount,
    },
    {
      label: t('lst.claimnRewards.transactionSummary.redeem'),
      fieldList: [
        {
          symbol: 'iSui-YN',
          description: 'iSUIY',
          title: IS_MATURITY_EMPTY
            ? t('lst.maturity', { date: 'DD/MM/YYYY' })
            : maturity.date,
        },
      ],
      value: amount,
    },
  ];

  const OverviewData: OverviewProps = {
    title: t('lst.transactionOverview.title'),
    data: [
      {
        label: t('lst.claimnRewards.transactionSummary.depositFee'),
        value: '0.12',
      },
    ],
  };

  const ValidatorDetailsData: ValidatorDetailsProps = {
    name: 'Lugonodes',
    imageURL: 'https://static.lgns.xyz/logo.jpg',
    data: [
      {
        label: t(
          'lst.claimnRewards.transactionSummary.validatorDetails.ranking'
        ),
        value: '3',
        isRanking: true,
      },
      {
        label: t(
          'lst.claimnRewards.transactionSummary.validatorDetails.votingPower'
        ),
        value: '1.27%',
      },
      {
        label: t(
          'lst.claimnRewards.transactionSummary.validatorDetails.commision'
        ),
        value: '10%',
      },
      {
        label: 'APY',
        value: '8.02%',
      },
    ],
  };

  console.log(ValidatorDetailsData, '>>>>ValidatorDetailsData');

  return hasRewards ? (
    <NonRewards />
  ) : (
    <Box
      gap="l"
      flexDirection="column"
      gridTemplateColumns="3fr 2fr"
      display={['flex', 'flex', 'flex', 'grid']}
    >
      <BondsClaimRewardsMaturity form={form} maturityList={MATURITY_LIST} />
      <TransactionSummaryContainer
        amountList={AmountList}
        handleClear={handleClear}
        handleSubmit={handleSubmit}
        overviewData={OverviewData}
        disable={IS_MATURITY_EMPTY}
        submitText={t('lst.claimnRewards.title')}
      />
    </Box>
  );
};

export default BondsClaimRewards;
