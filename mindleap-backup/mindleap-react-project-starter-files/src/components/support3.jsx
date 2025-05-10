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
              Types of treatment
            </h1>
            <h2 className="text-heroBg font-semibold text-xl md:text-2xl pb-6">
              There are different ways to support your mental wellbeing.{" "}
            </h2>
            <p className="text-black font-light text-[15px]  md:text-l">
              Health professionals and support services offer solutions based on
              your needs. Explore different treatments to see what suits you.
              It's okay to try different methods or even combine them to find
              what truly helps.{" "}
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-auto md:w-1/2 w-full h-auto flex justify-center mt-20">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet="https://cdn.sanity.io/images/emne51dm/production/3278aa4542eadeb0ce1c5335816b3cb09cc27d09-647x550.jpg"
            />
            <img
              src="https://cdn.sanity.io/images/emne51dm/production/3278aa4542eadeb0ce1c5335816b3cb09cc27d09-647x550.jpg"
              alt="Two females chatting in a kitchen"
              className="max-w-full mx-auto rounded-lg shadow"
            />
          </picture>
        </div>
      </div>
      <div className="bg-[#FAF9F6] text-black px-6 sm:px-10 lg:px-20 py-12">
        {/* Finding Your Support Network */}
        <div className="mb-10">
         
          <p className="text-lg mb-4">
          There are many treatments that can help your mental wellbeing – each one offers something different. There's no one-size-fits-all approach – it's about finding what suits your needs. Every method has its advantages and challenges, which may be different for everyone.
          </p>
          <p className="text-lg">
          Your journey to finding effective strategies is ongoing. Some might work for now, while others might not be for you. Don’t get discouraged if the first thing you try isn’t the right fit. Filling your toolbox with strategies that work for you takes time. Your community is here to support you, sharing their experiences and insights.
           <br></br> <br></br></p>

          <p className="text-lg ">
          Taking the first step can be hard. You might find it easier to try with things you are already familiar with like going for a walk, spending time in nature, listening to or making music, meditation or prayer. For more ideas, try our page about taking care.          </p>
        </div>

        {/* Divider */}

        {/* Friends and Whānau */}
        <div className="flex-auto md:w-3/2 w-full h-auto flex justify-center mt-20">
        <div className="flex-auto md:w-1/2 w-full h-auto flex justify-center mt-20">
      <div className="w-full"> {/* Makes content span full width */}

        {/* Talking Therapies */}
        <h1 className="text-3xl font-bold mb-4">Talking therapies</h1>
        <p className="italic text-lg mb-4">
          "The group therapy was awesome for the fact that it made me realise, I’m not alone." –{" "}
          <a href="#" className="text-blue-600 font-bold hover:underline">
            Watch Gillian's story
          </a>
        </p>
        <p className="text-gray-700 mb-4">
          Talking therapies involve discussing your emotions, thoughts, and actions with a trained professional.
          Many professionals offer therapy, including psychologists, counsellors, social workers, nurses, and more.
          They'll recommend strategies, exercises, and discussions to help your journey.
        </p>
        <h2 className="text-xl font-bold mt-6">How these sessions can help:</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
          <li>Offer a safe space to express feelings.</li>
          <li>Guide you through big feelings and find ways to cope with them.</li>
          <li>Help you to understand and change your thoughts and behaviours.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Together with your therapist, you'll explore what works for you. Sessions can be individual or group-based
          depending on what you prefer.
        </p>
        <p className="text-gray-700 mt-4">
          Talking therapies can include counselling and psychotherapy. There are many different methods of doing talking
          therapy such as cognitive behavioural therapy. Your therapist will help you decide which method will work for you.
        </p>
        <p className="text-gray-700 mt-4">
          Finding the right therapist or programme might take time. It's okay to look for another professional if the
          current one isn't suiting your needs.
        </p>

        {/* Peer Support */}
        <h1 className="text-3xl font-bold mt-10">Peer support</h1>
        <p className="text-gray-700 mt-4">
          Peer support is the sharing of experiences to help one another. Trained peer support workers use their personal
          mental health journeys to assist others facing similar challenges.
        </p>
        <p className="italic text-lg mb-4">
          "That journey through peer support and being a peer supporter and staying on the phone lines helped me recover" –{" "}
          <a href="#" className="text-blue-600 font-bold hover:underline">
            Watch Michelle's story
          </a>
        </p>
        <h2 className="text-xl font-bold mt-6">Some benefits of peer support:</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
          <li>Relatability – talking to someone who truly understands.</li>
          <li>Gaining insights from others' experiences.</li>
          <li>Realising you're not alone and you can get through tough times.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Peer support can be in person or online. The{" "}
          <a href="#" className="text-blue-600 font-bold hover:underline">
            Citizens Advice Bureau
          </a>{" "}
          can help you find services in your area.
        </p>

        {/* Indigenous Medicine */}
        <h1 className="text-3xl font-bold mt-10">Indigenous medicine</h1>
        <p className="italic text-lg mb-4">
          "I had to first connect with the wairua through karakia, waiata and also regular visits to the awa." –{" "}
          <a href="#" className="text-blue-600 font-bold hover:underline">
            Watch Jamie's story
          </a>
        </p>
        <p className="text-gray-700 mt-4">
          Rongoa Māori is a traditional Māori healing approach that includes herbal remedies, physical therapies, and
          spiritual healing.
        </p>
        <p className="text-gray-700 mt-4">
          Services might include massage, pastoral support, herbal preparations, and cultural guidance. Similar practices
          exist in Pacific cultures.
        </p>
        <p className="text-gray-700 mt-4">
          These methods aim to reconnect you with your roots, family, and passions, holistically addressing wellbeing.
        </p>
        <p className="text-gray-700 mt-4">
          You can find a registered rongoā practitioner through ACC{" "}
          <a href="#" className="text-blue-600 font-bold hover:underline">
            here
          </a>.
        </p>

        {/* Medication */}
        <h1 className="text-3xl font-bold mt-10">Medication</h1>
        <p className="text-gray-700 mt-4">
          If you have tried a few different options and things aren't getting better, your healthcare professional might
          suggest medication for depression or anxiety. Medication can ease symptoms but won't change life circumstances
          affecting your mood.
        </p>
        <h2 className="text-xl font-bold mt-6">If you decide to start medication, your healthcare provider should clarify these things:</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
          <li>What symptoms it should help with.</li>
          <li>How long it will take to work.</li>
          <li>How long you will need to take it.</li>
          <li>Potential side effects.</li>
          <li>How to stop taking it safely.</li>
        </ul>
        <p className="text-gray-700 mt-4">
          Finding the right medication can take time. It may take a few weeks before you notice a change.
        </p>
        <p className="italic text-lg mb-4">
          "My doctor diagnosed me at that time with depression and started me on some antidepressants, which took a few
          weeks to take effect, but they made a huge difference." –{" "}
          <a href="#" className="text-blue-600 font-bold hover:underline">
            Watch Debra's story
          </a>
        </p>
        <p className="text-gray-700 mt-4">
          If side effects emerge, talk to your doctor. They will support you to lower your dose or change the medication.
        </p>
      </div>
    </div>
    </div>

      </div>
    </div>
  );
};

export default Support2;
