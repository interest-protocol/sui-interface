import { GetStaticProps, NextPage } from 'next';
import { mergeDeepRight } from 'ramda';
import { useEffect } from 'react';

import { provider } from '@/utils';
import DEX from '@/views/dapp/dex';

const DexPage: NextPage = () => {
  useEffect(() => {
    provider
      .getObject('0x06327d0e5a3c36e1bbcd0cfb8cd66c1e5df50278')
      .then((x) => console.log(x));
  }, []);

  return <DEX />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [commonMessages, dexMessages] = await Promise.all([
    import(`../../../assets/messages/common/${locale}.json`),
    import(`../../../assets/messages/dex/swap/${locale}.json`),
  ]);

  const messages = mergeDeepRight(commonMessages.default, dexMessages.default);
  return {
    props: {
      messages,
      now: Date.now(),
      pageTitle: 'dexSwap.pageTitle',
    },
  };
};

export default DexPage;
