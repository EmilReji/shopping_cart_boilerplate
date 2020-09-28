import React from "react";

const ProductDetails = ({data}) => {
  return (
    <div className="product-details">
      <h3>{data.title}</h3>
      <p className="price">${data.price}</p>
      <p className="quantity">{data.quantity} left in stock</p>
      <div className="actions product-actions">
        <a className="button add-to-cart">Add to Cart</a>
        <a className="button edit">Edit</a>
      </div>
      <a className="delete-button"><span>X</span></a>
    </div>
  );
}

export default ProductDetails;