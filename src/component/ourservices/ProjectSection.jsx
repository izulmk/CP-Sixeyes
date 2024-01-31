import React from "react";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ReusableButton from "./button/Button";

const ProjectSection = ({ title, description, imageSrc, buttonText, index, lists }) => {
  const isEvenSection = index % 2 === 0;

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
      <div className={`gap-2 md:w-1/2 flex flex-col md:gap-4 ${isEvenSection ? "order-1" : "order-2"}`}>
        <h1 className="uppercase font-bold text-indigo-900 md:text-3xl">{title}</h1>
        <div>
          <p className="text-indigo-900">{description}</p>
        </div>
        <div>
          <ul>
            {lists.map((item) => (
              <li key={item.id} className="flex gap-2 text-red-600 font-semibold">
                <SendRoundedIcon style={{ color: "blue", width: "15px" }} />
                {item.item}
              </li>
            ))}
          </ul>
        </div>
        <ReusableButton buttonText={buttonText} />
      </div>
      <div className={`md:w-1/2 ${isEvenSection ? "md:order-2" : "md:order-1"}`}>
        <img src={imageSrc} alt="" className="md:w-full" />
      </div>
    </div>
  );
};

export default ProjectSection;
