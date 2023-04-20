import { GetStaticProps } from 'next';
import { mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import { NextPageWithProps } from '@/interface';
import Home from '@/views/institutional/home';

const HomePage: NextPageWithProps = ({ pageTitle }) => (
  <>
    <SEO pageTitle={pageTitle} />
    <Home />
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, landingPageMessages] = await Promise.all([
    import(`../assets/messages/common/${locale}.json`),
    import(`../assets/messages/landing-page/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    landingPageMessages.default
  );
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'landingPage.metadata.title',
    },
  };
};

export default HomePage;
