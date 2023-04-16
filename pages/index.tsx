import { GetStaticProps } from 'next';
import { mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import { NextPageWithProps } from '@/interface';
import Home from '@/views/home';

const HomePage: NextPageWithProps = ({ pageTitle }) => (
  <>
    <SEO pageTitle={pageTitle} />
    <Home />
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, dexMessages] = await Promise.all([
    import(`../assets/messages/common/${locale}.json`),
    import(`../assets/messages/landing-page/${locale}.json`),
  ]);

  const messages = mergeDeepRight(commonMessages.default, dexMessages.default);
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'landingPage.metadata.title',
    },
  };
};

export default HomePage;
