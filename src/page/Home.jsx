import React, { useState, useEffect } from "react";
import NavbarRight from "../component/NavbarRight";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Choose from "../component/Choose";
import Excel from "../component/Excel";
import SubMenu from "../component/subcomponent/SubMenu";
import Footer from "../component/Footer";
import News from "../component/News";
import Portfolio from "../component/Portfolio";
import OurClient from "../component/OurClient";

const desktopVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  animate1: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const mobileVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.05,
    },
  },
};

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isNavbarBlack, setIsNavbarBlack] = useState(false); //change navbar
  const [navbarRightSlide, setNavbarRightSlide] = useState(2); //change navbarRight
  // const sectionRef = useRef(null);

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
                entry.target.dataset.slide === "4" ||
                entry.target.dataset.slide === "5" ||
                entry.target.dataset.slide === "6" ||
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
    <div>
      <main className="snap-y snap-mandatory h-screen w-screen overflow-x-hidden" style={{ textShadow: isNavbarBlack ? "1px 1px 1px rgba(0, 0, 0, 0.8)" : "1px 1px 1px rgba(255, 255, 255, 0.8)" }}>
        <section id="Home">
          <Navbar isNavbarBlack={isNavbarBlack} currentSlide={currentSlide} />
          <NavbarRight navbarRightSlide={navbarRightSlide} currentSlide={currentSlide} handleCircleClick={handleCircleClick} />
          <SubMenu currentSlide={currentSlide} handleCircleClick={handleCircleClick} />
          <Hero desktopVariants={desktopVariants} mobileVariants={mobileVariants} />
        </section>
        <section>
          <Choose isNavbarBlack={isNavbarBlack} desktopVariants={desktopVariants} mobileVariants={mobileVariants} />
        </section>
        <section id="Projects">
          <Excel isNavbarBlack={isNavbarBlack} currentSlide={currentSlide} navbarRightSlide={navbarRightSlide} desktopVariants={desktopVariants} mobileVariants={mobileVariants} />
        </section>
        <section id="Portfolio">
          <Portfolio currentSlide={currentSlide} />
        </section>
        <section id="News">
          <OurClient currentSlide={currentSlide} navbarRightSlide={navbarRightSlide} desktopVariants={desktopVariants} mobileVariants={mobileVariants} />
        </section>
        <section id="News">
          <News isNavbarBlack={isNavbarBlack} currentSlide={currentSlide} />
        </section>
        <section id="Contact">
          <Footer currentSlide={currentSlide} />
        </section>
      </main>
    </div>
  );
};

export default Home;
