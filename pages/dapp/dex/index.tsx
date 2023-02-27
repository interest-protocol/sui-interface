import { GetStaticProps, NextPage } from 'next';
import { mergeDeepRight } from 'ramda';
import { useEffect } from 'react';

import { provider } from '@/utils';
import DEX from '@/views/dapp/dex';

const DexPage: NextPage = () => {
  useEffect(() => {
    provider
      .getDynamicFields('0x08a767c20904eed17a0ea12b0e037ffee7750147')
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
