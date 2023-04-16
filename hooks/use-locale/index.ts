import { useRouter } from 'next/router';

import { Locales, LocalesEnum } from '@/constants/locale';

const setCookie = (locale: string) => {
  document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000;`;
};

export const useLocale = () => {
  const { locale, push, asPath, locales, pathname, query } = useRouter();

  const changeLocale = async (locale: Locales) => {
    setCookie(locale);
    await push({ pathname, query }, asPath, {
      locale,
    });
  };

  return {
    changeLocale,
    currentLocale: (locale || LocalesEnum.EN) as Locales,
    locales: (locales || []) as ReadonlyArray<Locales>,
  };
};
