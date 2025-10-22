import 'tailwindcss/tailwind.css';
import '@/styles/main.css';

import { AppProps } from 'next/app';
// import { appWithI18Next } from 'ni18n';
// import { ni18nConfig } from '../ni18n.config';
import { IntlProvider } from 'react-intl';
import en from '../public/locales/en.json';
import fr from '../public//locales/fr.json';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
const messages = { en, fr };

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('preline');
  }, []);
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

// export default appWithI18Next(App, ni18nConfig);
