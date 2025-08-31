import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";
import About from "./pages/About";
import Services from "./pages/Services";
// import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news/:id" element={<NewsDetails />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        {/* <Route path="admin" element={<AdminDashboard />} /> */}
      </Route>
    </Routes>
  );
}

export default App;