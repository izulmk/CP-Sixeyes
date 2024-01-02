import React from "react";
import HeadOfTeam from "../component/HeadOfTeam";
import TheEngineer from "../component/TheEngineer";
import Designer from "../component/Designer";
import QualityAssurance from "../component/QualityAssurance";
import ProjectManager from "../component/ProjectManager";

const cards = [
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
];
const CardsOfEngineer = [
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
];
const CardsOfDesigner = [
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
];
const CardsOfQA = [
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
];
const CardsOfPM = [
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
  { name: "Faisal Amir Karimullah", nickname: "Faisal", Position: "CEO Founder", Skill: "Web Developer", Desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, aperiam.", Img: "img/founder.webp" },
];

const AboutUs = () => {
  return (
    <div className="bg-black flex flex-col gap-10">
      <div className="flex  flex-col gap-10  text-gray-200">
        <div className="flex flex-col gap-8">
          <h1 className="font-bold text-5xl">01 - About Our Team</h1>
          <h3 className="font-bold text-3xl">We are Not Afraid to Build</h3>
          <span className="text-xl">With a proven process and commitment to quality code, we build stable, scalable web applications your customer will love. </span>
        </div>
        {/* Head of Team */}
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="font-bold text-5xl">02 - Head of Team</h1>
          </div>
          <div>
            <HeadOfTeam cards={cards} />
          </div>
        </div>
        {/* Head of Team */}
        {/* The Engineer */}
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="font-bold text-5xl">03 - The Engineer</h1>
          </div>
          <div>
            <TheEngineer cards={CardsOfEngineer} />
          </div>
        </div>
        {/* end The Engineer */}
        {/* The Designer */}
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="font-bold text-5xl">04 - The Designer</h1>
          </div>
          <div>
            <Designer cards={CardsOfDesigner} />
          </div>
        </div>
        {/* end The Designer */}
        {/* The Quality Assurance */}
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="font-bold text-5xl">05 - The Quality Assurance</h1>
          </div>
          <div>
            <QualityAssurance cards={CardsOfQA} />
          </div>
        </div>
        {/* end The Quality Assurance */}
        {/* The Project Manager */}
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="font-bold text-5xl">06 - The Project Manager</h1>
          </div>
          <div>
            <ProjectManager cards={CardsOfPM} />
          </div>
        </div>
        {/* end The Project Manager */}
      </div>
      <div className="text-white flex flex-col relative">
        <img src="img/aboutus.webp" alt="" className="h-[500px] object-cover relative" />
        <div className="absolute flex flex-col justify-center top-[250px] left-[100px] gap-4">
          <h1 className="text-5xl font-bold">Be Part of Our Team</h1>
          <span className="text-3xl font-thin">Want to join us? </span>
          <button className="bg-white text-gray-900 w-fit p-2 font-bold rounded-md ">Career Opportunity</button>
        </div>
      </div>
      <div className="flex flex-row gap-10 items-center justify-around">
        {/* 1 */}
        <div className=" flex flex-col text-white gap-6">
          <h1 className="text-3xl font-thin">Sixeyes</h1>
          <div className="flex flex-col justify-center gap-4">
            <span className="text-3xl font-thin">Want to join us? </span>
            <span className="text-3xl font-thin">Want to join us? </span>
            <span className="text-3xl font-thin">Want to join us? </span>
          </div>
        </div>
        {/* 1 */}
        {/* 2 */}
        <div className=" flex flex-col text-white gap-6">
          <h1 className="text-3xl font-thin">Sixeyes</h1>
          <div className="flex flex-col justify-center gap-4">
            <span className="text-3xl font-thin">Want to join us? </span>
            <span className="text-3xl font-thin">Want to join us? </span>
            <span className="text-3xl font-thin">Want to join us? </span>
          </div>
        </div>
        {/* 2 */}
        {/* 3 */}
        <div className=" flex flex-col text-white gap-6">
          <h1 className="text-3xl font-thin">Sixeyes</h1>
          <div className="flex flex-col justify-center gap-4">
            <span className="text-3xl font-thin">Want to join us? </span>
            <span className="text-3xl font-thin">Want to join us? </span>
            <span className="text-3xl font-thin">Want to join us? </span>
          </div>
        </div>
        {/* 3 */}
        {/* 4 */}
        <div className=" flex flex-col text-white gap-6">
          <h1 className="text-3xl font-thin">Sixeyes</h1>
          <div className="flex flex-col justify-center gap-4">
            <span className="text-3xl font-thin">
              {" "}
              <a href="/">Home</a>{" "}
            </span>
            <span className="text-3xl font-thin">Want to join us? </span>
            <span className="text-3xl font-thin">Want to join us? </span>
          </div>
        </div>
        {/* 4 */}
      </div>
      <div className="text-white flex flex-row justify-between">
        {/* sosmed */}
        <div className="flex flex-row gap-10">
          <a href="">Fb</a>
          <a href="">Ins</a>
          <a href="">In</a>
        </div>
        {/* end sosmed */}
        <div>
          <span className="text-sm">© 2023 Sixeyes Technologies. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
