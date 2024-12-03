import React, { useRef } from "react";
import Logo from "../assets/Images/logo.png";
import { cart } from "../Data";
import '../assets/css/Navbar.css'

const Navbar = () => {
  const searchRef = useRef();
  const cartRef = useRef();
  const menuRef = useRef();

  const toggleSearch = () => {
    searchRef.current.classList.toggle("active");
  };

  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
  };

  const menuHandler = () => {
    menuRef.current.classList.toggle("active");
  };

  const navLinks = ["home", "About", "Menu", "Products", "Review", "Blog"];

  return (
    <header className="header">
      <a href="#" className="logo">
        <img src={Logo} alt="Logo" />
      </a>

      <nav ref={menuRef} className="navbar">
        {navLinks.map((link, index) => (
          <a key={index} className="Nav-item" href={`#${link}`}>
            {link}
          </a>
        ))}
      </nav>

      <div className="icons">
        <div
          className="fa-solid fa-magnifying-glass fa-3x"
          onClick={toggleSearch}
        ></div>
        <div
          className="fa-solid fa-cart-shopping fa-3x"
          onClick={cartHandler}
        ></div>
        <div className="fa-solid fa-bars fa-3x" id="menu-btn" onClick={menuHandler}></div>
      </div>

      <div ref={searchRef} className="search-form">
        <input type="search" id="search-box" placeholder="Search here..." />
        <label htmlFor="search-box" className="fas fa-search"></label>
      </div>

      <div ref={cartRef} className="cart-items-container">
        {cart.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.img} alt={`Cart Item ${index + 1}`} />
            <div className="content">
              <h3>{item.name}</h3>
              <div className="price">{item.price}</div>
            </div>
            <span className="fa-solid fa-x fa-5x"></span>
          </div>
        ))}
        <div className="btn">
          <a href="#">Check Out Now</a>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
