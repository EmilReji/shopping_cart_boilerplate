import React from "react";

// const EditProductForm = ({ handleEditToggle, data }) => {
//   return (
//     <div className="edit-form">
//         <h3>Edit Product</h3>
//         <form>
//             <div className="input-group">
//                 <label htmlFor="product-name">Product Name</label>
//                 <input type="text" id="product-name" value={data.title} />
//             </div>

//             <div className="input-group">
//                 <label htmlFor="product-price">Price</label>
//                 <input type="text" id="product-price" value={data.price} />
//             </div>

//             <div className="input-group">
//                 <label htmlFor="product-quantity">Quantity</label>
//                 <input type="text" id="product-quantity" value={data.quantity} />
//             </div>

//             <div className="actions form-actions">
//                 <a className="button">Update</a>
//                 <a className="button" onClick={handleEditToggle}>Cancel</a>
//             </div>
//         </form>
//     </div>
//   );
// }

const EditProductForm = ({
  handleEditToggle,
  fields,
  handleInputChange,
  handleUpdateProduct,
}) => {
  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    handleUpdateProduct(fields);
    handleEditToggle();
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
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
            <button className="button" type="submit">
            Update
            </button>
            <a className="button" onClick={handleEditToggle}>
            Cancel
            </a>
        </div>
        </form>
    </div>
  );
};

export default EditProductForm;