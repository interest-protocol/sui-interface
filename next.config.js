module.exports = {
  async redirects() {
    return [
      {
        source: '/dapp',
        destination: '/dapp/swap',
        permanent: true,
      },
    ];
  },
  experimental: {
    newNextLinkBehavior: true,
  },
  i18n: {
    locales: ['en-US', 'pt-PT', 'pt-BR', 'es-ES'],
    defaultLocale: 'en-US',
    localeDetection: true,
  },
};
