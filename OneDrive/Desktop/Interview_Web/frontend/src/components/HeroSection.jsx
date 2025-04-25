import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#e6f8f6] to-[#fdeced] py-12 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-2/3 space-y-4 text-center lg:text-left">
          <h2 className="text-green-400 text-3xl sm:text-4xl md:text-5xl font-semibold uppercase">
            HIRE DEDICATED{" "}
            <span className="inline-block w-36 sm:w-48 md:w-60 h-[6px] bg-green-300 align-middle ml-2"></span>
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-800 leading-tight">
            DEVELOPERS
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 font-medium">
            Top 1% Pre-Vetted, In-House & Dedicated Software Programmers
          </p>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto lg:mx-0">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text
            Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type
            And Scrambled
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 justify-center lg:justify-start">
            <button className="flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-rose-400 text-white rounded-md hover:bg-rose-500 transition-all text-sm sm:text-md font-semibold">
              View More <FiArrowUpRight />
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 border border-green-500 text-gray-600  rounded-md hover:bg-rose-400 hover:text-white transition-all text-sm sm:text-md font-semibold">
              Get In Touch <FiArrowUpRight />
            </button>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full max-w-lg lg:max-w-md bg-white/80 backdrop-blur-xl p-6 sm:p-8 rounded-xl shadow-md">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#3e5258] mb-1 text-center">
              Create Your Team
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 text-center">
              Lorem Ipsum Is Simply Dummy Text Of The Printing
            </p>
            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-black mb-1">
                    Full Name
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="border px-4 py-2 text-sm w-full rounded-md"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black mb-1">Email</p>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="border px-4 py-2 text-sm w-full rounded-md"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black mb-1">
                    Phone Number
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Your Number"
                    className="border px-4 py-2 text-sm w-full rounded-md"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-black mb-1">
                    Country
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Your Country"
                    className="border px-4 py-2 text-sm w-full rounded-md"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-black mb-1">
                  Project Brief
                </p>
                <textarea
                  rows="3"
                  placeholder="Enter Your Project Brief"
                  className="w-full border px-4 py-2 text-sm rounded-md resize-none"
                ></textarea>
              </div>
            </form>
          </div>
          <button
            type="submit"
            className="w-full bg-rose-400 text-white py-3 text-sm sm:text-md font-semibold rounded-md flex items-center justify-center gap-2 hover:bg-rose-500 transition-all mt-4"
          >
            Hire Software Developer <FiArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
