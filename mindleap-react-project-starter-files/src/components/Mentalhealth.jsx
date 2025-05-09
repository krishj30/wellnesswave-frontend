import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Mentalhealth = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row w-full gap-6 pt-14 px-2 lg:px-2">
        <div className="flex-auto w-full p-8 flex flex-col justify-center md:w-1/2 lg:p-16 max-h-[550px]">
          <div className="content-holder overflow-hidden">
            <h1 className="text-[65px] md:text-5xl pb-5 lg:pb-8 md:leading-[60px] font-bold text-gray-800">
              Understanding mental health
            </h1>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="px-8 lg:px-20 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center text-center mt-12 mb-20">
        {/* Depression Card */}
        <div className="bg-[#3498db] text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-[400px]">
          <h2 className="text-3xl font-bold mb-4">Depression</h2>
          <p className="mt-2 text-sm text-white/90 leading-relaxed">
            There are organisations that can help you with the different challenges in daily life.
          </p>
          <p className="mt-4 text-sm text-white/90 leading-relaxed">
            Learn about symptoms, causes, and treatment options. Get support from professionals who understand what you're going through.
          </p>
          <div className="mt-auto">
            <Link to="/understandingdepression">
              <button className="bg-white text-[#3498db] px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-gray-50 w-full">
                Find out more
              </button>
            </Link>
          </div>
        </div>

        {/* Relationship Card */}
        <div className="bg-[#3498db] text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-[400px]">
          <h2 className="text-3xl font-bold mb-4">Relationship</h2>
          <p className="mt-2 text-sm text-white/90 leading-relaxed">
            Explore how relationships affect mental wellbeing.
          </p>
          <p className="mt-4 text-sm text-white/90 leading-relaxed">
            Discover ways to build healthy relationships and understand the connection between relationships and mental health.
          </p>
          <div className="mt-auto">
            <Link to="/relationship">
              <button className="bg-white text-[#3498db] px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-gray-50 w-full">
                Find out more
              </button>
            </Link>
          </div>
        </div>

        {/* Anxiety Card */}
        <div className="bg-[#3498db] text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-[400px]">
          <h2 className="text-3xl font-bold mb-4">Anxiety</h2>
          <p className="mt-2 text-sm text-white/90 leading-relaxed">
            Learn about anxiety and its impact on daily life.
          </p>
          <p className="mt-4 text-sm text-white/90 leading-relaxed">
            Understand anxiety symptoms, triggers, and effective coping strategies to manage anxiety better.
          </p>
          <div className="mt-auto">
            <Link to="/understandinganxiety">
              <button className="bg-white text-[#3498db] px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-gray-50 w-full">
                Find out more
              </button>
            </Link>
          </div>
        </div>

        {/* Alcohol and Drugs Card */}
        <div className="bg-[#3498db] text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-[400px]">
          <h2 className="text-3xl font-bold mb-4">Alcohol and Drugs</h2>
          <p className="mt-2 text-sm text-white/90 leading-relaxed">
            Learn about how alcohol and drugs affect mental health.
          </p>
          <p className="mt-4 text-sm text-white/90 leading-relaxed">
            Explore the relationship between substance use and mental health, and find resources for support.
          </p>
          <div className="mt-auto">
            <Link to="/alcohol">
              <button className="bg-white text-[#3498db] px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-gray-50 w-full">
                Find out more
              </button>
            </Link>
          </div>
        </div>

        {/* Anxiety Test Card */}
        <div className="bg-[#3498db] text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-[400px]">
          <h2 className="text-3xl font-bold mb-4">Anxiety Test</h2>
          <p className="mt-2 text-sm text-white/90 leading-relaxed">
            Taking a self-test may help you think of what you can do next.
          </p>
          <p className="mt-4 text-sm text-white/90 leading-relaxed">
            Complete a confidential anxiety assessment to better understand your symptoms and get personalized recommendations.
          </p>
          <div className="mt-auto">
            <Link to="/Anxietyprediction">
              <button className="bg-white text-[#3498db] px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-gray-50 w-full">
                Find out more
              </button>
            </Link>
          </div>
        </div>

        {/* Depression Test Card */}
        <div className="bg-[#3498db] text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-[400px]">
          <h2 className="text-3xl font-bold mb-4">Depression Test</h2>
          <p className="mt-2 text-sm text-white/90 leading-relaxed">
            Taking a self-test may help you think of what you can do next.
          </p>
          <p className="mt-4 text-sm text-white/90 leading-relaxed">
            Take our confidential depression screening to gain insights into your emotional well-being and find appropriate support.
          </p>
          <div className="mt-auto">
            <Link to="/depressionform">
              <button className="bg-white text-[#3498db] px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-gray-50 w-full">
                Find out more
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
    </div>
  );
};

export default Mentalhealth;
