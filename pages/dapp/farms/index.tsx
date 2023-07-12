import { Network } from '@interest-protocol/sui-amm-sdk';
import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Error from 'next/error';
import { mergeDeepRight } from 'ramda';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { LoadingPage } from '@/components';
import { useNetwork } from '@/hooks';
import { NextPageWithProps } from '@/interface';
import Farms from '@/views/dapp/farms';
import {
  FarmSortByFilter,
  FarmTypeFilter,
} from '@/views/dapp/farms/farms.types';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const Layout = dynamic(() => import('@/components/layout'), {
  ssr: false,
  loading: LoadingPage,
});

const FarmsPage: NextPageWithProps = ({ pageTitle }) => {
  const { network } = useNetwork();
  const [isDesktop, setDesktop] = useState(false);

  const form = useForm({
    defaultValues: {
      search: '',
      sortBy: FarmSortByFilter.Default,
      typeFilter: FarmTypeFilter.All,
      onlyFinished: false,
      onlyStaked: false,
    },
  });

  if (network === Network.MAINNET)
    return (
      <Web3Manager>
        <Layout pageTitle="common.error">
          <Error statusCode={404} />
        </Layout>
      </Web3Manager>
    );

  return (
    <Web3Manager>
      <Layout pageTitle={pageTitle}>
        <Farms
          form={form}
          desktopState={{ isDesktop: isDesktop, setDesktop: setDesktop }}
        />
      </Layout>
    </Web3Manager>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, farmsMessages] = await Promise.all([
    import(`../../../assets/messages/common/${locale}.json`),
    import(`../../../assets/messages/farms/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    farmsMessages.default
  );
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'farms.pageTitle',
    },
  };
};

export default FarmsPage;
