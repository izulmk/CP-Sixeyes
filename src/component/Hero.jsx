import React, { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

// const variants = {
//   initial: {
//     x: -500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//       when: "beforeChildren",
//     },
//   },
// };

const Hero = () => {
  const ref = useRef();
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [vantaEffect, setVantaEffect] = useState(null);

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
    const interval = setInterval(() => {
      setShouldAnimate(true);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" ref={ref}>
      <div className="snap-start h-screen w-screen flex flex-col gap-14 items-center justify-center text-5xl p-10 border-none" data-slide="1" id="slide-1">
        <div className="text-black text-center mt-20">
          <h1 className="uppercase text-3xl md:text-5xl font-bold xl:text-6xl">Welcome To Sixeyes Technology</h1>
          <p className="text-xl md:text-2xl xl:text-4xl">Trust your digital company needs with us</p>
          <button className="bg-gray-800 text-white rounded-3xl py-2 px-6 w-52 font-bold text-base xl:text-2xl xl:w-72 xl:py-3 mt-6">
            <a href="https://wa.me/6285281252199" target="_blank" rel="noopener noreferrer">
              Make Appointment
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
