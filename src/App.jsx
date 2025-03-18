// import React from "react";
// import Navbar from "./components/Navbar/Navbar.jsx";
// import Hero from "./components/Hero/Hero.jsx";
// import Testimonials from "./components/Testimonials/Testimonials.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import "./index.css";

// const App = () => {
//   return (
//     <div className="App">
//       <Navbar />
//       <Hero />
//       <Testimonials />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoginPage from "./pages/login/login.jsx";
import "./index.css";
import Home from "./pages/home.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Hero" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
