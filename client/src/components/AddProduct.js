import React from "react";
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
            handleSubmitForm={this.props.handleNewProduct} 
          />
          <a className="button add-product-button" onClick={this.handleShowForm}>Add A Product</a>
      </div>
    );
  }
}

export default AddProduct;