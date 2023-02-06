import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../../styles/Header.css";

const CartWidget = () => {
  return (
    <>
      <ShoppingCartIcon sx={{ color: "#E2DFDC" }} fontSize="large" />
      <span id="cartCounter">0</span>
    </>
  );
};

export default CartWidget;
