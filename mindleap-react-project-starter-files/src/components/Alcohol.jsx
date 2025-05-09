import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Alcohol = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row w-full gap-6 mt-14 px-10 lg:px-32 ">
        {/* Left Content Section */}
        <div className="flex-auto w-full p-6 bg-gray-50 flex flex-col justify-center md:w-1/2 lg:p-16  mt-20 max-h-[525px]">
          <div className="content-holder overflow-hidden">
            <h1 className="text-heroBg font-semibold text-[65px] md:text-5xl pb-5 lg:pb-8 md:leading-[60px]">
              Alcohol and drugs
            </h1>
            <h2 className="text-heroBg font-semibold text-xl md:text-2xl pb-6">
              The relationship between alcohol, drugs and mental health is
              complicated.
            </h2>
            <p className="text-black font-normal text-[15px]  md:text-xl">
              Everybody's story is different.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-auto md:w-1/2 w-full h-auto flex justify-center mt-20">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet="https://cdn.sanity.io/images/emne51dm/production/4feca5cdded1b93927f7c5e54e2ca91158a62288-647x550.jpg"
            />
            <img
              src="https://cdn.sanity.io/images/emne51dm/production/4feca5cdded1b93927f7c5e54e2ca91158a62288-647x550.jpg"
              alt="Two females chatting in a kitchen"
              className="max-w-full mx-auto rounded-lg shadow"
            />
          </picture>
        </div>
      </div>

      {/* New Section - Choosing who to talk to */}
      <div
        className="
       p-8"
      >
        <div className="max-w-7xl mx-24  text-gray-900 bg-white">
          <article className="mx-4 lg:col-span-10 py-12 px-6 mt-5 text-block lg:pl-24 xl:pl-28 max-h-[900x]">
            <p>
              We all have different reasons for our relationship with alcohol or
              drugs. It could be cultural beliefs, personal experiences,
              societal influences or simply personal preference. Whatever your
              reason or experience, our goal is to provide understanding without
              judgement.{" "}
            </p>
            <br></br>
            <p>
              The relationship between alcohol, drugs, and mental wellbeing is
              deeply personal and complex. Substance use can influence mental
              health and vice versa. It can also influence physical health,
              social connections, cultural ties and working life. Navigating
              these connected paths can be scary, but taking small steps can
              lead to positive changes in mental wellbeing.
              <br></br>
            </p>
            <br></br>
            <p>
              Remember, if you’re worried about your own or a loved one's
              substance use, prioritise compassion and call for help when you
              need it. No matter how much, how often, what you use or why, we’re
              not here to judge.{" "}
            </p>
            <br></br>
            <p>
              Alcohol and drugs can encompass alcohol, tobacco, vaping, illicit
              drugs and non-prescribed medication use. On this page, you can
              find stories, insights and advice about the intersection of
              substance use and mental wellbeing.
            </p>
          </article>
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-10 lg:px-20 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center text-center">

{/* National Mental Health Helpline */}
<div className="max-w-md mx-auto bg-green-800 text-white shadow-lg rounded-xl p-10">
  <h2 className="text-lg font-bold">Need to talk? Call the National Mental Health Helpline</h2>
  <p className="mt-2">📞 Call <strong>14416</strong> or <strong>1800-599-0019</strong>, available 24/7 for confidential support and guidance on alcohol and drug addiction.</p>
  <button className="mt-10 bg-white text-green-800 px-4 py-2 rounded">
    👉 Get help now
  </button>
</div>

{/* Free Drug De-Addiction Services */}
<div className="max-w-md mx-auto bg-green-800 text-white shadow-lg rounded-xl p-10">
  <h2 className="text-lg font-bold">Free Drug De-Addiction Services in India</h2>
  <p className="mt-2">The <strong>National Drug Dependence Treatment Centre (NDDTC) AIIMS</strong> offers free de-addiction services. Visit the nearest government rehabilitation center.</p>
  <a href="https://aiims.edu/en/nddtc.html" target="_blank" rel="noopener noreferrer">
    <button className="mt-10 bg-white text-green-800 px-4 py-2 rounded">
      🔗 Find out more
    </button>
  </a>
</div>

{/* Needle Exchange Program */}
<div className="max-w-md mx-auto bg-green-800 text-white shadow-lg rounded-xl p-10">
  <h2 className="text-lg font-bold">Find a Needle Exchange Program Near You</h2>
  <p className="mt-2">For harm reduction, visit <strong>NACO (National AIDS Control Organisation)</strong> for safer drug-use practices and support.</p>
  <a href="http://naco.gov.in" target="_blank" rel="noopener noreferrer">
    <button className="mt-16 bg-white text-green-800 px-4 py-2 rounded">
      🔗 Find out more
    </button>
  </a>
</div>

{/* Alcohol & Drug Awareness */}
<div className="max-w-md mx-auto bg-green-800 text-white shadow-lg rounded-xl p-10">
  <h2 className="text-lg font-bold">Stay Informed About Alcohol & Drug Risks</h2>
  <p className="mt-2">For details on substance abuse, its effects, and ways to stay safe, visit the <strong>Ministry of Social Justice & Empowerment’s De-Addiction Services</strong>.</p>
  <a href="https://socialjustice.gov.in" target="_blank" rel="noopener noreferrer">
    <button className="mt-10 bg-white text-green-800 px-4 py-2 rounded">
      🔗 Find out more
    </button>
  </a>
</div>

