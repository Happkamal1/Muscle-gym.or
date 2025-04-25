import React, { useState } from "react";
import BgImage from "../images/WhyHireYou/backgoundHide.png";
import { MdOutlineArrowOutward } from "react-icons/md";

const points = [
  {
    title: "English Speaking Programmers",
    description:
      "India has a large pool of developers fluent in English, enabling clear communication and smooth project execution.",
    icon: "⭐",
  },
  {
    title: "Flexible Work Hours",
    description:
      "Developers in India are open to working in various time zones to align with your schedule.",
    icon: "⭐",
  },
  {
    title: "Rapid Onboarding Process",
    description:
      "Quick hiring and onboarding processes help get your projects started faster.",
    icon: "⭐",
  },
  {
    title: "Expertise In Top Technologies",
    description:
      "Indian developers have expertise in modern stacks like MERN, MEAN, Python, Java, etc.",
    icon: "⭐",
  },
  {
    title: "Reliable Partner Credentials",
    description:
      "Many Indian firms have global certifications, references, and solid track records.",
    icon: "⭐",
  },
];

const WhyHireSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-[#0a0c3d] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image with Overlaid Title */}
        <div className="relative h-full rounded-xl overflow-hidden shadow-2xl">
          <img
            src={BgImage}
            alt="Why Hire from India"
            className="w-full h-full min-h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c3d] via-[#0a0c3dcc] to-transparent" />
          <div className="absolute top-0 left-0 p-2 z-10">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Why Hire Software Developers <br /> In India?
            </h2>
          </div>
        </div>

        {/* Right: Accordion List */}
        <div className="space-y-6">
          {points.map((item, index) => (
            <div
              key={index}
              className={`border-b border-[#ffffff1a] transition-all duration-300 ${
                openIndex === index ? "pb-6" : "pb-4"
              }`}
            >
              <div
                onClick={() => toggle(index)}
                className="flex justify-between items-center py-4 cursor-pointer group"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-xl md:text-2xl font-medium group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <MdOutlineArrowOutward
                  className={`text-xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-90 text-blue-300" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <p className="pl-14 text-gray-300 animate-fadeIn">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireSection;
