import React from "react";
import Coder from "../images/GuideToHire/coder.png";
import True from "../images/GuideToHire/True.png";

const HireDevsGuide = () => {
  return (
    <div className="flex justify-center bg-[#f8fafa] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="w-full max-w-7xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
          User Guide To Hire Dedicated Software Developers
        </h1>
        <div className="flex flex-col lg:flex-row rounded-xl shadow-md gap-4 sm:gap-6 overflow-hidden">
          {/* Sidebar */}
          <div className="w-full lg:w-1/3 bg-white border-b lg:border-r border-gray-200">
            <ul className="divide-y divide-gray-200">
              {[
                "Benefits Of Hiring Developers",
                "Key Factors To Consider While Hiring",
                "Defining Your Project Requirements",
                "Choosing The Right Development Model",
                "Typical Challenges For Hiring Developers",
                "Hiring Freelancers Vs. Dedicated Developers",
                "Communication With Remote Developers",
              ].map((item, index) => (
                <li
                  key={index}
                  className="py-4 sm:py-5 md:py-6 px-4 sm:px-6 text-gray-800 text-sm sm:text-base font-medium hover:bg-[#27c58b] hover:text-white transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="w-full bg-white lg:w-2/3 p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">
              Benefits Of Hiring Developers
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6">
              {[
                "Client-Centric Approach",
                "Best-In-Class Project Management",
                "Global Quality Standards",
                "Time-Zone Compatibility",
                "Cutting-Edge Infrastructure",
                "Agile Adaptability",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-[#27c58b] h-4 w-4 sm:h-5 sm:w-5">
                    <img src={True} alt="Checkmark" className="w-full h-full" />
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-gray-800">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full aspect-video sm:aspect-[3/1] overflow-hidden rounded-lg">
              <img
                src={Coder}
                alt="Developer Working"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireDevsGuide;