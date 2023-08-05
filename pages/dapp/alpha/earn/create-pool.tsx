import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import { ModalProvider } from '@/context/modal';
import { NextPageWithProps } from '@/interface';
import EarnCreatePool from '@/views/dapp/v2/earn-pool/create-pool';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
});

const EarnDetailsPage: NextPageWithProps = ({ pageTitle }) => (
  <>
    <SEO pageTitle={pageTitle} />
    <ModalProvider newDesign>
      <Web3Manager>
        <EarnCreatePool />
      </Web3Manager>
    </ModalProvider>
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, earnCreateMessages] = await Promise.all([
    import(`../../../../assets/messages/common/${locale}.json`),
    import(`../../../../assets/messages/earn/create/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    earnCreateMessages.default
  );
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'earnCreatePool.metadata.title',
    },
  };
};

export default EarnDetailsPage;
