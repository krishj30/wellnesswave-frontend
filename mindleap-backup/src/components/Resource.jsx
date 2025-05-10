import React, { useState } from "react";
import thumbnailImg from "../assets/video-thumbnail.webp";
import { IoArrowForwardCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants.js";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Resource = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleClose = () => {
    // Navigate to the Stories page when the button is clicked
    navigate("/stories"); // Navigate to the Stories page
  };

  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      id="resource"
      className="bg-[#f7f8fc] pb-16 pt-20"
    >
      <div className="container mx-auto">
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 w-full">
            <h3 className="text-4xl font-secondary font-bold mb-4 leading-snug">
              Hear from others <br /> You're not alone
            </h3>
            <p className="text-lg mb-12 md:pr-8">
              Inspiring recovery stories from people who have overcome various
              mental health struggles, including depression, anxiety, and
              suicidal thoughts.
            </p>
            <button className="bg-primary text-white p-3.5 px-10 font-medium rounded-md hover:bg-primary/90">
              <Link to="/stories" className="flex gap-1 items-center">
                <span>Get Started</span>
                <IoArrowForwardCircle />
              </Link>
            </button>
          </div>

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
                <div className="absolute inset-0 flex justify-center items-center">
                  {/* Video Play Icon */}
                </div>
              </div>
            ) : (
              <div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/_fmA1RoHbzA?si=XkOSlJRXA2m_x98X"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <button
                  onClick={handleClose} // This will navigate to the Stories page
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resource;
