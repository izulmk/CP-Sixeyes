import React from "react";

const Portfolio = ({ isNavbarBlack }) => {
  return (
    <div className="snap-start h-screen w-screen bg-black  flex flex-col justify-center" data-slide="7" id="slide-7">
      <div className="flex flex-col gap-1 justify-center items-center text-white">
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold uppercase">
          <h1>Portfolio</h1>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
