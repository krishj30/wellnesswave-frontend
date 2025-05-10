import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import serviceimg1 from "../assets/service1.webp";
import serviceimg2 from "../assets/service2.webp";
import serviceimg3 from "../assets/service3.webp";
import serviceimg4 from "../assets/service4.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants.js";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div id="services" className=" bg-[#f7f8fc]">
      <div className="pt-28 px-4 container mx-auto mb-10">
        <motion.div
          variants={fadeIn("up", 0.2)} // Fixed spacing
          initial="hidden" // Changed from 'inherit' to 'initial'
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-center space-y-5"
        >
          <h2 className="text-5xl font-bold font-secondary text-herobg">
            What We Can Do Together
          </h2>
          <p className="md:w-1/2 mx-auto">
            Explore our comprehensive mental health services designed to support your well-being journey. We're here to help you understand, cope, and thrive.
          </p>
        </motion.div>

        {/* services  category */}
        <div className="py-12 md:w-4/5 mx-auto">
          <Tabs>
            <motion.TabList
              variants={fadeIn("down", 0.2)} // Fixed spacing
              initial="hidden" // Changed from 'inherit' to 'initial'
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-wrap justify-between items-center md:gap-8 gap-4"
            >
              <Tab>Start the conversation</Tab>
              <Tab>Is it depression or anxiety?</Tab>
              <Tab>Seeking Support</Tab>
              <Tab>Staying well</Tab>
            </motion.TabList>

            <TabPanel>
              {/* Text Section */}
              <motion.div
                variants={fadeIn("down", 0.2)} // Fixed spacing
                initial="hidden" // Changed from 'inherit' to 'initial'
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-5"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary flex flex-col h-full">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Start the conversation
                  </h3>
                  <p className="mb-8">
                    Taking the first step to discuss mental health can be challenging. We provide a safe, supportive environment where you can openly share your thoughts and feelings without judgment.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Express yourself in a confidential setting</li>
                    <li>Get professional guidance and support</li>
                    <li>Learn effective communication strategies</li>
                  </ul>

                  <div className="mt-6 pb-6">
                    <Link to="/start-conversation">
                      {" "}
                      {/* ✅ Corrected path */}
                      <button className="bg-primary text-white font-medium py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:bg-opacity-80 hover:scale-105">
                        Ask for help
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2">
                  <img
                    src={serviceimg1} // Ensure `serviceimg1` points to the correct path
                    alt="Service"
                    className="w-full h-auto rounded-2xl object-cover "
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              {/* Text Section */}
              <motion.div
                variants={fadeIn("down", 0.2)} // Fixed spacing
                initial="hidden" // Changed from 'inherit' to 'initial'
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-5"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary flex flex-col h-full">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Is it depression or anxiety?
                  </h3>
                  <p className="mb-8">
                    Understanding the difference between depression and anxiety is crucial for getting the right support. Our assessment tools and professional guidance can help you identify your symptoms and find appropriate care.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Accurate symptom assessment</li>
                    <li>Personalized treatment recommendations</li>
                    <li>Evidence-based screening tools</li>
                  </ul>

                  <div className="mt-6 pb-6">
                    <Link to="/self-tests" className="inline-block">
                      <button className="bg-primary text-white font-medium py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:bg-opacity-80 hover:scale-105">
                        Take the test
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2">
                  <img
                    src={serviceimg1} // Ensure `serviceimg1` points to the correct path
                    alt="Service"
                    className="w-full h-auto rounded-2xl object-cover "
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              {/* Text Section */}
              <motion.div
                variants={fadeIn("down", 0.2)} // Fixed spacing
                initial="hidden" // Changed from 'inherit' to 'initial'
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-5"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary flex flex-col h-full">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Seeking Support{" "}
                  </h3>
                  <p className="mb-8">
                    Finding the right support is essential for mental health recovery. We connect you with qualified professionals and resources tailored to your specific needs and circumstances.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Access to qualified mental health professionals</li>
                    <li>Customized treatment options</li>
                    <li>Ongoing support and guidance</li>
                  </ul>

                  {/* Button at the bottom left with some extra space */}
                  <div className="mt-6 pb-6">
                    {" "}
                    {/* Adjust spacing here */}
                    <Link to="/Seekingsupport">
                      {" "}
                      {/* ✅ Corrected path */}
                      <button className="bg-primary text-white font-medium py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:bg-opacity-80 hover:scale-105">
                        Ask for help
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2">
                  <img
                    src={serviceimg1} // Ensure `serviceimg1` points to the correct path
                    alt="Service"
                    className="w-full h-auto rounded-2xl object-cover "
                  />
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel>
              {/* Text Section */}
              <motion.div
                variants={fadeIn("down", 0.2)} // Fixed spacing
                initial="hidden" // Changed from 'inherit' to 'initial'
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="flex flex-col md:flex-row gap-8 mt-5"
              >
                <div className="md:w-1/2 bg-white rounded-lg p-12 font-secondary flex flex-col h-full">
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Staying well
                  </h3>
                  <p className="mb-8">
                    Maintaining good mental health is an ongoing journey. We provide tools, strategies, and resources to help you build resilience and maintain emotional well-being in your daily life.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benefits
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Develop healthy coping mechanisms</li>
                    <li>Build long-term resilience strategies</li>
                    <li>Access ongoing wellness resources</li>
                  </ul>

                  {/* Button at the bottom left with some extra space */}
                  <div className="mt-6 pb-6">
                    {" "}
                    {/* Adjust spacing here */}
                    <Link to="/stayingwell">
                      {" "}
                      {/* ✅ Corrected path */}
                      <button className="bg-primary text-white font-medium py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:bg-opacity-80 hover:scale-105">
                        Ask for help
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2">
                  <img
                    src={serviceimg1} // Ensure `serviceimg1` points to the correct path
                    alt="Service"
                    className="w-full h-auto rounded-2xl object-cover "
                  />
                </div>
              </motion.div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
