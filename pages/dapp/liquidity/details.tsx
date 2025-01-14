import { Network } from '@interest-protocol/sui-amm-sdk';
import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Error from 'next/error';
import { useTranslations } from 'next-intl';
import { mergeAll, pathOr } from 'ramda';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { StakeState } from '@/constants';
import { FARMS_RECORD } from '@/constants/liquidity-farms.constants';
import { ModalProvider } from '@/context/modal';
import { Box, Typography } from '@/elements';
import { withTypeGuard } from '@/HOC';
import { useNetwork } from '@/hooks';
import { NextPageDefaultProps } from '@/interface';
import { TimesSVG } from '@/svg';
import LoadingPage from '@/views/dapp/components/loading-page';
import FarmDetails from '@/views/dapp/liquidity-farms-details';

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
  const { network } = useNetwork();
  const farmMetadata = pathOr(null, [network, type], FARMS_RECORD);

  const [modalState, setModalState] = useState({
    isOpen: false,
    state: StakeState.Stake,
  });

  const form = useForm({
    defaultValues: { amount: '0' },
  });

  const t = useTranslations();

  if (network !== Network.MAINNET)
    return (
      <Web3Manager>
        <Layout pageTitle="common.error">
          <Error statusCode={404} />
        </Layout>
      </Web3Manager>
    );

  if (!farmMetadata)
    return (
      <Web3Manager>
        <Layout pageTitle={pageTitle}>
          <Box
            my="XXXL"
            display="flex"
            alignItems="center"
            flexDirection="column"
            justifyContent="center"
          >
            <Box color="error">
              <TimesSVG width="10rem" maxHeight="10rem" maxWidth="10rem" />
            </Box>
            <Typography variant="normal">
              {t('farmsDetails.errors.farm')}
            </Typography>
          </Box>
        </Layout>
      </Web3Manager>
    );

  return (
    <ModalProvider>
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
    </ModalProvider>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, farmDetailsMessages] = await Promise.all([
    import(`../../../assets/messages/common/${locale}.json`),
    import(`../../../assets/messages/farms/details/${locale}.json`),
  ]);

  const messages = mergeAll([
    commonMessages.default,
    farmDetailsMessages.default,
  ]);
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'farmsDetails.pageTitle',
    },
  };
};

export default withTypeGuard(FarmDetailsPage);
