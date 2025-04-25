import React, { useState } from "react";
import { FiChevronDown, FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { MdOutlineArrowOutward } from "react-icons/md";
import Logo from "../images/header/Vector.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={Logo} 
              alt="Logo" 
              className="h-6 md:h-8 w-auto" 
            />
            <span className="font-bold text-xl md:text-2xl text-gray-800">
              Logoipsum
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            <div className="relative group">
              <button
                className="text-[#233a41] hover:text-blue-700 font-medium flex items-center text-base lg:text-lg"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Software Team
                <FiChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200 transition-opacity duration-200 ${
                  isDropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                {[
                  "Development Team",
                  "Design Team",
                  "QA Team",
                  "DevOps Team"
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 text-sm lg:text-base"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {["Services", "Technologies", "Resources", "Company"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-[#233a41] hover:text-blue-600 font-medium text-base lg:text-lg"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 lg:px-6 lg:py-3 border border-gray-600 text-black font-medium rounded-md hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2">
              <span className="text-sm lg:text-base">Get in Touch</span>
              <MdOutlineArrowOutward className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="pt-2 space-y-2">
              {/* Mobile Dropdown */}
              <div className="px-2">
                <button
                  className="w-full flex justify-between items-center px-3 py-3 text-gray-700 hover:text-blue-600 font-medium bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                >
                  <span>Software Team</span>
                  <FiChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isMobileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${
                  isMobileDropdownOpen ? "max-h-96" : "max-h-0"
                }`}>
                  <div className="pl-4 mt-1 space-y-2">
                    {[
                      "Development Team",
                      "Design Team",
                      "QA Team",
                      "DevOps Team"
                    ].map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block px-3 py-2 text-gray-700 hover:text-blue-600 text-sm"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {["Services", "Technologies", "Resources", "Company"].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block px-3 py-3 text-gray-700 hover:text-blue-600 font-medium hover:bg-gray-50 rounded-lg mx-2"
                >
                  {item}
                </a>
              ))}

              <div className="pt-2 px-2">
                <button className="w-full px-6 py-3 border border-gray-600 text-black font-medium rounded-md hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span className="text-sm">Get in Touch</span>
                  <MdOutlineArrowOutward className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;