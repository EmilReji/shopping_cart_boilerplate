const products = (state = [], action) => {
    switch(action.type) {
      case "PRODUCTS_RECEIVED":
        return state.concat(action.payload.products);
        break;
      case "UPDATE_PRODUCT":
        return state.map(prod => {
            if (prod._id === action.payload.product._id) {
              return {...action.payload.product};
            } else {
              return prod;
            }
          });
        break;
      case "DELETE_PRODUCT":
          return state.filter(prod => {
            return prod._id !== action.payload.id;
          }); 
      case "ADD_PRODUCT":
          return state.concat(action.payload.product);
      case "DECREMENT_QUANTITY":
            const productId = action.payload.product._id;
            return state.map(product => {
                        if (product._id === productId) {
                            return Object.assign({}, product, { quantity: +product.quantity - 1 });
                        } else {
                            return product;
                        }
                    });
      default:
        return state;
    }
}

export default products;