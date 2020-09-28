import React from "react";

const AddProductForm = () => {
  return (
        <form>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input type="text" id="product-name" value="" />
          </div>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input type="text" id="product-price" value="" />
          </div>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input type="text" id="product-quantity" value="" />
          </div>

          <div className="actions form-actions">
            <a className="button">Add</a>
            <a className="button">Cancel</a>
          </div>
        </form>
  );
}

export default AddProductForm ;