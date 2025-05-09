import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Understandingdepression = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row w-full gap-6 mt-14 px-10 lg:px-32 ">
        {/* Left Content Section */}
        <div className="flex-auto w-full p-6 bg-gray-50 flex flex-col justify-center md:w-1/2 lg:p-16  mt-20 max-h-[525px]">
          <div className="content-holder overflow-hidden">
            <h1 className="text-heroBg font-semibold text-[65px] md:text-5xl pb-5 lg:pb-8 md:leading-[60px]">
            Understanding anxiety            </h1>
            <h2 className="text-heroBg font-semibold text-xl md:text-2xl pb-6">
            Anxiety is a natural response to stress or perceived threats.
            </h2>
            <p className="text-black font-normal text-[15px]  md:text-xl">
When these feelings persist beyond the immediate situation, they can become overwhelming and affect daily life. Recognising and addressing these feelings is a sign of strength.

            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-auto md:w-1/2 w-full h-auto flex justify-center mt-20">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet="https://cdn.sanity.io/images/emne51dm/production/7fab4fe9e80aa7b0c1e4275fe580f9ac584ced05-647x550.jpg"
            />
            <img
              src="https://cdn.sanity.io/images/emne51dm/production/7fab4fe9e80aa7b0c1e4275fe580f9ac584ced05-647x550.jpg"
              alt="Two females chatting in a kitchen"
              className="max-w-full mx-auto rounded-lg shadow"
            />
          </picture>
        </div>
      </div>

      {/* New Section - Choosing who to talk to */}
      <div className=" p-8">
        <div className="max-w-7xl mx-auto text-gray-950">
          <p className="text-lg">
            Persistent feelings of sadness or hopelessness might be a sign of
            depression. Remember, depression can impact anyone, and reaching out
            for help is a sign of courage, not weakness.
          </p>

          <h2 className="text-2xl font-bold mt-6">Understanding Depression</h2>
          <p className="mt-2">
            It’s normal to feel sad sometimes, but when despair lingers and
            disrupts your daily life, it may indicate depression. Seeking
            support is essential if these emotions persist and interfere with
            your routine.
          </p>
          <p className="mt-2">
            Depression is more than sadness — it affects emotions, thoughts, and
            physical well-being. It can make simple tasks feel overwhelming and
            life feel meaningless.
          </p>

          <blockquote className="italic mt-4">
            "It wasn’t just emotional, but physical too. I had no energy and
            couldn’t get out of bed."
            <a href="#" className="font-bold text-black underline ml-1">
              See Donna's Experience
            </a>
          </blockquote>

          <p className="mt-2">
            Depression is more widespread than people realize — approximately
            one in six individuals in Aotearoa has experienced a period of
            depression.
          </p>

          <blockquote className="italic mt-4">
            "What I endured made me stronger and more resilient."
            <a href="#" className="font-bold text-black underline ml-1">
              Read Philip's Story
            </a>
          </blockquote>

          <p className="mt-2">
            Everyone's experience with depression is unique. Recognizing the
            symptoms helps you better understand your emotions. Remember,
            seeking help is a brave step, and with time and support, healing is
            possible.
          </p>

          <h2 className="text-2xl font-bold mt-6">
            What Does Depression Feel Like?
          </h2>
          <p className="mt-2">
            While this section is called "Understanding Depression," it's
            important to acknowledge that each person's experience is personal.
            The words that resonate with one person might differ for another —
            and that’s okay.
          </p>

          <blockquote className="italic mt-4">
            "I didn’t have a name for it, but I knew something was off. It felt
            like living with constant dread, like walking on eggshells."
            <a href="#" className="font-bold text-black underline ml-1">
              Listen to the Story
            </a>
          </blockquote>
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-10 lg:px-20 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center text-center   ">
      <div className="max-w-md mx-auto bg-green-100 shadow-lg rounded-xl p-6 relative">
  <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
  <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">
    Low-spirited, unmotivated, lacking enthusiasm.
  </h2>
