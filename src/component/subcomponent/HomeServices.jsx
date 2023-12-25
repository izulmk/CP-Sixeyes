import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const HomeServices = ({ variants, currentSlide }) => {
  const ref = useRef();
  const isInview = useInView(ref, { threshold: 0.5 });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInview && !shouldAnimate) {
      setTimeout(() => {
        setShouldAnimate(true);
      }, 1000);
    }
  }, [isInview, shouldAnimate]);

  return (
    <div>
      <motion.div
      key={`first-div-${7}`}
        className="snap-start bg-black text-white h-screen w-screen flex flex-col gap-36 md:gap-72 px-14 text-justify py-16 md:p-[100px] xl:p-[90px] xl:justify-center"
        data-slide="3"
        id="slide-3"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInview ? "animate" : "initial"}
      >
        <motion.div className="flex flex-col gap-2 md:gap-4 m-auto md:my-0 md:mx-[-15px]">
          <motion.h1 className="text-3xl md:text-5xl font-bold xl:text-6xl">We excel in these</motion.h1>
          <motion.p className="text-xl md:text-2xl xl:text-4xl">
            We already solved many company technology problem. with this services.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomeServices;
