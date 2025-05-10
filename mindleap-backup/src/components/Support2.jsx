import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Support2 = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row w-full gap-6 mt-14 px-10 lg:px-32">
        {/* Left Content Section */}
        <div className="flex-auto w-full p-6 bg-gray-50 flex flex-col justify-center md:w-1/2 lg:p-16 max-h-[550px]">
          <div className="content-holder overflow-hidden">
            <h1 className="text-heroBg font-semibold text-[65px] md:text-5xl pb-5 lg:pb-8 md:leading-[60px]">
              People who can help
            </h1>
            <h2 className="text-heroBg font-semibold text-xl md:text-2xl pb-6">
              You are not alone
            </h2>
            <p className="text-black font-light text-[15px]  md:text-lg">
              There are many people in the community who are there to support
              you.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-auto md:w-1/2 w-full h-auto flex justify-center mt-20">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet="https://cdn.sanity.io/images/emne51dm/production/fca3a4f26fe6b1404da5084e68b74efbf1cda7d1-647x550.jpg"
            />
            <img
              src="https://cdn.sanity.io/images/emne51dm/production/fca3a4f26fe6b1404da5084e68b74efbf1cda7d1-647x550.jpg"
              alt="Two females chatting in a kitchen"
              className="max-w-full mx-auto rounded-lg shadow"
            />
          </picture>
        </div>
      </div>
      <div className="bg-[#FAF9F6] text-black px-6 sm:px-10 lg:px-20 py-12">
        {/* Finding Your Support Network */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Finding your support network
          </h1>
          <p className="text-lg mb-4">
            It's natural to feel isolated during tough times. You might feel
            disconnected or believe that no one will understand. Many people
            have felt this way and have found their path forward. You can too.
          </p>
          <p className="text-lg">
            Begin by connecting with one person, and over time, grow a
            supportive circle of friends, family, colleagues, educators,
            community leaders, and healthcare professionals. Find the people who
            will stand by you and help you learn, grow, and heal. This section
            suggests potential members of your support network and how they can
            help. Remember, your support network is unique to you, and you
            decide who's a part of it.
          </p>
        </div>

        <div className="bg-gray-50 min-h-screen">
      <div className="w-full max-w-full"> {/* Takes full width with no margins */}
        
        {/* Peer Support Section */}
        <h1 className="text-3xl font-bold mb-4">Peer Support</h1>
        <p className="text-black mb-4">
          Peer support is about mutual understanding and shared experiences of mental distress like anxiety or depression.
          Unlike casual conversations with friends, peer support is structured and led by trained professionals who use
          shared experiences to provide meaningful guidance and encouragement.
        </p>
        <p className="italic text-lg mb-4">
          "That journey through peer support and being a peer supporter and staying on the phone lines helped me recover." –{" "}
          <a
            href="https://www.sangath.in/"
            className="text-blue-600 font-bold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Sangath's Story
          </a>
        </p>
        <p className="text-gray-700 mb-4">
          These services can help you find peer support:
        </p>
        <ul className="list-disc pl-4 text-black space-y-2">
          <li>
            <a
              href="https://www.mentalhealthindia.net/"
              className="text-blue-600 font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Community Support Groups | Mental Health India
            </a>
          </li>
          <li>
            <a
              href="https://www.helplinelaw.com/indian-helpline.php"
              className="text-blue-600 font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Family Services Directory
            </a>
          </li>
          <li>
            <a
              href="https://www.india.gov.in/official-website-national-mental-health-programme"
              className="text-blue-600 font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Citizens Advice Bureau India
            </a>
          </li>
          <li>
            <a
              href="https://www.vandrevalafoundation.com/"
              className="text-blue-600 font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vandrevala Foundation - Mental Health Support
            </a>
          </li>
        </ul>

        {/* Health Professionals Section */}
        <h1 className="text-3xl font-bold mt-10 mb-4">Health Professionals</h1>
        <p className="text-black mb-4">
          Health professionals trained in mental health can provide guidance and referrals. Start by consulting a doctor
          who can direct you to the right resources and specialists.
        </p>
        <h2 className="text-xl font-bold mt-6">Things to remember when making an appointment:</h2>
        <ul className="list-disc pl-4 text-black space-y-2 mt-2">
          <li>Ask for extra time to openly talk with your doctor.</li>
          <li>Consider taking a family member or close friend for support.</li>
          <li>Share your feelings and symptoms clearly with the professional.</li>
          <li>Note down any treatments or medications you've tried.</li>
          <li>Inform your doctor about any other medications you are currently taking.</li>
        </ul>

        <p className="text-black mt-4">
          If your current treatment plan doesn’t seem to be working, you can discuss alternative approaches with your doctor.
          If you feel uncomfortable with a certain professional, you have the right to seek a second opinion.
        </p>

        <p className="text-black mt-4">
          <a
            href="https://www.india.gov.in/official-website-employees-state-insurance-corporation-esic"
            className="text-blue-600 font-bold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ESIC (Employee's State Insurance Corporation)
          </a>{" "}
          may help cover the cost of medications and therapy for eligible individuals.
        </p>

        <p className="text-black mt-4">
          Learn more about different{" "}
          <a
            href="https://www.nimhans.ac.in/"
            className="text-blue-600 font-bold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            types of treatment available in India.
          </a>
        </p>

       
      </div>
    </div>
    <div className="bg-pink-100 py-12 px-6 mb-0 mt-28" >
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Take the next step
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-purple-500 text-white p-6 shadow-lg">
          <h3 className="text-lg font-bold">Get help</h3>
          <p className="mt-2">Call or text 112, 24 hours a day, 7 days a week.</p>
          <a href="#" className="mt-4 block font-bold hover:underline">
            Get help now →
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-purple-500 text-white p-6  shadow-lg">
          <h3 className="text-lg font-bold">Asking for help</h3>
          <p className="mt-2">Take the first step.</p>
          <a href="start-conversation" className="mt-11 block font-bold hover:underline">
            Learn more →
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-purple-500 text-white p-6  shadow-lg">
          <h3 className="text-lg font-bold">Types of treatment</h3>
          <p className="mt-2">Explore your options.</p>
          <a href="support3" className="mt-11 block font-bold hover:underline">
            Learn more →
          </a>
        </div>

        {/* Card 4 */}
        <div className="bg-purple-500 text-white p-6  shadow-lg">
          <h3 className="text-lg font-bold">Supporting someone</h3>
          <p className="mt-2">Start the conversation.</p>
          <a href="Seekingsupport" className="mt-11 block font-bold hover:underline">
            Learn more →
          </a>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Support2;
