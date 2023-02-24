import React from "react";
import { Navigate } from "react-router";
import useAuth from "../custom-hooks/useAuth";
import { Outlet } from "react-router";
export default function ProtectedRoute() {
  const { currentUser } = useAuth();
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
