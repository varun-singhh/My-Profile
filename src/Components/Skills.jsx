import React from 'react';
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaAws,
} from 'react-icons/fa';
import { IoLogoSass, IoLogoJavascript, IoLogoNpm } from 'react-icons/io';
import { SiJavascript } from 'react-icons/si';
import { DiDjango, DiMysql } from 'react-icons/di';
const Skills = () => {
  return (
    <>
      <p className="select-none uppercase font-bold text-5xl md:text-8xl -mb-36 mt-16 ml-12 text-white opacity-20 dark:text-gray-400">
        SKILLS
      </p>
      <div className="flex justify-center flex-col md:flex-row">
        <div className="flex justify-center mt-36">
          <div className="flex flex-row md:flex-col">
            <div data-aos="fade-up">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center transform transition duration-500 hover:scale-110  transform transition duration-500 hover:scale-120  transform transition duration-500 hover:scale-100 ">
                  <FaReact className="text-7xl text-gray-500 ml-10 mr-10 mt-6 dark:text-gray-300 hover:text-cyan-color   " />
                  <p className="text-gray-500">React</p>
                </div>
                <div className="flex flex-col items-center transform transition duration-500 hover:scale-110  transform transition duration-500 hover:scale-120  transform transition duration-500 hover:scale-100 ">
                  <FaCss3Alt className="text-7xl text-gray-500 ml-10 mr-10 mt-6 dark:text-gray-300 hover:text-cyan-color   " />
                  <p className="text-gray-500">CSS</p>
                </div>
                <div className="flex flex-col items-center transform transition duration-500 hover:scale-110  transform transition duration-500 hover:scale-120  transform transition duration-500 hover:scale-100 ">
                  <FaHtml5 className="text-7xl text-gray-500 ml-10 mr-10 mt-6 dark:text-gray-300 hover:text-cyan-color   " />
                  <p className="text-gray-500">HTML</p>
                </div>
                <div className="flex flex-col items-center transform transition duration-500 hover:scale-110  transform transition duration-500 hover:scale-120  transform transition duration-500 hover:scale-100 ">
                  <IoLogoNpm className="text-7xl text-gray-500 ml-10 mr-10 mt-6 dark:text-gray-300 hover:text-cyan-color   " />
                  <p className="text-gray-500">NPM</p>
                </div>{' '}
                <div className="flex flex-col items-center transform transition duration-500 hover:scale-110  transform transition duration-500 hover:scale-120  transform transition duration-500 hover:scale-100 ">
                  <SiJavascript className="text-7xl text-gray-500 ml-10 mr-10 mt-6 dark:text-gray-300 hover:text-cyan-color   " />
                  <p className="text-gray-500">Javascript</p>
                </div>
                <div className="flex flex-col items-center transform transition duration-500 hover:scale-110  transform transition duration-500 hover:scale-120  transform transition duration-500 hover:scale-100 ">
                  <DiMysql className="text-7xl text-gray-500 ml-10 mr-10 mt-6 dark:text-gray-300 hover:text-cyan-color   " />
                  <p className="text-gray-500">MySQL</p>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="700">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center transform transition duration-500 hover:scale-110  transform transition duration-500 hover:scale-120  transform transition duration-500 hover:scale-100 ">
                  <FaNodeJs className="text-7xl text-gray-500 ml-10 mr-10 mt-6 dark:text-gray-300 hover:text-cyan-color   " />
                  <p className="text-gray-500">Node JS</p>
                </div>
                <div className="flex flex-col items-center transform transition duration-500 hover:scale-110  transform transition duration-500 hover:scale-120  transform transition duration-500 hover:scale-100 ">
                  <FaGitAlt className="text-7xl text-gray-500 ml-10 mr-10 mt-6 dark:text-gray-300 hover:text-cyan-color   " />
                  <p className="text-gray-500">Git</p>
                </div>
                <div className="flex flex-col items-center transform transition duration-500 hover:scale-110  transform transition duration-500 hover:scale-120  transform transition duration-500 hover:scale-100 ">
                  <FaPython className="text-7xl text-gray-500 ml-10 mr-10 mt-6 dark:text-gray-300 hover:text-cyan-color   " />
                  <p className="text-gray-500">Python</p>
                </div>
                <div className="flex flex-col items-center transform transition duration-500 hover:scale-110  transform transition duration-500 hover:scale-120  transform transition duration-500 hover:scale-100 ">
                  <DiDjango className="text-7xl text-gray-500 ml-10 mr-10 mt-6 dark:text-gray-300 hover:text-cyan-color   " />
                  <p className="text-gray-500">Django</p>
                </div>
                <div className="flex flex-col items-center transform transition duration-500 hover:scale-110  transform transition duration-500 hover:scale-120  transform transition duration-500 hover:scale-100 ">
                  <FaAws className="text-7xl text-gray-500 ml-10 mr-10 mt-6 dark:text-gray-300 hover:text-cyan-color   " />
                  <p className="text-gray-500">AWS</p>
                </div>
                <div className="flex flex-col items-center transform transition duration-500 hover:scale-110  transform transition duration-500 hover:scale-120  transform transition duration-500 hover:scale-100 ">
                  <IoLogoSass className="text-7xl text-gray-500 ml-10 mr-10 mt-6 dark:text-gray-300 hover:text-cyan-color   " />
                  <p className="text-gray-500">SASS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
