import React from "react";
import Product from "./Product.js";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.onFetchProducts();
  }

  render(){
      return (
      <main>
        <div className="product-listing"> 
          <h2>Products</h2>
          {this.props.products.map((product) => {
            return (
              <Product
                key={product._id}
                data={product}
                handleAddToCart={this.props.onAddToCart}
                handleUpdateProduct={this.props.onUpdateProduct}
                handleDeleteProduct={this.props.onDeleteProduct}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default ProductList;