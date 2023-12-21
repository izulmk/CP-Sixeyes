import React from "react";

const items = ["App", "AI", "BA"];

const SubMenu = ({ currentSlide, handleCircleClick, slideNumber, isNavbarBlack }) => {
  const circleClasses = `${currentSlide <= 2 || currentSlide >= 7 ? "hidden" : "text-gray-600 font-bold text-2xl md:text-3xl xl:text-5xl hover:underline cursor-pointer"}`;

  const handleClick = (slideNumber) => {
    handleCircleClick(slideNumber);
    console.log(slideNumber);
  };
  console.log(currentSlide);
  // console.log(navbarRightSlide);
  console.log(slideNumber);

  return (
    <nav className="bg-transparent p-3 fixed inset-y-0 inset-x-0 top-auto bottom-0 flex flex-col items-center justify-center md:top-0 md:bottom-[400px] md:inset-auto md:left-0 xl:p-[60px] xl:bottom-[300px] 2xl:bottom-[400px] md:m-auto z-5">
      <ul className="flex flex-row justify-center gap-4 items-center md:block  md:items-start md:flex-col ">
        {items.map((item, index) => (
          <li key={index}>
            <div key={index} className={`${currentSlide === 4 + index ? `${circleClasses} text-white transition-all duration-500` : `${circleClasses} opacity-40`} `} onClick={() => handleClick(4 + index)}>
              <span>{item}</span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubMenu;
