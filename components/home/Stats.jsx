import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { RiContactsFill, RiAlarmFill } from 'react-icons/ri';
import { FaAppStoreIos } from 'react-icons/fa';
import { BsAwardFill, BsLightbulbFill } from 'react-icons/bs';
import { GiCoffeeCup } from 'react-icons/gi';
import { useIntl } from 'react-intl';

const Stats = () => {
  const intl = useIntl();
  const stats1 = intl.formatMessage({ id: 'stats.1' });
  const stats2 = intl.formatMessage({ id: 'stats.2' });
  const stats3 = intl.formatMessage({ id: 'stats.3' });
  const stats4 = intl.formatMessage({ id: 'stats.4' });
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div>
      <ScrollTrigger
        onEnter={() => {
          setCounterOn(true);
        }}
        // onExit={() => setCounterOn(false)}
      >
        <div className="flex justify-between p-5 uppercase md:flex-row flex-col gap-8 mt-28">
          <div className="flex flex-col gap-3 items-center">
            <FaAppStoreIos className="text-5xl " />
            <div className="flex items-center">
              <span className="text-4xl">+</span>
              {counterOn && (
                <CountUp
                  className="font-bold text-5xl"
                  start={0}
                  end={30}
                  duration={5}
                  delay={0}
                />
              )}
            </div>
            <div className="w-32 text-center">{stats1}</div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <RiContactsFill className="text-5xl" />
            <div className="flex items-center">
              <span className="text-4xl">+</span>
              {counterOn && (
                <CountUp
                  className="font-bold text-5xl"
                  start={0}
                  end={10}
                  duration={5}
                  delay={0}
                />
              )}
            </div>
            <div className="w-32 text-center">{stats2}</div>
          </div>{' '}
          <div className="flex flex-col gap-3 items-center">
            <BsAwardFill className="text-5xl" />
            <div className="flex items-center">
              <span className="text-4xl">+</span>
              {counterOn && (
                <CountUp
                  className="font-bold text-5xl"
                  start={0}
                  end={5}
                  duration={5}
                  delay={0}
                />
              )}
            </div>
            <div className="w-32 text-center">{stats3}</div>
          </div>{' '}
          <div className="flex flex-col gap-3 items-center">
            <BsLightbulbFill className="text-5xl" />
            <div className="flex items-center">
              <span className="text-4xl">+</span>
              {counterOn && (
                <CountUp
                  className="font-bold text-5xl"
                  start={0}
                  end={7}
                  duration={5}
                  delay={0}
                />
              )}
            </div>
            <div className="w-32 text-center">{stats4}</div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Stats;
