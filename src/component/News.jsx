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
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "red",
          fontSize: "18px",
          lineHeight: "1",
          position: "absolute",
          top: "auto",
          bottom: "-24%",
          right: "43%",
          zIndex: 1,
          cursor: "pointer",
        }}
        onClick={onClick}
      ></div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "green",
          fontSize: "18px",
          lineHeight: "1",
          position: "absolute",
          top: "auto",
          bottom: "-24%",
          left: "43%",
          zIndex: 1,
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
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="snap-start h-screen w-screen bg-black text-white flex flex-col justify-center" data-slide="7" id="slide-7">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="text-5xl font-semibold uppercase">
          <h1>News</h1>
        </div>
        <SubNews news={news} Slider={Slider} settings={settings} />
        <div className="flex flex-row gap-1 text-3xl font-thin uppercase justify-center items-center">
          <h1 className="text-3xl">Next</h1>
        </div>
      </div>
      <div className="text-7xl font-semibold uppercase ">
        <h1>Blog</h1>
      </div>
    </div>
  );
};

export default News;
