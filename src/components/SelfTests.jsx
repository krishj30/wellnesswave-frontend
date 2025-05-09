import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SelfTests = () => {
  return (
    <div className="min-h-screen bg-[#f7f8fc] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Self-Assessment Tools
        </h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Depression Assessment Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-br from-[#476685] to-[#2C4A6B] rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Depression Assessment</h2>
              <p className="text-gray-100 mb-8">
                Complete a brief assessment to understand your symptoms better
              </p>
              <Link
                to="/depressionform"
                className="inline-block bg-white text-[#476685] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-md"
              >
                Start Assessment
              </Link>
            </div>
          </motion.div>

          {/* Anxiety Assessment Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-br from-[#476685] to-[#2C4A6B] rounded-xl shadow-xl overflow-hidden"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Anxiety Assessment</h2>
              <p className="text-gray-100 mb-8">
                Take a quick assessment to evaluate your anxiety levels
              </p>
              <Link
                to="/anxietyprediction"
                className="inline-block bg-white text-[#476685] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-md"
              >
                Start Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SelfTests;