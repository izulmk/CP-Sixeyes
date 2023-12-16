import React from "react";

const SubNews = ({ news, Slider, settings }) => {
  return (
    <div className="flex flex-row w-full h-full justify-center items-center">
      <Slider
        {...settings}
        style={{
          width: "80%",
          //   height: "30%",
          margin: "20px 0px",
        }}
      >
        {news.map((item, index) => (
          <div key={index} className="border-4 relative h-[400px] rounded-[40px] overflow-hidden">
            <img src={`${item.img}`} alt="" className="w-full h-full object-cover " />
            <div className="text-slate-200 absolute bottom-0 bg-black opacity-40 p-4 text-justify ">
              <p>{item.p}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SubNews;
