import React from "react";

const AddProductForm = ({ handleToggleForm, fields, handleInputChange, handleNewProduct, resetFields }) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    handleNewProduct(fields);
    resetFields();
    handleToggleForm();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          id="product-name"
          name="title"
          value={fields.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input
          type="text"
          id="product-price"
          name="price"
          value={fields.price}
          onChange={handleInputChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input
          type="text"
          id="product-quantity"
          name="quantity"
          value={fields.quantity}
          onChange={handleInputChange}
        />
      </div>

      <div className="actions form-actions">
        <button className="button" type="submit">Add</button>
        <a className="button" onClick={handleToggleForm}>
          Cancel
        </a>
      </div>
    </form>
  );
}

export default AddProductForm ;