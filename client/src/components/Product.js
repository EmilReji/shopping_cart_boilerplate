import React from "react";
import ProductDetails from "./ProductDetails.js";
import ProductForm from "./EditProductForm.js";

const Product = ({data}) => {
  return (
      <div className="product">
         <ProductDetails data={data} />
         { false && <ProductForm /> }
     </div>
  );
}

export default Product;