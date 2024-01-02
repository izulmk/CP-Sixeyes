import React from "react";

const TheEngineer = ({ cards }) => {
  return (
    <div className="flex flex-row gap-10 flex-wrap items-center justify-center ">
      {/* image */}
      {cards.map((card, index) => (
        <div className=" flex flex-row gap-5 items-center justify-center" key={index}>
          <div className="flex flex-col justify-center bg-white gap-8">
            <div className="group h-96 w-80 ">
              <div className="relative h-full w-full  shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 ">
                  <img src={card.Img} alt="" className="h-full w-full  object-cover shadow-xl shadow-black/40 " />
                </div>
                <div className="absolute inset-0 h-full w-full  bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] ">
                  <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">{card.nickname}</h1>
                    <p className="text-lg "> {card.Skill}</p>
                    <p className="text-base "> {card.Desc}</p>
                    <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-2xl text-black">{card.name}</h1>
              <span className="font-thin text-base text-black">{card.Position}</span>
            </div>
          </div>
        </div>
      ))}
      {/* end image */}
    </div>
  );
};

export default TheEngineer;
