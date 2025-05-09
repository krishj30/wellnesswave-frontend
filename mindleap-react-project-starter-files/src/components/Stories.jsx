import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Stories = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="flex flex-col lg:flex-row w-full gap-6 mt-14 px-10 lg:px-32">
        {/* Left Content Section */}
        <div className="flex-auto w-full p-6 bg-gray-50 flex flex-col justify-center md:w-1/2 lg:p-16 max-h-[550px]">
          <div className="content-holder overflow-hidden">
            <h1 className="text-heroBg font-bold text-[65px] md:text-4xl pb-5 lg:pb-8 md:leading-[60px]">
              Stories from others
            </h1>
            <h2 className="text-heroBg  font-bold text-xl md:text-2xl pb-6">
              You are not alone
            </h2>
            <p className="text-heroBg font-normal text-[15px]  md:text-l">
              Many individuals have faced struggles similar to yours and have
              discovered various methods to improve their well-being. Seeing how
              others have overcome challenges and found success might inspire
              you as well. Take time to learn from their experiences and
              consider trying some of the strategies that worked for them to
              support your own journey.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-auto md:w-1/2 w-full h-auto flex justify-center mt-20">
          <picture>
            <source
              media="(max-width:767px)"
              srcSet="https://cdn.sanity.io/images/emne51dm/production/f75c78a859f507861854653afa8d33f45976eae9-647x550.jpg"
            />
            <img
              src="https://cdn.sanity.io/images/emne51dm/production/f75c78a859f507861854653afa8d33f45976eae9-647x550.jpg"
              alt="lighthouse"
              className="max-w-full mx-auto rounded-lg shadow"
            />
          </picture>
        </div>
      </div>

      {/* New Section - Choosing who to talk to */}

      <div className="bg-white text-center py-8 px-4">
        <h1 className="text-4xl font-bold text-black">
          You’re Not Alone: Read, Relate, Recover
        </h1>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Story */}
          <article className="p-6 md:p-8 bg-gray-50 shadow-lg rounded-lg">
            <div className="flex justify-center items-center">
              <div className="aspect-video w-full">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ea20oeeV1G0?si=OyzSKKCRvu0aEo24"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-[32px] font-bold pb-[10px]">Eddie Story</h2>
              <div className="text-[15px] pb-7">
                <p className="italic">
                The video "Overcoming Depression | A Personal Story" (linked above) features an individual's journey through depression, highlighting their struggles, turning points, and the steps they took toward healing. It shares personal insights, coping strategies, and encouragement for others facing similar challenges. The video emphasizes the importance of seeking help, self-care, and resilience in the face of mental health struggles.
                </p>
               
              </div>
              <div className="mx-auto">
                <a
                  className="inline-flex justify-center items-center h-10 font-bold text-sm hover:underline text-blue-600"
                  href="/staying-well/stories-from-others/hannah-story"
                ></a>
              </div>
            </div>
          </article>

          {/* Second Story */}
          <article className="p-6 md:p-8 bg-gray-50 shadow-lg rounded-lg">
            <div className="flex justify-center items-center">
              <div className="aspect-video w-full">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/MO1LKR9jKqE?si=l87Grai9Lc8xdWxy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-[32px] font-bold pb-[10px]">
                Emily Story
              </h2>
              <div className="text-[15px] pb-7">
                <p className="italic">
                The video "My Journey Through Depression & Anxiety" (linked above) shares a personal story of battling mental health struggles. The speaker opens up about their experiences with depression and anxiety, detailing the challenges they faced and the steps they took to recover. It highlights the importance of seeking support, therapy, and self-care while offering encouragement to those going through similar experiences
                </p>
                
              </div>
              <div className="mx-auto">
                <a
                  className="inline-flex justify-center items-center h-10 font-bold text-sm hover:underline text-blue-600"
                  href="/staying-well/stories-from-others/hannah-story"
                ></a>
              </div>
            </div>
          </article>
            {/* 3 Story */}
            <article className="p-6 md:p-8 bg-gray-50 shadow-lg rounded-lg">
            <div className="flex justify-center items-center">
              <div className="aspect-video w-full">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/YdQ0wn0_WBs?si=M2zQRFzrZ7P1-wlN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-[32px] font-bold pb-[10px]">
              Jake's story
              </h2>
              <div className="text-[15px] pb-7">
                <p className="italic">
                The video "How I Overcame Depression & Anxiety" (linked above) is a personal account of someone who struggled with mental health challenges and found a way to heal. The speaker shares their lowest moments, what triggered their depression and anxiety, and the strategies they used to recover. It offers inspiration and practical advice, emphasizing the importance of self-care, support systems, and professional help.
                </p>
             
              </div>
              <div className="mx-auto">
                <a
                  className="inline-flex justify-center items-center h-10 font-bold text-sm hover:underline text-blue-600"
                  href="/staying-well/stories-from-others/hannah-story"
                ></a>
              </div>
            </div>
          </article>
            {/* 4 Story */}
          <article className="p-6 md:p-8 bg-gray-50 shadow-lg rounded-lg">
            <div className="flex justify-center items-center">
              <div className="aspect-video w-full">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/2EPnNOlxF8M?si=V_WYBDkCa7JkKzii" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-[32px] font-bold pb-[10px]">
                Kristen's story
              </h2>
              <div className="text-[15px] pb-7">
                <p className="italic">
                Our May cover star Kristen Bell shares her ongoing journey with self-care and acceptance. She also talks about speaking openly and honestly with her children, struggling with anxiety, and talking about depression in her family with her mom. "At 40, I don't believe anything should be taboo."

                </p>
                <p>
                  Hannah felt like she didn’t belong. She sought help by
                  reconnecting with people and building her support network.
                </p>
              </div>
              <div className="mx-auto">
                <a
                  className="inline-flex justify-center items-center h-10 font-bold text-sm hover:underline text-blue-600"
                  href="/staying-well/stories-from-others/hannah-story"
                ></a>
              </div>
            </div>
          </article>
            {/* 5 Story */}
          <article className="p-6 md:p-8 bg-gray-50 shadow-lg rounded-lg">
            <div className="flex justify-center items-center">
              <div className="aspect-video w-full">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/pBnlfwFDi0w?si=iUTDybm7i1ctpHBX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-[32px] font-bold pb-[10px]">
               Steve's Story
              </h2>
              <div className="text-[15px] pb-7">
                <p className="italic">
                After a medical crisis, Steve found himself struggling with anxiety and depression. A neighbor recognized Steve might have depression and recommended Rogers. 

