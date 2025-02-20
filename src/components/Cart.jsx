import React from 'react';

function Cart({ cart, removeFromCart }) {
  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">Shopping Cart ({cart.length} items)</h4>
      </div>
      <div className="card-body">
        {cart.length === 0 ? (
          <p className="text-center mb-0">Your cart is empty</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} className="card mb-2">
                <div className="card-body p-2">
                  <div className="row align-items-center">
                    <div className="col-4">
                      <img src={item.image} className="img-fluid rounded" alt={item.name} />
                    </div>
                    <div className="col-8">
                      <h6 className="mb-0">{item.name}</h6>
                      <p className="mb-1"><small>₹{item.price}</small></p>
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="border-top pt-3 mt-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Total:</h5>
                <h5 className="mb-0">₹{cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</h5>
              </div>
              <button className="btn btn-success w-100 mt-3">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart; 