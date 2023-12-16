import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      when: "beforeChildren", // Ensures the children animate even if they are already in view
    },
  },
};

const Hero = () => {
  const ref = useRef();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldAnimate(true);
    }, 1000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero">
      <motion.div
        className="snap-start h-screen w-screen flex flex-col gap-14 items-center justify-center text-5xl p-10 border-none"
        style={{ backgroundImage: "url('img/Hero.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        data-slide="1"
        id="slide-1"
        variants={variants}
        initial="initial"
        animate={shouldAnimate ? "animate" : "initial"}
        ref={ref}
      >
        <motion.h1 className="uppercase text-3xl md:text-5xl font-bold xl:text-6xl" variants={variants}>
          We make digital assets
        </motion.h1>
        <motion.p className="text-xl md:text-2xl xl:text-4xl" variants={variants}>
          Trust your digital company needs with us
        </motion.p>
        <motion.button className="bg-gray-800 text-white rounded-3xl py-2 px-6 w-52 font-bold text-base xl:text-2xl xl:w-72 xl:py-3 " variants={variants}>
          Make Appointment
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
