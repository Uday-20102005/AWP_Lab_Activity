import React, { useState } from "react";

export default function CropForm({ addCrop }) {
  const [crop, setCrop] = useState({ name: "", price: "", quantity: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!crop.name || !crop.price || !crop.quantity) return;
    addCrop({ ...crop, id: Date.now() });
    setCrop({ name: "", price: "", quantity: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Crop name"
        value={crop.name}
        onChange={(e) => setCrop({ ...crop, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={crop.price}
        onChange={(e) => setCrop({ ...crop, price: e.target.value })}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={crop.quantity}
        onChange={(e) => setCrop({ ...crop, quantity: e.target.value })}
      />
      <button type="submit" className="btn btn-green">
        Add Crop
      </button>
    </form>
  );
}