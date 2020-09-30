import React from 'react';

const ProductForm = ({
  handleToggle,
  fields,
  handleInputChange,
  handleSubmitForm,
  type
}) => {

  // const invalidFields = () => {
  //   console.log(fields);
  //   return String(fields.quantity).match(/\d+/) &&
  //     String(fields.price).match(/\d+\.?\d+/) &&
  //     fields.title.length >= 3;
  // }

  const formTitle = type === 'edit' ? 'Edit' : 'Add';
  const formSubmitButton = type === 'edit' ? 'Update' : 'Add';

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    // if (invalidFields()) return;
    handleSubmitForm(fields);
    handleToggle();
  };

  return (
    <div className="edit-form">
      <h3>{formTitle} Product</h3>
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
            {formSubmitButton}
            </button>
            <a className="button" onClick={handleToggle}>
            Cancel
            </a>
        </div>
        </form>
    </div>
  );
};

export default ProductForm;