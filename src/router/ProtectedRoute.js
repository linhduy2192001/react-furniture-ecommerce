import React from "react";
import { Navigate } from "react-router";
import useAuth from "../custom-hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
}
