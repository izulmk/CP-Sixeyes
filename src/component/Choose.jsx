import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
const Choose = () => {
  const items = [
    { h1: "20+", p: "Project solved" },
    { h1: "8", p: "Satisfied Clients" },
    { h1: "3", p: "Apps on play store" },
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 2 },
    });
  }, [controls]);

  return (
    <motion.div className="bg-black" initial={{ opacity: 0 }} animate={controls}>
      <div className="snap-start bg-black text-white min-h-screen min-w-screen gap-8 flex flex-col justify-center p-10 md:p-[100px] xl:p-[150px]" data-slide="2" id="slide-2">
        <h1 className="text-3xl md:text-5xl font-bold xl:text-6xl">Why choose us?</h1>
        <p className="text-xl md:text-2xl xl:text-4xl">We provide a full service technology for your company branding</p>
        <div className="flex flex-row gap-10">
          {items.map((item, i) => (
            <div className="flex flex-col items-center" key={i}>
              <h1 className="text-center text-2xl md:text-5xl font-bold xl:text-6xl">{item.h1}</h1>
              <p className="text-center text-xs md:text-sm xl:text-lg">{item.p}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Choose;
