import React from 'react';
import { useIntl } from 'react-intl';
import FormModal from './FormModal';

function CTA() {
  const intl = useIntl();
  const ctaHeading = intl.formatMessage({ id: 'cta.heading' });
  const ctaButton = intl.formatMessage({ id: 'cta.button' });

  return (
    <div className="pt-36 relative w-full text-center">
      <img className="w-30 m-auto mb-2" src="/static/doodles/lineBreak.svg" />
      <div id="contact" className="pt-14 pb-40">
        <h2 className="text-4xl md:text-5xl font-bold mb-10">{ctaHeading} </h2>
        {/* <a
          target="_blank"
          href="mailto:achikh200@gmail.com"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3  border-2 rounded-full dark:text-white text-black border-2 hover:bg-fun-pink hover:text-white hover:border-fun-pink  transition-colors"
        >
          {ctaButton}{' '}
        </a> */}
        <FormModal />
      </div>

      <img
        className="sqD min-w-[800px] bottom-[-100px] left-1/2 sm:bottom-[-150px] -translate-x-1/2 object-cover sm:min-w-[1100px]"
        style={{ zIndex: '-10' }}
        src="/static/doodles/hero/fancyLines.svg"
      />
    </div>
  );
}

export default CTA;
