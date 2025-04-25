import React from "react";
import First from "../images/Tesimonials/1.png";
import Second from "../images/Tesimonials/2.png";
import Third from "../images/Tesimonials/3.png";
import Four from "../images/Tesimonials/4.png";
import Icon from "../images/Tesimonials/icon.png";

const testimonials = [
  {
    name: "Krish Bruynson",
    title: "Director, Storloft",
    image: First,
    playIcon: Icon,
  },
  {
    name: "Krish Bruynson",
    title: "Director, Storloft",
    image: Second,
    playIcon: Icon,
  },
  {
    name: "Krish Bruynson",
    title: "Director, Storloft",
    image: Third,
    playIcon: Icon,
  },
  {
    name: "Krish Bruynson",
    title: "Director, Storloft",
    image: Four,
    playIcon: Icon,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-r from-white to-green-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#2e3a59] mb-4">
          What Our Clients Have To Say About Us
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-12 max-w-xl mx-auto">
          Take A Look At What Our Happy Clients Say About Our Software Development Services
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-end justify-center pb-6">
                  <div className="w-14 h-14 bg-[#2fc980] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <img
                      src={testimonial.playIcon}
                      alt="Play Icon"
                      className="w-5 h-5"
                    />
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="mt-4 text-left w-full">
                <p className="text-lg font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500 mb-1">{testimonial.title}</p>
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-green-500 text-xl leading-none">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
