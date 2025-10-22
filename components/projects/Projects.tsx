import React from 'react';
import {
  experiences,
  experiencesFR,
  supplimentaryProjects,
  supplimentaryProjectsFR,
} from '@/data/content/projects';
import { Project } from 'types';
import { kebabCase } from '@/utils/utils';
import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from './ProjectCard';
import { useRouter } from 'next/router';

type ProjectProps = {
  overwriteProjects?: Project[];
};

function Projects({ overwriteProjects }: ProjectProps) {
  const { locale } = useRouter();
  const dataSupp =
    locale === 'fr' ? supplimentaryProjectsFR : supplimentaryProjects;
  const data = locale === 'fr' ? experiencesFR : experiences;
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
        {dataSupp.map(({ title, desc, picture }) => {
          return (
            <div className="max-w-sm h-[570px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={picture} alt="" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {desc}
                </p>
              </div>
            </div>
          );
        })}
        {data.map((item) => {
          return <ProjectCard key={item.id} project={item} />;
        })}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start"></div>
    </>
  );
}

export default Projects;
