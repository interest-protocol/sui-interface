import { GetStaticProps } from 'next';
import { mergeDeepRight } from 'ramda';

import { SEO } from '@/components';
import { NextPageWithProps } from '@/interface';
import Liquidity from '@/views/institutional/liquidity';

const LiquidityCampaign: NextPageWithProps = ({ pageTitle }) => (
  <>
    <SEO pageTitle={pageTitle} />
    <Liquidity />
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, landingPageMessages] = await Promise.all([
    import(`../../assets/messages/common/${locale}.json`),
    import(`../../assets/messages/liquidity-campaign/${locale}.json`),
  ]);

  const messages = mergeDeepRight(
    commonMessages.default,
    landingPageMessages.default
  );
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'liquidity.metadata.title',
    },
  };
};

export default LiquidityCampaign;
