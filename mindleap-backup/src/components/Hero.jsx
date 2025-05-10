import React from "react";
import heroImg from "../assets/hero.webp";
import { IoArrowForwardCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants.js"; 
const hero = () => {
  return (
    <section
      id="home" 
      className="h-screen bg-heroBg text-white flex items-center pt-28 md:h-screen" >
      <div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between p-8
      overflow-y-hidden gap-12 h-full" >
        {/*left side*/}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }} 
          className="md:w-1/2"
        >
          <h1 className="text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug">
            Transform Your Mind, <br />
            Transform Your Life
          </h1>
          <p className="text-lg mb-12 md:pr-8">
            Feel stuck? You're not alone. Join thousands who've found their way to 
            better mental health through our innovative platform. Quick assessments, 
            instant support, and professional guidance – all in one place. Your journey 
            to wellness starts with a single click.
          </p>
          <button className="bg-primary text-white p-3.5 px-10 font-medium rounded-md hover:bg-primary/90">
            <a href="Mentalhealth" className="flex gap-1 items-center">
              <span>Begin Your Journey</span>
              <IoArrowForwardCircle />
            </a>
          </button>
        </motion.div>

        {/*right side*/}
        <motion.div 
        variants={fadeIn("left", 0.2)}  // Fixed spacing
        initial="hidden"                // Changed from 'inherit' to 'initial'
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }} 
        className="md:w-1/2 h-full">
          <img src={heroImg} alt="heroimage " className="w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default hero;
