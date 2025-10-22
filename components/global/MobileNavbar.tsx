import { useEffect, useState } from 'react';

import Link from 'next/link';
import { routes } from '@/data/global';
import useDelayedRender from 'use-delayed-render';
import { Link as ScrollLink } from 'react-scroll';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useRouter } from 'next/router';

export default function MobileNavbar({ isDark, setIsDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  );

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = '';
    };
  }, []);

  const switchMode = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify({ dark: !isDark }));
    }
    setIsDark(!isDark);
  };
  const { locale } = useRouter();
  return (
    <nav className="text-black dark:text-white">
      <div
        className={`w-full justify-between flex items-center ${
          isMenuRendered && 'dark:bg-bg'
        } p-5`}
        style={{ zIndex: 101 }}
      >
        <li className="list-none font-bold text-lg">
          <Link href="/">
            <div className="flex items-center text-sm font-bold ">
              <img
                className="mr-3 w-14 rounded-full"
                src="/static/logos/abdo.png"
                width="160"
              />
              <span>Abderrahmane</span>
            </div>
          </Link>
        </li>

        <div className="flex items-center mr-3">
          <button
            onClick={switchMode}
            title="Appearance"
            className={`
          w-11
          h-5 
          ml-20
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
              id="toggle"
              className=" 
            rounded-full 
            w-5 h-[20px] 
            bg-fun-pink
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
              {isDark ? (
                <BsMoon className="text-x text-white" />
              ) : (
                <BsSun className="text-x text-white" />
              )}
            </div>
          </button>
        </div>
        <button
          className={`${
            !isMenuOpen ? 'text-black  dark:text-white' : ''
          } burger visible md:hidden`}
          aria-label="Toggle menu"
          type="button"
          onClick={toggleMenu}
        >
          <MenuIcon data-hide={isMenuOpen} isDark={isDark} />
          <CrossIcon data-hide={!isMenuOpen} isDark={isDark} />
        </button>
      </div>
      {isMenuMounted && (
        <ul
          className={`menu flex flex-col absolute dark:bg-bg dark:text-gray-100 text-black bg-white 
            ${isMenuRendered && 'menuRendered'}`}
        >
          {routes.map((item, index) => {
            return (
              <li
                className="border-b border-gray-900  text-sm font-semibold"
                style={{ transitionDelay: `${150 + index * 25}ms` }}
              >
                <Link href={item.path}>
                  <a className="flex w-auto pb-4">
                    {locale === 'fr' ? item.titleFr : item.title}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}

function MenuIcon(props) {
  const { isDark, ...svgProps } = props;
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke={isDark ? 'white' : 'black'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...svgProps}
    >
      <path d="M2.5 7.5H17.5" />
      <path d="M2.5 12.5H17.5" />
    </svg>
  );
}

function CrossIcon(props) {
  const { isDark, ...svgProps } = props;
  return (
    <svg
      className="h-5 w-5 absolute text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke={isDark ? 'white' : 'black'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...svgProps}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
