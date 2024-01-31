import React from "react";

const FeatureCard = ({ icon, title, description }) => (
  <div className="w-full md:w-1/5 flex flex-col gap-2 items-start">
    <div className="rounded-full bg-indigo-900 w-[60px] h-[60px] flex items-center justify-center text-orange-400">{icon}</div>
    <div className="text-3xl font-bold text-indigo-900">
      <h1>{title}</h1>
    </div>
    <span className="font-semibold text-justify">{description}</span>
  </div>
);

export default FeatureCard;
