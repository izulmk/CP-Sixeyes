import React from "react";
import Services from "./subcomponent/Services";
// import useFetch from "../hooks/useFetch";
import HomeServices from "./subcomponent/HomeServices";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  initial1: {
    x: 0,
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
  animate1: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.4,
    },
  },
  scrollButton: {
    x: 0,
    opacity: 1,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const items = [
  { h: "BRAND DEVELOPMENT", p: "Trust your digital company needs with us.", buttonText: "Make Your Experience", ibutton: ["WEB", "LOGO", "DLL"], img: "/img/Rectangle 7.png" },
  { h: "BRAND DEVELOPMENT", p: "Trust your digital company needs with us.", buttonText: "Make Your Experience", ibutton: ["MOBILE", "LOGO", "DLL"], img: "/img/Rectangle 7-2.png" },
  { h: "BRAND DEVELOPMENT", p: "Trust your digital company needs with us.", buttonText: "Make Your Experience", ibutton: ["BA", "LOGO", "DLL"], img: "/img/Rectangle 7-3.png" },
];
const Excel = ({ currentSlide }) => {
  // const { data, loading, error } = useFetch(`url`);

  return (
    <div className="bg-black flex flex-col justify-center items-center ">
      <HomeServices variants={variants} currentSlide={currentSlide} />
      <Services items={items} variants={variants} currentSlide={currentSlide} />
    </div>
  );
};

export default Excel;
