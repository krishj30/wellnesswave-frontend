import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MentalHealthResources = () => {
  const professionalSupport = [
    {
      name: "NIMHANS",
      description: "National Institute of Mental Health and Neurosciences - Premier mental health institution",
      contact: "080-26995000",
      website: "https://nimhans.ac.in",
      location: "Bengaluru, Karnataka",
    },
    {
      name: "Vandrevala Foundation",
      description: "24/7 mental health helpline",
      contact: "1860-2662-345",
      website: "https://vandrevalafoundation.com",
    },
    {
      name: "TISS iCall",
      description: "Psychosocial helpline by TISS",
      contact: "022-25521111",
      website: "https://icallhelpline.org",
    },
  ];

  const selfHelpResources = [
    {
      title: "Mindfulness & Meditation",
      resources: [
        {
          name: "Mindfulness India",
          link: "https://mindfulnessindia.org",
          description: "Free guided meditation sessions in multiple Indian languages",
        },
        {
          name: "The Art of Living",
          link: "https://www.artofliving.org/in-en",
          description: "Breathing exercises and meditation techniques",
        },
      ]
    },
    {
      title: "Mental Health Apps",
      resources: [
        {
          name: "Wysa",
          link: "https://wysa.io",
          description: "AI-based mental health support app with Indian context",
        },
        {
          name: "Let's Talk",
          link: "https://www.talktoangel.com",
          description: "Online counseling platform for Indians",
        },
      ]
    }
  ];

  const supportGroups = [
    {
      name: "AASRA",
      description: "Support group for suicide prevention",
      contact: "91-9820466726",
      website: "http://www.aasra.info",
      meetingInfo: "Online and in-person meetings available",
    },
    {
      name: "The Live Love Laugh Foundation",
      description: "Depression and anxiety support",
      website: "https://thelivelovelaughfoundation.org",
      meetingInfo: "Regular support group meetings in major cities",
    },
    {
      name: "COOJ Mental Health Foundation",
      description: "Mental health support and awareness",
      contact: "0832-2252525",
      website: "https://www.cooj.co.in",
      meetingInfo: "Weekly support group meetings",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Mental Health Resources in India
        </h1>

        {/* Emergency Contact */}
        <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-8 rounded-lg">
          <h2 className="text-xl font-bold text-red-700">Emergency Contact</h2>
          <p className="text-red-600">
            If you're having thoughts of suicide or experiencing a mental health crisis, call 24x7 toll-free: 
            <a href="tel:18005990019" className="font-bold ml-2 underline">
              1800-599-0019
            </a>
          </p>
        </div>

        {/* Professional Support Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Professional Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalSupport.map((support, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-purple-600">{support.name}</h3>
                <p className="text-gray-600 mt-2">{support.description}</p>
                <div className="mt-4">
                  {support.contact && (
                    <p className="text-gray-700">
                      <span className="font-medium">Contact:</span> {support.contact}
                    </p>
                  )}
                  <a
                    href={support.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-700 underline mt-2 inline-block"
                  >
                    Visit Website
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Self-Help Resources Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Self-Help Resources</h2>
          {selfHelpResources.map((category, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold text-purple-600 mb-4">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <motion.div
                    key={resourceIndex}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                  >
                    <h4 className="text-lg font-semibold text-gray-800">{resource.name}</h4>
                    <p className="text-gray-600 mt-2">{resource.description}</p>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-500 hover:text-purple-700 underline mt-4 inline-block"
                    >
                      Access Resource
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Support Groups Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Support Groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportGroups.map((group, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold text-purple-600">{group.name}</h3>
                <p className="text-gray-600 mt-2">{group.description}</p>
                <p className="text-gray-600 mt-2">{group.meetingInfo}</p>
                <div className="mt-4">
                  {group.contact && (
                    <p className="text-gray-700">
                      <span className="font-medium">Contact:</span> {group.contact}
                    </p>
                  )}
                  <a
                    href={group.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-700 underline mt-2 inline-block"
                  >
                    Visit Website
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Important Note</h2>
          <p className="text-gray-600">
            This list is not exhaustive and is meant to serve as a starting point. Mental health
            services may vary by location and availability. Always consult with qualified healthcare
            professionals for personal medical advice.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MentalHealthResources; 