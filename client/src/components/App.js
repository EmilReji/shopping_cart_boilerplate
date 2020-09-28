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
    this.setState({
      products: data,
      cartItems: data.slice(0, 2),
    });
  }

  render () {
    return (
      <div id="app">
        <Header cartItems={this.state.cartItems} />
        <ProductList products={this.state.products} />
        <AddProduct />
      </div>
    );
  }
}

export default App;
