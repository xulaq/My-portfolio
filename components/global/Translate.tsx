import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const LanguageToggle = () => {
  const { locale, locales, push, asPath } = useRouter();
  const router = useRouter();

  const [isToggled, setToggled] = useState(false);

  // Define the rotation animation
  const { transform } = useSpring({
    transform: isToggled ? 'rotate(180deg)' : 'rotate(0deg)',
  });

  const toggleButton = () => {
    setToggled(!isToggled);
  };

  function switchLanguage(l) {
    router.push(asPath, undefined, { locale: l });
  }

  return (
    <div className="fixed bottom-2 left-2 flex flex-col justify-center items-center">
      <div
        className={`duration-100 flex flex-col ${
          isToggled ? '' : 'translate-y-48'
        }`}
      >
        <button
          className="hover:scale-110 duration-100"
          onClick={() => {
            switchLanguage('en');
            setToggled(false);
          }}
        >
          <img src="/static/logos/en.png" alt="" />
        </button>
        <button
          className="hover:scale-110 duration-100"
          onClick={() => {
            switchLanguage('fr');
            setToggled(false);
          }}
        >
          <img src="/static/logos/fr.png" alt="" />
        </button>
      </div>
      <div className="relative">
        <button
          onClick={toggleButton}
          className="rounded-full bg-white p-3 w-16 h-16 z-20 border-gray-500 border-2  flex items-center justify-center "
        >
          <animated.span
            style={{
              transform,
            }}
            className="w-10 h-10 absolute"
          >
            {isToggled ? (
              <img src="/static/icons/close.svg" />
            ) : (
              <img src="/static/icons/translate.svg" />
            )}
          </animated.span>
        </button>
        <img
          className="absolute -bottom-1 -left-1 w-7 h-7"
          src={
            locale === 'fr' ? '/static/logos/fr.png' : '/static/logos/en.png'
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default LanguageToggle;
