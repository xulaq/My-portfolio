import Footer from '../global/Footer';
import Head from 'next/head';
import MobileNavbar from '../global/MobileNavbar';
import Navbar from '../global/Navbar';
import React, { ReactChildren, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import LanguageToggle from '../global/Translate';
import ScrollToTopButton from '../global/ScrollToTop';
function Page({ currentPage, meta: { title, desc }, children }: PageProps) {
  const pageTitle = `${
    currentPage === 'Home'
      ? 'Abderrahmane CHIKH '
      : `${currentPage} - Abderrahmane.io`
  }`;

  // const { dark } = JSON.parse(getLocalStorageItem());

  const [isDark, setIsDark] = useState(
    // typeof window !== "undefined"
    //   ? JSON.parse(localStorage.darkMode).dark
    //   : false || false
    false
  );

  useEffect(() => {
    if (localStorage.darkMode) {
      const data = JSON.parse(localStorage.darkMode).dark;
      setIsDark(data);
    } else {
      setIsDark(false);
    }
  }, []);
  return (
    <div
      className="w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible"
      style={{ maxWidth: '1200px' }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <body className={`${isDark ? 'bg-bg dark' : ''}`} />
      </Helmet>
      <Head>
        <title>{pageTitle}</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />
        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abdelali-ichou.vercel.app" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content="/static/logos/abdo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://braydentw.io/" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content="/static/logos/abdo.png"></meta>
        <meta property="facebook:card" content="summary_large_image" />
        <meta property="facebook:url" content="https://braydentw.io/" />
        <meta property="facebook:title" content={pageTitle} />
        <meta property="facebook:description" content={desc} />
        <meta property="facebook:image" content="/static/logos/abdo.png"></meta>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KC3CN7V');`,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
          `,
          }}
        />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KC3CN7V"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>

      <main className="p-5 w-full flex-1 " id="top">
        <div className="hidden sm:block z-100">
          <Navbar
            isDark={isDark}
            setIsDark={setIsDark}
            currentPage={currentPage}
          />
        </div>
        <div className="-m-5 block sm:hidden z-100">
          <MobileNavbar isDark={isDark} setIsDark={setIsDark} />
        </div>
        {children}
      </main>
      <ScrollToTopButton />
      <LanguageToggle />
      <Footer />
    </div>
  );
}

export default Page;

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc: string;
  };
  children?: JSX.Element | JSX.Element[];
};
