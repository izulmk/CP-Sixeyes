import React from "react";
import HeadOfTeam from "../component/HeadOfTeam";
import TheEngineer from "../component/TheEngineer";
import Designer from "../component/Designer";
import QualityAssurance from "../component/QualityAssurance";
import ProjectManager from "../component/ProjectManager";

const cards = [{ name: "Amir Faisal K", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" }];
const CardsOfEngineer = [
  { name: "Faruk Maulana", nickname: "Faruk", Position: "Fullstack Developer Freelance", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/fark.png" },
  { name: "Zulkarnaen", nickname: "Izul", Position: "Front End Web Developer Internship", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/user-blank.webp" },
];
const CardsOfDesigner = [
  { name: "Ahnaf Maulana", nickname: "Ahnaf", Position: "Graphic Design Internship", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/user-blank.webp" },
];

const AboutUs = () => {
  return (
    <div className="bg-black flex flex-col gap-8 p-4 md:p-8 lg:p-12">
      <div className="flex m-4 md:m-8 flex-col gap-4 md:gap-8 text-gray-200">
        <div className="flex flex-col gap-2 md:gap-4">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">01 - About Our Team</h1>
          <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl">If We Were United, We're Strongest Together</h3>
          <span className="text-md md:text-lg lg:text-xl">With a proven process and commitment to quality code, we build stable, scalable web applications your customer will love.</span>
        </div>

        <div className="flex flex-col gap-4 md:gap-8">
          <div>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">02 - Head of Team</h1>
          </div>
          <div>
            <HeadOfTeam cards={cards} />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-8">
          <div>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">03 - The Engineer</h1>
          </div>
          <div>
            <HeadOfTeam cards={CardsOfEngineer} />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-8">
          <div>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">04 - The Designer</h1>
          </div>
          <div>
            <HeadOfTeam cards={CardsOfDesigner} />
          </div>
        </div>
      </div>

      <div className="text-white flex flex-col relative">
        <img src="img/bg-1.jpg" alt="" className="h-[400px] md:h-[300px] lg:h-[500px] object-cover relative" />
        <div className="absolute flex flex-col justify-center top-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 gap-2 text-center">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Be Part of Our Team</h1>
          <span className="text-md md:text-lg lg:text-xl font-thin">Want to join us?</span>
          <button className="bg-white text-gray-900 px-3 py-1 md:px-4 md:py-2 font-bold rounded-md">Partner Opportunity</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
