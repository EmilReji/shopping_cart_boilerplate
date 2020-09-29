import React from "react";
import ProductDetails from "./ProductDetails.js";
import ProductForm from "./EditProductForm.js";

class Product extends React.Component {
  state = {
    showForm: false,
    fields: {
      id: this.props.data.id,
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
    const value = evt.target.value;
    const newFields = Object.assign({}, this.state.fields, { [name]: value });
    this.setState({ fields: newFields });
  };

  render() {
    return (
      <div className="product">
        <ProductDetails
          data={this.props.data}
          handleEditToggle={this.handleEditToggle}
          hideButtons={this.state.showForm}
          handleDeleteProduct={this.props.handleDeleteProduct}
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