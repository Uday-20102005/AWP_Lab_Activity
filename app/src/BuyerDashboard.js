import React, { useState } from "react";

export default function BuyerDashboard({ crops }) {
  const [cart, setCart] = useState([]);

  const addToCart = (crop) => setCart([...cart, crop]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));
  const totalCost = cart.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <div>
      <h2>Buyer’s Dashboard</h2>
      {crops.length === 0 ? (
        <p>No crops available for sale.</p>
      ) : (
        <div className="grid">
          {crops.map((crop) => (
            <div key={crop.id} className="crop-card">
              <h3>{crop.name}</h3>
              <p>💰 {crop.price} ₹</p>
              <p>🌿 {crop.quantity} kg</p>
              <button className="btn btn-blue" onClick={() => addToCart(crop)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="cart">
        <h3>🛍️ Cart Summary</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span>
                  {item.name} - {item.price} ₹
                </span>
                <button
                  className="btn btn-red"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="cart-summary">
              💸 Total Cost: {totalCost} ₹
            </div>
          </>
        )}
      </div>
    </div>
  );
}
