import React from 'react';

const Resume = () => {
  return (
    <div className="flex p-10 m-4 md:m-32 flex-col bg-white rounded shadow-lg">
      <div className="flex flex-col pb-4">
        <div className="flex justify-between flex-col md:flex-row">
          <div>
            {' '}
            <p className="text-2xl font-bold text-gray-600 md:text-4xl text-center md:text-left">
              VARUN SINGH
            </p>
            <div className="flex items-center flex-col md:flex-row text-center md:text-left">
              <p className="font-semibold">
                Jaypee University of Information Technology,{' '}
              </p>
              <p className="text-xs">Wakhnaghat, Solan (H.P) INDIA</p>
            </div>
            <p className="font-bold mt-2 md:mt-1 text-xs md:text-md text-center md:text-left">
              Email:{' '}
              <a
                href="mailto:varunsingh00712@gmail.com"
                className="text-blue-600 border-b border-blue-600 font-normal"
              >
                varunsingh00712@gmail.com
              </a>{' '}
              |{' '}
              <a
                href="https://github.com/varun-singhh"
                className="text-blue-600 border-b border-blue-600 font-normal ml-1"
              >
                Github
              </a>{' '}
              |
              <a
                href="https://www.linkedin.com/in/v-varun/"
                className="text-blue-600 border-b border-blue-600 font-normal ml-1"
              >
                Linkedin
              </a>
            </p>
            <p className="font-bold mt-2 text-xs md:text-md text-center md:text-left">
              Phone:&nbsp;
              <a
                href="tel:+918707072079"
                className="text-blue-600 border-b border-blue-600 font-normal"
              >
                (+91)-8707072079
              </a>
            </p>
          </div>
          <div>
            <button
              className="py-1 md:py-3 px-6 bg-cyan-color text-white rounded font-bold hover:opacity-60 mt-3 md:mt-0 w-full outline-none"
              onClick={() => {
                window.print();
              }}
            >
              PRINT
            </button>
          </div>
        </div>
      </div>
      <div className="flex-col md:flex-row flex justify-around">
        <div className="flex flex-col mr-5 w-full md:w-4/6">
          <p className="text-2xl mt-3 mb-3 font-bold text-gray-600 border-b-4 pb-3 border-gray-600">
            EXPERIENCE
          </p>
          <div className="border-dashed border-b pb-4 border-gray-400 mt-4">
            <div>
              <p className="text-lg font-bold text-gray-700">
                TGH Technologies Pvt. Ltd
              </p>
              <p className="text-sm font-semibold mr-2">
                Frontend Development Intern
              </p>
            </div>
            <div>
              <div className="flex justify-between mt-2 mb-2">
                <p className="text-xs mr-2">February 2021 -working currently</p>
                <p className="text-xs ml-2">Virtual (WFH)</p>
              </div>
            </div>
            <div className="text-sm ">
              <li>
                Working on frontend using react, we basically provide digital
                solution to SME's to help them grow with the help of latest
                technology which could eventually help them to reach more crowd
              </li>
              <li>
                Currenlty working on SAAS project, while previously worked on
                E-commerce for startup providing all home finishing work, and
                Employee management for startup
              </li>
            </div>
          </div>
          <div className="border-dashed border-b pb-4 border-gray-400 mt-4">
            <div>
              <p className="text-lg text-gray-700 font-bold">
                Reliance Jio Infocomm Ltd.
              </p>
              <p className="text-sm font-semibold mr-2">
                Data Science Intern (Dept. of GIS)
              </p>
            </div>
            <div>
              <div className="flex justify-between mt-2 mb-2">
                <p className="text-xs mr-2">December 2019 – January 2020 </p>
                <p className="text-xs ml-2">Mumbai Headquarters, JIO India</p>
              </div>
            </div>
            <div className="text-sm ">
              <li>
                Worked in Dept. of Geographic Information System (GIS) as a Data
                Science intern and learned many aspects of GIS and software’s
                used for the same.
              </li>
              <li>
                I worked in dealing with 20-40 million data daily, in which I
                was assigned to find the number of building in particular state
                of India, not having proper point geometry using building
                geometry in order to install jio fibre. I did all my work in
                python and using python library like geopandas, geos, Fiona,
                shapely, wheel, scikit, scipy, and much more. I also learned new
                software’s like QGIS and ArcGIS.
              </li>
            </div>
          </div>
          <div className="border-dashed border-b pb-4 border-gray-400 mt-4">
            <div>
              <p className="text-lg text-gray-700 font-bold">
                Training and Research Internship IIT-BHU
              </p>
              <p className="text-sm font-semibold mr-2">
                Data Analytics and Machine Learning, Technex, IIT-BHU
              </p>
            </div>
            <div>
              <div className="flex justify-between mt-2 mb-2">
                <p className="text-xs mr-2">May 2019- June 2019</p>
                <p className="text-xs ml-2">IIT-BHU, Varanasi, INDIA</p>
              </div>
            </div>
            <div className="text-sm ">
              <li>
                This was my first Training internship in Data Analytics and
                Machine Learning, here I learned many data science techniques
                like feature engineering, Data extraction, training model and
                optimizing them and also worked in 3-4 projects.
              </li>
            </div>
          </div>
          <p className="text-2xl mt-3 mb-3 font-bold text-gray-600 border-b-4 pb-3 border-gray-600">
            PROJECTS
          </p>

          <div className="border-dashed border-b pb-4 border-gray-400 mt-4">
            <div>
              <p className="text-sm font-semibold mr-2">
                NPM package for Alerts, and Popups
              </p>
            </div>
            <div>
              <div className="flex justify-between mt-2 mb-2">
                <p className="text-xs mr-2 font-bold">April 2021</p>
                <p className="text-xs ml-2 font-bold">Javascript</p>
              </div>
            </div>
            <div className="text-sm ">
              <li>
                This is a cross platform alert popup, with different
                customizable options like animation, icons, duration, styling,
                position, onClick and much more, it was made only with
                javascript so that it can be used by an library/framework.
              </li>
            </div>
          </div>
          <div className="border-dashed border-b pb-4 border-gray-400 mt-4">
            <div>
              <p className="text-sm font-semibold mr-2">
                Finish Factory: Employee Management and E-commerce
              </p>
            </div>
            <div>
              <div className="flex justify-between mt-2 mb-2">
                <p className="text-xs mr-2 font-bold">July 2020</p>
                <p className="text-xs ml-2 font-bold">
                  React, Django Rest Framework, Tailwind CSS, JS{' '}
                </p>
              </div>
            </div>
            <div className="text-sm ">
              <li>
                <b>Employee Management: </b>
                <br />
                <p className="ml-5">
                  Made frontend for the startup named Finish Factory, this web
                  app contains features like Add employee, Add Vendors, Service
                  Selection, Order Progress, Payment Progress,
                </p>
              </li>
              <li>
                <b>E-Commerce </b>
                <br />
                <p className="ml-5">
                  Built frontend to book all home furnishing services provided
                  by finish factory, where one can place Order, make payments,
                  built Admin Panel, where Admin can check all orders, mark
                  their progress, request payment, Add/Delete service, upload
                  Invoice and much more
                </p>
              </li>
            </div>
          </div>
          <div className="border-dashed border-b pb-4 border-gray-400 mt-4">
            <div>
              <p className="text-sm font-semibold mr-2">
                Online Music Streaming and Downloading website
              </p>
            </div>
            <div>
              <div className="flex justify-between mt-2 mb-2">
                <p className="text-xs mr-2 font-bold">March 2021</p>
                <p className="text-xs ml-2 font-bold">
                  NodeJS, NextJS, MongoDB{' '}
                </p>
              </div>
            </div>
            <div className="text-sm ">
              <li>
                This was a fullstack project made using NextJS, it's called
                Vovoca- an Online music streaming website, where one can,
                listen, download and share music. this website is fully
                responsive and it's design is based on neuromorphism theme.
              </li>
            </div>
          </div>
          <div className="border-dashed border-b pb-4 border-gray-400 mt-4">
            <div>
              <p className="text-sm font-semibold mr-2">
                Covid Detection using chest X-Ray
              </p>
            </div>
            <div>
              <div className="flex justify-between mt-2 mb-2">
                <p className="text-xs mr-2 font-bold">October 2020</p>
                <p className="text-xs ml-2 font-bold">
                  Flask, Python, Scikit, Numpy, Pandas{' '}
                </p>
              </div>
            </div>
            <div className="text-sm ">
              <li>
                This was a resarch based project made uusing ML mdels, by
                training thousands of Images of X-ray to detect Covid,
                pneumonia. the model is trained over normal X-ray and diseased
                x-ray, so that it could determine covid +ve patient, accuracy of
                this model was 72%. the whole project is then deployed on flask
                web app.
              </li>
            </div>
          </div>
          <div className="border-dashed border-b pb-4 border-gray-400 mt-4">
            <div>
              <p className="text-sm font-semibold mr-2">
                Meme Chat App and Online Farming E-commerce
              </p>
            </div>
            <div>
              <div className="flex justify-between mt-2 mb-2">
                <p className="text-xs mr-2 font-bold">July 2020</p>
                <p className="text-xs ml-2 font-bold">
                  React, Python, Django, Django Rest Framework, HTML, CSS, JS{' '}
                </p>
              </div>
            </div>
            <div className="text-sm ">
              <li>
                Made a web Chat app, where an user can anonymously can chat
                through others, and can chat through menes, gifs, images etc. it
                was a small full stack website frontend was made using react,
                while backend in Django Rest Frame work
              </li>
              <li>
                A simple E-commerce website made for farmers to sell their
                products online, without any brokerage fees, it was a fullstack
                django project
              </li>
            </div>
          </div>
        </div>
        <div className="flex flex-col mr-5">
          <p className="text-2xl mt-3 mb-3 font-bold text-gray-600 border-b-4 pb-3 border-gray-600">
            EDUCATION
          </p>
          <div>
            <div className="mt-4 mb-2">
              <p className="text-md  font-bold">
                B. Tech, Computer Science Engg.
              </p>

              <p className="text-sm font-semibold">
                Jaypee University of Information Technology
              </p>
              <p className="text-sm">9.4 CGPA (up till 5 th Sem)</p>
              <p className="text-sm">July 2018 – Currently</p>
            </div>

            <div className="mt-4 mb-2">
              <p className="text-md  font-bold">Higher Secondary – 91.2%</p>
              <p className="text-sm font-semibold">
                Central Board of Secondary Education
              </p>
              <p className="text-sm">2017</p>
            </div>
            <div className="mt-4 mb-2">
              <p className="text-md  font-bold">Secondary – 9.4 CGPA / 89.3%</p>
              <p className="text-sm font-semibold">
                Central Board of Secondary Education
              </p>
              <p className="text-sm">2015</p>
            </div>
          </div>
          <p className="text-2xl mt-3 mb-3 font-bold text-gray-600 border-b-4 pb-3 border-gray-600">
            SKILLS
          </p>
          <div>
            <li className="flex border-b-2 pb-2">
              <div>
                <p className="font-bold">Programming Language:</p>
                <p className="flex font-bold flex-col">
                  <p className="flex text-xs items-center mr-2">
                    Experienced:&nbsp;
                    <p className="font-normal text-xs">C++, Python</p>
                  </p>
                  <p className="flex text-xs items-center">
                    Familiar:&nbsp;
                    <p className="font-normal text-xs">Java</p>
                  </p>
                </p>
              </div>
            </li>
            <li className="flex border-b-2 pb-2">
              <div className="flex flex-col">
                <p className="font-bold">Tools/Frameworks/libraries</p>
                <p className="text-xs">
                  JS, React, Node JS, Django, Flask Jupyter, Scipy, Scikitlearn,
                  Keras, Dash, Plotly, pandas, Numpy
                </p>
              </div>
            </li>
            <li className="flex border-b-2 pb-2">
              <div className="flex flex-col">
                <p className="font-bold">Database Management</p>
                <p className="text-xs">MySQL, SQLite, MongoDB</p>
              </div>
            </li>
            <li className="flex border-b-2 pb-2">
              <div className="flex flex-col">
                <p className="font-bold">Coding Skills</p>
                <p className="text-xs">
                  Data Structure and Algorithm, Problem Solving, Competitive
                  Coding.
                </p>
              </div>
            </li>{' '}
            <li className="flex border-b-2 pb-2">
              <div className="flex flex-col">
                <p className="font-bold">Soft Skills</p>
                <p className="text-xs">
                  {' '}
                  Teamwork, Data Analysis, Observation, Critical Thinking,
                  Management, Communication, leadership.
                </p>
              </div>
            </li>{' '}
            <li className="flex border-b-2 pb-2">
              <div className="flex flex-col">
                <p className="font-bold">Other Skills:</p>
                <p className="text-xs"> UX/UI Design</p>
              </div>
            </li>
          </div>
          <p className="text-2xl mt-3 mb-3 font-bold text-gray-600 border-b-4 pb-3 border-gray-600">
            ACHIEVEMENTS
          </p>
          <div>
            <div className="mt-4 mb-2 text-sm">
              <li>College Rank 1, Smart India Hackathon 2020</li>
              <li>4 Star Rating on Codechef.</li>
              <li>Google Hash code 2021 AIR 1.6k</li>
              <li>Published a NPM Package - Toastifier</li>
            </div>
          </div>
          <p className="text-2xl mt-3 mb-3 font-bold text-gray-600 border-b-4 pb-3 border-gray-600">
            RESARCH
          </p>
          <div>
            <p className="font-bold ">Diabetic Retinopathy Detection</p>
            <div className="mt-4 mb-2 text-sm max-w-md">
              Currently working on Diabetic retinopathy detection, and thermal
              foot images to classify a diabetic and no diabetic person,
              currently we are trying to build the algorithm for diabetes
              detection using thermal foot images while for Diabetic retinopathy
              detection we are using CNN and transfer learning methods to get
              best accuracy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
