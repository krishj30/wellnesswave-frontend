import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Support1 = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row w-full gap-6 mt-14 px-10 lg:px-32">
        {/* Left Content Section */}
        <div className="flex-auto w-full p-6 bg-gray-50 flex flex-col justify-center md:w-1/2 lg:p-16 max-h-[550px]">
          <div className="content-holder overflow-hidden">
            <h1 className="text-heroBg font-semibold text-[65px] md:text-5xl pb-5 lg:pb-8 md:leading-[60px]">
              Support with daily life
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
              srcSet="https://cdn.sanity.io/images/emne51dm/production/36230e56b007830aabdeb3a553c023e649e245e3-647x550.jpg"
            />
            <img
              src="https://cdn.sanity.io/images/emne51dm/production/36230e56b007830aabdeb3a553c023e649e245e3-647x550.jpg"
              alt="Two females chatting in a kitchen"
              className="max-w-full mx-auto rounded-lg shadow"
            />
          </picture>
        </div>
      </div>

      {/* New Section - Choosing who to talk to */}
      <div className="px-10 lg:px-32 py-10">
        <p className="text-black text-xl">
          Financial stress, housing issues, health concerns or other significant
          changes – life's challenges can deeply affect our wellbeing. There is
          support available to you when you need it. Whether it's government
          assistance or community outreach, there's help available. Sometimes
          support can come from those already in your life such as your church
          or local community group. You and your mental health deserve support,
          no matter where you are on your journey
        </p>

        {/* Choosing Who to Talk To */}

        <h1 className="text-black mt-24 text-3xl font-bold ">
          Financial support
        </h1>
        <p className=" text-black mt-4 text-xl">
          With the rising cost of living in India, many face financial and
          emotional challenges. Managing finances can be overwhelming,
           There are services that
          can help with budgeting and financial support. When seeking support in
          india, you can always have someone by your side – for guidance,
          moral support or emotional support. There's no shame in seeking help.
          It's a sign of strength
        </p>
      </div>

      <div className="bg-white text-center py-8 px-4">
        <h1 className="text-4xl font-bold text-black">
        Help is available in India through several organisations
        </h1>
       
      </div>

      {/* Cards Section */}
      <div className="px-10 lg:px-10 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center text-center pr-32">
  <div className="bg-red-900 text-white p-6 rounded-lg w-80">
    <h2 className="text-xl font-bold">      Samarth offers comprehensive home care services for elderly parents across India.
    </h2>
    
    <a href="https://care.samarth.community/" target="_blank" rel="noopener noreferrer">
      <button className="mt-20 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg transition-transform duration-300 hover:scale-105">
        Find out more
      </button>
    </a>
  </div>

  <div className="bg-red-900 text-white p-6 rounded-lg w-80">
    <h2 className="text-xl font-bold text-center">Anvayaa provides round-the-clock services with dedicated care managers to assist your parents.
    </h2>
    <p className="mt-2 text-sm">
    </p>
    <a href="https://www.anvayaa.com/" target="_blank" rel="noopener noreferrer">
      <button className="mt-20 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg transition-transform duration-300 hover:scale-105">
        Find out more
      </button>
    </a>
  </div>

  <div className="bg-red-900 text-white p-6 rounded-lg w-80">
    <h2 className="text-xl font-bold">      Life Circle specializes in home care and elderly care services with qualified caregivers.
    </h2>
    
    <a href="https://lifecircle.in/" target="_blank" rel="noopener noreferrer">
      <button className="mt-20 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg transition-transform duration-300 hover:scale-105">
        Find out more
      </button>
    </a>
  </div>

  <div className="bg-red-900 text-white p-6 rounded-lg w-80">
    <h2 className="text-xl font-bold">      Dignity Foundation helps elders age productively and live their golden years with dignity.
    </h2>
    <p className="mt-2 text-sm">
    </p>
    <a href="https://dignityfoundation.com/" target="_blank" rel="noopener noreferrer">
      <button className="mt-20 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg transition-transform duration-300 hover:scale-105">
        Find out more
      </button>
    </a>
  </div>

  <div className="bg-red-900 text-white p-6 rounded-lg w-80">
    <h2 className="text-xl font-bold">      Narayan Seva Sansthan focuses on rehabilitating disabled individuals from underprivileged segments.
    </h2>
    <p className="mt-2 text-sm">
    </p>
    <a href="https://www.narayanseva.org/" target="_blank" rel="noopener noreferrer">
      <button className="mt-20 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg transition-transform duration-300 hover:scale-105">
        Find out more
      </button>
    </a>
  </div>

  <div className="bg-red-900 text-white p-6 rounded-lg w-80">
    <h2 className="text-xl font-bold">      Sevalaya offers free education, healthcare, and social welfare services to underprivileged communities.
    </h2>
    
    <a href="http://www.sevalaya.org/" target="_blank" rel="noopener noreferrer">
      <button className="mt-20 bg-white text-black px-4 py-2 rounded-full font-bold shadow-lg transition-transform duration-300 hover:scale-105">
        Find out more
      </button>
    </a>
  </div>
