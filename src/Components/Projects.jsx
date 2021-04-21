import React from 'react';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import toastifier from 'toastifier';
import 'toastifier/dist/toastifier.min.css';

const Projects = () => {
  return (
    <div className="flex flex-col md:w-full overflow-hidden">
      <p className="select-none uppercase font-bold text-5xl md:text-8xl -mb-36 mt-16 ml-12 text-white opacity-30 dark:text-gray-400">
        PROJECTS
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center mt-32 md:mt-10 ">
        <div data-aos="fade-right">
          <div className="flex flex-col w-64 m-5 md:m-3 md:m-3 items-center">
            <div className="flex flex-col justify-end bg-contain bg-no-repeat bg-top transform transition duration-500 hover:scale-110 dark:bg-dark-gray cursor-pointer bg-npm m-3 md:m-3   rounded-2xl h-80 w-full shadow-xl">
              <div className="absolute z-5 bg-gray-200 dark:bg-battle-gray dark:text-light-gray mt-2 w-full p-5 rounded-b-2xl text-center h-44 opacity-90 backdrop-filter backdrop-blur-xl"></div>
              <div className="absolute z-10 dark:text-gray-100 mt-2 w-full p-5 text-center">
                Npm package, named Toastifier, a cross platform alert, and popup
                made only with javascript{' '}
                <div className="flex justify-center mt-3 -mb-2">
                  <a
                    href="https://github.com/varun-singhh/Toastifier"
                    className=""
                  >
                    <AiOutlineGithub className="transform transition duration-500 hover:scale-110 text-2xl mr-3 dark:text-gray-100 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                  <a
                    href="https://www.npmjs.com/package/toastifier"
                    className=""
                  >
                    <AiOutlineLink className="transform transition duration-500 hover:scale-110 text-2xl ml-1 dark:text-gray-100 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                  <button
                    className="outline-none ml-3 border px-3 rounded bg-white dark:text-gray-600 dark:hover:bg-light-gray dark:hover:text-white hover:bg-cyan-color hover:border-0"
                    onClick={() => {
                      toastifier('Et Voila, It worked');
                    }}
                  >
                    Test Now
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end bg-contain bg-no-repeat bg-top transform transition duration-500 hover:scale-110 dark:bg-dark-gray cursor-pointer bg-search m-3 md:m-3   rounded-2xl h-80 w-full shadow-xl">
              <div className="absolute z-5 bg-gray-200 dark:bg-battle-gray dark:text-light-gray mt-2 w-full p-5 rounded-b-2xl text-center h-44 opacity-90 backdrop-filter backdrop-blur-xl"></div>
              <div className="absolute z-10 dark:text-gray-100 mt-2 w-full p-5 text-center">
                This project was created with intention of Fetching Github user
                and their Public Repository, like a search app.
                <div className="flex justify-center mt-3 -mb-2">
                  <a
                    href="https://github.com/varun-singhh/Gitify-Fetch"
                    className=""
                  >
                    <AiOutlineGithub className="transform transition duration-500 hover:scale-110 text-2xl mr-3 dark:text-gray-100 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                  <a href="https://gifi.netlify.app/" className="">
                    <AiOutlineLink className="transform transition duration-500 hover:scale-110 text-2xl ml-1 dark:text-gray-100 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="flex flex-col w-64 m-3 md:m-3 items-center">
            <div className="flex flex-col justify-end bg-contain bg-no-repeat bg-top transform transition duration-500 hover:scale-110 dark:bg-dark-gray cursor-pointer bg-music m-3 md:m-3   rounded-2xl h-80 w-full shadow-xl">
              <div className="absolute z-5 bg-gray-200 dark:bg-battle-gray dark:text-light-gray mt-2 w-full p-5 rounded-b-2xl text-center h-44 opacity-90 backdrop-filter backdrop-blur-xl"></div>
              <div className="absolute z-10 dark:text-gray-100 mt-2 w-full p-5 text-center">
                This is a Music Player and streaming app for royalty-free music,
                we call it VOVOCA, download, share and stream{' '}
                <div className="flex justify-center mt-3 -mb-2">
                  <a href="https://github.com/varun-singhh/vovoca" className="">
                    <AiOutlineGithub className="transform transition duration-500 hover:scale-110 text-2xl mr-3 dark:text-gray-100 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                  <a href="https://vovoca.vercel.app/" className="">
                    <AiOutlineLink className="transform transition duration-500 hover:scale-110 text-2xl ml-1 dark:text-gray-100 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>{' '}
            <div className="flex flex-col justify-end bg-contain bg-no-repeat bg-top transform transition duration-500 hover:scale-110 dark:bg-dark-gray cursor-pointer bg-contact m-3 md:m-3   rounded-2xl h-80 w-full shadow-xl">
              <div className="absolute z-5 bg-gray-200 dark:bg-battle-gray dark:text-light-gray mt-2 w-full p-5 rounded-b-2xl text-center h-44 opacity-90 backdrop-filter backdrop-blur-xl"></div>
              <div className="absolute z-10 dark:text-gray-100 mt-2 w-full p-5 text-center">
                It's a simple contact page with decent features and good example
                of minimal UI. Please do not spam this website it's currently in
                use.
                <div className="flex justify-center mt-3 -mb-2">
                  <a href="https://contact.finishfactory.in" className="">
                    <AiOutlineLink className="transform transition duration-500 hover:scale-110 text-2xl ml-1 dark:text-gray-100 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>{' '}
            <div className="flex flex-col justify-end bg-contain bg-no-repeat bg-top transform transition duration-500 hover:scale-110 dark:bg-dark-gray cursor-pointer bg-farm m-3 md:m-3   rounded-2xl h-80 w-full shadow-lg">
              <div className="absolute z-5 bg-gray-200 dark:bg-battle-gray dark:text-light-gray mt-2 w-full p-5 rounded-b-2xl text-center h-44 opacity-90 backdrop-filter backdrop-blur-xl"></div>
              <div className="absolute z-10 dark:text-gray-100 mt-2 w-full p-5 text-center">
                <p className="opacity-none">
                  Website for Farmers, to sell their products online and, people
                  can book trip to thes farms for familiy picnic to enjoy
                  natural beauty.
                </p>
                <div className="flex justify-center mt-3 -mb-2">
                  <a
                    href="https://github.com/varun-singhh/farmage/"
                    className=""
                  >
                    <AiOutlineGithub className="transform transition duration-500 hover:scale-110 text-2xl mr-3 dark:text-gray-100 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                  <a href="https://farms-age.herokuapp.com/home/" className="">
                    <AiOutlineLink className="transform transition duration-500 hover:scale-110 text-2xl ml-1 dark:text-gray-100 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left">
          <div className="flex flex-col w-64 m-3 md:m-3 items-center">
            <div className="flex flex-col justify-end bg-contain bg-no-repeat bg-top transform transition duration-500 hover:scale-110 dark:bg-dark-gray cursor-pointer bg-web m-3 md:m-3   rounded-2xl h-80 w-full shadow-xl">
              <div className="absolute z-5 bg-gray-200 dark:bg-battle-gray dark:text-light-gray mt-2 w-full p-5 rounded-b-2xl text-center h-44 opacity-90 backdrop-filter backdrop-blur-xl"></div>
              <div className="absolute z-10 dark:text-gray-100 mt-2 w-full p-5 text-center">
                Internship project: I worked on frontend for this
                home furnishing services website. Please
                do not spam this website it's currently in use
                <div className="flex justify-center mt-3 -mb-2">
                  <a href="https://finishfactory.in/" className="">
                    <AiOutlineLink className="transform transition duration-500 hover:scale-110 text-2xl ml-1 dark:text-gray-100 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>{' '}
            <div className="flex flex-col justify-end bg-contain bg-no-repeat bg-top transform transition duration-500 hover:scale-110 dark:bg-dark-gray cursor-pointer bg-chat m-3 md:m-3   rounded-2xl h-80 w-full shadow-xl">
              <div className="absolute z-5 bg-gray-200 dark:bg-battle-gray dark:text-light-gray mt-2 w-full p-5 rounded-b-2xl text-center h-44 opacity-90 backdrop-filter backdrop-blur-xl"></div>
              <div className="absolute z-10 dark:text-gray-100 mt-2 w-full p-5 text-center">
                This is Fun chat App where anyone can anonymously chat with
                others, with meme, images, gifs.
                <div className="flex justify-center mt-3 -mb-2">
                  <a
                    href="https://github.com/varun-singhh/frontend-xmeme"
                    className=""
                  >
                    <AiOutlineGithub className="transform transition duration-500 hover:scale-110 text-2xl mr-3 dark:text-gray-100 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                  <a href="https://crio-xmeme.netlify.app/" className="">
                    <AiOutlineLink className="transform transition duration-500 hover:scale-110 text-2xl ml-1 dark:text-gray-100 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
