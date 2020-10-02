import React from "react";
import CartContainer from "./CartContainer.js";

const Header = ({cartItems, handleCheckoutCart}) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <CartContainer />
    </header>   
  );
}

export default Header;