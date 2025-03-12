import React from 'react';

const CartSummary = ({ cart, removeFromCart }) => {
  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>
      {cart.length > 0 && (
        <button className="remove-from-cart-btn" onClick={() => removeFromCart(cart[cart.length - 1])}>Remove Last Item</button>
      )}
    </div>
  );
};

export default CartSummary;