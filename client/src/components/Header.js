import React from "react";
import Cart from "./Cart.js";

const Header = ({cartItems}) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart cartItems={cartItems}/>
    </header>   
  );
}

export default Header;