“I was astounded by how much progress I made in a short amount of time,” says Steve. 

Now a small business owner, Steve says his store is his comeback story.
                </p>
                <p>
                  Hannah felt like she didn’t belong. She sought help by
                  reconnecting with people and building her support network.
                </p>
              </div>
              <div className="mx-auto">
                <a
                  className="inline-flex justify-center items-center h-10 font-bold text-sm hover:underline text-blue-600"
                  href="/staying-well/stories-from-others/hannah-story"
                ></a>
              </div>
            </div>
          </article>
            {/* 6Story */}
          <article className="p-6 md:p-8 bg-gray-50 shadow-lg rounded-lg">
            <div className="flex justify-center items-center">
              <div className="aspect-video w-full">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/rYGMHhfJpJc?si=VufQ3W8RuGkSRI0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-[32px] font-bold pb-[10px]">
              
              </h2>
              <div className="text-[15px] pb-7">
                <p className="italic">
                As part of Aware Mental Health Week, individuals share their personal experiences with depression, highlighting their paths to recovery.                </p>
             
              </div>
              <div className="mx-auto">
                <a
                  className="inline-flex justify-center items-center h-10 font-bold text-sm hover:underline text-blue-600"
                  href="/staying-well/stories-from-others/hannah-story"
                ></a>
              </div>
            </div>
          </article>
        </div>
        <div className="bg-pink-100 py-12 px-6 mb-0 mt-20" >
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

export default Stories;
