import React from "react";
import ProductDetails from "./ProductDetails.js";
import ProductForm from "./ProductForm.js";

class Product extends React.Component {
  state = {
    showForm: false,
  };

  handleToggle = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  render() {
    return (
      <div className="product">
        <ProductDetails
          data={this.props.data}
          handleToggle={this.handleToggle}
          hideButtons={this.state.showForm}
          handleDeleteProduct={this.props.handleDeleteProduct}
          handleAddToCart={this.props.handleAddToCart}
        />
        {this.state.showForm && (
          <ProductForm
            handleSubmitForm={this.props.handleUpdateProduct}
            handleToggle={this.handleToggle}
            type='edit'
            data={this.props.data}
          />
        )}
      </div>
    );
  }
}

export default Product;