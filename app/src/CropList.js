import React from "react";

export default function CropList({ crops, deleteCrop }) {
  if (crops.length === 0) return <p>No crops listed yet.</p>;

  return (
    <div className="grid">
      {crops.map((crop) => (
        <div key={crop.id} className="crop-card">
          <h3>{crop.name}</h3>
          <p>💰 {crop.price} ₹</p>
          <p>🌿 {crop.quantity} kg</p>
          <button className="btn btn-red" onClick={() => deleteCrop(crop.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}