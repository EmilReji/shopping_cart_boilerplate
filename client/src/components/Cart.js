import React from "react";

const Cart = ({cartItems}) => {
  const total = cartItems.reduce((sum, item) => {
    return item.price * item.quantity + sum
  }, 0);

  

  return (
    <div className="cart">
        <h2>Your Cart</h2>
        
        <table className="cart-items">
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {cartItems.map((item) => {
            return <tr>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${item.price * item.quantity}</td>
            </tr>
          })}
          <tr>
            <td colspan="3" className="total">Total: ${total}</td>
          </tr>
        </table>
        <a className="button checkout">Checkout</a>
      </div>
  );
}

export default Cart;