import React from "react";
import Client from "../images/WhyHireYou/developer.png";
import Dot from "../images/WhyHireYou/dot.png";
import Line from "../images/WhyHireYou/line.png";
import Object from "../images/WhyHireYou/object.png";
import Checkmark from "../images/WhyHireYou/checkmark.png";

const WhyHireSection = () => {
  return (
    <section
      className="relative py-16 overflow-hidden bg-no-repeat bg-white"
      style={{
        backgroundImage: `url(${Dot}), url(${Line})`,
        backgroundPosition: "left top, right top",
        backgroundSize: "auto, auto",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-[#233a41] mb-4 leading-tight tracking-wide">
            Why Hire Developers From Our Name
          </h2>
          <p className="text-[#394c53] max-w-3xl mx-auto text-base md:text-lg leading-relaxed tracking-wide">
            Lorem Ipsum is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
            Ever Since
          </p>
        </div>

        {/* First Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="flex justify-center max-w-6xl order-2 md:order-1">
            <img
              src={Client}
              alt="Client Illustration"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h3 className="text-3xl font-semibold text-black mb-6 tracking-normal">
              High Quality/Cost Ratio
            </h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00b289] flex items-center justify-center mt-1">
                  <img src={Checkmark} alt="Checkmark" className="w-3 h-3" />
                </div>
                <div>
                  <p className="text-[#233a41] text-xl font-semibold mb-1">
                    Hire Silicon Valley Caliber At Half The Cost
                  </p>
                  <p className="text-[#132A31] text-md leading-relaxed">
                    Hire The Top 1% Of 15 Million+ Developers From 150+ Countries Who Have Applied To Turing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00b289] flex items-center justify-center mt-1">
                  <img src={Checkmark} alt="Checkmark" className="w-3 h-3" />
                </div>
                <div>
                  <p className="text-[#233a41] text-xl font-semibold mb-1">
                    100+ Skills Available
                  </p>
                  <p className="text-[#132A31] text-md leading-relaxed">
                    Hire The Top 1% Of 15 Million+ Developers From 150+ Countries Who Have Applied To Turing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#3f5358] mb-6">
              Rigorous Vetting
            </h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00b289] flex items-center justify-center mt-1">
                  <img src={Checkmark} alt="Checkmark" className="w-3 h-3" />
                </div>
                <div>
                  <p className="text-[#233a41] text-xl font-semibold mb-1">
                    5+ hours of tests and interview
                  </p>
                  <p className="text-[#132A31] text-md leading-relaxed">
                    Hire the top 1% of 15 million+ developers from 150+ countries who have applied to Turing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00b289] flex items-center justify-center mt-1">
                  <img src={Checkmark} alt="Checkmark" className="w-3 h-3" />
                </div>
                <div>
                  <p className="text-[#233a41] text-xl font-semibold mb-1">
                    Seniority tests
                  </p>
                  <p className="text-[#132A31] text-md leading-relaxed">
                    Hire the top 1% of 15 million+ developers from 150+ countries who have applied to Turing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={Object}
              alt="Vetting Illustration"
              className="w-full max-w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireSection;
