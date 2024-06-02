import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { always, mergeDeepRight } from 'ramda';
import { FC } from 'react';

import { SEO } from '@/components';
import { NextPageWithProps } from '@/interface';
import LSTLayout from '@/views/dapp/v2/lst';
import ValidatorDetails from '@/views/dapp/v2/lst/validators/validator-details';

const LoadingPage: FC = always(<LSTLayout loading={true} />);

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const LSTValidatorsDetailsPage: NextPageWithProps = ({ pageTitle }) => {
  return (
    <Web3Manager>
      <SEO pageTitle={pageTitle} />
      <LSTLayout>
        <ValidatorDetails />
      </LSTLayout>
    </Web3Manager>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, LstMessages] = await Promise.all([
    import(`../../../../../assets/messages/common/${locale}.json`),
    import(`../../../../../assets/messages/lst/${locale}.json`),
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

export default LSTValidatorsDetailsPage;