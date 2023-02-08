import React from "react";
import CartWidget from "../assets/template/CartWidget";
import Navbar from "../assets/template/Navbar";
import SocialNetwork from "../assets/template/SocialNetwork";
import "../styles/Header.css";
import LogoLong from "../assets/image/logos/logo-ch-long.png";

const Header = () => {
  return (
    <header>
      <section id="sectionHeaderTop">
        <a id="logoAndBrand" href="/">
          <img src={LogoLong} alt="Logo Tienda Online" />
        </a>
        <button id="shoppingCart">
          <CartWidget />
        </button>
      </section>
      <section id="sectionHeaderBottom">
        <nav>
          <Navbar />
          <SocialNetwork />
        </nav>
      </section>
    </header>
  );
};

export default Header;
