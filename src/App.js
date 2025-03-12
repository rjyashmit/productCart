import React from 'react';
import ProductList from './pages/ProductList';
// import './styles.css';
import'./style.css'

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Product List</h1>
      <ProductList />
    </div>
  );
};

export default App;