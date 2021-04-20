import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="flex justify-center h-96 flex-col ">
      <div className="mt-48 flex flex-col items-center">
        <p className="text-5xl md:text-8xl font-bold text-gray-600 dark:text-gray-300">
          Hi I'm Varun
        </p>
        <p className="slogan">
          <span className=" text-lg font-semibold dark:text-gray-300 ">
            &amp;,this is my profile
          </span>
        </p>
        <div className="flex justify-center">
          <a href="https://www.linkedin.com/in/v-varun/">
            <AiFillLinkedin className="transform transition duration-500 hover:scale-110 text-6xl m-3 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
          </a>
          <a href="https://github.com/varun-singhh">
            <AiOutlineGithub className="transform transition duration-500 hover:scale-110 text-6xl m-3 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
          </a>
        </div>
        <Link to="/resume">
          <button className="bg-cyan-color dark:text-gray-700 text-white dark:bg-gray-300 py-2 px-12 rounded  mt-8  dark:hover:bg-gray-100">
            View Resume
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
