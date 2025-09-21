import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import SignUp from "./landing_page/sign_up/SignUp";
import About from "./landing_page/about/AboutPage";
import Product from "./landing_page/products/ProductsPage";
import Pricing from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import Login from "./landing_page/sign_up/Login";
import Home from "./landing_page/sign_up/Home";
import { Analytics } from "@vercel/analytics/react";
//for auth
import "react-toastify";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CookiesProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <Analytics />
    </CookiesProvider>
  </BrowserRouter>
);
