import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import CheckOut from "../pages/Checkout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />}></Route>
      <Route path="shop" element={<Shop />}></Route>
      <Route path="shop/:id" element={<ProductDetails />}></Route>
      <Route path="cart" element={<Cart />}></Route>
      <Route path="checkout" element={<CheckOut />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
    </Routes>
  );
}
