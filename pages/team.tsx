import { GetStaticProps } from 'next';
import { mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import { NextPageWithProps } from '@/interface';
import TeamPage from '@/views/institutional/team';

const HomePage: NextPageWithProps = ({ pageTitle }) => (
  <>
    <SEO pageTitle={pageTitle} />
    <TeamPage />
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, teamMessages] = await Promise.all([
    import(`../assets/messages/common/${locale}.json`),
    import(`../assets/messages/landing-page/${locale}.json`),
  ]);

  const messages = mergeDeepRight(commonMessages.default, teamMessages.default);
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'team.metadata.title',
    },
  };
};

export default HomePage;
