import React from "react";

const Footer = () => {
  return (
    <div className="snap-start h-screen w-screen bg-white flex flex-col" data-slide="8" id="slide-8">
      <div className=" flex flex-row pt-10 px-14 gap-4 h-full ">
        <div className="m-auto flex flex-row w-4/6">
          <div className="w-4/6 flex flex-col gap-4">
            <h1 className="font-semibold text-5xl">Work with Us...</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo aperiam consequuntur illum? Eaque, excepturi.</p>
          </div>
          <div className="w-1/6 flex flex-col gap-2">
            <span className="font-semibold">Contact Us</span>
            <a className="text-gray-500" href="">
              Phone
            </a>
            <a className="text-gray-500" href="">
              Email
            </a>
          </div>
          <div className="w-1/6 flex flex-col gap-2">
            <span className="font-semibold">About It</span>
            <a className="text-gray-500" href="">
              About Us
            </a>
            <a className="text-gray-500" href="">
              Blog
            </a>
            <a className="text-gray-500" href="">
              Project
            </a>
            <a className="text-gray-500" href="">
              Career
            </a>
          </div>
        </div>
        <div className="w-2/6 m-auto flex justify-center">
          <button className=" font-bold text-5xl bg-slate-950 text-white rounded-xl py-4 px-8 m-auto ">JOIN NOW</button>
        </div>
      </div>
      <div className="bg-black text-white h-20 flex justify-center items-center">
        <span>Copyright © by blablabla</span>
      </div>
    </div>
  );
};

export default Footer;
