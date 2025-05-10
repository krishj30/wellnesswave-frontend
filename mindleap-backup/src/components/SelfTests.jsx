import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SelfTests = () => {
  return (
    <div className="min-h-screen bg-[#f7f8fc] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mt-10">
            Mental Health Self-Tests
          </h1>
         
        </div>

        {/* Test Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Depression Test Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Depression Assessment</h2>
              <p className="text-gray-600 mb-6">
                This assessment helps identify symptoms of depression using standardized questions. 
                It takes about 5-10 minutes to complete.
              </p>
              <Link
                to="/depressionform"
                className="inline-block bg-[#476685] text-white px-6 py-3 rounded-lg hover:bg-[#2C4A6B] transition-colors duration-200"
              >
                Start Depression Assessment
              </Link>
            </div>
          </motion.div>

          {/* Anxiety Test Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Anxiety Assessment</h2>
              <p className="text-gray-600 mb-6">
                Evaluate your anxiety levels with this comprehensive questionnaire. 
                The assessment takes approximately 5-10 minutes.
              </p>
              <Link
                to="/anxietyprediction"
                className="inline-block bg-[#476685] text-white px-6 py-3 rounded-lg hover:bg-[#2C4A6B] transition-colors duration-200"
              >
                Start Anxiety Assessment
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer Section */}
       

        {/* Emergency Contact Section */}

      </div>
    </div>
  );
};

export default SelfTests; 