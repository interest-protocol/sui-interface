import { Head, Html, Main, NextScript } from 'next/document';
import { ReactNode } from 'react';

const Document = (): ReactNode => (
  <Html lang="en">
    <Head>
      <link href="https://fonts.googleapis.com" />
      <link href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body id="body">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
