import React, { useState } from "react";
import thumbnailImg from "../assets/video-thumbnail.webp";
import { IoArrowForwardCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants.js"; 
import { Link } from "react-router-dom";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleClose = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <motion.div
      variants={fadeIn("down", 0.2)}  // Fixed spacing
                      initial="hidden"                // Changed from 'inherit' to 'initial'
                      whileInView="show"
                      viewport={{ once: false, amount: 0.7 }} 
       className="container mx-auto">
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/** left side */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoPlaying ? (
              <div
                onClick={handleVideoPlay}
                className="relative cursor-pointer"
              >
                <img
                  src={thumbnailImg}
                  alt="video thumbnail"
                  className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                />
                {/** Play button overlay */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-white bg-black bg-opacity-50 rounded-full p-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-4.5-2.598A1 1 0 009 9.402v5.196a1 1 0 001.252.98l4.5-1.896a1 1 0 000-1.844z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/_fmA1RoHbzA?si=XkOSlJRXA2m_x98X"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <button
                  onClick={handleClose}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/** right side */}
          <div className="md:w-1/2 w-full">
            <h3 className="text-4xl font-secondary font-bold mb-4 leading-snug">
              Your Mental Health<br></br>
              Matters Today
            </h3>
            <p className="text-lg mb-12 md:pr-8">
              Take control of your mental well-being with our expert-guided support. 
              We offer quick assessments, professional counseling, and practical tools 
              to help you feel better. No waiting, no judgments – just compassionate 
              care when you need it most.
            </p>
            <Link to="/mentalhealth">
              <button className="bg-primary text-white p-3.5 px-10 font-medium rounded-md hover:bg-primary/90">
                <span>Get Started</span>
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
