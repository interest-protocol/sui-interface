import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { mergeAll } from 'ramda';
import { useForm } from 'react-hook-form';

import { LoadingPage } from '@/components';
import { ModalProvider } from '@/context/modal';
import { withObjectIdGuard } from '@/HOC';
import { NextPageDefaultProps } from '@/interface';
import DEXPoolDetailsView from '@/views/dapp/dex-pool-details';

const Web3Manager = dynamic(() => import('@/components/web3-manager'), {
  ssr: false,
  loading: LoadingPage,
});

const Layout = dynamic(() => import('@/components/layout'), {
  ssr: false,
  loading: LoadingPage,
});

interface DEXPoolDetailsPageProps extends NextPageDefaultProps {
  objectId: string;
}

const DEXPoolDetailsPage: NextPage<DEXPoolDetailsPageProps> = ({
  objectId,
  pageTitle,
}) => {
  const formAddLiquidity = useForm({
    defaultValues: {
      token0Amount: '0',
      token1Amount: '0',
      error: '',
      token0InputLocked: false,
      token1InputLocked: false,
    },
  });

  const formRemoveLiquidity = useForm({
    defaultValues: {
      lpAmount: '0',
    },
  });

  return (
    <ModalProvider>
      <Web3Manager>
        <Layout pageTitle={pageTitle}>
          <DEXPoolDetailsView
            objectId={objectId}
            formAddLiquidity={formAddLiquidity}
            formRemoveLiquidity={formRemoveLiquidity}
          />
        </Layout>
      </Web3Manager>
    </ModalProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, dexPoolPairMessages, connectWalletMessages] =
    await Promise.all([
      import(`../../../../assets/messages/common/${locale}.json`),
      import(`../../../../assets/messages/dex/pool/details/${locale}.json`),
      import(`../../../../assets/messages/connect-wallet/${locale}.json`),
    ]);

  const messages = mergeAll([
    commonMessages.default,
    dexPoolPairMessages.default,
    connectWalletMessages.default,
  ]);

  return {
    props: {
      messages,
      pageTitle: 'dexPoolPair.pageTitle',
      now: Date.now(),
    },
  };
};

export default withObjectIdGuard(DEXPoolDetailsPage);
