import React from "react";
import SubNews from "./subcomponent/SubNews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const news = [
  {
    title: "Sixeyes berbagi",
    img: "/img/ai.avif",
    p: "sixeyes berbagi",
  },
  {
    title: "This is title",
    img: "/img/ai.avif",
    p: "2 facilis nesciunt voluptatibus asperiores facere quidem? Corporis, eveniet nihil quia, sed provident.",
  },
  {
    title: "This is title",
    img: "/img/ai.avif",
    p: "3 facilis nesciunt voluptatibus asperiores facere quidem? Corporis, eveniet nihil quia, sed provident.",
  },
  {
    title: "This is title",
    img: "/img/ai.avif",
    p: "4 facilis nesciunt voluptatibus asperiores facere quidem? Corporis, eveniet nihil quia, sed provident.",
  },
];

const News = () => {
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         color: "red",
  //         fontSize: "18px",
  //         lineHeight: "1",
  //         position: "absolute",
  //         top: "auto",
  //         bottom: "-24%",
  //         right: "43%",
  //         zIndex: 1,
  //         cursor: "pointer",
  //       }}
  //       onClick={onClick}
  //     ></div>
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{
  //         ...style,
  //         display: "flex",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         color: "green",
  //         fontSize: "18px",
  //         lineHeight: "1",
  //         position: "absolute",
  //         top: "auto",
  //         bottom: "-24%",
  //         left: "43%",
  //         zIndex: 1,
  //         cursor: "pointer",
  //       }}
  //       onClick={onClick}
  //     ></div>
  //   );
  // }

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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      // Tambahkan pengaturan responsif untuk tampilan mobile
      {
        breakpoint: 768, // Breakpoint untuk tampilan mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="snap-start h-screen w-screen bg-black text-white flex flex-col justify-center" data-slide="7" id="slide-7">
      <div className="flex flex-col gap-1 justify-center items-center">
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
