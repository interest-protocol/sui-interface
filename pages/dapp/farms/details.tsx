import { Network } from '@mysten/sui.js';
import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight, pathOr } from 'ramda';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { LoadingPage } from '@/components';
import { FARMS_RECORD, StakeState } from '@/constants';
import { withTypeGuard } from '@/HOC';
import { NextPageDefaultProps } from '@/interface';
import FarmDetails from '@/views/dapp/farm-details';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const Layout = dynamic(() => import('@/components/layout'), {
  ssr: false,
  loading: LoadingPage,
});

interface FarmDetailsPageProps extends NextPageDefaultProps {
  type: string;
}

const FarmDetailsPage: NextPage<FarmDetailsPageProps> = ({
  type,
  pageTitle,
}) => {
  const farmMetadata = pathOr(null, [Network.DEVNET, type], FARMS_RECORD);

  const [modalState, setModalState] = useState({
    isOpen: false,
    state: StakeState.Stake,
  });

  const form = useForm({
    defaultValues: { amount: '0' },
  });

  if (!farmMetadata)
    return (
      <Web3Manager>
        <Layout pageTitle={pageTitle}>
          <div>error no farm data</div>
        </Layout>
      </Web3Manager>
    );

  return (
    <Web3Manager>
      <Layout pageTitle={pageTitle}>
        <FarmDetails
          modalState={modalState}
          setModalState={setModalState}
          farmMetadata={farmMetadata}
          form={form}
        />
      </Layout>
    </Web3Manager>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, farmDetailsMessages] = await Promise.all([
    import(`../../../assets/messages/common/${locale}.json`),
    import(`../../../assets/messages/farms/details/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    farmDetailsMessages.default
  );
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'farmsDetails.pageTitle',
    },
  };
};

export default withTypeGuard(FarmDetailsPage);
