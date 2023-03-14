import React from "react";
import { useAuth } from "hooks/useAuth";
import { Navigate } from "react-router-dom";

function AuthGuard({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/" replace={true} />;
  }
}

export default AuthGuard;
