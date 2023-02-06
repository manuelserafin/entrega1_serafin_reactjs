import React from "react";
import CategoriesSocialNetwork from "../../data/categoriesSocialNetwork.json";
import "../../styles/Header.css";

const SocialNetwork = () => {
  return (
    <ul id="categoriesSocialNetwork">
      {CategoriesSocialNetwork.map((category) => {
        return (
          <li key={category.id}>
            <a href={category.href} target="_blank">
              <img src={category.img} alt={category.name} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialNetwork;
