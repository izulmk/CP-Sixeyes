import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

// const desktopVariants = {
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
//     },
//   },
//   animate1: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const mobileVariants = {
//   initial: {
//     x: -200,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//       staggerChildren: 0.05,
//     },
//   },
//   animate1: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1.5,
//       staggerChildren: 0.05,
//     },
//   },
// };

const Choose = ({ desktopVariants, mobileVariants }) => {
  const ref = useRef();
  const [shouldAnimate1, setShouldAnimate1] = useState(false);

  const isInview = useInView(ref, { threshold: 0.5 });

  useEffect(() => {
    if (isInview && !shouldAnimate1) {
      setTimeout(() => {
        setShouldAnimate1(true);
      }, 1000);
    }
  }, [isInview, shouldAnimate1]);

  const items = [
    { h1: "20+", p: "Project solved" },
    { h1: "8", p: "Satisfied Clients" },
    { h1: "3", p: "Apps on play store" },
  ];

  const isMobile = window.innerWidth <= 768; // Menentukan jika tampilan adalah mobile

  const variants = isMobile ? mobileVariants : desktopVariants; // Menentukan varian animasi berdasarkan tampilan

  return (
    <div className="bg-black">
      <motion.div
        className="snap-start bg-black text-white min-h-screen min-w-screen gap-8 flex flex-col justify-center p-10 md:p-[100px] xl:p-[150px]"
        data-slide="2"
        id="slide-2"
        variants={variants}
        initial="initial"
        ref={ref}
        animate={isInview ? "animate" : "initial"}
      >
        <motion.h1 className="text-3xl md:text-5xl font-bold xl:text-6xl">Why choose us?</motion.h1>
        <motion.p className="text-xl md:text-2xl xl:text-4xl">We provide a full service technology for your company branding</motion.p>
        <motion.div className="flex flex-row gap-10" variants={variants} initial="initial" animate={shouldAnimate1 ? "animate" : "initial"}>
          {items.map((item, i) => (
            <motion.div className="flex flex-col items-center" variants={variants} key={i}>
              <motion.h1 className="text-2xl md:text-5xl font-bold xl:text-6xl">{item.h1}</motion.h1>
              <motion.p className="text-xs md:text-sm xl:text-lg">{item.p}</motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Choose;