</div>

        <div className="max-w-md mx-auto bg-green-100 shadow-lg  rounded-xl p-6 relative">
          <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
          <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">
          Deeply sad, gloomy, emotionally heavy

          </h2>
        </div>
        <div className="max-w-md mx-auto bg-green-100 shadow-lg  rounded-xl p-6 relative">
          <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
          <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">
          Uneasy, restless, anxious, worried, distressed
          </h2>
        </div>
        <div className="max-w-md mx-auto bg-green-100 shadow-lg  rounded-xl p-6 relative">
          <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
          <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">
          Isolated, detached, out of touch, misunderstood
          </h2>
        </div>
        <div className="max-w-md mx-auto bg-green-100 shadow-lg  rounded-xl p-6 relative">
          <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
          <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">
          Stressed, overloaded, mentally drained, struggling to cope

          </h2>
        </div>
        <div className="max-w-md mx-auto bg-green-100 shadow-lg  rounded-xl p-6 relative">
          <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
          <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">
          Embarrassed, self-conscious, shy, feeling exposed

          </h2>
        </div>
        <div className="max-w-md mx-auto bg-green-100 shadow-lg  rounded-xl p-6 relative">
          <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
          <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">
          Heartbroken, sorrowful, unhappy, emotionally drained

          </h2>
        </div>
        <div className="max-w-md mx-auto bg-green-100 shadow-lg  rounded-xl p-6 relative">
          <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
          <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">
          Emotionless, dull, unenthusiastic, lacking excitement
          </h2>
        </div>
        <div className="max-w-md mx-auto bg-green-100 shadow-lg  rounded-xl p-6 relative">
          <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
          <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">
            “I have some things I need to get off my chest.”
          </h2>
        </div>
        <div className="max-w-md mx-auto bg-green-100 shadow-lg  rounded-xl p-6 relative">
          <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
          <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">
            Share your life experiences with the world. It will ease the load
            and help others.
          </h2>
        </div>
        <div className="max-w-md mx-auto bg-green-100 shadow-lg  rounded-xl p-6 relative">
          <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
          <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">
            “I’m not okay and need to talk to someone. Can you help me think of
            what to say?”
          </h2>
        </div>
        <div className="max-w-md mx-auto bg-green-100 shadow-lg  rounded-xl p-6 relative">
          <FaQuoteLeft className="text-black text-4xl absolute -top-3 left-3" />
          <h2 className="text-xl font-bold text-gray-800 h-60 mt-16">
            “It is hard for me to talk about this but I’m going through some
            stuff.”
          </h2>
          {/*  what support looks like sections/*/}
        </div>
      </div>
      <div className=" p-8">
        <div className="max-w-7xl mx-auto text-gray-900 bg-white">
          <h2 className="text-2xl font-bold">| Mental Wellbeing</h2>
          <blockquote className="italic mt-4">
            “For me, it felt like an endless fog. I could do things, but there
            was no joy, only emptiness.”
            <a href="#" className="font-bold text-black underline ml-1">
              Watch Hannah's Story
            </a>
          </blockquote>

          <p className="mt-4">
            Emotions can be complex, and understanding them can be tough. If you
            notice any of these feelings, be kind to yourself and consider
            seeking support.
          </p>

          <h3 className="font-bold mt-6">Signs you might notice:</h3>
          <ul className="list-disc pl-5">
            <li>Feeling low or sad without knowing why.</li>
            <li>Feeling hopeless or emotionally drained.</li>
            <li>Sensing that others don’t understand you.</li>
            <li>Frequently feeling frustrated or irritated.</li>
            <li>Feeling guilty about past actions or choices.</li>
            <li>Having thoughts of self-harm or not wanting to exist.</li>
          </ul>

          <p className="mt-4 font-bold">
            Need support? Call 111 or visit the nearest emergency service.
          </p>

          <h3 className="font-bold mt-6">Ideas to help:</h3>
          <ul className="list-disc pl-5">
            <li>
              Try prayers, affirmations, or inspirational quotes to redirect
              your focus.
            </li>
            <li>
              Journal your emotions or list things you’re grateful for to
              organize your thoughts.
            </li>
            <li>
              Talk to a friend, counselor, or someone you trust — you can share
              as much or as little as you want.
            </li>
            <li>
              Engage in activities you enjoy, like listening to music or helping
              someone out.
            </li>
          </ul>

          <p className="mt-4">
            Remember, small steps add up. Even something simple like taking a
            shower or stepping outside can make a difference.
          </p>

          <h2 className="text-2xl font-bold mt-8">| Physical Health</h2>
          <blockquote className="italic mt-4">
            “It wasn’t just in my head — my body felt completely drained.”
            <a href="#" className="font-bold text-black underline ml-1">
              Watch Donna's Story
            </a>
          </blockquote>

          <p className="mt-4">
            Mental distress can impact your body too. Being aware of these signs
            can help you take steps to improve your wellbeing.
          </p>

          <h3 className="font-bold mt-6">Physical signs to look out for:</h3>
          <ul className="list-disc pl-5">
            <li>
              Struggling to do basic tasks, like brushing your teeth or
              showering.
            </li>
            <li>Sleeping too much or too little.</li>
            <li>Constant exhaustion.</li>
            <li>Increased use of substances like alcohol or drugs.</li>
            <li>Loss of interest in things you usually enjoy.</li>
            <li>Unexpected changes in weight or appetite.</li>
          </ul>

          <h3 className="font-bold mt-6">Ways to feel better:</h3>
          <ul className="list-disc pl-5">
            <li>
              Try waking up at the same time daily — routines can bring
              stability.
            </li>
            <li>
              Discover what energizes you — maybe loud music, a cold shower, or
              spicy food.
            </li>
            <li>
              Explore calming activities — warm baths, herbal teas, or dimming
              the lights.
            </li>
            <li>
              Change the environment around you – open or close curtains, sit
              outside for a while.
            </li>
            <li>
              Take notice of what you’re eating. Food can be comforting in hard
              times. Being aware of what you are eating and how it makes you
              feel can help you find balance
            </li>

            <li>
              Move your body. Taking a short walk or getting a sweat up can help
              you feel better.
            </li>
          </ul>
          <div className=" p-8">
        <div className="max-w-7xl mx-auto text-gray-900 bg-white">
        <h2 className="text-2xl font-bold"> | Spiritual Wellbeing</h2>
        <blockquote className="italic mt-4">
          “We feel our spirit being lifted when people genuinely listen to us and respect our essence.”
        </blockquote>

        <p className="mt-4">
          Nurturing your spiritual health can enhance your overall wellbeing. It can be your anchor during tough times and a source of peace and strength.
        </p>

        <h3 className="font-bold mt-6">Possible signs of disconnection:</h3>
        <ul className="list-disc pl-5">
          <li>Feeling emotionally numb or detached.</li>
          <li>Feeling like you’ve lost a sense of purpose or direction.</li>
          <li>Avoiding places or activities that usually uplift you, like prayer, nature, or community gatherings.</li>
          <li>Feeling lonely or disconnected from the world around you.</li>
        </ul>

        <h3 className="font-bold mt-6">Ways to reconnect:</h3>
        <ul className="list-disc pl-5">
          <li>Go for a walk in nature and take mindful breaths. Even sitting in your backyard or local park can help.</li>
          <li>Engage in spiritual or cultural practices, like lighting a candle, journaling, or meditation.</li>
          <li>Attend community events or volunteer — connecting with people through shared experiences can boost your spirit.</li>
          <li>Try body-awareness exercises, like yoga or stretching, to ground yourself in the present moment.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">| Social Wellbeing</h2>
        <blockquote className="italic mt-4">
          “Being around people who care, even in silence, reminds us we belong.”
        </blockquote>

        <p className="mt-4">
          Our relationships with others play a huge role in how we feel. If you’re feeling isolated or distant, small moments of connection can make a big difference.
        </p>

        <h3 className="font-bold mt-6">Signs of social disconnection:</h3>
        <ul className="list-disc pl-5">
          <li>Feeling isolated, even when around others.</li>
          <li>Avoiding messages or canceling plans frequently.</li>
          <li>Getting irritated with friends or family over small things.</li>
          <li>Spending too much time alone without reaching out to loved ones.</li>
        </ul>

        <h3 className="font-bold mt-6">Ways to reconnect socially:</h3>
        <ul className="list-disc pl-5">
          <li>Text or call a friend, even just to share a meme or funny video.</li>
          <li>Invite a friend over for a low-effort activity, like watching a movie or cooking a simple meal.</li>
          <li>Join a local club or hobby group to meet people with similar interests.</li>
          <li>Be honest with people you trust — sometimes just saying, “I’ve been feeling a bit off lately” can start a meaningful conversation.</li>
        </ul>
      </div>
    </div>
    <div className=" p-8">
        <div className="max-w-7xl mx-auto text-gray-900 bg-white">


            <h2 className="text-xl font-semibold mt-6">Signs you might notice:</h2>
            <ul className="list-disc pl-6">
                <li>Spending excessive time indoors.</li>
                <li>Feeling homesick or nostalgic.</li>
                <li>Feeling distant from people and places you once loved.</li>
                <li>Experiencing a lack of belonging or purpose.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Things to try:</h2>
            <ul className="list-disc pl-6">
                <li>
                    Visit a place that brings you comfort — it could be a park, a beach, or even a quiet spot in your home. Visualize that space if you can’t physically be there.
                </li>
                <li>
                    <span className="font-bold">Connect</span> with family or community to share stories, cultural practices, or memories that bring you closer to your roots.
                </li>
                <li>
                    Get outside and engage your senses — notice what you can <span className="font-bold">see, hear, smell, and touch</span>. Let nature ground you.
                </li>
            </ul>

            <h2 className="text-xl font-bold mt-8">Supporting someone</h2>
            <p>
                It can be tough to support a loved one through challenging times, but simply being present or listening can make a big difference. If you’re unsure how to help, check out our 
                <a href="#" className="text-primary font-semibold">support page</a>.
            </p>

            <h2 className="text-xl font-bold mt-8">Get help</h2>
            <p>
                If you recognize these feelings in yourself, consider reaching out for support. Remember, every step you take towards well-being is meaningful, and you’re not alone on your journey.
            </p>
        </div>
    
        </div>
      </div>
    </div>
    </div>
  );
};

export default Understandingdepression;
