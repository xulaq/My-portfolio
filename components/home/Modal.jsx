import React from 'react';

export default function Modal({ project }) {
  const [showModal, setShowModal] = React.useState(false);
  const { title, position, date_range, projects } = project;

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        See More
      </button>
      <div
        className={`${showModal ? '' : 'hidden'} transition-all duration-1000`}
      >
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative  w-auto my-6 mx-auto md:min-w-[700px] max-w-3xl">
            {/*content*/}
            <div className="border-0 transition-all duration-1000 rounded-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-black outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <div className="text-gray-700">{position}</div>
                </div>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <div>
                  {projects.map((project) => {
                    return (
                      <div>
                        <h3 className="text-xl font-semibold">
                          {project.title}
                        </h3>
                        <div className="text-gray-700">{project.desc}</div>
                        <div className="text-gray-700">
                          {project.technologies}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    </>
  );
}
