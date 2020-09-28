import React from "react";
import AddProductBtn from "./AddProductBtn.js";
import AddProductForm from "./AddProductForm.js";

const AddProduct = () => {
  return (
    <div className="add-form visible">
        <h3>Add Product</h3>
        <AddProductBtn />
        <AddProductForm />
    </div>
  );
}

export default AddProduct;