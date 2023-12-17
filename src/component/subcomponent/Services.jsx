import { motion } from "framer-motion";
import React from "react";

const Services = ({ items, variants, refs, isInviews }) => {
  return (
    <div>
      {items.map((item, index) => (
        <motion.div
          className={`snap-start bg-black text-white h-screen w-screen flex flex-col md:flex-row items-center justify-center text-5xl p-10 md:p-0 ${item.imageRight ? 'md:flex-row-reverse' : ''}`}
          data-slide={4 + index}
          id={`slide-${4 + index}`}
          variants={variants}
          initial={`initial`}
          ref={refs[index]}
          animate={isInviews[index] ? `animate` : `initial`}
          key={index}
        >
          <div className="md:w-1/2 flex flex-col gap-10 md:gap-[490px] xl:gap-[400px] 2xl:gap-[400px] p-10 md:px-[100px] justify-center">
            <motion.div>
              <motion.h1 className="text-4xl font-bold mb-4">{item.title}</motion.h1>
              <motion.p className="text-center text-xl md:text-2xl md:text-justify">{item.p}</motion.p>
            </motion.div>
          </div>

          <img src={item.img} alt="" className="object-cover w-screen md:w-1/2 h-2/3 md:h-full" />
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
