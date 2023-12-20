import { motion } from "framer-motion";
import React from "react";

const Services = ({ items, variants, refs, isInviews }) => {
  return (
    <div>
      {items.map((item, index) => (
        <motion.div
          className={`snap-start bg-black text-white h-screen w-screen flex flex-col md:flex-row items-center justify-center text-5xl p-4 md:p-0 ${item.imageRight ? "md:flex-row-reverse" : ""}`}
          data-slide={4 + index}
          id={`slide-${4 + index}`}
          variants={variants}
          initial={`initial`}
          ref={refs[index]}
          animate={isInviews[index] ? `animate` : `initial`}
          key={index}
        >
          <div className="md:w-1/2 flex flex-col gap-4 p-4 md:p-[5%] justify-center">
            <motion.div>
              <motion.h1 className="text-2xl md:text-4xl text-center md:text-left font-bold mb-2 md:mb-4">{item.title}</motion.h1>
              <motion.p className="text-sm md:text-xl md:text-justify text-center">{item.p}</motion.p>
            </motion.div>
          </div>

          <img
            src={item.img}
            alt=""
            className="object-cover w-screen md:w-1/2 h-2/3 md:h-full max-h-[90vh]" // Set max height to 90vh
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
