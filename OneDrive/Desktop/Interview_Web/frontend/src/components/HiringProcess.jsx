import React from "react";
import Circle from "../images/HiringProcess/circle.png";
import step1 from "../images/HiringProcess/1.png";
import step2 from "../images/HiringProcess/2.png";
import step3 from "../images/HiringProcess/3.png";
import step4 from "../images/HiringProcess/4.png";
import processBg from "../images/HiringProcess/bg.png";
import arrow from "../images/HiringProcess/arrow.png";

const processSteps = [
  {
    id: 1,
    title: "INQUIRY",
    img: step1,
    description:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
  {
    id: 2,
    title: "SELECT DEVELOPERS",
    img: step2,
    description:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
  {
    id: 3,
    title: "TEAM INTEGRATION",
    img: step3,
    description:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
  {
    id: 4,
    title: "TEAM SCALING",
    img: step4,
    description:
      "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
];

const HiringProcess = () => {
  return (
    <section
      className="py-20 px-4 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${processBg})` }}
    >
      <div className="mx-auto text-center">
        <h2 className="text-5xl font-bold text-[#2e3a59] mb-5 tracking-wide">
          Our Hiring Process
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto text-md">
          Take A Look At Our Simple And Straightforward Process To Hire Software
          Developers From ValueCoders.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {processSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              {/* Card */}
              <div className="relative w-[244px] h-[360px] rounded-xl flex flex-col items-center justify-start pt-6 px-4 text-center">
                {/* Circle + Icon */}
                <div className="relative w-[240px] h-[240px]">
                  <img
                    src={Circle}
                    alt="circle background"
                    className="w-[240px] h-[240px]"
                  />
                  <img
                    src={step.img}
                    alt={step.title}
                    className="absolute top-1/2 left-1/2 w-[80px] h-[80px] -translate-x-1/2 -translate-y-1/2 object-contain"
                  />
                  {/* Step number */}
                  <span className="absolute top-5 right-5 bg-[#ff8c91] text-white text-md w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-md">
                    {step.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#233A41] mt-2 mb-2 uppercase tracking-wide">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#5a6d71]">{step.description}</p>
              </div>

              {/* Arrow (except after last card) */}
              {index !== processSteps.length - 1 && (
                <div className="md:ml-4 hidden md:block">
                  <img src={arrow} alt="arrow" className="h-10" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProcess;
