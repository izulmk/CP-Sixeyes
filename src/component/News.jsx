import React from "react";
import SubNews from "./subcomponent/SubNews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const news = [
  {
    title: "Sixeyes Care",
    img: "/img/care.jpg",
    p: "We allocated every 10% of the income for those who needs",
  },
  {
    title: "We are looking for partner",
    img: "/img/partner.jpg",
    p: "Partner for working together.",
  },
  {
    title: "Meets the founder",
    img: "/img/founder.jpg",
    p: "Story of the owner of the sixeyes that maintain this company.",
  },
  {
    title: "Sinagro the first our brand development client!",
    img: "/img/sinagro.png",
    p: "Sinagro, company that selling fertilizer for any plants.",
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
          fontSize: isMobile ? "14px" : "18px", 
          lineHeight: "1",
          position: "absolute",
          top: "auto",
          bottom: isMobile ? "50%" : "-22%", 
          right: isMobile ? "-5%" : "42%", 
          transform: "translateX(50%)", 
          zIndex: 242,
          cursor: "pointer",
        }}
        onClick={onClick}
      ></div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    const isMobile = window.innerWidth <= 768; 

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "green",
          fontSize: isMobile ? "14px" : "18px", 
          lineHeight: "1",
          position: "absolute",
          top: "auto",
          bottom: isMobile ? "50%" : "-22%", 
          left: isMobile ? "-5%" : "42%", 
          transform: "translateX(-50%)", 
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
    <div className="snap-start h-screen w-screen bg-black  flex flex-col justify-center" data-slide="9" id="slide-9">
      <div className="flex flex-col gap-1 justify-center items-center text-white">
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold uppercase">
          <h1>News</h1>
        </div>

        <SubNews news={news} Slider={Slider} settings={settings} />
        <div className="flex flex-row gap-1 text-3xl font-thin uppercase justify-center items-center mt-11">
          <h1 className="text-3xl hidden md:block">Next</h1>
        </div>
      </div>
    </div>
  );
};

export default News;
