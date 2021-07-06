import React from 'react';

const About = () => {
  return (
    <div>
      <div className="flex items-center flex-col">
        <div className=" bg-transparent h-2 w-full mt-48"></div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="flex justify-center"
      >
        <div className="dark:bg-dark-gray bg-white h-min w-4/6 mt-16 md:mt-10 shadow-lg rounded-xl dark:shadow-lg flex flex-col md:flex-row p-5 justify-between">
          <div className="p-10 w-2/6 rounded-3xl hidden md:flex bg-me bg-contain bg-no-repeat bg-center"></div>
          <div className="p-1 md:p-10 flex flex-col items-center dark:text-gray-300 text-center">
            <p className="text-xl md:text-2xl font-bold border-b-4 pb-1 border-cyan-color uppercase">
              About Me
            </p>
            <p className="text-xs md:text-lg mt-4 max-w-lg text-justify">
              I'm a passionate software developer, I have a deep interest and
              passion for technology. I enjoy working with people who keeps
              challenging my skills at every stage. Software Developmet to me is
              like a magic where one can see their progress after each line of
              code. I am a self-driven and motivated with the desire to work in a
              fast-paced, results-driven agile environment with varied
              responsibilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
