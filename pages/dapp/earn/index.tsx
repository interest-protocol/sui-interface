import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import { ModalProvider } from '@/context/modal';
import { NextPageWithProps } from '@/interface';
import Earn from '@/views/dapp/v2/earn';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: Earn,
});

const EarnPage: NextPageWithProps = ({ pageTitle }) => (
  <>
    <SEO pageTitle={pageTitle} />
    <ModalProvider newDesign>
      <Web3Manager>
        <Earn />
      </Web3Manager>
    </ModalProvider>
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, dexMessages] = await Promise.all([
    import(`../../../assets/messages/common/${locale}.json`),
    import(`../../../assets/messages/earn/${locale}.json`),
  ]);

  const messages = mergeDeepRight(commonMessages.default, dexMessages.default);
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'earn.metadata.title',
    },
  };
};

export default EarnPage;
