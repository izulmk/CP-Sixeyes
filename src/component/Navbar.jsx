import React from "react";
import Menu from "./Menu";
import { motion } from "framer-motion";

const Navbar = ({ isNavbarBlack, currentSlide, variants }) => {
  const handleHomeClick = () => {
    const heroSection = document.getElementById("Home");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectClick = () => {
    const contactSection = document.getElementById("Projects");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div className={`h-12 ${isNavbarBlack ? "text-white" : "bg-transparent"} md:p-8 flex items-center justify-between md:h-24 lg:px-20 xl:px-40 z-10 fixed w-full`} variants={variants} initial="initial" animate="animate">
      <div className="hidden md:flex items-center gap-4">
        <img src="/img/logo-sixeyes.webp" alt="Logo" className="h-10 w-auto" />
      </div>
      <div className="hidden md:flex gap-4 flex-1 md:justify-end text-xl">
        <a href="/" className="cursor-pointer" onClick={handleHomeClick}>
          Home
        </a>
        <a className="cursor-pointer" onClick={handleProjectClick}>
          About Us
        </a>
        <a href="/ourservices" className="cursor-pointer">
          Our Service
        </a>

        <a className="cursor-pointer" onClick={handleContactClick}>
          Contact
        </a>
      </div>
      {/* MOBILE MENU */}
      <div className=" p-0 m-0 md:hidden flex items-center justify-center">
        <Menu currentSlide={currentSlide} />
      </div>
    </motion.div>
  );
};

export default Navbar;
