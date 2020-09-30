import React from "react";
import Cart from "./Cart.js";

const Header = ({cartItems, handleCheckoutCart}) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart cartItems={cartItems} handleCheckoutCart={handleCheckoutCart} />
    </header>   
  );
}

export default Header;