import React from "react";
import Product from "./Product.js";
import store from "../lib/store.js"

class ProductList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });

    fetch('/api/products')
      .then(res => res.json())
      .then(products => {
        store.dispatch({
          type: "PRODUCTS_RECEIVED",
          payload: {
            products: products
          }
        });
      });
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  handleAddToCart = (productId) => {
    const product = store.getState().products.find(product => {
      return product._id === productId;
    }); // reducer
    store.dispatch({
      type: "ADD_TO_CART",
      payload: {
        product: product
      }
    });

    store.dispatch({
      type: "DECREMENT_QUANTITY",
      payload: {
        product: product
      }
    });


    // this.setState((prevState) => {
    //   return {
    //     products: prevState.products.map(product => {
    //       if (product._id === productId) {
    //         return Object.assign({}, product, { quantity: +product.quantity - 1 });
    //       } else {
    //         return product;
    //       }
    //     }),
    //   }
    // });
  }


  handleUpdateProduct = (fields) => {
    fetch(`/api/products/${fields._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fields)
    }).then(res => res.json())
      .then(product => {
       store.dispatch({
         type: "UPDATE_PRODUCT",
         payload: {
           product: product
         }
       }); 
    });
  }

  handleDeleteProduct = (id) => {
    fetch(`/api/products/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      store.dispatch({
        type: "DELETE_PRODUCT",
        payload: {
          id: id
        }
      });
    });
  }

  render(){
      return (
      <main>
        <div className="product-listing"> 
          <h2>Products</h2>
          {store.getState().products.map((product) => {
            return (
              <Product
                key={product._id}
                data={product}
                handleAddToCart={this.handleAddToCart}
                handleUpdateProduct={this.handleUpdateProduct}
                handleDeleteProduct={this.handleDeleteProduct}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default ProductList;