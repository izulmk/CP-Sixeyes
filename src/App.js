import React, { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import DetailNews from "./page/DetailNews";
import DetailPorto from "./page/DetailPorto";
import AboutUs from "./page/AboutUs";
import OurServices from "./page/OurServices";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isNavbarBlack, setIsNavbarBlack] = useState(false); //change navbar
  const [navbarRightSlide, setNavbarRightSlide] = useState(2); //change navbarRight

  const handleCircleClick = (slideNumber) => {
    setCurrentSlide(slideNumber);
    const element = document.getElementById(`slide-${slideNumber}`);
    element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slideNumber = parseInt(entry.target.dataset.slide, 10);
            setCurrentSlide(slideNumber);
            setIsNavbarBlack(
              entry.target.dataset.slide === "2" ||
                entry.target.dataset.slide === "3" ||
                // entry.target.dataset.slide === "4" ||
                entry.target.dataset.slide === "5" ||
                // entry.target.dataset.slide === "6" ||
                entry.target.dataset.slide === "7" ||
                entry.target.dataset.slide === "8" ||
                entry.target.dataset.slide === "9"
            ); //change navbar
            setNavbarRightSlide(2);
          }
        });
      },
      options,
      {
        threshold: 0.5, // Adjust as needed //change navbar
      }
    );
    // console.log(options);

    const slideSections = document.querySelectorAll(".snap-start");
    // console.log(slideSections);

    slideSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      slideSections.forEach((section) => {
        observer.unobserve(section); //change navbar
      });
      observer.disconnect();
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isNavbarBlack={isNavbarBlack} currentSlide={currentSlide} handleCircleClick={handleCircleClick} />} />
        <Route path="/detailnews" element={<DetailNews />} />
        <Route path="/detailporto" element={<DetailPorto />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourservices" element={<OurServices isNavbarBlack={isNavbarBlack} currentSlide={currentSlide} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
