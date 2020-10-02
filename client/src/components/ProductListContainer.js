import ProductList from './ProductList.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => {
      fetch("/api/products")
        .then((res) => res.json())
        .then((products) => {
          dispatch({
            type: "PRODUCTS_RECEIVED",
            payload: {
              products: products,
            },
          });
        });
    },
    dispatch: dispatch,
    onUpdateProduct: (fields) => {
      fetch(`/api/products/${fields._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      })
        .then((res) => res.json())
        .then((product) => {
          dispatch({
            type: "UPDATE_PRODUCT",
            payload: {
              product: product,
            },
          });
        });
    },
    onDeleteProduct: (id) => {
      fetch(`/api/products/${id}`, {
        method: "DELETE",
      }).then((res) => {
        dispatch({
          type: "DELETE_PRODUCT",
          payload: {
            id: id,
          },
        });
      });
    }
  };
};

const mergeProductListProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
    onAddToCart: (productId) => {
      const product = stateProps.products.find((product) => {
        return product._id === productId;
      });
      dispatchProps.dispatch({
        type: "ADD_TO_CART",
        payload: {
          product: product,
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProductListProps)(ProductList);
