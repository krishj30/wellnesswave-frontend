import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import styled from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const navigateAndScroll = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: "smooth",
          });
        }, 100);
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(navigateAndScroll, 200); // Wait a bit for homepage to load before scrolling
    } else {
      navigateAndScroll();
    }
  };

  const handleScroll = () => {
    const sections = ["home", "about", "services", "resource"];
    const scrollPosition = window.scrollY + 100;
    let newActiveSection = activeSection;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          newActiveSection = section;
        }
      }
    });

    if (newActiveSection !== activeSection) {
      setActiveSection(newActiveSection);
    }
  };

  const Nav = styled.nav`
    // Your navbar styles here
  `;

  const NavLink = styled.a`
    // Your link styles here
  `;

  const navLinks = (
    <ul className="font-medium flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
      {["home", "services", "about", "resource"].map((section) => (
        <li key={section}>
          <motion.a
            href={`#${section}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              handleCloseMenu();
              handleScrollTo(section);
            }}
            className={`${
              activeSection === section
                ? "text-primary font-bold !important"
                : "text-gray-300"
            }`}
          >
            {section.replace("-", " ")}
          </motion.a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="bg-heroBg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <a href="/">
          <img src="/logo.svg" alt="logo" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-grow justify-center">
          <Nav>{navLinks}</Nav>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="block md:hidden">
          <button
            onClick={handleToggle}
            className={`text-white focus:outline-none ${
              isOpen ? "border border-white" : ""
            }`}
          >
            <BiMenuAltRight className="size-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="absolute top-full left-0 w-full bg-heroBg z-20 md:hidden">
            <ul className="flex flex-col p-4 space-y-3">
              {navLinks.props.children}
              <li className="py-2">
                <a
                  href="#contact"
                  className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCloseMenu();
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
