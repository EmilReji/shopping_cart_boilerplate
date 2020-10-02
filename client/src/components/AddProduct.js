import React from "react";
import store from "../lib/store.js";
import ProductForm from "./ProductForm.js";

class AddProduct extends React.Component {
  state = {
    showForm: false,
  }

  handleShowForm = () => {
    this.setState({ showForm: !this.state.showForm });
  }

  render() {
    const visible = this.state.showForm ? 'visible' : '';

    return (
      <div className={`add-form ${visible}`}>
          <ProductForm 
            type='add'
            handleToggle={this.handleShowForm}
            handleSubmitForm={this.props.onNewProduct} 
            data={{}}
          />
          <a className="button add-product-button" onClick={this.handleShowForm}>Add A Product</a>
      </div>
    );
  }
}

export default AddProduct;