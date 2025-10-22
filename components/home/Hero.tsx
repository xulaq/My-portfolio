import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useIntl } from 'react-intl';
import { Link as ScrollLink } from 'react-scroll';
function Hero() {
  const intl = useIntl();
  const heroText1 = intl.formatMessage({ id: 'hero.text1' });
  const heroText2 = intl.formatMessage({ id: 'hero.text2' });
  const heroText3 = intl.formatMessage({ id: 'hero.text3' });
  const heroText4 = intl.formatMessage({ id: 'hero.text4' });
  const heroText5 = intl.formatMessage({ id: 'hero.text5' });
  const heroText6 = intl.formatMessage({ id: 'hero.text6' });
  const heroText7 = intl.formatMessage({ id: 'hero.text7' });
  const heroButton1 = intl.formatMessage({ id: 'hero.button1' });
  const heroButton2 = intl.formatMessage({ id: 'hero.button2' });
  const { locale, locales, push } = useRouter();

  return (
    <>
      <div
        className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
        style={{ maxWidth: '1200px' }}
      >
        {' '}
        <p className="mb-5 max-w-2xl lg:max-w-4xl  w-auto text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter heroShinyBg">
          {heroText1}{' '}
        </p>
        <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-10 font-bold heroShinyBg">
          {heroText2} &nbsp;
          <span className="heroShiny1 text-fun-pink">{heroText3}</span>{' '}
          {heroText4} {heroText5}
          <span className="heroShiny2 text-fun-pink"> {heroText6} </span>{' '}
          {heroText7}
          <img
            className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-130px] sm:right-[80px] w-[100px] "
            style={{ animationDelay: '0.1s' }}
            src="/static/doodles/hero/html.svg"
          />
          <img
            className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
            style={{ animationDelay: '0.2s' }}
            src="/static/doodles/hero/nextjs.svg"
          />
          <img
            className="sqD bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[-120px] w-[150px]"
            style={{ animationDelay: '0.3s' }}
            src="/static/doodles/hero/brayden.svg"
          />
          <img
            className="sqD hidden sm:block bottom-[-340px] left-[-180px]"
            style={{ animationDelay: '0.4s' }}
            src="/static/doodles/hero/coder.svg"
          />
          <img
            className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px] w-[100px]"
            style={{ animationDelay: '0.5s' }}
            src="/static/doodles/hero/js.svg"
          />
          <img
            className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
            style={{ animationDelay: '0.6s' }}
            src="/static/doodles/hero/dino.svg"
          />
          <img
            className="sqD right-[-60px] sm:right-[130px] bottom-[-180px] lg:[5%] w-[80px]"
            style={{ animationDelay: '0.7s' }}
            src="/static/doodles/hero/paintbrush.svg"
          />
          <img
            className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
            src="/static/doodles/hero/pop1.svg"
          />
          <img
            className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
            style={{ animationDelay: '0.9s' }}
            src="/static/doodles/hero/code.svg"
          />
        </h1>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center md:gap-5 ">
          <ScrollLink
            activeClass="active"
            to="learnmore"
            spy={true}
            offset={-30}
            smooth={true}
            duration={500}
          >
            <div
              className="cursor-pointer text- font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors rounded-full border-fun-white bg-
            "
            >
              {heroButton1}{' '}
            </div>
          </ScrollLink>
          <a
            href={`${locale === 'fr' ? '/static/Mon curriculum vitae.pdf' : '/static/My resume.pdf'}`}
            className="cursor-pointer text- font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg- hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors"
            target="_blank"
            download
          >
            {heroButton2}{' '}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
