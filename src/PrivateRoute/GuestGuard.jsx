import React from "react";
import { useAuth } from "hooks/useAuth";
import { Navigate } from "react-router-dom";

function GuestGuard({ children }) {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" replace={true} />;
  }
}

export default GuestGuard;
