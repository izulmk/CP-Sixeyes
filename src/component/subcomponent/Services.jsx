import React from "react";

const Services = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div
          className={`snap-start bg-black text-white h-screen w-screen flex flex-col md:flex-row items-center justify-center text-5xl p-4 md:p-0 ${item.imageRight ? "md:flex-row-reverse" : ""}`}
          data-slide={4 + index}
          id={`slide-${4 + index}`}
          key={index}
        >
          <div className="md:w-1/2 flex flex-col gap-4 p-4 md:p-[5%] justify-center">
            <div>
              <h1 className="text-2xl md:text-4xl text-center md:text-left font-bold mb-2 md:mb-4">{item.title}</h1>
              <p className="text-sm md:text-xl md:text-justify text-center">{item.p}</p>
            </div>
          </div>
          <img src={item.img} alt="" className="object-cover w-screen max-w-[100vw] md:w-1/2 h-2/3 md:h-full max-h-[100vh]" />
        </div>
      ))}
    </div>
  );
};

export default Services;
