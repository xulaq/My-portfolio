import Link from 'next/link';
import React from 'react';
import { routes } from '@/data/global';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useRouter } from 'next/router';

function Navbar({ currentPage, isDark, setIsDark }) {
  const switchMode = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify({ dark: !isDark }));
    }
    setIsDark(!isDark);
  };
  const { locale, locales, push, asPath } = useRouter();
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between dark:text-white text-black">
      <li className="list-none font-bold text-lg cursor-pointer">
        <Link href="/">
          <span className="font-black text-xl flex items-center">
            <img
              className="mr-2 transform rounded-full hover:rotate-360 hover:scale-75 transition-transform duration-500"
              src="/static/logos/abdo.png"
              width="60"
            />
            {'Abderrahmane CHIKH'.split('').map((letter, index) => {
              if (letter === ' ') return <span key={index} className="mx-1"> </span>;
              return (
                <span
                  key={index}
                  className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim"
                >
                  {letter}
                </span>
              );
            })}
          </span>
        </Link>
      </li>
      <ul className="flex items-center space-x-10 ">
        <div className="flex items-center gap-2">
          <button
            onClick={switchMode}
            title={locale === 'fr' ? (isDark ? 'Mode Sombre' : 'Mode Clair') : (isDark ? 'Dark Mode' : 'Light Mode')}
            className={`
          w-11
          h-5 
        rounded-full 
        bg-gray-400 
        dark:bg-gray-600 
        relative 
        transition-colors 
        duration-500 
        ease-in
   
        focus:border-transparent ${isDark ? 'dark' : ''}`}
          >
            <div
              id="toggle1"
              className=" 
            rounded-full 
            w-5 h-[20px] 
            bg-fun-pink
            dark:bg-fun-pink
            relative 
            ml-0 
            dark:ml-6 
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
            flex justify-center items-center"
            >
              {isDark ? (
                <BsMoon className="text-x text-white" />
              ) : (
                <BsSun className="text-x text-black" />
              )}
            </div>
          </button>

          {/*    <Link href={router.asPath} locale="en">
        English
      </Link>
      <Link href={router.asPath} locale="fr">
        Français
      </Link> */}

          {/*  */}
        </div>
        {/* <button
          onClick={switchLanguage}
          title="Toggle Theme2"
          className={`
          w-11
          h-5 
        rounded-full 
        bg-gray-400 
        dark:bg-gray-600 
        relative 
        transition-colors 
        duration-500 
        ease-in
        focus:border-transparent ${isDark ? 'dark' : ''}`}
        >
          <div
            id="toggle2"
            className=" 
            rounded-full 
            w-5 h-[20px] 
            bg-fun-pink
            dark:bg-fun-pink
            relative 
            ml-0 
            dark:ml-6 
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
            flex justify-center items-center
            "
          >
            {locale === 'fr' ? (
              <img src="/static/logos/fr.png" alt="" />
            ) : (
              <img src="/static/logos/en.png" alt="" />
            )}
          </div>
        </button> */}

        {routes.map((item, index) => {
          return (
            <li
              key={index}
              className={`list-none  ${
                currentPage === item.title
                  ? 'opacity-100'
                  : 'opacity-40 hover:opacity-100 transition-opacity'
              }`}
            >
              <Link href={item.path}>
                {locale === 'fr' ? item.titleFr : item.title}
              </Link>
            </li>
          );
        })}
        <li
          className={`list-none  ${
            currentPage === 'contact'
              ? 'opacity-100'
              : 'opacity-40 hover:opacity-100 transition-opacity'
          }`}
        ></li>
      </ul>

      {/* {[...locales].sort().map((locale) => {
        return (
          <Link key={locale} href="/" locale={locale}>
            {locale}
          </Link>
        );
      })} */}
    </nav>
  );
}

export default Navbar;
