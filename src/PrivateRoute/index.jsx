import { useAuth } from "hooks/useAuth";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ allowedRoles, children }) => {
  const roles = Array(localStorage.getItem("roles"));
  const user = localStorage.getItem("userData");
  if (user === null || user === undefined || user === "") {
    return <Navigate to={"/login"} replace={true} />;
  } else if (allowedRoles.includes(roles)) {
    return children;
  } else {
    return <Navigate to="/unauthorised" replace={true} />;
  }
};

export default PrivateRoute;
