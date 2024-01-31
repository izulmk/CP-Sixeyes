import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const ReusableButton = ({ buttonText, onClick }) => {
  return (
    <button className="bg-indigo-800 text-white p-3 w-72 flex gap-2 items-center justify-center rounded-lg" onClick={onClick}>
      <SearchRoundedIcon />
      {buttonText}
    </button>
  );
};

export default ReusableButton;
