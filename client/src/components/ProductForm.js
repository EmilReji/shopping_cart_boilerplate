import React from 'react';

class ProductForm extends React.Component {
  state = {
    fields: {
      _id: this.props.data._id || null,
      title: this.props.data.title || "",
      price: this.props.data.price || "",
      quantity: this.props.data.quantity || "",
    },
    errors: {},
  };

  handleInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    const newFields = Object.assign({}, this.state.fields, { [name]: value });
    this.setState({ fields: newFields });
  };

  resetFields = () => {
    this.setState({
      fields: {
        title: "",
        price: "",
        quantity: "",
      },
      errors: {},
    });
  };

  validateTitleKey = () => {
    return this.state.fields.title.length >= 3;
  };

  validatePriceKey = () => {
    return !!String(this.state.fields.price).match(/\d+\.?\d*/);
  };

  validateQuantityKey = () => {
    return !!String(this.state.fields.quantity).match(/\d+/);
  };

  validate = () => {
    let errors = {};

    if (!this.validateTitleKey()) errors.title = "Title must be at least 3 characters.";
    if (!this.validatePriceKey()) errors.price = "Price must be valid number.";
    if (!this.validateQuantityKey()) errors.quantity = "Quantity must be an integer.";

    return errors;
  };

  handleOnSubmit = (evt) => {
    evt.preventDefault();
    const errors = this.validate();

    console.log(this.state);

    if (Object.keys(errors).length > 0) {
      this.setState({ errors: errors });
      return;
    }

    this.props.handleSubmitForm(this.state.fields);
    this.props.handleToggle();
    this.resetFields();
  };

  render() {
    const formTitle = this.props.type === "edit" ? "Edit" : "Add";
    const formSubmitButton = this.props.type === "edit" ? "Update" : "Add";

    return (
      <div className="edit-form">
        <h3>{formTitle} Product</h3>
        <form onSubmit={this.handleOnSubmit}>
          <div className="input-group">
            <label htmlFor="product-name">Product Name</label>
            <input
              type="text"
              id="product-name"
              name="title"
              value={this.state.fields.title}
              onChange={this.handleInputChange}
            />
          </div>
          <p className="invalidField">{this.state.errors.title}</p>

          <div className="input-group">
            <label htmlFor="product-price">Price</label>
            <input
              type="text"
              id="product-price"
              name="price"
              value={this.state.fields.price}
              onChange={this.handleInputChange}
            />
          </div>
          <p className="invalidField">{this.state.errors.price}</p>

          <div className="input-group">
            <label htmlFor="product-quantity">Quantity</label>
            <input
              type="text"
              id="product-quantity"
              name="quantity"
              value={this.state.fields.quantity}
              onChange={this.handleInputChange}
            />
          </div>
          <p className="invalidField">{this.state.errors.quantity}</p>

          <div className="actions form-actions">
            <button className="button" type="submit">
              {formSubmitButton}
            </button>
            <a className="button" onClick={this.props.handleToggle}>
              Cancel
            </a>
          </div>
        </form>
      </div>
    );
  }
};

export default ProductForm;