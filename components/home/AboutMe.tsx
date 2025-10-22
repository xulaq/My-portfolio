import Link from 'next/link';
import React from 'react';
import SectionTitle from '../global/SectionTitle';
import { useIntl } from 'react-intl';

function AboutMe() {
  const intl = useIntl();
  const aboutHeading = intl.formatMessage({ id: 'about.heading' });
  const aboutText = intl.formatMessage({ id: 'about.text' });
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div id="learnmore">
        <SectionTitle title={aboutHeading} />
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center ">
        <div className="mx-auto mb-4 md:mb-0">
          <img
            className="w-52 hover:scale-125 hover:rotate-12 rounded-full transition-all duration-700"
            src="/static/logos/abdo.png"
            alt=""
          />
        </div>
        <div className="md:w-2/3 px-3 md:px-0 text-xl leading-10">
          {aboutText}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
