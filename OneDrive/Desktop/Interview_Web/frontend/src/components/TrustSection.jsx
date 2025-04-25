import React from 'react';
import Typing from '../images/TrustSection/Typing.png';

const TrustSection = () => {
  const features = [
    "Client-Centric Approach",
    "Best-In-Class Project Management",
    "Global Quality Standards",
    "Time-Zone Compatibility",
    "Cutting-Edge Infrastructure",
    "Agile Adaptability"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Content Column */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#233A41] mb-6 leading-tight">
              Top Companies Trust ValueCoders<br />
              For Hiring Software Developers
            </h2>
            <p className="text-[#132A31] text-base md:text-lg mb-8 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              It has been the industry's standard dummy text ever since the 1500s.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-3 h-6 w-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
                    <svg 
                      className="h-3.5 w-3.5 text-blue-500" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#35484e] text-base font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="lg:w-1/2 flex justify-center">
            <img 
              src={Typing} 
              alt="Typing Illustration" 
              className="w-full max-w-md md:max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
