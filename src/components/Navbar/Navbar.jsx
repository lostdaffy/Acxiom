import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container navbar ${sticky ? "dark-nav" : ""}`}>
      <h2 className="logo">Acxiom</h2>
      <ul className={`links ${mobileMenu ? "" : "hide-mobile-menu"}`}>
        <li>
          <Link to="hero" smooth={true} offset={-260} duration={500}>
            <i class="ri-user-line"></i> Login
          </Link>
        </li>
        <li>
          <Link to="hero" smooth={true} offset={-260} duration={500}>
            <i class="ri-shopping-cart-2-line"></i> Cart
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Become a Vendor
          </Link>
        </li>
      </ul>
      <i className="ri-menu-4-fill menu-icon" onClick={toggleMenu}></i>
    </nav>
  );
};

export default Navbar;
