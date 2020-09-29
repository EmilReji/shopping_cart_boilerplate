import React from "react";

const ProductDetails = ({data, handleAddToCart, handleEditToggle, hideButtons, handleDeleteProduct}) => {
  const handleCartClick = (evt) => {
    evt.preventDefault();
    handleAddToCart(data.id);
  };

  const handleToggleForm = (evt) => {
    evt.preventDefault();
    handleEditToggle();
  };

  const handleDeleteClick = (evt) => {
    evt.preventDefault();
    handleDeleteProduct(data.id);
  };

  return (
    <div className="product-details">
      <h3>{data.title}</h3>
      <p className="price">${data.price}</p>
      <p className="quantity">{data.quantity} left in stock</p>
      { !hideButtons && 
      <div className="actions product-actions">
        <a className={`button add-to-cart ${data.quantity === 0 ? 'disabled' : ''}`} onClick={handleCartClick}>Add to Cart</a>
        <a className="button edit" onClick={handleToggleForm}>Edit</a>
      </div>
      }
      <a className="delete-button" onClick={handleDeleteClick}><span>X</span></a>
    </div>
  );
}

export default ProductDetails;