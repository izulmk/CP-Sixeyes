import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const Choose = ({ variants }) => {
  const items = [
    { h1: "20+", p: "Project solved" },
    { h1: "8", p: "Satisfied Clients" },
    { h1: "3", p: "Apps on play store" },
  ];

  return (
    <div className="bg-black">
      <div className="snap-start bg-black text-white min-h-screen min-w-screen gap-8 flex flex-col justify-center p-10 md:p-[100px] xl:p-[150px]" data-slide="2" id="slide-2" variants={variants} initial="initial1" animate="animate1">
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
    </div>
  );
};

export default Choose;
