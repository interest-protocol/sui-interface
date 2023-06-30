import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import NotFoundPage from 'pages/404';
import { mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import { NextPageWithProps } from '@/interface';
import { Layout } from '@/views/dapp/v2/components';
import Faucet from '@/views/dapp/v2/faucet';

const FaucetPage: NextPageWithProps = ({ now, messages, pageTitle }) => {
  const t = useTranslations();
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production')
    return (
      <NotFoundPage messages={messages} now={now} pageTitle="common.error" />
    );

  return (
    <Layout dashboard titlePage={t('faucet.metadata.title')}>
      <SEO pageTitle={pageTitle} />
      <Faucet />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, faucetMessages] = await Promise.all([
    import(`../../../../assets/messages/common/${locale}.json`),
    import(`../../../../assets/messages/faucet/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    faucetMessages.default
  );

  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'lending.metadata.title',
    },
  };
};

export default FaucetPage;
