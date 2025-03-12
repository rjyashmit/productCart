import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;