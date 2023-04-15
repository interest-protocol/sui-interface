module.exports = {
  async redirects() {
    return [
      {
        source: '/dapp',
        destination: '/dapp/dex',
        permanent: true,
      },
    ];
  },
  experimental: {
    newNextLinkBehavior: true,
  },
  i18n: {
    locales: ['en-US', 'pt-PT', 'pt-BR'],
    defaultLocale: 'en-US',
    localeDetection: true,
  },
};
