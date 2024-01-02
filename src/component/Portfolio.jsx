import React from "react";
import PortofolioCard from "./subcomponent/PortofolioCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const news = [
  {
    title: "Sinagro Brand Development",
    img: "/img/sinagro.webp",
    p: "Sinagro is a new company that selling fertilizer for any plant. they choosing us for Developing a New Brand, and we give our services for making a website company profile, logo, ads flyer / poster design, and facebook pages.",
  },
  {
    title: "City Guide Mobile App",
    img: "/img/city-guide.webp",
    p: "City guide, is a mobile apps based on the bondowoso city in indonesia, that provide a place for travelling.",
  },
  {
    title: "Mosque finder mobile apps",
    img: "/img/mosque-finder.webp",
    p: "Mosque finder , app that provide services for searching nearby mosque.",
  },
  {
    title: "Polije Press Reading Book Apps",
    img: "/img/polije-press.webp",
    p: "Polije press reading book Apps is the application that allows user to read app on the mobile app. the app providing service reading unlimited book about self development, novel, etc if subscribing on the app.",
  },
  {
    title: "Aisyah Festival Event Website",
    img: "/img/aifest.webp",
    p: "Aisyah Festival is the one of the largest islamic event on indonesia. they choose us to make a website for their event the website have a landing page and admin page to modify the event and competitions, and admin page.",
  },
  {
    title: "PLN Iconplus portal website",
    img: "/img/Logo_PLN.webp",
    p: "A website for managing PLN's partnership.",
  },
  {
    title: "Fruit Classifier AI Image Processing",
    img: "/img/fruit.webp",
    p: "Artificial Intelligence that can classify the fruits.",
  },
];

const News = ({ isNavbarBlack }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    const isMobile = window.innerWidth <= 768; // Check if the screen width is 768 pixels or less

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "red",
          fontSize: isMobile ? "14px" : "18px", // Adjusted font size for smaller screens
          lineHeight: "1",
          position: "absolute",
          top: "auto",
          bottom: isMobile ? "50%" : "-22%", // Adjusted for better mobile positioning
          right: isMobile ? "-5%" : "42%", // Centered horizontally
          transform: "translateX(50%)", // Centered horizontally
          zIndex: 242,
          cursor: "pointer",
          // marginLeft: "20%",
        }}
        onClick={onClick}
      ></div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    const isMobile = window.innerWidth <= 768; // Check if the screen width is 768 pixels or less

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "green",
          fontSize: isMobile ? "14px" : "18px", // Adjusted font size for smaller screens
          lineHeight: "1",
          position: "absolute",
          top: "auto",
          bottom: isMobile ? "50%" : "-22%", // Adjusted for better mobile positioning
          left: isMobile ? "-5%" : "42%", // Centered horizontally
          transform: "translateX(-50%)", // Centered horizontally
          zIndex: 242,
          cursor: "pointer",
        }}
        onClick={onClick}
      ></div>
    );
  }

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Ubah slidesToShow ke 1 untuk tampilan mobile
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      // Tambahkan pengaturan responsif untuk tampilan mobile
      {
        breakpoint: 768, // Breakpoint untuk tampilan mobile
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          pauseOnHover: true,
        },
      },
    ],
  };

  return (
    <div className="snap-start h-screen w-screen bg-black  flex flex-col justify-center" data-slide="7" id="slide-7">
      <div className="flex flex-col gap-1 justify-center items-center text-white">
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold uppercase">
          <h1>A Few Of Our Portofolio</h1>
        </div>

        <PortofolioCard news={news} Slider={Slider} settings={settings} />
        <div className="flex flex-row gap-1 text-3xl font-thin uppercase justify-center items-center mt-14">
          <h1 className="text-3xl hidden md:block ">Next</h1>
        </div>
      </div>
    </div>
  );
};

export default News;
