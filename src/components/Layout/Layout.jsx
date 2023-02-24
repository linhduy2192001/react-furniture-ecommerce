import React from "react";
import { useLocation } from "react-router";
import AdminNav from "../../admin/AdminNav";
import Router from "../../router/Router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout() {
  const location = useLocation();
  return (
    <>
      {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}

      <div>
        <Router />
      </div>
      <Footer />
    </>
  );
}
