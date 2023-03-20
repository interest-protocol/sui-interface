import { useTheme } from '@emotion/react';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Theme } from '@/design-system';
import { TTranslatedMessage } from '@/interface';
import { capitalize } from '@/utils';

const SEO: FC<{ pageTitle: string }> = ({ pageTitle }) => {
  const t = useTranslations();
  const { colors } = useTheme() as Theme;

  return (
    <Head>
      <meta name="theme-color" content={colors.foreground} />
      <meta charSet="utf-8" />
      <meta name="title" content="Interest Protocol" />
      <meta name="description" content={t('common.seoDescription')} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="Interest Protocol" />
      <meta property="og:site_name" content="Interest Protocol" />
      <meta property="og:description" content={t('common.seoDescription')} />
      <meta property="og:image" content="/android-chrome-256x256.png" />
      <meta
        property="og:image:secure_url"
        content="/android-chrome-256x256.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="256" />
      <meta property="og:image:height" content="256" />
      <meta property="og:image:alt" content="Interest Protocol" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Interest Protocol" />
      <meta name="twitter:site" content="https://interestprotocol.com" />
      <meta name="twitter:image" content="/android-chrome-256x256.png" />
      <meta name="twitter:description" content={t('common.seoDescription')} />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <title>
        {pageTitle && `${capitalize(t(pageTitle as TTranslatedMessage))} | `}
        Interest Protocol
      </title>
    </Head>
  );
};

export default SEO;
