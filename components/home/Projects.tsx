import Link from 'next/link';
import React, { useState } from 'react';
import SectionTitle from '../global/SectionTitle';
// import { projects } from '@/data/content/projects';
import { experiences, experiencesFR } from '@/data/content/projects';
import Modal from './Modal';
import ProjectCard from '../projects/ProjectCard';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

function Projects() {
  const { locale } = useRouter();
  const data = locale === 'fr' ? experiencesFR : experiences;
  const intl = useIntl();
  const experiencesHeading = intl.formatMessage({ id: 'experiences.heading' });
  const experiencesButton = intl.formatMessage({ id: 'experiences.button' });
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div id="learnmore">
        <SectionTitle title={experiencesHeading} />
      </div>
      <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
        {data.slice(0, 3).map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
      <div className="relative w-full mt-2">
        <Link href="/projects">
          <div className="md:my-16 mt-8 max-w-sm md:max-w-2xl border mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full  bg-fun-pink-darkerer font-bold text-black border-2 hover:bg-fun-pink hover:text-white hover:border-fun-pink dark:text-white transition-colors cursor-pointer">
            {experiencesButton}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
