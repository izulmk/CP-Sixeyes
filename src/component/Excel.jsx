import React, { useRef, useEffect, useState } from "react";
import SubMenu from "./subcomponent/SubMenu";
import { motion, useInView } from "framer-motion";
import Services from "./subcomponent/Services";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const items = [
  {
    title: "Application Development",
    p: "We provide top-notch application development services, including website, mobile, and desktop app development, to meet your business needs.",
    img: "img/Rectangle 7.png",
  },
  {
    title: "Artificial Intelligence",
    imageRight: true,
    p: "Integrate the power of artificial intelligence into your applications with our cutting-edge solutions.",
    img: "img/Rectangle 7-3.png",
  },
  {
    title: "Brand Development",
    p: "Build a strong brand identity with our comprehensive brand development services.",
    img: "img/brand-2.png",
  },
];

const Excel = ({ desktopVariants, mobileVariants }) => {
  const [ref, ref1, ref2, ref3] = [useRef(), useRef(), useRef(), useRef()];
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const isInview = useInView(ref, { threshold: 0.5 });
  const isInview1 = useInView(ref1, { threshold: 0.5 });
  const isInview2 = useInView(ref2, { threshold: 0.5 });
  const isInview3 = useInView(ref3, { threshold: 0.5 });

  useEffect(() => {
    if (ref.current && !vantaEffect) {
      setVantaEffect(
        NET({
          THREE: THREE,
          el: ref.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 3.0,
          scaleMobile: 1.0,
          backgroundColor: 0x000000,
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

  return (
    <div className="bg-black flex flex-col justify-center items-center w-max">
      <motion.div
        className="snap-start bg-black text-white h-screen w-screen flex flex-col justify-center items-center gap-36 md:gap-72 px-14 text-justify py-16 md:p-[100px] xl:p-[150px] relative"
        data-slide="3"
        id="slide-3"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInview ? "animate" : "initial"}
      >
        <motion.div className="flex flex-col gap-2 md:gap-4 m-auto md:my-0 md:mx-[-15px] items-center relative">
          <motion.h1 className="text-3xl md:text-5xl font-bold xl:text-6xl">
            About Us <span className="bg-white text-md text-black rounded-full px-4 self-center">∀</span>
          </motion.h1>
          <motion.p className="text-xl md:text-2xl xl:text-4xl text-center">
            At SixEyes, we're not just another tech company, we're your partners in progress. As a new and small company, we understand the value of hard work and commitment. Our passion lies in crafting exceptional solutions that elevate
            your brand to new heights.
          </motion.p>
        </motion.div>
      </motion.div>

      <Services items={items} variants={variants} refs={refs} isInviews={isInviews} />
    </div>
  );
};

export default Excel;
