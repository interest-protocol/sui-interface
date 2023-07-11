import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import { ModalProvider } from '@/context/modal';
import { NextPageDefaultProps } from '@/interface';
import EarnDetails from '@/views/dapp/v2/earn-details';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: EarnDetails,
});

interface EarnDetailsPageProps extends NextPageDefaultProps {
  objectId: string;
}

const EarnDetailsPage: NextPage<EarnDetailsPageProps> = ({
  objectId,
  pageTitle,
}) => (
  <>
    <SEO pageTitle={pageTitle} />
    <ModalProvider newDesign>
      <Web3Manager>
        <EarnDetails objectId={objectId} />
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

export default EarnDetailsPage;
