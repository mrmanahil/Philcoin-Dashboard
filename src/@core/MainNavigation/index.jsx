import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import ResetPassword from "pages/reset-password";
import LockScreen from "pages/lock-screen";
import Signup from "pages/signup";
import Success from "pages/success";
import Dashboard from "pages/dashboard";
import UserManagement from "pages/user-management";
import Invitations from "pages/invitations";
import { AuthContext } from "context/AuthContext";

const Page = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/lock-screen" element={<LockScreen />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/success" element={<Success />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/invitations" element={<Invitations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Page;
