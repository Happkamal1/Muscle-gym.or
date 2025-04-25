import React from "react";
import { 
  FiArrowRight, 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiYoutube
} from "react-icons/fi";
import Logo from "../images/header/Vector.png";

const Footer = () => {
  return (
    <div className="bg-green-600 h-auto md:h-12 flex items-center py-2 md:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <p className="text-white font-semibold text-base md:text-lg text-center">
          logoname. 2023. All rights reserved
        </p>
      </div>
    </div>
  );
};

const FooterContent = () => {
  return (
    <footer className="bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2">
              <img src={Logo} alt="Logo" className="h-10 md:h-12 w-auto" />
              <span className="font-bold text-2xl md:text-3xl text-[#ffffff]">Logoipsum</span>
            </div>
            <p className="text-[#c4c4c4] text-sm md:text-base px-2 md:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
            
            <div className="flex justify-center md:justify-start space-x-4 pt-4">
              {[FiFacebook, FiTwitter, FiLinkedin, FiYoutube].map((Icon, index) => (
                <a key={index} href="#" className="text-[#c4c4c4] hover:text-blue-600 transition-colors p-1">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#ffffff]">Quick Links</h3>
            <ul className="space-y-1 md:space-y-2">
              {['Software Team', 'Technologies', 'Resources', 'Company', 'Contact us', 'FAQ'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-[#c4c4c4] hover:text-blue-600 transition-colors text-sm md:text-base block px-2 md:px-0 py-1">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#ffffff]">Services</h3>
            <ul className="space-y-1 md:space-y-2">
              {['Dedicated Development', 'Staff Augmentation Services', 'Software Development', 'Development Center'].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-[#c4c4c4] hover:text-blue-600 transition-colors text-sm md:text-base block px-2 md:px-0 py-1">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#ffffff]">Contact Us</h3>
            <address className="not-italic space-y-2 md:space-y-4 text-[#c4c4c4]">
              <div className="flex flex-col md:flex-row md:items-start space-y-1 md:space-y-0 md:space-x-3 text-sm md:text-base">
                <div className="flex justify-center md:justify-start items-center space-x-2">
                  <FiMapPin className="flex-shrink-0" />
                  <p className="break-words">Envoto, Level 13, 2 Elizabeth Victoria 3000 India</p>
                </div>
              </div>
              <div className="flex justify-center md:justify-start items-center space-x-2">
                <FiPhone className="flex-shrink-0" />
                <a href="tel:+918819441176" className="hover:text-blue-600 transition-colors">+91 881 944 1176</a>
              </div>
              <div className="flex justify-center md:justify-start items-center space-x-2">
                <FiMail className="flex-shrink-0" />
                <a href="mailto:ezyoga@gmail.com" className="hover:text-blue-600 transition-colors">ezyoga@gmail.com</a>
              </div>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FullFooter = () => {
  return (
    <>
      <FooterContent />
      <Footer />
    </>
  );
};

export default FullFooter;