</div>

      <div className=" p-8">
        <div className="max-w-7xl mx-68 text-gray-900 bg-white mr-96">
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
            <h1 style={{ fontSize: "25px", fontWeight: "bold" }}>
              If you’re thinking about your own alcohol or drug use
            </h1>
            <p>
              <br></br>
              It’s natural to feel a mix of emotions when thinking about
              substance use. You may feel anger, loneliness, guilt or even
              jealousy that other people don’t seem to think much about their
              alcohol and drug use.
            </p>
            <br></br>
            <br></br>
            <p style={{ fontStyle: "italic" }}>
              “As my mood darkened, my need to find some kind of way to find
              some light in my world expanded. So it became this survival
              technique to find whatever I could to make myself feel better. And
              so at 15, for me that was drugs and alcohol and a sense of
              belonging.” –{" "}
              <a
                href="#"
                style={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                Watch Hannah’s story
              </a>
              <br></br>
              <br></br>
            </p>
            <p>
              You might be thinking about your alcohol or drug use for many
              reasons. It might not make you feel good. Someone may have
              mentioned it to you, maybe you’ve done something you’re not
              comfortable with or you might be comparing your intake to the{" "}
              <a
                href="#"
                style={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                recommended limits
                <br></br>
                <br></br>
              </a>
            </p>

            <p className="font-semibold">
              Start by asking yourself these things: <br></br> <br></br>
            </p>
            <ul className="list-disc list-inside">
              <li> Do I want to see any changes in my substance use?</li>
              <li>Am I open to seeking help?</li>
              <li>
                Would I prefer a familiar face or an anonymous conversation?
              </li>
              <li>
                What kind of support aligns with my cultural or personal
                beliefs?
              </li>
            </ul>
            <p>
              <br></br>
              Everybody’s journey with substances is different. The answers to
              these questions might change over time. This can be a lot to think
              about. Take the time that you need.
            </p>
            <p>
              <br></br>
              If you're considering changing your use or stopping altogether,
              planning non-substance-related activities can be helpful. Whatever
              you choose, looking for activities that bring you peace and
              connection can help to take your mind off things.
            </p>
            <p>
              <br></br>
              Starting a conversation or asking for support can be daunting but
              can be really helpful.{" "}
              <a
                href="start-conversation"
                style={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                People who can help
              </a>{" "}
              and{" "}
              <a
                href="start-conversation"
                style={{ fontWeight: "bold", textDecoration: "underline" }}
              >
                asking for help
              </a>{" "}
              will help you identify what support different people can provide
              and ways to start a conversation.
            </p>
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
            <h1 style={{ fontSize: "25px", fontWeight: "bold" }}>
              If someone has tried to speak to you about your drinking or drug
              use
            </h1>
            <p>
              <br></br>
              There’s lots of reasons why someone might have decided to speak to
              you about alcohol or drugs. People often try to have these
              conversations if they’re worried or want to make sure you’re okay.
              No matter their intentions, these conversations can be hard. You
              might be feeling angry, embarrassed, shocked – or possibly
              supported or loved.
            </p>
            <br></br>
            <br></br>

            <p className="font-semibold">
              Things to remember:
              <br></br> <br></br>
            </p>
            <ul className="list-disc list-inside">
              <li> You have the right to process this at your own pace.</li>
              <li>
                You decide the next steps – whether it's seeking help or making
                changes.
              </li>
              <li>Support is available – the choice to reach out is yours.</li>
            </ul>
            <p>
              <br></br>
              If you do want to talk, you only need to share what you’re
              comfortable with. You can ask for support in any way that feels
              right for you.
            </p>
            <ul className="list-disc list-inside">
              <li> Finding a support service to call.</li>
              <li>Going to an appointment together.</li>
              <li>Doing drug and alcohol-free activities together.</li>
              <li>
                Finding ways to reduce risks like attending drug checking
                services.
              </li>
            </ul>
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
            <h1 style={{ fontSize: "25px", fontWeight: "bold" }}>
              If you’re worried about someone else’s drinking or drug use
            </h1>
            <p>
              <br></br>
              Talking to someone about their substance use can be challenging.
              It's important to approach the conversation with empathy and
              understanding, respecting their freedom to make their own
              decisions.
            </p>
            <br></br>
            <br></br>
            <h1 className="font-bold text-3xl">Supporting someone</h1>
            <p>
              <br></br>
              Seeing a loved one struggle can be heart-wrenching. While the
              desire to help is natural, it's crucial to approach the situation
              with sensitivity and respect for their autonomy.
            </p>
            <br></br>
            <p className="font-semibold">
              Things to remember:
              <br></br> <br></br>
            </p>
            <ul className="list-disc list-inside">
              <li>Your role is supportive, not directive.</li>
              <li>
                Don’t make assumptions – every individual's experience is
                unique.
              </li>
              <li>
                Prioritise safer use of alcohol and drugs – check out The Level
                for more information.
              </li>
              <li>Give them time and space to make their own decisions.</li>
              <li>
                Understand that change does not occur overnight and that
                recovery can be a complex journey.
              </li>
            </ul>
            <p>
              <br></br>
              If you do want to talk, you only need to share what you’re
              comfortable with. You can ask for support in any way that feels
              right for you.
            </p>
            <ul className="list-disc list-inside">
              <li> Finding a support service to call.</li>
              <li>Going to an appointment together.</li>
              <li>Doing drug and alcohol-free activities together.</li>
              <li>
                Finding ways to reduce risks like attending drug checking
                services.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alcohol;
