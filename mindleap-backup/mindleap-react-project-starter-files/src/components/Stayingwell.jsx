import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


const Stayingwell = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row w-full gap-6 mt-14 px-10 lg:px-32">
        {/* Left Content Section */}
        <div className="flex-auto w-full p-6 bg-gray-50 flex flex-col justify-center md:w-1/2 lg:p-16 max-h-[550px]">
          <div className="content-holder overflow-hidden">
            <h1 className="text-heroBg font-semibold text-[65px] md:text-5xl pb-5 lg:pb-8 md:leading-[60px]">
              Staying Well
            </h1>
            <h2 className="text-heroBg font-semibold text-xl md:text-2xl pb-6">
              Life's journey has its ups and downs
            </h2>
            <p className="text-black font-normal text-[15px]  md:text-xl">
              There are many in the community ready to guide and stand beside
              you. Remember, you're not alone.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-auto md:w-1/2 w-full h-auto flex justify-center mt-20">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet="https://i.pinimg.com/736x/11/14/8c/11148c3a4d12fc8b7c7898170a5766e1.jpg"
            />
            <img
              src="https://i.pinimg.com/736x/11/14/8c/11148c3a4d12fc8b7c7898170a5766e1.jpg"
              alt="Two females chatting in a kitchen"
              className="max-w-full mx-auto rounded-lg shadow"
            />
          </picture>
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-10 lg:px-10 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center text-center mt-36 ">
        <div className="bg-red-900 text-white p-6 rounded-lg w-80 ">
          <h2 className="text-xl font-bold">Taking care</h2>
          <p className="mt-2 text-sm">
            There are many ways to get better and stay well.
          </p>
          <Link to="/takingcare">
            {" "}
            <button className="mt-40 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg transition-transform duration-300 hover:scale-105">
              Find out more
            </button>
          </Link>
        </div>

        <div className="bg-slate-200 text-black p-14 rounded-lg w-80 ">
          <h2 className="text-xl font-bold">
            "That’s how I take care of myself. The laughter of grandchildren.
            The laughter of children. The hugs from your family."
          </h2>
        </div>

        <div className="bg-rose-300 text-white p-6 rounded-lg w-80 ">
          <h2 className="text-xl font-bold">
            Embracing your identity and community
          </h2>
          <p className="mt-2 text-sm">
            "Discover strength and belonging by embracing who you.
          </p>
          <Link to="/identity">
            {" "}
            <button className="mt-40 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg transition-transform duration-300 hover:scale-105">
              Find out more
            </button>
          </Link>
        </div>

        <div className="bg-red-900 text-white p-6 rounded-lg w-80 ">
          <h2 className="text-xl font-bold">Is it depression or anxiety?</h2>
          <p className="mt-2 text-sm">
            There are organisations that can help you with the different
            challenges in daily life.
          </p>
          <button className="mt-40 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg transition-transform duration-300 hover:scale-105">
            Find out more
          </button>
        </div>
      </div>

      <div className="bg-[#FAF9F6] text-black px-6 sm:px-10 lg:px-20 py-12"></div>
    </div>
  );
};

export default Stayingwell;
