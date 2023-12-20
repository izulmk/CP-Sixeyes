import React from "react";

const SubNews = ({ news, Slider, settings }) => {
  return (
    <div className="flex flex-row w-full h-full justify-center items-center">
      <Slider
        {...settings}
        style={{
          width: "80%",
          margin: "10px 0px",
        }}
      >
        {news.map((item, index) => (
          <div key={index} className="border-4 relative h-[400px] rounded-[40px] overflow-hidden">
            <img src={`${item.img}`} alt="" className="w-full h-full object-cover " />
            
            <div className="absolute bottom-0 left-0 right-0 p-4 text-justify bg-gradient-to-t from-black to-transparent">
              <p className="text-xl text-slate-200">{item.title}</p> 
              <p className="text-white">{item.p}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SubNews;
