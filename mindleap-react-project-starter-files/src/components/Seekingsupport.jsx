import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Seekingsupport = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row w-full gap-6 mt-14 px-10 lg:px-32">
        {/* Left Content Section */}
        <div className="flex-auto w-full p-6 bg-gray-50 flex flex-col justify-center md:w-1/2 lg:p-16 max-h-[550px]">
          <div className="content-holder overflow-hidden">
            <h1 className="text-heroBg font-bold text-[65px] md:text-6xl pb-5 lg:pb-8 md:leading-[60px]">
              Seeking Support
            </h1>
            <h2 className="text-heroBg font-semibold text-xl md:text-2xl pb-6">
              Seeking help can take a lot of courage.
            </h2>
            <p className="text-black font-normal text-[15px]  md:text-xl">
              Regardless of where you are in your journey, it is always good to
              have others around for support.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-auto md:w-1/2 w-full h-auto flex justify-center mt-20">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet="https://i.pinimg.com/736x/cd/a5/00/cda50093dc2930186c2b501a48c9074c.jpg"
            />
            <img
              src="https://i.pinimg.com/736x/cd/a5/00/cda50093dc2930186c2b501a48c9074c.jpg"
              alt="Two females chatting in a kitchen"
              className="max-w-full mx-auto rounded-lg shadow"
            />
          </picture>
        </div>
      </div>

      {/* New Section - Choosing who to talk to */}

      
      <div className="px-10 lg:px-32 py-10">
        
        <p className="text-heroBg text-xl ">
            
          Taking the first step toward support is a powerful act of strength.
          Whether you're battling stress, anxiety, depression, or simply feeling
          overwhelmed by life’s challenges, know this—you don’t have to face it
          alone.
        </p>

        <p className="text-heroBg mt-4 text-xl">
          There are people who care, services designed to help, and resources to
          guide you toward healing. No matter where you are on your journey,
          support is within reach. Your well-being matters, and there is always
          a path forward.
        </p>

        {/* Choosing Who to Talk To */}
              </div>

      <div className="bg-white text-center py-8 px-4">
        <h1 className="text-4xl font-bold text-black">
        Reach out. Take the step. You deserve support.
        </h1>
        
      </div>

      {/* Cards Section */}
      <div className="px-10 lg:px-10 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center text-center pr-32  ">
      <div className="bg-green-700 text-white p-6 rounded-lg w-80 ">
      <h2 className="text-xl font-bold">Support with daily life</h2>
      <p className="mt-2 text-sm">
        There are organisations that can help you with the different challenges
        in daily life.
      </p>
      <Link to="/support1">
                          {" "}
      <button className="mt-40 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg transition-transform duration-300 hover:scale-105">
        Find out more
      </button>
      </Link>
    </div>
    <div className="bg-green-700 text-white p-6 rounded-lg w-80 ">
      <h2 className="text-xl font-bold">People who can help</h2>
      <p className="mt-2 text-sm">
      There are different people in your community that can provide you with care you need
      </p>

    <Link to="/support2">
                          {" "}
      <button className="mt-40 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg transition-transform duration-300 hover:scale-105">
        Find out more
      </button>
      </Link>
    </div>
   
    <div className="bg-green-700 text-white p-6 rounded-lg w-80 ">
      <h2 className="text-xl font-bold">Types of treatment</h2>
      <p className="mt-2 text-sm">
      Explore things you can try that can get you on a pathway to feeling better
      </p>
      <Link to="/support3">
                          {" "}
      <button className="mt-40 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg transition-transform duration-300 hover:scale-105">
        Find out more
      </button>
      </Link>
    </div>
   
       
       
       
        
        
        
         
        
      
      </div>
    </div>
  );
};

export default Seekingsupport;
