import React from "react";
import Header from "./Header.js";
import ProductListContainer from "./ProductListContainer.js";
import AddProductContainer from "./AddProductContainer.js";

const App = () => {
  return (
    <div id="app">
      <Header />
      <ProductListContainer />
      <AddProductContainer />
    </div>
  );
}

export default App;
