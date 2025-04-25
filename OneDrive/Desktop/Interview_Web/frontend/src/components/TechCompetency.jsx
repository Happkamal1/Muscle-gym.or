import React from "react";
import First from "../images/TechCompentency/first.png";
import Two from "../images/TechCompentency/two.png";
import Three from "../images/TechCompentency/three.png";
import Four from "../images/TechCompentency/four.png";
import Five from "../images/TechCompentency/five.png";
import Six from "../images/TechCompentency/six.png";
import ArrowIcon from "../images/TechCompentency/Tukda.png";

const techData = [
  {
    title: "Backend Development",
    icon: First,
    color: "bg-[#eaeaff] border-b-[6px] border-[#a2a8ff]",
  },
  {
    title: "Fronted Development",
    icon: Two,
    color: "bg-[#fff3e4] border-b-[6px] border-[#ffbd76]",
  },
  {
    title: "Mobile Development",
    icon: Three,
    color: "bg-[#faeaff] border-b-[6px] border-[#eea3f0]",
  },
  {
    title: "Blockchain, Ai/ML",
    icon: Four,
    color: "bg-[#e8fbff] border-b-[6px] border-[#9aefff]",
  },
  {
    title: "DevOps & Low-Code",
    icon: Five,
    color: "bg-[#f8ffee] border-b-[6px] border-[#e1fcb4]",
  },
  {
    title: "E-commerce & CMS",
    icon: Six,
    color: "bg-[#ffeae7] border-b-[6px] border-[#ffb3a6]",
  },
];

const stackItems = [
  ".NET",
  "C/C++",
  "DJANGO",
  "Firebase",
  "GOLANG",
  "SYMFONY",
  "LARAVEL",
  "NODE",
  "PHP",
  "PYTHON",
  "RUBY ON RAILS",
  "JAVA",
];

const TechnologyCompetency = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-[#ffeef0] to-[#f0fff8] relative overflow-hidden">
      {/* Arrow Icon */}
      <img
        src={ArrowIcon}
        alt="Decorative Arrow"
        className="absolute top-8 left-8 w-20 h-auto hidden md:block"
      />

      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[#233A41] tracking-wide">
            Our Diverse Technology Competency
          </h2>
        </div>

        {/* Subtext */}
        <p className="text-[#132A31] max-w-3xl mx-auto text-base md:text-lg tracking-wide">
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever
          Since
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techData.map((tech, idx) => (
            <div
              key={idx}
              className={`rounded-lg shadow-md ${tech.color} p-6 flex flex-col gap-4`}
            >
              <div className="flex items-center gap-4">
                <img
                  src={tech.icon}
                  alt={tech.title}
                  className="w-10 h-10 object-contain"
                />
                <h3 className="text-xl font-semibold text-[#22313f]">
                  {tech.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-x-2 gap-y-1 text-sm text-gray-700 mt-2">
                {stackItems.map((item, i) => (
                  <span
                    key={i}
                    className="border-r border-gray-300 pr-2 last:border-none"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyCompetency;
