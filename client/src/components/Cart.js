import React from "react";

const Cart = ({cartItems, handleCheckoutCart}) => {
  const total = Object.keys(cartItems).reduce((sum, id) => {
    return (cartItems[id].product.price * cartItems[id].quantity) + sum
  }, 0);

  const items = Object.keys(cartItems).map((id) => {
            return <tr key={id}>
              <td>{cartItems[id].product.title}</td>
              <td>{cartItems[id].quantity}</td>
              <td>${cartItems[id].product.price}</td>
            </tr>
          })
  const formattedTotal = total.toFixed(2);

  const cartEmpty = Object.keys(cartItems).length === 0 ? 'disabled' : '';

  return (
    <div className="cart">
        <h2>Your Cart</h2>
        
          {cartEmpty ? (
            <>
              <p>Your cart is empty</p>
              <p>Total: $0.00</p>
            </>
          ): (
          <table className="cart-items">
           <tbody>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              {items}
            <tr>
              <td colSpan="3" className="total">Total: ${formattedTotal}</td>
            </tr>
          </tbody>
        </table>
        )}
        <a className={`button checkout ${cartEmpty}`} onClick={handleCheckoutCart}>Checkout</a>
      </div>
  );
}

export default Cart;