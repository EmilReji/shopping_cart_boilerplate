import React from "react";
import Product from "./Product.js";

const ProductList = ({products}) => {
  return (
    <main>
      <div className="product-listing"> 
        <h2>Products</h2>
        {products.map((product) => {
           return <Product key={product.id} data={product} />;
        })}
      </div>
    </main>
  );
}

export default ProductList;