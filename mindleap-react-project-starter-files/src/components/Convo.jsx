import React from "react";
import { FaQuoteLeft } from "react-icons/fa";


const Convo = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row w-full gap-6 mt-14 px-10 lg:px-32 ">
        {/* Left Content Section */}
        <div className="flex-auto w-full p-6 bg-gray-50 flex flex-col justify-center md:w-1/2 lg:p-16  mt-20 max-h-[525px]">
          <div className="content-holder overflow-hidden">
            <h1 className="text-heroBg font-semibold text-[65px] md:text-5xl pb-5 lg:pb-8 md:leading-[60px]">
            Asking for help
       </h1>
            <h2 className="text-heroBg font-semibold text-xl md:text-2xl pb-6">
            Seeking help can take a lot of courage.
            </h2>
            <p className="text-black font-normal text-[15px]  md:text-xl">
            Regardless of where you are in your journey, it is always good to have others around for support.            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-auto md:w-1/2 w-full h-auto flex justify-center mt-20">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet="https://cdn.sanity.io/images/emne51dm/production/516967ad7142fe2ff4b22d938187d524ebae80a8-647x550.jpg"
            />
            <img
              src="https://cdn.sanity.io/images/emne51dm/production/516967ad7142fe2ff4b22d938187d524ebae80a8-647x550.jpg"
              alt="Two females chatting in a kitchen"
              className="max-w-full mx-auto rounded-lg shadow"
            />
          </picture>
        </div>
      </div>
      {/* New Section - Choosing who to talk to */}
      <div className="px-10 lg:px-32 py-10">
        <p className="text-black text-xl">
          Reaching out for support can be challenging, but it’s a crucial step towards well-being. It is okay to feel alone, and it is normal to be hesitant to open up. The first step can be the hardest.
        </p>
        <p className="italic text-black mt-4 gap-8">
          "I think it’s important to ask for help. Ask anyone for help and keep asking because you might not get it the first time.” –
          <a href="https://youtu.be/cRnV6wMZOns" className="font-bold text-primary hover:underline"> Watch Philip’s story</a>
        </p>
      

        {/* Choosing Who to Talk To */}
        <h2 className="text-black font-bold text-2xl mt-6">Choosing who to talk to</h2>
        <p className="text-gray-800 mt-4">
          Reach out to someone you trust – a close friend, a family member, a teacher, a spiritual leader, or a healthcare professional. Trust your instincts and initiate a conversation.
        </p>
        <p className="italic text-gray-700 mt-4">
          "I rang this lady who was our Brownie group leader, whom I’d heard does some good counselling. And I rang her, and she just said, ‘Put the kids in the car and come over now, and we’ll talk.’" –
          <a href="https://youtu.be/2pQK-1TaNpo" className="font-bold text-primary hover:underline"> Watch Debra’s story</a>
        </p>
      </div>

      <div className="bg-white text-center py-8 px-4">
      <h1 className="text-4xl font-bold text-black">
        There are no perfect words, but there are lots of good ones
      </h1>
      <p className="text-gray-700 mt-2">
        Here are some ways we’ve started these conversations in the past:
      </p>
    </div>
      
      {/* Cards Section */}
      <div className="px-10 lg:px-20 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center text-center   ">
      <div className="max-w-md mx-auto bg-rose-200 shadow-lg  rounded-xl p-6 relative">
      <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
      <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">“I’m going through a tough time, and I think I need some help.”</h2>
      
    </div>
    <div className="max-w-md mx-auto bg-white shadow-lg  rounded-xl p-6 relative">
      <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
      <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">Perhaps I will survive because of you, and you will survive because of me.</h2>
      
    </div>
      <div className="max-w-md mx-auto bg-rose-200 shadow-lg  rounded-xl p-6 relative">
      <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
      <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">“I don’t really feel like myself, and I’m not sure what’s wrong. Can we talk about it?”</h2>
      
    </div>
    <div className="max-w-md mx-auto bg-rose-200 shadow-lg  rounded-xl p-6 relative">
      <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
      <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">“I just need to vent if that is okay for you.”</h2>
      
    </div>
    <div className="max-w-md mx-auto bg-rose-200 shadow-lg  rounded-xl p-6 relative">
      <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
      <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">“Things are hard right now and I’m struggling with my family/work/study. I’m not really sure what to do. Can you help me figure this out?”</h2>
      
    </div>
      <div className="max-w-md mx-auto bg-rose-200 shadow-lg  rounded-xl p-6 relative">
      <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
      <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">“I need help but do not want to go alone. Can you sit through it with me?”</h2>
      
    </div>
    <div className="max-w-md mx-auto bg-rose-200 shadow-lg  rounded-xl p-6 relative">
      <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
      <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">“I don’t feel well and I’m worried about how my mental health will manage if it gets worse. Do you have a minute to chat?”</h2>
      
    </div>
    <div className="max-w-md mx-auto bg-rose-200 shadow-lg  rounded-xl p-6 relative">
      <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
      <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">“I don’t feel like I have control over my thoughts and feelings, and they’re starting to scare me. Have you ever experienced something like this?”</h2>
      
    </div>
      <div className="max-w-md mx-auto bg-rose-200 shadow-lg  rounded-xl p-6 relative">
      <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
      <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">“I have some things I need to get off my chest.”</h2>
      
    </div>
    <div className="max-w-md mx-auto bg-white shadow-lg  rounded-xl p-6 relative">
      <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
      <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">Share your life experiences with the world. It will ease the load and help others.</h2>
      
    </div>
    <div className="max-w-md mx-auto bg-rose-200 shadow-lg  rounded-xl p-6 relative">
      <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
      <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">“I’m not okay and need to talk to someone. Can you help me think of what to say?”</h2>
      
    </div>
    <div className="max-w-md mx-auto bg-rose-200 shadow-lg  rounded-xl p-6 relative">
      <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
      <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">“It is hard for me to talk about this but I’m going through some stuff.”</h2>
      {/*  what support looks like sections/*/}
    </div>
    <div className="h-screen w-screen bg-[#FAF9F6] flex flex-col items-start pl-20"> {/* Align items to start (left) and add left padding */}
      <div className="mt-20"> {/* Add top margin for spacing from the top */}
        <h1 className="text-4xl font-bold mb-4 text-left">What could support look like?</h1> {/* Text aligned left within the heading */}
        <p className="text-lg mb-8 text-left">Support is different for everyone. If you're unsure about what you need, explore different options. Here are some ways people have found support:</p> {/* Text aligned left within the paragraph */}
      </div>
      <div> {/* Container for list, no need for mx-auto anymore */}
        <ul className="list-disc pl-6 text-lg text-left"> {/* Text aligned left within the list */}
          <li className="mb-4">Engaging in activities together like walks or movies.</li>
          <li className="mb-4">Openly sharing feelings.</li>
          <li className="mb-4">Regular check-ins.</li>
          <li className="mb-4">Helping with daily tasks such as chores or childcare.</li>
          <li className="mb-4">Help with medical appointments or going to them.</li>
          <li>Advice on communicating with others like employers or educators.</li>
        </ul>

      </div>
        <div className="bg-pink-100 py-12 px-6 mb-96 mt-20">  {/* Increased mb-20 to mb-40 */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Take the next step
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto pb-40">
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
      </div>
      
  
  );
};

export default Convo;
