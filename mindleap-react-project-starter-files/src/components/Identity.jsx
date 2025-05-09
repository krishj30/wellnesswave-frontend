import React from "react";

const identity = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row w-full gap-6 mt-14 px-10 lg:px-32">
        {/* Left Content Section */}
        <div className="flex-auto w-full p-6 bg-gray-50 flex flex-col justify-center md:w-1/2 lg:p-16 max-h-[550px]">
          <div className="content-holder overflow-hidden">
            <h1 className="text-heroBg font-bold text-[55px] md:text-5xl pb-5 lg:pb-8 md:leading-[60px]">
              Embracing Your Identity and Community 
            </h1>
            <p className="text-black font-normal text-[15px] md:text-l">
            Connecting with our roots, discovering our unique strengths or simply embracing our true self can enhance our sense of identity, fostering happiness and resilience.            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-auto md:w-1/2 w-full h-auto flex justify-center mt-20">
          <img
            src="https://cdn.sanity.io/images/emne51dm/production/476a00aa445979b7a721bdca061e7cce873d300a-647x550.jpg"
            alt="Varanasi Ghats"
            className="max-w-full mx-auto rounded-lg shadow"
          />
        </div>
      </div>

      {/* Cultural Identity Section */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="max-w-7xl mx-auto text-gray-900">
         

          <blockquote className="italic text-lg font-semibold my-4">
            “Understanding your roots gives you strength. Whether it's through language, music, or rituals, staying connected to your heritage builds confidence and purpose.”
            <span className="block mt-2">— Ramesh Sharma, Psychologist</span>
          </blockquote>

          <p className="text-lg">
            Embracing identity goes beyond just ancestry—it includes gender, religion, food habits, festivals, and even the values passed down through generations.
          </p>
        </div>
      </div>

      {/* Cultural Connections */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="max-w-7xl mx-auto text-gray-900">
          <h2 className="text-2xl font-bold mb-4">Cultural Connections</h2>

          <blockquote className="italic text-lg font-semibold mb-4">
            “A strong connection to our culture fosters confidence and helps us navigate life's challenges.”
            <span className="block mt-2">— Dr. Ayesha Khan, Mental Health Expert</span>
          </blockquote>

          <p className="text-lg">
            Culture in India is rich and diverse, spanning languages, cuisines, traditions, and spiritual beliefs. Participating in religious festivals like Diwali, Eid, or Pongal, practicing yoga, or engaging in traditional arts like Kathak and Bharatanatyam can foster a deeper sense of belonging.
          </p>

          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Learn about your heritage:</strong> Read about your region’s history, folklore, and linguistic traditions.</li>
            <li><strong>Celebrate festivals:</strong> Engage in community celebrations that connect you to your roots.</li>
            <li><strong>Participate in local traditions:</strong> Whether it’s visiting temples, gurdwaras, or attending cultural gatherings, involvement strengthens identity.</li>
            <li><strong>Engage in local art forms:</strong> Classical music, handloom weaving, and folk dances all carry rich cultural legacies.</li>
          </ul>

          <p className="text-lg mt-6">
            Learn more about India's cultural heritage <a href="https://www.indiaculture.nic.in/" className="text-primary font-bold">here</a>.
          </p>
        </div>
      </div>

      {/* Finding Your Community */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="max-w-7xl mx-auto text-gray-900">
          <h2 className="text-2xl font-bold mb-4">Finding Your Community</h2>

          <p className="text-lg">
            In a country as diverse as India, finding like-minded individuals can offer immense emotional support. Community bonding through festivals, volunteer work, and neighborhood events strengthens relationships and improves mental well-being.
          </p>

          <blockquote className="italic text-lg font-semibold my-4">
            “India’s diversity is its biggest strength. When we embrace different cultures and backgrounds, we grow together.”
            <span className="block mt-2">— Neha Sharma, Community Worker</span>
          </blockquote>

          <ul className="list-disc list-inside mt-4 space-y-2">
            <li><strong>Join cultural groups:</strong> Many cities have organizations promoting regional arts and traditions.</li>
            <li><strong>Participate in social work:</strong> Volunteering with NGOs like <a href="https://www.smilefoundationindia.org/" className="text-primary font-bold">Smile Foundation</a> or <a href="https://www.goonj.org/" className="text-primary font-bold">Goonj</a> can help connect you with like-minded individuals.</li>
            <li><strong>Explore regional cuisine:</strong> Food plays a huge role in community bonding—cooking and sharing traditional dishes can bring people together.</li>
            <li><strong>Attend language meetups:</strong> Many cities have groups that teach and promote regional languages like Sanskrit, Tamil, and Bengali.</li>
          </ul>
        </div>
      </div>

      {/* Seeking Support */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="max-w-7xl mx-auto text-gray-900">
          <h2 className="text-2xl font-bold mt-8 mb-4">Seeking Support</h2>

          <p className="text-lg">
            If you ever feel disconnected from your identity or struggle with your emotions, know that support is available. Speaking with someone can help you find clarity and guidance.
          </p>

          <p className="text-lg mt-4">Here are some mental health helplines in India:</p>

          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>
              Free call to <strong>Vandrevala Foundation Helpline</strong> at 1860 266 2345 or 9999 666 555 for immediate emotional support.
            </li>
            <li>
              <strong>AASRA Helpline</strong>: 91-9820466726 – Suicide prevention and mental health support.
            </li>
            <li>
              <a href="https://www.snehi.org/" className="text-primary font-bold">Snehi</a> – Free counseling for emotional wellness.
            </li>
            <li>
              <a href="https://www.icallhelpline.org/" className="text-primary font-bold">iCall</a> – Confidential mental health support via chat and calls.
            </li>
          </ul>

          <p className="text-lg mt-6">
            You are not alone—there are people and organizations that can help you find strength in your journey.
          </p>
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

export default identity;
