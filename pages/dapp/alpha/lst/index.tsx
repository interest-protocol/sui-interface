import { Network } from '@interest-protocol/sui-amm-sdk';
import { SUI_TYPE_ARG } from '@mysten/sui.js';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { always, mergeDeepRight } from 'ramda';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import LSTLayout from 'views/dapp/v2/lst';

import { SEO } from '@/components';
import { DEFAULT_VALIDATOR } from '@/constants/lst';
import { useNetwork } from '@/hooks';
import { NextPageWithProps } from '@/interface';
import { formatDollars } from '@/utils';
import { StakeForm } from '@/views/dapp/v2/lst/lst.types';
import Staked from '@/views/dapp/v2/lst/staked';

const LoadingPage: FC = always(<LSTLayout loading={true} />);

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const LSTPage: NextPageWithProps = ({ pageTitle }) => {
  const { network } = useNetwork();
  const stakeForm = useForm<StakeForm>({
    defaultValues: {
      amount: '0',
      coinType: SUI_TYPE_ARG,
      amountUSD: formatDollars(0),
      validator: DEFAULT_VALIDATOR[network],
    },
  });

  useEffect(() => {
    stakeForm.setValue('coinType', SUI_TYPE_ARG);
    stakeForm.setValue('amount', '0');
    stakeForm.setValue('validator', DEFAULT_VALIDATOR[network]);
  }, [network]);

  if (network !== Network.TESTNET) return <LoadingPage />;

  return (
    <Web3Manager>
      <SEO pageTitle={pageTitle} />
      <LSTLayout>
        <Staked form={stakeForm} />
      </LSTLayout>
    </Web3Manager>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, LstMessages] = await Promise.all([
    import(`../../../../assets/messages/common/${locale}.json`),
    import(`../../../../assets/messages/lst/${locale}.json`),
  ]);

  const messages = mergeDeepRight(commonMessages.default, LstMessages.default);

  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'lst.metadata.title',
    },
  };
};

export default LSTPage;
