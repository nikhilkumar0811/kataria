import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoginPage from "./pages/login/login.jsx";
import "./index.css";
import Home from "./pages/home.jsx";
import Product from "./pages/product/product.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Hero" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
