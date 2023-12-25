import React from "react";
import { Link } from "react-router-dom";

const SubNews = ({ news, Slider, settings }) => {
  return (
    <div className="text-white flex flex-row w-full h-full justify-center items-center">
      <Slider
        {...settings}
        style={{
          width: "80%",
          margin: "10px 0px",
        }}
      >
        {news.map((item, index) => (
          <div key={index} className="border-4 relative h-[400px] rounded-[40px] overflow-hidden">
            <Link to="/detailnews">
              <img src={`${item.img}`} alt="" className="w-full h-full object-cover " />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-justify bg-gradient-to-t from-black to-transparent">
                <p className="text-xl text-left text-slate-200">{item.title}</p>
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
