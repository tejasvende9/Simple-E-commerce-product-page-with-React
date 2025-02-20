import React from 'react';
import Cart from './Cart';

function CartPage({ cart, removeFromCart, onClose }) {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Shopping Cart</h2>
            <button 
              className="btn btn-outline-secondary" 
              onClick={onClose}
            >
              <i className="bi bi-arrow-left"></i> Continue Shopping
            </button>
          </div>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
}

export default CartPage; 