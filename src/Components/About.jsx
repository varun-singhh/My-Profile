import React from 'react';
import me from './me.png';
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
        <div className="dark:bg-dark-gray bg-white h-96 w-4/6 mt-16 md:mt-10 shadow-lg rounded-xl dark:shadow-lg flex flex-col md:flex-row p-5 justify-between">
          <div
            className="p-10 w-2/6 rounded-3xl hidden md:flex"
            style={{
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              objectFit: 'contain',
              background:
                'url("https://media-exp1.licdn.com/dms/image/C5103AQHlqCz2y6gWFA/profile-displayphoto-shrink_800_800/0/1576986523117?e=1624492800&v=beta&t=AT9t-hB3JyJuO0TPjuy44i_qMDKCrBgj64EzstT8u6w")',
            }}
          ></div>
          <div className="p-1 md:p-10 flex flex-col items-center dark:text-gray-300 text-center">
            <p className="text-xl md:text-2xl font-bold border-b-4 pb-1 border-cyan-color uppercase">
              About Me
            </p>
            <p className="text-xs md:text-lg mt-4 max-w-lg">
              I'm a passionate software developer and a self taught
              programmer,Software Developmet to me is like a magic where one can
              see their progress after each line of code. I have keen Interest
              in building products so that it could be used by people out there,
              I have experience working in startups and corporates like Reliance
              Jio, Currenlty I'm a fullstack developer, an learning new techs to
              enhance my skills. I'm also an eco-nut and pet lover.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;