import React from 'react';
import Modal from '../home/Modal';
import Modal2 from '../home/Modal2';

function ProjectCard({ project }) {
  const { title, position, date_range, projects } = project;
  return (
    <div className="max-w-sm p-6 h-80 flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
          {title} - {position}
          <span className="text-sm font-light text-gray-600 dark:text-gray-300 ml-5">
            {date_range}
          </span>
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {/* <span className="text-gray-800 dark:text-gray-200 font-bold mr-2">
          {projects[0].title}
        </span>
        <span>{projects[0].desc?.slice(0, 40)}</span> */}
        <span>
          {`${projects[0].title}  ${projects[0].desc && ':'}  ${
            projects[0].desc
          }`.slice(0, 80)}{' '}
          . . .
        </span>
      </p>
      <Modal2 project={project} />
      {/* <button className="inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button> */}
    </div>
  );
}

export default ProjectCard;
