import React from "react";

const Footer = () => {
  return (
    <div className="snap-start h-screen w-screen bg-white flex flex-col" data-slide="8" id="slide-8">
      <div className="flex flex-col md:flex-row pt-10 px-4 md:px-14 gap-4 h-full">
        <div className="m-auto flex flex-col w-full md:w-4/6">
          <div className="w-full flex flex-col gap-4">
            <h1 className="font-semibold text-2xl md:text-5xl">Work with Us</h1>
            <p className="text-sm md:text-base">Tell us what you need, and we will make it work.</p>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">Contact Us</span>
              <a className="text-gray-500" href="https://wa.me/6285281252199" target="_blank" rel="noopener noreferrer">
                +62 852-8125-2199
              </a>
              <a className="text-gray-500" href="mailto:sixeyes991@gmail.com">
                sixeyes991@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">About Us</span>
              <a className="text-gray-500" href="https://maps.app.goo.gl/oNJoep8ay2P11qSK6" target="_blank" rel="noopener noreferrer">
                Pondok Aren, South Tangerang City, Banten
              </a>
              <a className="text-green-500" href="#">
                Internship
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/6 m-auto flex justify-center">
          <form className="w-full">
            <div className="flex flex-col gap-2">
              <input type="text" placeholder="Name" className="border border-gray-300 p-2 rounded-md" />
              <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded-md" />
              <textarea placeholder="Discussion" className="border border-gray-300 p-2 rounded-md"></textarea>
            </div>
            <button type="submit" className="font-bold text-2xl md:text-5xl mt-4 bg-slate-950 text-white rounded-xl py-2 md:py-4 px-4 md:px-8 m-auto">
              JOIN NOW
            </button>
          </form>
        </div>
      </div>
      <div className="bg-black text-white h-20 flex justify-center items-center">
        <span className="text-sm">Copyright © by Sixeyes Technologies</span>
      </div>
    </div>
  );
};

export default Footer;
