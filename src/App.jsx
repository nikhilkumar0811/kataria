import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
