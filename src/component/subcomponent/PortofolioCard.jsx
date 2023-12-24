import React from "react";
import { Link } from "react-router-dom";

const SubNews = ({ news, Slider, settings }) => {
  return (
    <div className="text-white flex flex-row w-full h-full justify-center items-center">
      <Slider
        {...settings}
        className="w-full md:w-4/5 lg:w-3/5 xl:w-2/3"
      >
        {news.map((item, index) => (
          <div key={index} className="border-4 relative h-[400px] md:h-[300px] lg:h-[350px] xl:h-[400px] rounded-[40px] overflow-hidden">
            <Link to="/">
              <img src={`${item.img}`} alt="" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-justify bg-gradient-to-t from-black to-transparent">
                <p className="text-lg text-left md:text-xl lg:text-2xl xl:text-3xl text-slate-200">{item.title}</p>
                <p className="text-white text-left">{item.p}</p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SubNews;
