import React, { useState } from "react";
import { motion } from "framer-motion";

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Menu = ({ currentSlide }) => {
  const [open, setOpen] = useState(false);
  const items = ["Home", "Projects", "Contact"];

  const handleClick = (itemName) => {
    setOpen(false); // Close the menu when an item is clicked
  };

  return (
    <div
      className={`flex items-center justify-center w-14 h-14 relative bg-white border-none z-20 ${
        currentSlide === 2 || currentSlide === 3 || currentSlide === 4 || currentSlide === 5 || currentSlide === 6 || currentSlide === 7 || currentSlide === 8 ? "bg-slate-200 text-black" : "bg-transparent"
      }`}
    >
      <img
        src={open ? "/img/Close.webp" : "/img/hamburger.webp"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!open)}
        className={`cursor-pointer z-50 transition-transform duration-500 transform ${open ? "rotate-0 scale-100 " : " rotate-180 scale-90"}`}
      />

      <div
        className={`absolute left-0 top-[4px] w-screen h-screen flex flex-col gap-8 items-center justify-center text-3xl z-40 bg-white transform origin-top-left ${
          open ? "scale-100 transition-transform duration-500" : "scale-0 transition-transform duration-500 pointer-events-none"
        }`}
      >
        {open &&
          items.map((item) => (
            <motion.a className="z-40" href={`#${item}`} key={item} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={handleClick}>
              {item}
            </motion.a>
          ))}
      </div>
    </div>
  );
};

export default Menu;
