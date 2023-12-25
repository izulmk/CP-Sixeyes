import React from "react";

const Footer = () => {
  return (
    <div className="snap-start  h-screen bg-white flex flex-col" data-slide="10" id="slide-10">
      <div className="flex flex-col md:flex-row pt-10 px-4 md:px-14 gap-8 h-full">
        <div className="m-auto flex flex-col w-full md:w-4/6">
          <div className="w-full flex flex-col gap-8">
            <h1 className="font-semibold text-xl md:text-4xl">Work with Us</h1>
            <p className="text-sm md:text-base">Tell us what you need, and we will make it work.</p>
            <div className="flex flex-col gap-4">
              <span className="font-semibold">Contact Us</span>
              <a className=" text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded" href="https://wa.me/6285281252199" target="_blank" rel="noopener noreferrer">
                Whatsapp : +62 852-8125-2199
              </a>
              <a className="contact-button text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded" href="mailto:sixeyes991@gmail.com" target="_blank">
                Email : sixeyes991@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-semibold">About Us</span>
              <a className="text-gray-500" href="https://maps.app.goo.gl/oNJoep8ay2P11qSK6" target="_blank" rel="noopener noreferrer">
                Pondok Aren, South Tangerang City, Banten
              </a>
              <a className="text-green-500" href="https://forms.gle/ofoRFJaPvpmpcoVQA" target="blank">
                Internship With Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white h-20 mt-10 w-full text-center flex justify-center items-center">
        <span className="text-sm">© 2023 Sixeyes Technologies. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
