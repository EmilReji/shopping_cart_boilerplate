const cartItems =  (state = {}, action) => {
    let productId;
    
    switch(action.type) {
      case "ADD_TO_CART":
        const product = action.payload.product;
        productId = action.payload.product._id;
        if (state[productId]) {
            return Object.assign(
                {},
                state,
                {[productId]: { product, quantity: +state[productId].quantity + 1 }}
                );
        } else {
            return Object.assign(
                {},
                state,
                { [productId]: { product, quantity: 1 }}
                );
     }


      case "CHECKOUT_CART":
        return action.payload.cart;
      case "UPDATE_PRODUCT":
        productId = action.payload.product._id;
        if (state[productId]) {
          return Object.assign({}, state, {
            [productId]: { product: action.payload.product, quantity: +state[productId].quantity }
          });
        } else {
          return state;
        }
      default:
          return state;
    }
} 

export default cartItems;