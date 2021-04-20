import React, { useEffect, useState } from 'react';
import axios from 'axios';
import asset from './Asset.svg';
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineCopyrightCircle,
} from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';
const Footer = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xyylzdaa',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    // filter: 'grayscale(70%)',
    <>
      <div
        style={{
          zIndex: '-10',
          backgroundImage: `url(${asset})`,
          backgroundSize: 'cover',
          filter: 'grayscale(65%)',
        }}
        className="mt-16 w-full flex p-10 flex-col md:flex-row justify-around items-center"
      >
        <div className="flex flex-col w-full relative z-10 items-center p-5 ml-4">
          <form onSubmit={handleOnSubmit}>
            <p className="text-4xl uppercase font-bold text-gray-600 ml-2 dark:text-gray-300">
              Reach Me
            </p>
            <input
              id="name"
              placeholder="Full Name"
              type="text"
              className="dark:bg-light-gray border-2 border-white dark:text-white px-5 py-2 w-5/6 m-2   dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-cyan-color focus:border-transparent ..."
              onChange={handleOnChange}
              required
              value={inputs.name}
            />
            <input
              id="email"
              placeholder="Email Id"
              type="email"
              className="dark:bg-light-gray border-2 border-white dark:bg-dark-gray dark:text-white px-5 py-2 w-5/6 m-2   dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-cyan-color focus:border-transparent ..."
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
            <textarea
              id="message"
              placeholder="Your Message"
              className="dark:bg-light-gray border-2 border-white dark:bg-dark-gray dark:text-white px-5 py-2 w-5/6 h-24 m-2   dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-cyan-color focus:border-transparent ..."
              onChange={handleOnChange}
              required
              value={inputs.message}
            />
            <button className="rounded m-2 px-5 py-2 bg-cyan-color dark:bg-gray-400 dark:hover:bg-gray-200 hover:bg-cyan-color focus:outline-none focus:ring-2 focus:ring-cyan-color focus:ring-opacity-50 ... w-5/6">
              {!status.submitting
                ? !status.submitted
                  ? 'Send'
                  : 'Sent'
                : 'Sending...'}
            </button>{' '}
          </form>
          {status.info.error && (
            <div className="error text-red-500 font-bold">Error: {status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && (
            <p className="text-cyan-color font-bold">{status.info.msg}</p>
          )}
        </div>

        <div className="gray flex flex-col w-full items-center rounded-lg p-5 text-gray-300 md:text-black">
          <div className="flex text-4xl items-center">
            <a href="https://www.instagram.com/_varun_vns/">
              <AiFillInstagram className="transform transition duration-500 hover:scale-150 cursor-pointer m-2" />
            </a>
            <a href="https://github.com/varun-singhh">
              <AiFillGithub className="transform transition duration-500 hover:scale-150 cursor-pointer m-2" />
            </a>
            <a href="https://twitter.com/_varuns">
              <AiFillTwitterCircle className="transform transition duration-500 hover:scale-150 cursor-pointer m-2" />
            </a>

            <a href="https://www.linkedin.com/in/v-varun/">
              <AiFillLinkedin className="transform transition duration-500 hover:scale-150 cursor-pointer m-2" />
            </a>
            <a href="mailto:varunsingh00712@gmail.com">
              <IoMdMail className="transform transition duration-500 hover:scale-150 cursor-pointer m-2" />
            </a>
          </div>

          <div className="flex items-center font-bold text-xs md:text-lg">
            <AiOutlineCopyrightCircle />
            <p>ALl Rights Reserved 2021, Varun Singh</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
