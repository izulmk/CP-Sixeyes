import React from "react";
import { motion } from "framer-motion";

const NavbarRight = ({ currentSlide, handleCircleClick, navbarRightSlide, variants }) => {
  const circleClasses = `md:w-5 md:h-5 rounded-full mt-5 ${
    currentSlide === 2 || currentSlide === 3 || currentSlide === 5 || currentSlide === 7 || currentSlide === 8 || currentSlide === 9
      ? "bg-slate-900 cursor-pointer"
      : currentSlide === 1 || currentSlide === 4 || currentSlide === 6 || currentSlide === 10
      ? "bg-slate-200 cursor-pointer transition-all duration-500  hover:scale-150"
      : "bg-slate-200 transition-all duration-500 hover:scale-150 cursor-pointer"
  }`;

  const handleClick = (slideNumber) => {
    handleCircleClick(slideNumber);
  };

  return (
    <motion.nav className="bg-transparent p-4 fixed inset-y-0 right-0 flex flex-col items-center justify-center m-4 z-10" variants={variants} initial="initial" animate="animate">
      <ul className="flex flex-col space-y-2">
        <li>
          <div className={`transition-opacity duration-500 ${currentSlide === 1 ? `${circleClasses} bg-slate-900 opacity-100` : `${circleClasses} opacity-40`} `} onClick={() => handleClick(1)}></div>
        </li>
        <li>
          <div
            className={`transition-opacity duration-500 ${currentSlide === 2 ? `md:w-5 md:h-5 rounded-full mt-10 bg-slate-200 transition-all duration-500 hover:scale-150 opacity-100` : `${circleClasses} opacity-40`} `}
            onClick={() => handleClick(2)}
          ></div>
        </li>
        <li>
          <div
            className={`transition-opacity duration-500 ${currentSlide === 3 ? `md:w-5 md:h-5 rounded-full mt-10 bg-slate-200 transition-all duration-500 hover:scale-150 opacity-100` : `${circleClasses} opacity-40`} `}
            onClick={() => handleClick(3)}
          ></div>
        </li>
        <li>
          <div className={`transition-opacity duration-500 ${currentSlide === 4 ? `${circleClasses} bg-slate-900 opacity-100` : `${circleClasses} opacity-40`} `} onClick={() => handleClick(4)}></div>
        </li>
        <li>
          <div
            className={`transition-opacity duration-500 ${currentSlide === 5 ? `md:w-5 md:h-5 rounded-full mt-10 bg-slate-200 transition-all duration-500 hover:scale-150 opacity-100` : `${circleClasses} opacity-40`} `}
            onClick={() => handleClick(5)}
          ></div>
        </li>
        <li>
          <div className={`transition-opacity duration-500 ${currentSlide === 6 ? `${circleClasses} bg-slate-900 opacity-100` : `${circleClasses} opacity-40`} `} onClick={() => handleClick(6)}></div>
        </li>
        <li>
          <div
            className={`transition-opacity duration-500 ${currentSlide === 7 ? `md:w-5 md:h-5 rounded-full mt-10 bg-slate-200 transition-all duration-500 hover:scale-150 opacity-100` : `${circleClasses} opacity-40`} `}
            onClick={() => handleClick(7)}
          ></div>
        </li>
        <li>
          <div
            className={`transition-opacity duration-500 ${currentSlide === 8 ? `md:w-5 md:h-5 rounded-full mt-10 bg-slate-200 transition-all duration-500 hover:scale-150 opacity-100` : `${circleClasses} opacity-40`} `}
            onClick={() => handleClick(8)}
          ></div>
        </li>
        <li>
          <div
            className={`transition-opacity duration-500 ${currentSlide === 9 ? `md:w-5 md:h-5 rounded-full mt-10 bg-slate-200 transition-all duration-500 hover:scale-150 opacity-100` : `${circleClasses} opacity-40`} `}
            onClick={() => handleClick(9)}
          ></div>
        </li>
        <li>
          <div className={`transition-opacity duration-500 ${currentSlide === 10 ? `${circleClasses} bg-slate-900 opacity-100` : `${circleClasses} opacity-40`} `} onClick={() => handleClick(10)}></div>
        </li>
      </ul>
    </motion.nav>
  );
};

export default NavbarRight;
