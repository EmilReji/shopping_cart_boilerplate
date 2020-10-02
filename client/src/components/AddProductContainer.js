import AddProduct from "./AddProduct.js";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    onNewProduct: (fields) => {
      const newProduct = {
        title: fields.title,
        price: Number(fields.price),
        quantity: Number(fields.quantity),
      };

      fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((product) => {
          dispatch({
            type: "ADD_PRODUCT",
            payload: {
              product: product,
            },
          });
        });
    }
  };
};

export default connect(null, mapDispatchToProps)(AddProduct);
