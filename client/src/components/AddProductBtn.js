import React from "react";

const AddProductBtn = ({ handleOnClick }) => {
  return (
    <p><a className="button add-product-button" onClick={handleOnClick}>Add A Product</a></p>
  );
}

export default AddProductBtn;