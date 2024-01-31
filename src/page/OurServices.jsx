import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ProjectSection from "../component/ourservices/ProjectSection";
import ServiceItem from "../component/ourservices/ServiceItem";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import ReusableButton from "../component/ourservices/button/Button";
import FeatureCard from "../component/ourservices/FeatureCard";

const projectData = [
  {
    title: "Branding & design",
    description: "Our branding and design team creates powerful and holistic brand strategies that set the stage for your marketing initiatives for today and tomorrow.",
    imageSrc: "img/branding-image.jpg",
    buttonText: "Branding and design projects",
    lists: [
      { id: 1, item: "Research & Ideation" },
      { id: 2, item: "Consultant" },
      { id: 3, item: "Marketing collateralls design" },
      { id: 4, item: "Brand identity design" },
      { id: 5, item: "marketing collaterals production" },
    ],
  },
  {
    title: "Website development",
    description: "We design your website with deep roots in storytelling. Whether it’s website development, design, maintenance; we will create custom designs that are human-centered and conversion focused.",
    imageSrc: "img/optimize-web-dev.jpg",
    buttonText: "Website projects",
    lists: [
      { id: 1, item: "Research & Ideation" },
      { id: 2, item: "Development" },
      { id: 3, item: "Maintenance" },
      { id: 4, item: "Layout design" },
      { id: 5, item: "Content production" },
    ],
  },
  {
    title: "Branding & design",
    description: "Our branding and design team creates powerful and holistic brand strategies that set the stage for your marketing initiatives for today and tomorrow.",
    imageSrc: "img/optimize-sosmed-management.jpg",
    buttonText: "Branding and design projects",
    lists: [
      { id: 1, item: "Research & Ideation" },
      { id: 2, item: "Strategy & planning" },
      { id: 3, item: "Content production" },
      { id: 4, item: "Social media moderation" },
      { id: 5, item: "Ads activation" },
      { id: 5, item: "Report & review" },
    ],
  },
];

const servicesData = [
  {
    imgSrc: "img/optimize-video-motion.jpg",
    title: "Video & motion",
    items: ["Promotional Video", "Promotional Video", "Promotional Video", "Promotional Video"],
  },
  {
    imgSrc: "img/optimize-collaboration.jpg",
    title: "Collaboration",
    items: ["Collaborative Projects", "Collaborative Projects", "Collaborative Projects", "Collaborative Projects"],
  },
  {
    imgSrc: "img/optimize-documentation.jpg",
    title: "Documentation",
    items: ["Documentary Videos", "Documentary Videos", "Documentary Videos", "Documentary Videos"],
  },
];

const featureData = [
  {
    icon: <SearchRoundedIcon style={{ width: "40px", height: "40px" }} />,
    title: "Discover",
    description:
      "We begin every project with an in-depth and exhaustive discovery process to lay the foundation for the work to come. All aspects of the projects are unpacked: business plan, user and marketing research, design inspiration, development strategy, launch plan, and more.",
  },
  {
    icon: <FavoriteBorderRoundedIcon style={{ width: "40px", height: "40px" }} />,
    title: "Discover",
    description:
      "We begin every project with an in-depth and exhaustive discovery process to lay the foundation for the work to come. All aspects of the projects are unpacked: business plan, user and marketing research, design inspiration, development strategy, launch plan, and more.",
  },
  {
    icon: <ChatBubbleOutlineRoundedIcon style={{ width: "40px", height: "40px" }} />,
    title: "Discover",
    description:
      "We begin every project with an in-depth and exhaustive discovery process to lay the foundation for the work to come. All aspects of the projects are unpacked: business plan, user and marketing research, design inspiration, development strategy, launch plan, and more.",
  },
  {
    icon: <RocketLaunchRoundedIcon style={{ width: "40px", height: "40px" }} />,
    title: "Discover",
    description:
      "We begin every project with an in-depth and exhaustive discovery process to lay the foundation for the work to come. All aspects of the projects are unpacked: business plan, user and marketing research, design inspiration, development strategy, launch plan, and more.",
  },
];

const OurServices = ({ isNavbarBlack, currentSlide, buttonText }) => {
  return (
    <div className="">
      <Navbar isNavbarBlack={isNavbarBlack} currentSlide={currentSlide} />
      <div className="relative flex flex-col items-center md:flex-row px-4 md:px-20 py-10 gap-6">
        <div className="w-[250px] md:w-1/3 flex justify-center">
          <img src="img/banner-service.jpg" alt="" className="object-cover w-full" />
        </div>
        <div className="absolute inset-0 bg-black opacity-20 mb-10"></div>
        <div className="absolute top-[150px] md:top-auto md:right-0 md:w-2/3 w-full uppercase text-[24px] text-center md:text-start md:text-3xl font-extrabold md:font-bold text-indigo-900 flex items-center">
          <h1 className="leading-relaxed md:p-20" style={{ textShadow: "1px 1px 1px rgba(0, 0, 0, 0.8)" }}>
            Your brand is the way customers see your bussiness. it is shaped by the way you represent yourself-professionally, socially and visually.
          </h1>
        </div>
      </div>
      {/* 2 */}
      <div className="flex flex-col px-4 md:px-20 gap-6 items-center justify-center md:py-10">
        {projectData.map((project, index) => (
          <ProjectSection key={index} {...project} index={index} />
        ))}
      </div>
      {/* 2 */}
      {/* 3 */}
      <div className="flex flex-col md:flex-row px-4 md:px-20 gap-4 items-center justify-center py-10">
        {servicesData.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
      {/* 3 */}
      <div className="flex flex-row items-center justify-center px-4 md:px-20">
        <ReusableButton buttonText="View all projects" />
      </div>
      <div className="px-4 md:px-20 py-10 flex flex-col items-center justify-center md:items-start gap-10">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-row items-center justify-center md:justify-start text-3xl text-red-600 font-bold gap-2">
            <FavoriteBorderRoundedIcon />
            <span>Our Approach</span>
          </div>
          <div className="text-5xl text-center font-bold text-indigo-900">
            <h1>How we work</h1>
          </div>
        </div>
        {/* 4 */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
        {/* 4 */}
      </div>
      <div className="md:p-32 p-10  flex flex-col items-center justify-center gap-10 bg-indigo-900 ">
        <h1 className="text-orange-400 text-3xl md:text-5xl font-bold">Lets grow together</h1>
        <button className="text-white text-xl  md:text-3xl px-16 py-4 rounded-md bg-red-500">Start a partnership</button>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default OurServices;
