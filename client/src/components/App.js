import React from "react";
import Header from "./Header.js";
import ProductList from "./ProductList.js";
import AddProduct from "./AddProduct.js";
import data from "../lib/data.js"

class App extends React.Component {
  state = {
    products: [],
    cartItems: {},
  }

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => {
        this.setState({
          products: products,
        });
      });
  }

  handleAddToCart = (productId) => {
    const product = this.state.products.find(product => {
      return product._id === productId;
    });

    if (this.state.cartItems[productId]) {
      this.setState((prevState) => {
        return {
          cartItems: Object.assign(
              {},
              prevState.cartItems,
              {[productId]: { product, quantity: +prevState.cartItems[productId].quantity + 1 }}
            )
        };
      });
    } else {
      this.setState((prevState) => {
          return {
            cartItems: Object.assign(
              {},
              prevState.cartItems,
              { [productId]: { product, quantity: 1 }}
            )
          };
      });
    }


    this.setState((prevState) => {
      return {
        products: prevState.products.map(product => {
          if (product._id === productId) {
            return Object.assign({}, product, { quantity: +product.quantity - 1 });
          } else {
            return product;
          }
        }),
      }
    });
  }

  handleUpdateProduct = (fields) => {
    console.log(fields);
    fetch(`/api/products/${fields._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fields)
    }).then(res => res.json())
      .then(product => {
        const updatedProducts = this.state.products.map(prod => {
          if (prod._id === fields._id) {
            return {...fields};
          } else {
            return prod;
          }
        });

        this.setState({ products: updatedProducts })
    });
  }

  handleDeleteProduct = (id) => {
    fetch(`/api/products/${id}`, {
      method: 'DELETE',
    }).then((res) => {
        const products = this.state.products.filter(prod => {
          return prod._id !== id;
        });

        this.setState({ products });
    });
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
         this.setState({ products: this.state.products.concat(product)
      })
    });
  }

  handleCheckoutCart = () => {
    this.setState({ cartItems: {} });
    console.log(this.state);
  }


  render () {
    return (
      <div id="app">
        <Header cartItems={this.state.cartItems} handleCheckoutCart={this.handleCheckoutCart} />
        <ProductList products={this.state.products} handleAddToCart={this.handleAddToCart} handleUpdateProduct={this.handleUpdateProduct} handleDeleteProduct={this.handleDeleteProduct}/>
        <AddProduct handleNewProduct={this.handleNewProduct} />
      </div>
    );
  }
}

export default App;
