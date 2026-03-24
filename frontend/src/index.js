import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup.jsx";
import AboutPage from "./landing_page/about/Aboutpage.jsx";
import  ProductPage from "./landing_page/products/ProductPage.jsx";
import PricingPage from "./landing_page/pricing/Pricingpage.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} /> {/* ✅ Added route */}
       <Route path="/about" element={<AboutPage />} />
       <Route path="/product" element={<ProductPage/>} />
        <Route path="/pricing" element={<PricingPage />} />
    </Routes>
  </BrowserRouter>
);