import Cart from './Cart.js';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckoutCart: (evt) => {
      evt.preventDefault();
    dispatch({
      type: "CHECKOUT_CART",
      payload: {
        cart: {}
      }
    });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
