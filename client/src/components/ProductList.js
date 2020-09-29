import React from "react";
import Product from "./Product.js";

const ProductList = ({products, handleAddToCart, handleUpdateProduct, handleDeleteProduct}) => {
  return (
    <main>
      <div className="product-listing"> 
        <h2>Products</h2>
        {products.map((product) => {
           return (
             <Product
               key={product.id}
               data={product}
               handleAddToCart={handleAddToCart}
               handleUpdateProduct={handleUpdateProduct}
               handleDeleteProduct={handleDeleteProduct}
             />
           );
        })}
      </div>
    </main>
  );
}

export default ProductList;