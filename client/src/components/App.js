import React from "react";
import Header from "./Header.js";
import ProductList from "./ProductList.js";
import AddProduct from "./AddProduct.js";

const App = () => {
  return (
    <div id="app">
      <Header />
      <ProductList />
      <AddProduct />
    </div>
  );
}

export default App;
