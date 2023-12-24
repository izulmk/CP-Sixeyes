import React from "react";

const clients = [
  { name: "Aisyah Festival", imageSrc: "/img/logo-aifest.png" },
  { name: "PLN Icon Plus", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_PLN.png" },
  { name: "Politeknik Negeri Jember", imageSrc: "/img/polije-press.png" },
];

const OurClient = () => {
  return (
    <div className="snap-start h-screen w-screen bg-black flex flex-col justify-center" data-slide="8" id="slide-8">
      <div className="flex flex-col items-center text-white">
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold uppercase">
          <h1>Our New Clients</h1>
        </div>
        <div className="flex flex-wrap">
          {clients.map((client, index) => (
            <div key={index} className="relative m-4 overflow-hidden transition-transform transform duration-300 ease-in-out hover:scale-105">
              <img
                src={client.imageSrc}
                alt={client.name}
                className="w-32 h-32 grayscale-image"
              />
              <div className="absolute inset-0 bg-blue-500 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-70"></div>
              <div className="absolute inset-0 text-center flex items-center justify-center text-gray-200 font-bold opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                <h3>{client.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClient;
