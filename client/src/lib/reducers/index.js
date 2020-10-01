import products from './products.js';
import cartItems from './cartItems.js';

import { combineReducers } from 'redux';

const reducer = combineReducers({ products, cartItems })

export default reducer;