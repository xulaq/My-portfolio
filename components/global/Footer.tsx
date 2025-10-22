import Link from 'next/link';
import React from 'react';
import { footer } from '@/data/global';
import Image from 'next/image';
import { BsFillHeartFill } from 'react-icons/bs';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

function Footer() {
  const intl = useIntl();
  const footer1 = intl.formatMessage({ id: 'footer.1' });
  const footer2 = intl.formatMessage({ id: 'footer.2' });
  const footer3 = intl.formatMessage({ id: 'footer.3' });
  const phoneNumber = '+213 663 18 71 67';
  const handlePhoneLinkClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const { locale } = useRouter();

  return (
    <footer className="flex flex-col w-screen px-5 bg-bg py-10  border-t border-fun-pink-darker z-5 ">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {locale === 'fr' ? item.titlefr : item.title}{' '}
              </h4>
              <div>
                {item.id === 3 && (
                  <>
                    <div className="flex gap-3 mt-3 w-full items-center">
                      <div className="shrink-0 flex justify-center items-center">
                        <Image
                          src="/static/icons/mail-f.svg"
                          width={20}
                          height={20}
                        />
                      </div>
                      <a
                        className="text-base min-w-max"
                        href="mailto:achikh200@gmail.com"
                      >
                        achikh200@gmail.com
                      </a>
                    </div>
                    <div className="flex gap-1 mt-3 ">
                      <Image
                        src="/static/icons/phone.svg"
                        width={20}
                        height={20}
                      />
                      <a
                        className="text-base min-w-max"
                        href={`tel:${phoneNumber}`}
                        onClick={handlePhoneLinkClick}
                      >
                        {phoneNumber}
                      </a>
                    </div>
                    <div className="flex gap-3 mt-3 w-full items-center">
                      <div className="shrink-0 flex justify-center items-center">
                        <Image
                          src="/static/icons/location.svg"
                          width={20}
                          height={20}
                        />
                      </div>
                      <p className="text-base min-w-max">
                        {locale === 'fr'
                          ? 'Alger, Algérie'
                          : 'Algiers, Algeria'}
                      </p>
                    </div>
                  </>
                )}
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4 w-full">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className={`items-center flex `}
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <Image src={item.icon} width={20} height={20} />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>
                          {locale === 'fr' ? item.nameFr : item.name}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className=" relative md:left-[250%] md:bottom-[40%] -bottom-[60px]">
          <img
            src="/static/icons/signature.png"
            className="scale-150 h-20 -rotate-45 md:-rotate-6"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
