import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";
import About from "./pages/About";
import Services from "./pages/Services";
//import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<NewsDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
