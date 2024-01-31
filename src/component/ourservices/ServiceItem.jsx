import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const ServiceItem = ({ imgSrc, title, items }) => (
  <div className="flex flex-col md:gap-4 gap-2">
    <div className="bg-red-700">
      <img src={imgSrc} alt="" className="w-[400px]" />
    </div>
    <h1 className="uppercase font-bold text-indigo-900 md:text-3xl">{title}</h1>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="flex gap-2 text-red-600 font-semibold">
          <SendRoundedIcon style={{ color: "blue", width: "15px" }} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default ServiceItem;
