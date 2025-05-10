import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Takingcare = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row w-full gap-6 mt-14 px-10 lg:px-32">
        {/* Left Content Section */}
        <div className="flex-auto w-full p-6 bg-gray-50 flex flex-col justify-center md:w-1/2 lg:p-16 max-h-[550px]">
          <div className="content-holder overflow-hidden">
            <h1 className="text-heroBg font-bold text-[65px] md:text-5xl pb-5 lg:pb-8 md:leading-[60px]">
            Taking care   
            </h1>
            <h2 className="text-heroBg font-semibold text-xl md:text-2xl pb-6">
            Looking after yourself
            </h2>
            <p className="text-black font-normal text-[15px]  md:text-xl">
            "Your greatest strength lies within you. Protect your well-being, and whatever you do, always take care of yourself."
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-auto md:w-1/2 w-full h-auto flex justify-center mt-20">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet="https://cdn.sanity.io/images/emne51dm/production/91b605db1184acaa52fa9d66c021f9baec646fbc-647x550.jpg"
            />
            <img
              src="https://cdn.sanity.io/images/emne51dm/production/91b605db1184acaa52fa9d66c021f9baec646fbc-647x550.jpg"
              alt="Two females chatting in a kitchen"
              className="max-w-full mx-auto rounded-lg shadow"
            />
          </picture>
        </div>
      </div>

      

     
      <div className="px-10 lg:px-32 py-10">
      <h1 className="text-3xl font-bold mb-6">The building blocks</h1>
      <p className="mb-6">
        Getting through challenging times is difficult. Doing activities that uplift, calm and restore your spirit can improve our mental health. Discovering what works for you might need some patience and time. Understand that every step is a move towards understanding yourself better.
      </p>

      {/* Sleep Section */}
      <h2 className="text-2xl font-semibold mb-4">Sleep</h2>
      <p className="mb-4">
        A restful sleep improves decision making, memory and emotional regulation. Creating sleep-friendly habits such as a consistent sleep schedule and creating an ideal sleep environment can be life changing.
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Use an eye mask or blackout curtains to block out light.</li>
        <li>Use earplugs or listen to calming music, an audiobook or a podcast.</li>
        <li>Go to sleep and wake up at the same time every day.</li>
        <li>Stop or reduce screen time, work, caffeine and alcohol in the few hours before bed.</li>
        <li>Allow 30 minutes to relax and wind down before bed.</li>
        <li>Try to get your bedroom to a cool, comfortable temperature.</li>
        <li>Get some natural light and exercise throughout the day to promote good sleep at night.</li>
      </ul>
      
      {/* Nutrition Section */}
      <h2 className="text-2xl font-semibold mb-4">Nutrition</h2>
      <p className="mb-4">
        Food not only nourishes the body but also connects us to our heritage and community. Eating a balanced diet means feeding both your body and your mind.
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Think of some meals that are easy and fast to make if you aren’t up to cooking every day.</li>
        <li>Eat something comforting that makes you feel good. This could be a family recipe, a cultural delicacy or your favourite food.</li>
        <li>Share a meal with someone. Eating together and sharing food can be a great way to connect.</li>
      </ul>

      {/* Movement Section */}
      <h2 className="text-2xl font-semibold mb-4">Movement</h2>
      <p className="mb-6">
        Physical activity can be a source of joy, health and connection. You might exercise for the endorphins, to help with sleep, to improve your health, to be able to play with your mokopuna, to connect with the taiao, to connect with people or to spend time by yourself.
      </p>
      <p className="mb-6">
        Try walking around the garden or around the block to get you started. Whether it’s joining a local sports team or dancing to your favourite tune, find what moves you.
      </p>

      {/* Connection Section */}
      <h2 className="text-2xl font-semibold mb-4">Connection</h2>
      <p className="mb-6">
        Embrace the power of relationships. Connect with your roots, engage with your community and cherish the bonds you form. From casual meet-ups to volunteering, every interaction can add value to your life.
      </p>
    </div>
    
    <div className="px-10 lg:px-32 py-10">
  <h1 className="text-3xl font-bold mb-4">Navigating stress</h1>
  <p className="mb-6">
    Experiencing stress is a natural part of life, but ongoing stress can be draining. While life’s challenges can create
    stress, things like cost of living, discrimination, and climate concerns also have huge impacts.
  </p>

  <h2 className="text-2xl font-bold mb-3">Dealing with stress</h2>
  <p className="mb-4">
    When we are feeling stressed, our body often goes into a flight, fight, freeze response. Here are some ideas to help
    with these feelings and approach things with a clear head:
  </p>
  <ul className="list-disc list-inside space-y-2">
    <li><b>Take some deep breaths:</b> This can help to bring your heart rate down and let your body relax.</li>
    <li><b>Activate your senses:</b> Try taking a cold shower, eating something spicy, or drinking a hot drink.</li>
    <li>
      <b>What gets you out of your head for a little while?</b> Try listening to music you love, getting out of the house,
      or helping a friend to run errands.
    </li>
    <li>
      Try the tools on <a href="https://www.smallsteps.org.nz/" className="text-primary underline">Small Steps</a> to learn strategies to manage stress.
    </li>
  </ul>

  <h2 className="text-2xl font-bold mt-6 mb-3">Dealing with stressors</h2>
  <p className="mb-4">
    From breaking challenges into smaller tasks to talking it out, find what helps you deal with stress:
  </p>
  <ul className="list-disc list-inside space-y-2">
    <li>Write it down to get it out of your head.</li>
    <li>Kōrero – talk with someone you trust. Ask them if it’s okay to vent or ask them for advice.</li>
    <li>Break the problem down into smaller, more manageable tasks that you can do one by one.</li>
    <li>
      Reflect on how you use things like smoking, <a href="Alcohol" className="text-primary underline">drinking and drugs</a> to manage
      stress and how you might want this to change.
    </li>
  </ul>

 
</div>

      <div className="bg-[#FAF9F6] text-black px-6 sm:px-10 lg:px-20 py-12">

      <div className="bg-pink-100 py-12 px-6 mb-0 mt-0" >
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

export default Takingcare;
