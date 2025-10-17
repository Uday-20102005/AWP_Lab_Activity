import React, { useState, useEffect } from "react";
import CropForm from "./CropForm";
import CropList from "./CropList";
import BuyerDashboard from "./BuyerDashboard";
import "./App.css";

export default function App() {
  const [crops, setCrops] = useState(() => {
    return JSON.parse(localStorage.getItem("crops")) || [];
  });

  useEffect(() => {
    localStorage.setItem("crops", JSON.stringify(crops));
  }, [crops]);

  const addCrop = (crop) => {
    setCrops([...crops, crop]);
  };

  const deleteCrop = (id) => {
    setCrops(crops.filter((crop) => crop.id !== id));
  };

  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold mb-4 text-green-700">🌾 FarmConnect</h1>
      <CropForm addCrop={addCrop} />
      <h2 className="text-xl mt-5 mb-2 font-semibold">Farmer’s Crops</h2>
      <CropList crops={crops} deleteCrop={deleteCrop} />
      <hr className="my-4" />
      <BuyerDashboard crops={crops} />
    </div>
  );
}