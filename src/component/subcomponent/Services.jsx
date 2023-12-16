import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const Services = ({ items, variants, currentSlide }) => {
  const [ref1, ref2, ref3] = [useRef(), useRef(), useRef(), useRef()];
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [shouldAnimate1, setShouldAnimate1] = useState(false);
  const [shouldAnimate2, setShouldAnimate2] = useState(false);

  const isInview1 = useInView(ref1, { threshold: 0.5 });
  const isInview2 = useInView(ref2, { threshold: 0.5 });
  const isInview3 = useInView(ref3, { threshold: 0.5 });

  // useEffect(() => {
  //   const inViewRefs = [isInview1, isInview2, isInview3];

  //   inViewRefs.forEach((view) => {
  //     if (view && !shouldAnimate) {
  //       setTimeout(() => {
  //         setShouldAnimate(true);
  //       }, 1000);
  //     }
  //   });
  // }, [isInview1, isInview2, isInview3, shouldAnimate]);

  useEffect(() => {
    if (isInview1 && !shouldAnimate) {
      setTimeout(() => {
        setShouldAnimate(true);
      }, 1000);
    }
    if (isInview2 && !shouldAnimate1) {
      setTimeout(() => {
        setShouldAnimate(true);
      }, 1000);
    }
    if (isInview3 && !shouldAnimate2) {
      setTimeout(() => {
        setShouldAnimate(true);
      }, 1000);
    }
  }, [isInview1, isInview2, isInview3, shouldAnimate, shouldAnimate1, shouldAnimate2]);

  const refs = [ref1, ref2, ref3];
  // const isInviews = [isInview1, isInview2, isInview3];

  return (
    <div>
      {items.map((item, index) => (
        <motion.div
          className="snap-start text-slate-400 h-screen w-screen flex flex-col justify-center gap-64"
          style={{
            backgroundImage: `url('${item.img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-slide={`${4 + index}`}
          id={`slide-${4 + index}`}
          variants={variants}
          initial={`initial`}
          ref={refs[index]}
          animate={isInview1 || isInview2 || isInview3 ? "animate1" : "initial"}
          key={index}
        >
          <motion.div>
            <motion.div className="flex flex-col gap-10 justify-center items-center md:mt-40 md:-mb-44 pt-36" variants={variants} ref={refs[index]}>
              <motion.h1
                className="text-center font-bold text-xl md:text-7xl md:text-justify relative p-8 group"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", color: "white" }}
                variants={variants}
                ref={refs[index]}
                // initial={`initial`}
              >
                {item.h}
              </motion.h1>
              <motion.p
                className="text-center text-xl md:text-2xl md:text-justify"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", color: "white" }}
                variants={variants}
                ref={refs[index]}
                // initial={`initial`}
              >
                {item.p}
              </motion.p>
              <motion.button
                className="text-center text-xl md:text-2xl md:text-justify bg-slate-100 text-slate-950 py-4 px-8 rounded-xl"
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", color: "black" }}
                variants={variants}
                ref={refs[index]}
                // initial={`initial`}
              >
                {item.buttonText}
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-row gap-4 justify-end px-24 font-semibold" variants={variants} initial="initial1" ref={refs[index]} animate={shouldAnimate ? "scrollButton" : "initial1"}>
            {item.ibutton.map((a, index) => (
              <motion.div key={index} className="bg-slate-200 rounded-lg w-28 h-24 shadow-xl text-slate-900 flex justify-center items-center" variants={variants}>
                <motion.h1 className="">{a}</motion.h1>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
