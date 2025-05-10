import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants.js";
import { FaClipboardList, FaBrain, FaHeart } from "react-icons/fa"; // Import icons

const WorkingStep = () => {
  return (
    <div className="relative bg-cover bg-center py-12 bg-working-img">
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="relative container mx-auto px-4 py-20 text-white"
      >
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold font-secondary mb-4">How It Works</h2>
          <p className="text-lg md:w-1/2 w-full mx-auto">
            Take a quick assessment, get instant AI-based insights, and find resources tailored to your mental health needs.
          </p>
        </div>

        {/* Steps Section */}
        <div className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8">
          {/* Step 1 */}
          <div className="relative bg-white text-center text-black rounded-lg p-6 flex-1 shadow-lg">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-green-500 text-white size-14 rounded-full flex items-center justify-center text-2xl p-4">
              <FaClipboardList />
            </div>
            <h3 className="text-lg font-medium mt-8">Take a Quick Assessment</h3>
            <p className="my-2">Answer simple questions to evaluate your mental well-being.</p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white text-center text-black rounded-lg p-6 flex-1 shadow-lg">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-blue-500 text-white size-14 rounded-full flex items-center justify-center text-2xl p-4">
              <FaBrain />
            </div>
            <h3 className="text-lg font-medium mt-8">Get AI-Based Insights</h3>
            <p className="my-2">Our AI predicts your mental health status based on your responses.</p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white text-center text-black rounded-lg p-6 flex-1 shadow-lg">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-red-500 text-white size-14 rounded-full flex items-center justify-center text-2xl p-4">
              <FaHeart />
            </div>
            <h3 className="text-lg font-medium mt-8">Get Support & Resources</h3>
            <p className="my-2">Find self-help guides, expert advice, and professional support.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg shadow-md">
            Start Your Assessment
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkingStep;
