import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

const Hero = ({ desktopVariants, mobileVariants }) => {
  const ref = useRef();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(null);
  const isInview = useInView(ref, { threshold: 0.5 });

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          THREE: THREE,
          el: ref.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 3.0,
          scaleMobile: 1.0,
          backgroundColor: 0xffffff,
          color1: 0x488fd5,
          color2: 0x5d6cd8,
          birdSize: 1.3,
        })
      );
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  useEffect(() => {
    if (isInview && !shouldAnimate) {
      setTimeout(() => {
        setShouldAnimate(true);
      }, 1000);
    }
  }, [isInview, shouldAnimate]);
  const isMobile = window.innerWidth <= 768; // Menentukan jika tampilan adalah mobile

  const variants = isMobile ? mobileVariants : desktopVariants; // Menentukan varian animasi berdasarkan tampilan

  return (
    <div id="hero" ref={ref}>
      <motion.div
        className="snap-start h-screen w-screen flex flex-col gap-14 items-center justify-center text-5xl p-10 border-none"
        data-slide="1"
        id="slide-1"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInview ? "animate" : "initial"}
      >
        <motion.div className="text-black text-center mt-20" variants={variants} initial="hidden" animate="visible">
          <motion.h1 className="uppercase text-3xl md:text-5xl font-bold xl:text-6xl" variants={variants}>
            Welcome To Sixeyes Technology
          </motion.h1>
          <motion.p className="text-xl md:text-2xl xl:text-4xl" variants={variants}>
            Trust your digital company needs with us
          </motion.p>
          <motion.button className="bg-gray-800 text-white rounded-3xl py-2 px-6 w-52 font-bold text-base xl:text-2xl xl:w-72 xl:py-3 mt-6" variants={variants}>
            <a href="https://wa.me/6285281252199" target="_blank" rel="noopener noreferrer">
              Make Appointment
            </a>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
