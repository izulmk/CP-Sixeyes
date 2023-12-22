import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Portfolio = ({ isNavbarBlack }) => {
  const tabs = [{ label: "All" }, { label: "Website" }, { label: "Mobile" }, { label: "AI" }, { label: "Brand Development" }];

  const [activeTab, setActiveTab] = useState(0); // State to track active tab

  const projects = [
    {
      type: "Website",
      title: "Project 1",
      description: "Description of project 1",
      images: ["web1.jpg", "web1.jpg", "web1.jpg"],
    },
    {
      type: "Mobile",
      title: "Project 2",
      description: "Description of project 2",
      images: ["web1.jpg", "web1.jpg"],
    },
    {
      type: "AI",
      title: "Project 3",
      description: "Description of project 3",
      images: ["web1.jpg", "web1.jpg", "web1.jpg"],
    },
    { type: "Brand Development", title: "Project 4", description: "Description of project 4", images: ["web1.jpg", "web1.jpg", "web1.jpg", "web1.jpg", "web1.jpg"] },
  ];

  const filteredProjects = activeTab === 0 ? projects : projects.filter((project) => project.type === tabs[activeTab].label);
  console.log(filteredProjects);

  const handleTabClick = (x) => {
    setActiveTab(x);
    console.log(x);
  };

  return (
    <div className="snap-start h-screen w-screen bg-black flex flex-col justify-center" data-slide="7" id="slide-7">
      <div className="w-full h-full mx-auto px-8 sm:px-0 mt-20">
        <div className="sm:w-7/12 sm:mx-auto md:w-full md:h-full">
          <div role="tablist" aria-label="tabs" className="z-10 relative w-max mx-auto h-12 grid grid-cols-5 items-center px-[3px] rounded-full bg-gray-900/20 overflow-hidden shadow-2xl shadow-900/20 transition">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTabClick(index)}
                className={`relative block h-10 px-6 tab rounded-full ${activeTab === index ? "bg-white" : ""}`}
                aria-selected={activeTab === index ? "true" : "false"}
                aria-controls={`panel-${index + 1}`}
                id={`tab-${index + 1}`}
                tabIndex={activeTab === index ? "0" : "-1"}
              >
                <span className={`text-gray-800 ${activeTab === index ? "text-black" : "text-white"}`}>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className={`mt-8 bg-black overflow-hidden justify-center items-center ${activeTab === 0 ? "flex flex-row justify-start h-auto items-center" : ""} ${activeTab !== 0 ? "w-[280%] h-[80%] justify-center items-center" : ""}`}>
            {filteredProjects.map((project, index) => (
              <div key={index} className={`w-1/2 sm:w-1/3 lg:w-1/4 p-4 ${activeTab === 0 ? "flex flex-col items-center" : ""}`}>
                <div className="carousel-container">
                  {activeTab === 0 || (activeTab !== 0 && activeTab === tabs.findIndex((tab) => tab.label === project.type)) ? (
                    <Carousel showThumbs={false} infiniteLoop autoPlay interval={6000} centerMode centerSlidePercentage={100}>
                      {project.images.map((image, imageIndex) => (
                        <div key={`${index}-${imageIndex}`} className="flex justify-center">
                          <img
                            src={`/img/tab/${image}`}
                            alt={`${project.title} - Image ${imageIndex + 1}`}
                            className="carousel-image"
                            style={{ margin: "auto" }} // Tambahkan style untuk centering
                          />
                        </div>
                      ))}
                    </Carousel>
                  ) : (
                    <div className="flex justify-center">
                      {project.images.map((image, imageIndex) => (
                        <img key={`${index}-${imageIndex}`} src={`/img/tab/${image}`} alt={`${project.title} - Image ${imageIndex + 1}`} className="carousel-image" />
                      ))}
                    </div>
                  )}
                </div>
                <h2 className="text-white">{project.title}</h2>
                <p className="text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
