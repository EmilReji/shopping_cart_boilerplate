import React from "react";
import store from "../lib/store.js";
import ProductForm from "./ProductForm.js";

class AddProduct extends React.Component {
  state = {
    showForm: false,
    fields: {
      title: '',
      price: '',
      quantity: '',
    }
  }

  handleShowForm = () => {
    this.setState({ showForm: !this.state.showForm });
  }

  handleInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    const newFields = Object.assign({}, this.state.fields, {[name]: value});
    this.setState({fields: newFields});
  }

  resetFields = () => {
    this.setState({fields: {
      title: '',
      price: '',
      quantity: '',
    }});
  }

  handleNewProduct = (fields) => {
    const newProduct =  {
      title: fields.title,
      price: Number(fields.price),
      quantity: Number(fields.quantity),
    };

    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct)
    }).then(res => res.json())
      .then(product => {
         store.dispatch({
           type: "ADD_PRODUCT",
           payload: {
             product: product
           }
         });
    });
  }

  render() {
    const visible = this.state.showForm ? 'visible' : '';

    return (
      <div className={`add-form ${visible}`}>
          <ProductForm 
            type='add'
            handleToggle={this.handleShowForm}
            resetFields={this.resetFields}
            fields={this.state.fields}
            handleInputChange={this.handleInputChange}
            handleSubmitForm={this.handleNewProduct} 
          />
          <a className="button add-product-button" onClick={this.handleShowForm}>Add A Product</a>
      </div>
    );
  }
}

export default AddProduct;