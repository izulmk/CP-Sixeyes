import React, { useRef, useEffect, useState } from "react";
import SubMenu from "./subcomponent/SubMenu";
import { motion, useInView } from "framer-motion";
import Services from "./subcomponent/Services";

const desktopVariants = {
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
    },
  },
};

const mobileVariants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.05,
    },
  },
  animate1: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.05,
    },
  },
};

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

const Excel = ({ currentSlide, slideNumber, handleCircleClick }) => {
  const [ref, ref1, ref2, ref3] = [useRef(), useRef(), useRef(), useRef()];
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const isInview = useInView(ref, { threshold: 0.5 });
  const isInview1 = useInView(ref1, { threshold: 0.5 });
  const isInview2 = useInView(ref2, { threshold: 0.5 });
  const isInview3 = useInView(ref3, { threshold: 0.5 });

  useEffect(() => {
    const inViewRefs = [isInview, isInview1, isInview2, isInview3];

    inViewRefs.forEach((view) => {
      if (view && !shouldAnimate) {
        setTimeout(() => {
          setShouldAnimate(true);
        }, 1000);
      }
    });
  }, [isInview, isInview1, isInview2, isInview3, shouldAnimate]);

  const refs = [ref1, ref2, ref3];
  const isInviews = [isInview1, isInview2, isInview3];

  const isMobile = window.innerWidth <= 768; // Menentukan jika tampilan adalah mobile

  const variants = isMobile ? mobileVariants : desktopVariants; // Menentukan varian animasi berdasarkan tampilan

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
            At SixEyes, we're not just another agency, we're your partners in progress. As a new and small company, we understand the value of hard work and commitment. Our passion lies in crafting exceptional solutions that elevate your
            brand to new heights.
          </motion.p>
        </motion.div>
      </motion.div>

      <Services items={items} variants={variants} refs={refs} isInviews={isInviews} />
    </div>
  );
};

export default Excel;
