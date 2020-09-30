import React from "react";
import ProductDetails from "./ProductDetails.js";
import ProductForm from "./EditProductForm.js";

class Product extends React.Component {
  state = {
    showForm: false,
    fields: {
      _id: this.props.data._id,
      title: this.props.data.title,
      price: this.props.data.price,
      quantity: this.props.data.quantity,
    },
  };

  handleEditToggle = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  handleInputChange = (evt) => {
    const name = evt.target.name;
    let value = evt.target.value;

    if (name === 'price') {
      if (!this.validatePriceKey(value)) {
        value = value.slice(0, value.length-1);
      }
    } else if (name === 'quantity') {
      const validQuantityKey = this.validateQuantityKey(value);
      if (!this.validateQuantityKey(value)) {
        value = value.slice(0, value.length-1);
      }
    }

    const newFields = Object.assign({}, this.state.fields, { [name]: value });
    this.setState({ fields: newFields });
  };

  validatePriceKey = (val) => {
    return !!val.match(/\d+\.?\d+/);
  }

  validateQuantityKey = (val) => {
    return !!val.match(/\d+/);
  }


  render() {
    return (
      <div className="product">
        <ProductDetails
          data={this.props.data}
          handleEditToggle={this.handleEditToggle}
          hideButtons={this.state.showForm}
          handleDeleteProduct={this.props.handleDeleteProduct}
          handleAddToCart={this.props.handleAddToCart}
        />
        {this.state.showForm && (
          <ProductForm
            handleInputChange={this.handleInputChange}
            handleUpdateProduct={this.props.handleUpdateProduct}
            handleEditToggle={this.handleEditToggle}
            fields={this.state.fields}
          />
        )}
      </div>
    );
  }
}

export default Product;