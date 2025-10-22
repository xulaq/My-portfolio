import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Add a scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed bottom-2 right-2 ${showButton ? '' : 'hidden'}`}>
      <Link to="top" className="rounded-full" smooth={true} duration={500}>
        <div className="p-5 border-2 border-gray-700 bg-white rounded-full cursor-pointer hover:scale-110 duration-150">
          <img src="/static/icons/up-arrow.svg" className="w-5 h-5" alt="" />
        </div>
      </Link>
    </div>
  );
};

export default ScrollToTopButton;
