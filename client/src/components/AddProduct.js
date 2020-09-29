import React from "react";
import AddProductBtn from "./AddProductBtn.js";
import AddProductForm from "./AddProductForm.js";

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
          <h3>Add Product</h3>
          <AddProductForm handleToggleForm={this.handleShowForm} resetFields={this.resetFields} fields={this.state.fields} handleInputChange={this.handleInputChange} handleNewProduct={this.props.handleNewProduct} />
          <AddProductBtn handleOnClick={this.handleShowForm} />
      </div>
    );
  }
}

export default AddProduct;