import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Relationship = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row w-full gap-6 mt-14 px-10 lg:px-32">
        {/* Left Content Section */}
        <div className="flex-auto w-full p-6 flex flex-col justify-center md:w-1/2 lg:p-16 max-h-[550px]">
          <div className="content-holder overflow-hidden">
            <h1 className="text-heroBg font-semibold text-[65px] md:text-5xl pb-5 lg:pb-8 md:leading-[60px]">
              Relationships
            </h1>
            <h2 className="text-heroBg font-semibold text-xl md:text-2xl pb-6">
              Relationships play a pivotal role in shaping our mental health.
            </h2>
            <p className="text-black font-normal text-[15px]  md:text-xl">
              They can be a source of joy, strength and support, and they also
              have the potential to bring challenges and stress.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-auto md:w-1/2 w-full h-auto flex justify-center mt-20">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet="https://cdn.sanity.io/images/emne51dm/production/664670b2efcc936f0bf3e60072205bc5aa3e4d30-647x550.jpg"
            />
            <img
              src="https://cdn.sanity.io/images/emne51dm/production/664670b2efcc936f0bf3e60072205bc5aa3e4d30-647x550.jpg"
              alt="Two females chatting in a kitchen"
              className="max-w-full mx-auto rounded-lg shadow"
            />
          </picture>
        </div>
      </div>

      {/* New Section - Choosing who to talk to */}
      <div className="p-6 max-w-7xl mx-auto text-gray-900 text-l  ">


        <div className=" p-6 rounded-xl text-gray-900 ">
          <h2 className="text-2xl font-bold mb-4">
            Building and Nurturing Relationships
          </h2>
          <p>
            Healthy relationships look different for everyone. What matters is
            that they add positivity to your life.
          </p>
          <p>
            Relationships evolve as we change — our interests, locations, and
            life stages shift. While we shape our relationships, we can’t always
            control how others come in and out of our lives. Long-distance
            connections, resolving conflicts, or adjusting to relationship
            changes can be tough.
          </p>
          <p>
            Building connections takes effort. There’s no universal formula, and
            it’s okay to seek help or advice when relationships feel
            challenging.
          </p>
          <p>
            Feeling lonely is normal, especially during hard times. But
            loneliness isn’t just about being alone — it’s about feeling
            disconnected. Even in a crowd, you might feel isolated. Prioritizing
            relationships that align with your values and identity can help you
            stay grounded and well.
          </p>
        </div>
      </div>
      {/* Cards Section */}

      <div className="p-6 text-gray-900 ">
        <div className="max-w-7xl mx-auto">
          <section className="mb-4">
            <h1 className="text-3xl font-bold mb-4">Family Connections</h1>
            <p>
              Family is where our roots begin, shaping who we are. While family
              bonds can be a source of love and strength, they can also present
              challenges — especially when expectations or communication styles
              differ.
            </p>
            <p className="mt-4 font-semibold">
              Tips for strengthening family relationships:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Respect differences:</strong> Accept that everyone has
                unique beliefs and opinions. For example, if a parent has a
                different perspective on career choices, try to understand their
                point of view while honoring your own path.
              </li>
              <li>
                <strong>Give it time:</strong> Healing and understanding often
                take patience. If there’s a disagreement, consider stepping back
                to reflect before revisiting the conversation.
              </li>
              <li>
                <strong>Celebrate small moments:</strong> Plan regular
                activities together, like family game nights or Sunday dinners,
                to foster connection and create lasting memories.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Friendships</h2>
            <p>
              Friendships can bring immense joy and support, but making and
              maintaining friends as an adult can be tricky. Whether you prefer
              a tight-knit circle or a large social network, nurturing these
              connections is key to well-being.
            </p>
            <p className="mt-4 font-semibold">
              Ways to build and maintain friendships:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Join community groups:</strong> Attend local meetups,
                volunteer events, or hobby-based clubs. For example, if you love
                reading, join a book club to meet like-minded people.
              </li>
              <li>
                <strong>Use digital spaces:</strong> Platforms like Discord or
                online gaming communities can help bridge the gap if in-person
                interactions are limited.
              </li>
              <li>
                <strong>Reach out regularly:</strong> Even a simple text message
                checking in on an old friend can reignite a connection and show
                you care.
              </li>
            </ul>
          </section>
        </div>
        <div className="p-8 max-w-7xl mx-auto ">
          <h1 className="text-3xl font-bold mb-6">
            Challenges in Relationships
          </h1>
          <p className="mb-4">
            Relationships are a fundamental part of human life, but they aren't
            always easy. Understanding how to navigate conflicts, maintain
            boundaries, and rebuild trust is crucial for healthy, long-lasting
            connections.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Family Violence</h2>
          <p className="mb-4">
            Everyone deserves to feel safe and respected. If you feel threatened
            or unsafe in your family relationships, it's important to seek
            support. Abuse can be physical, emotional, or verbal, and
            recognizing the signs is a vital step toward protecting your
            well-being.
          </p>
          <p>
            Reach out to local organizations, hotlines, or trusted individuals
            if you need help. Remember, seeking support is an act of courage and
            self-care.
          </p>

          <h2 className="text-2xl font-semibold mt-6">Conflict Resolution</h2>
          <p className="mb-4">
            Disagreements are normal in any relationship. The key is learning
            how to resolve conflicts with empathy and understanding. Here are
            some strategies:
          </p>
          <ul className="list-disc pl-5">
            <li>
              <strong>Have an honest chat:</strong> Open up, but keep it
              blame-free. Share your feelings without accusing the other person.
            </li>
            <li>
              <strong>Listen with your heart:</strong> Understand the other
              person's perspective. Ask questions if things are unclear.
            </li>
            <li>
              <strong>Own your actions:</strong> Take responsibility for your
              mistakes and be willing to apologize.
            </li>
            <li>
              <strong>Plan together:</strong> Work as a team to rebuild the
              relationship, even if that means taking a break to reflect.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            Knowing When to Let Go
          </h2>
          <p>
            Not every relationship sails smoothly, and that's alright. There are
            times when people in our lives might cause us pain or
            disappointment. Recognizing when a relationship is no longer serving
            your wellbeing is crucial. Healthy relationships are anchored in
            mutual respect, trust, and understanding. If you've given it your
            best shot and the seas haven't calmed, it's perfectly okay to step
            back and focus on your own wellbeing. Navigating relationships isn't
            always easy, but remember, you're not sailing these waters alone.
            We're here to support you with information and guidance every step
            of the way. Stay strong, stay connected, and most importantly, stay
            true to yourself.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Relationship;
