import React from 'react';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';
import toastifier from 'toastifier';
import 'toastifier/dist/toastifier.min.css';

const Projects = () => {
  return (
    <div className="w-full flex flex-col">
      <p className="uppercase font-bold text-5xl md:text-8xl -mb-36 mt-16 ml-12 text-white opacity-20 dark:text-gray-400">
        PROJECTS
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <div data-aos="fade-right">
          <div className="flex flex-col w-64 m-3 md:m-3 md:m-3">
            <div className="transform transition duration-500 hover:scale-110 dark:bg-dark-gray cursor-pointer bg-white m-3 md:m-3 rounded-2xl h-80 w-full shadow-xl">
              <div className="p-10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" />
              </div>
              <div className="bg-gray-200 dark:bg-battle-gray dark:text-light-gray mt-2 w-full p-5 rounded-b-2xl text-center">
                Npm package, named Toastifier, a cross platform alert, and popup
                made only with javascript{' '}
                <div className="flex justify-center mt-3 -mb-2">
                  <a
                    href="https://github.com/varun-singhh/Toastifier"
                    className=""
                  >
                    <AiOutlineGithub className="transform transition duration-500 hover:scale-110 text-2xl mr-3 dark:text-gray-300 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                  <a
                    href="https://www.npmjs.com/package/toastifier"
                    className=""
                  >
                    <AiOutlineLink className="transform transition duration-500 hover:scale-110 text-2xl ml-1 dark:text-gray-300 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
            <div className="transform transition duration-500 hover:scale-110 dark:bg-dark-gray cursor-pointer bg-white m-3 md:m-3 rounded-2xl h-80 w-full shadow-xl">
              <div className="p-10">
                <img src="https://connectnigeria.com/articles/wp-content/uploads/2018/11/GitHub-2.png" />
              </div>
              <div className="bg-gray-200 dark:bg-battle-gray dark:text-light-gray mt-2 w-full p-5 rounded-b-2xl text-center">
                This project was created with intention of Fetching Github user
                and their Public Repository, like a search app.
                <div className="flex justify-center mt-3 -mb-2">
                  <a
                    href="https://github.com/varun-singhh/Gitify-Fetch"
                    className=""
                  >
                    <AiOutlineGithub className="transform transition duration-500 hover:scale-110 text-2xl mr-3 dark:text-gray-300 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                  <a href="https://gifi.netlify.app/" className="">
                    <AiOutlineLink className="transform transition duration-500 hover:scale-110 text-2xl ml-1 dark:text-gray-300 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="flex flex-col w-64 m-3 md:m-3">
            <div className="transform transition duration-500 hover:scale-110 dark:bg-dark-gray cursor-pointer bg-white m-3 md:m-3 rounded-2xl h-80 w-full shadow-xl">
              <div className="p-10 flex justify-center">
                <img
                  src="https://img.freepik.com/free-vector/shiny-abstract-waves-with-musical-notes_1302-6325.jpg?size=626&ext=jpg"
                  className="h-20 "
                />
              </div>
              <div className="bg-gray-200 dark:bg-battle-gray dark:text-light-gray mt-2 w-full p-5 rounded-b-2xl text-center">
                This is a Music Player and streaming app for royalty-free music,
                we call it VOVOCA, download, share and stream{' '}
                <div className="flex justify-center mt-3 -mb-2">
                  <a href="https://github.com/varun-singhh/vovoca" className="">
                    <AiOutlineGithub className="transform transition duration-500 hover:scale-110 text-2xl mr-3 dark:text-gray-300 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                  <a href="https://vovoca.vercel.app/" className="">
                    <AiOutlineLink className="transform transition duration-500 hover:scale-110 text-2xl ml-1 dark:text-gray-300 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>{' '}
            <div className="transform transition duration-500 hover:scale-110 dark:bg-dark-gray cursor-pointer bg-white m-3 md:m-3 mt-5 md:mt-5 rounded-2xl h-80 w-full shadow-xl">
              <div className="p-10 flex justify-center">
                <img
                  src="https://image.freepik.com/free-vector/home-service-website_1893-2154.jpg"
                  className="w-4/6"
                />
              </div>
              <div className="bg-gray-200 dark:bg-battle-gray dark:text-light-gray mt-2 w-full p-5 rounded-b-2xl text-center">
                It's a simple contact page with cool features and good example
                of a good and minimal UI.
                <div className="flex justify-center mt-3 -mb-2">
                  <a href="https://contact.finishfactory.in" className="">
                    <AiOutlineLink className="transform transition duration-500 hover:scale-110 text-2xl ml-1 dark:text-gray-300 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>{' '}
            <div className="transform transition duration-500 hover:scale-110 dark:bg-dark-gray cursor-pointer bg-white m-3 md:m-3 mt-5 md:mt-7 rounded-2xl h-80 w-full shadow-xl">
              <div className="p-10">
                <img src="https://thumbs.dreamstime.com/b/rustic-vintage-style-farm-illustration-vector-rustic-vintage-style-farm-landscape-illustration-vector-hand-drawn-print-web-125169936.jpg" />
              </div>
              <div className="bg-gray-200 dark:bg-battle-gray dark:text-light-gray mt-2 w-full p-5 rounded-b-2xl text-center">
                Website for Farmers, to sell their products online and, people
                can book trip to thes farms for familiy picnic to enjoy natural
                beauty.
                <div className="flex justify-center mt-3 -mb-2">
                  <a
                    href="https://github.com/varun-singhh/farmage/"
                    className=""
                  >
                    <AiOutlineGithub className="transform transition duration-500 hover:scale-110 text-2xl mr-3 dark:text-gray-300 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                  <a href="https://farms-age.herokuapp.com/home/" className="">
                    <AiOutlineLink className="transform transition duration-500 hover:scale-110 text-2xl ml-1 dark:text-gray-300 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-left">
          <div className="flex flex-col w-64 m-3 md:m-3">
            <div className="transform transition duration-500 hover:scale-110 dark:bg-dark-gray cursor-pointer bg-white m-3 md:m-3 mt-5 md:mt-5 rounded-2xl h-80 w-full shadow-xl">
              <div className="p-10 flex justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ79vXdHW8qpq7BrDa9I4vXkYxyLIviLvWBOguTYBwaJ-ZZ5Q25CszcOocfpHDEXdajafg&usqp=CAU"
                  className="w-4/6"
                />
              </div>
              <div className="bg-gray-200 dark:bg-battle-gray dark:text-light-gray mt-2 w-full p-5 rounded-b-2xl text-center">
                This is my Internship project, I worked on frontend of this
                website, it's an ecommerce for home furnishing services.
                <div className="flex justify-center mt-3 -mb-2">
                  <a href="https://finishfactory.in/" className="">
                    <AiOutlineLink className="transform transition duration-500 hover:scale-110 text-2xl ml-1 dark:text-gray-300 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>{' '}
            <div className="transform transition duration-500 hover:scale-110 dark:bg-dark-gray cursor-pointer bg-white m-3 md:m-3 mt-5 md:mt-5 rounded-2xl h-80 w-full shadow-xl">
              <div className="p-10">
                <img src="https://s.tmimgcdn.com/scr/800x500/107900/chatting-illustration_107932-original.jpg" />
              </div>
              <div className="bg-gray-200 dark:bg-battle-gray dark:text-light-gray mt-2 w-full p-5 rounded-b-2xl text-center">
                This is Fun chat App where anyone can anonymously chat with
                others, with meme, images, gifs.
                <div className="flex justify-center mt-3 -mb-2">
                  <a
                    href="https://github.com/varun-singhh/frontend-xmeme"
                    className=""
                  >
                    <AiOutlineGithub className="transform transition duration-500 hover:scale-110 text-2xl mr-3 dark:text-gray-300 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
                  </a>
                  <a href="https://crio-xmeme.netlify.app/" className="">
                    <AiOutlineLink className="transform transition duration-500 hover:scale-110 text-2xl ml-1 dark:text-gray-300 text-gray-500 hover:text-cyan-color  cursor-pointer dark:hover:text-gray-300" />
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
