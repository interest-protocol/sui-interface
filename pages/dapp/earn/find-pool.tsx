import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import { ModalProvider } from '@/context/modal';
import { NextPageWithProps } from '@/interface';
import EarnFindPool from '@/views/dapp/v2/earn-pool/find-pool';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
});

const EarnDetailsPage: NextPageWithProps = ({ pageTitle }) => (
  <>
    <SEO pageTitle={pageTitle} />
    <ModalProvider newDesign>
      <Web3Manager>
        <EarnFindPool />
      </Web3Manager>
    </ModalProvider>
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, earnFindMessages] = await Promise.all([
    import(`../../../assets/messages/common/${locale}.json`),
    import(`../../../assets/messages/earn/find/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    earnFindMessages.default
  );
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'earnFindPool.metadata.title',
    },
  };
};

export default EarnDetailsPage;
