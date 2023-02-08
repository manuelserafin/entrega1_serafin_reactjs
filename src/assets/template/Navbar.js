import React from "react";
import CategoriesNavbar from "../../data/categoriesNavbar.json";
import "../../styles/Header.css";

const Navbar = () => {
  return (
    <ul id="categoriesList">
      {CategoriesNavbar.map((category) => {
        return (
          <li key={category.id}>
            <a href="/">{category.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