</div>


      <div className="bg-[#FAF9F6] text-black px-6 sm:px-10 lg:px-20 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Social support</h1>
        <p className="text-lg mb-9">
          There is a diverse range of support services available in India.
          Your access might vary based on your location, but we’ve listed a few
          to get you started.
        </p>

        {/* Support Links */}
        <div className="space-y-6">
  <p>
    <a
      href="https://socialjustice.gov.in/"
      className="font-bold text-primary underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Department of Social Justice and Empowerment
    </a>{" "}
    provides welfare schemes for marginalized communities, including Scheduled Castes, Other Backward Classes, and senior citizens.
  </p>

  <p>
    Your{" "}
    <a
      href="https://nmlindia.nic.in/"
      className="font-bold text-primary underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      local library
    </a>{" "}
    offers a variety of information and links to services around you. Many libraries also provide courses in reading, writing, finance, and digital literacy.
  </p>

  <p>
    If you are in an unsafe situation and need help,{" "}
    <a
      href="https://ncw.nic.in/"
      className="font-bold text-primary underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      National Commission for Women (NCW)
    </a>{" "}
    provides emergency assistance for women in distress.
  </p>

  <p>
    <a
      href="https://www.childlineindia.org/"
      className="font-bold text-primary underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Childline India Foundation
    </a>{" "}
    operates a 24/7 helpline (1098) for children in need of care and protection.
  </p>

  <p>
    <a
      href="https://www.mentalhealthindia.net/"
      className="font-bold text-primary underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Mental Health India
    </a>{" "}
    provides support services and counseling for individuals experiencing mental health issues.
  </p>

  <p>
    <a
      href="https://www.thebetterindia.com/263734/mental-health-helplines-india-free-support-depression-anxiety-samaritans/"
      className="font-bold text-primary underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      The Better India Mental Health Helplines
    </a>{" "}
    offers free helplines for people seeking mental health support.
  </p>

  <p>
    <a
      href="https://niepmd.tn.nic.in/"
      className="font-bold text-primary underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      National Institute for Empowerment of Persons with Multiple Disabilities (NIEPMD)
    </a>{" "}
    provides rehabilitation, education, and employment opportunities for individuals with disabilities.
  </p>

  <p>
    <a
      href="https://www.india-inclusion.org/"
      className="font-bold text-primary underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      India Inclusion Foundation
    </a>{" "}
    works towards making India more inclusive for people with disabilities.
  </p>

  <p>
    If you have children under 5,{" "}
    <a
      href="https://www.nipccd.nic.in/"
      className="font-bold text-primary underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      National Institute of Public Cooperation and Child Development (NIPCCD)
    </a>{" "}
    provides parenting advice and early childhood care programs.
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

export default Support1;
