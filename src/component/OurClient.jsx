import React from "react";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const clients = [
  { name: "Aisyah Festival", imageSrc: "/img/logo-aifest.png" },
  { name: "PLN Icon Plus", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_PLN.png" },
  { name: "Politeknik Negeri Jember", imageSrc: "/img/polije-press.png" },
];

const OurClient = ({ desktopVariants, mobileVariants, containerVariants, textVariants }) => {
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
  const isMobile = window.innerWidth <= 768; // Menentukan jika tampilan adalah mobile

  const variants = isMobile ? mobileVariants : desktopVariants; // Menentukan varian animasi berdasarkan tampilan

  return (
    <div className="snap-start h-screen w-screen bg-black flex flex-col justify-center" data-slide="8" id="slide-8">
      <motion.div className="flex flex-col items-center text-white" variants={variants} initial="initial" ref={ref} animate={isInview ? "animate" : "initial"}>
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold uppercase">
          <h1>Our New Clients</h1>
        </div>
        <motion.div className="flex flex-wrap" variants={variants} initial="initial" animate={shouldAnimate1 ? "animate" : "initial"}>
          {clients.map((client, index) => (
            <motion.div className="relative m-4 overflow-hidden transition-transform transform duration-300 ease-in-out hover:scale-105" variants={variants} key={index}>
              <motion.img src={client.imageSrc} alt={client.name} className="w-32 h-32 grayscale-image" />
              <motion.div className="absolute inset-0 bg-blue-500 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-70"></motion.div>
              <motion.div className="absolute inset-0 text-center flex items-center justify-center text-gray-200 font-bold opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                <motion.h3>{client.name}</motion.h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OurClient;
