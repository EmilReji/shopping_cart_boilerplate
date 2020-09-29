import React from "react";
import Header from "./Header.js";
import ProductList from "./ProductList.js";
import AddProduct from "./AddProduct.js";
import data from "../lib/data.js"

// const App = () => {
//   return (
//     <div id="app">
//       <Header />
//       <ProductList products={data} />
//       <AddProduct />
//     </div>
//   );
// };

class App extends React.Component {
  state = {
    products: [],
    cartItems: [],
  }

  componentDidMount() {
    console.log(this.state.products);
    this.setState({
      products: data,
      cartItems: data.slice(0, 2),
    });
  }

  handleAddToCart = () => {

  }

  handleUpdateProduct = (fields) => {
    const products = this.state.products.map(prod => {
      if (prod.id === fields.id) {
        return {...fields};
      } else {
        return prod;
      }
    });

    this.setState({ products: products });
  }

  handleDeleteProduct = (id) => {
    const products = this.state.products.filter(prod => {
      return prod.id !== id;
    });

    this.setState({ products: products });
  }

  handleNewProduct = (fields) => {
    const nextId = this.state.products.length + 1; // change when linking to server
    this.setState({ products: this.state.products.concat({
      id: nextId,
      title: fields.title,
      price: Number(fields.price),
      quantity: Number(fields.quantity),
    })});
  }

  render () {
    return (
      <div id="app">
        <Header cartItems={this.state.cartItems} />
        <ProductList products={this.state.products} handleAddToCart={this.handleAddToCart} handleUpdateProduct={this.handleUpdateProduct} handleDeleteProduct={this.handleDeleteProduct}/>
        <AddProduct handleNewProduct={this.handleNewProduct} />
      </div>
    );
  }
}

export default App;
