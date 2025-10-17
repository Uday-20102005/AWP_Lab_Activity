import React from "react";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Product from "./Product";
import About from "./About";

function RoutingDemo() {
  return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>React Router Demo</h1>

        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
          <Link to="/contact" style={{ margin: "0 10px" }}>Contact</Link>
          <Link to="/product" style={{ margin: "0 10px" }}>Product</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
  );
}

export default RoutingDemo;