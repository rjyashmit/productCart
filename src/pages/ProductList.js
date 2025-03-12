import React, { useState } from 'react';
import ProductItem from '../components/ProductItem';
import CartSummary from '../components/CartSummary';

const products = [
  { id: '1', name: 'Office Chair', price: 70},
  { id: '2', name: 'Wireless Headphones', price: 20 },
  { id: '3', name: '4K Monitor', price: 150 },
  { id: '4', name: 'Gaming Keyboard', price: 40 },
  { id: '5', name: 'Smartwatch', price: 80 },
  { id: '6', name: 'Bluetooth Speaker', price: 95 }
];

const ProductList = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item, index) => index !== cart.lastIndexOf(product)));
  };

  return (
    <div className="product-list-container">
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <CartSummary cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default ProductList;