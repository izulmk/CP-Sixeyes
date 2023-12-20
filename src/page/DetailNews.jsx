import React from "react";
import { Link } from "react-router-dom";

const DetailNews = () => {
  return (
    <div className="flex flex-col">
      DetailNews
      <Link to="/">
        <button className="bg-indigo-400 w-24 h-10 text-white">Back</button>
      </Link>
    </div>
  );
};

export default DetailNews;
