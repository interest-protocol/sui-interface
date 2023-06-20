import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import { NextPageWithProps } from '@/interface';
import CreateToken from '@/views/dapp/v2/create-token';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: CreateToken,
});

const CreateTokenPage: NextPageWithProps = ({ pageTitle }) => (
  <>
    <SEO pageTitle={pageTitle} />
    <Web3Manager>
      <CreateToken />
    </Web3Manager>
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, dexMessages] = await Promise.all([
    import(`../../../assets/messages/common/${locale}.json`),
    import(`../../../assets/messages/create-token/${locale}.json`),
  ]);

  const messages = mergeDeepRight(commonMessages.default, dexMessages.default);
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'createToken.pageTitle',
    },
  };
};

export default CreateTokenPage;
