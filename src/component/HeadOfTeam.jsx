import React from "react";

const HeadOfTeam = ({ cards }) => {
  return (
    <div className="flex flex-row gap-10 flex-wrap items-center justify-center">
      {cards.map((card, index) => (
        <div className="flex flex-col items-center justify-center" key={index}>
          <div className="group h-96 w-80">
            <div className="relative h-full w-full shadow-xl">
              <div className="absolute inset-0">
                <img src={card.Img} alt={card.name} className="h-full w-full object-contain shadow-xl shadow-black/40 " />
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <h1 className="text-lg font-bold">{card.name}</h1>
            <span className="text-sm text-gray-500">{card.Position}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeadOfTeam;
