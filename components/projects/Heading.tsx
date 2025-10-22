import React from 'react';
import { useIntl } from 'react-intl';

type HeadingProps = {
  tag?: string;
};

function Heading({ tag }: HeadingProps) {
  const intl = useIntl();
  const heading = intl.formatMessage({ id: 'projects.heading' });
  const text = intl.formatMessage({ id: 'projects.text' });
  return (
    <div
      className={`${
        tag ? 'pt-10 pb-4 sm:pt-24 sm:pb-20' : 'py-12 sm:py-20'
      } w-full text-center relative`}
    >
      <h1 className="text-4xl sm:text-6xl inline-block w-auto mx-auto mb-8 relative text-black  dark:text-white">
        {heading}{' '}
        <img
          className="sqD w-10 -top-8 -right-8 absolute"
          src="/static/doodles/hero/code.svg"
        />
      </h1>

      <p className="text-fun-gray text-xl sm:text-2xl max-w-3xl m-auto">
        {text}
      </p>
    </div>
  );
}

export default Heading;
