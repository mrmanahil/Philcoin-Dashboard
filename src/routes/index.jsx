import PrivateRoute from "PrivateRoute";
import React from "react";
import { lazy } from "react";
import { createBrowserRouter, Router } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import AuthGuard from "PrivateRoute/AuthGuard";
import GuestGuard from "PrivateRoute/GuestGuard";
const Login = lazy(() => import("pages/Login"));
const ResetPassword = lazy(() => import("pages/reset-password"));
const Signup = lazy(() => import("pages/signup"));
const Success = lazy(() => import("pages/success"));
const Dashboard = lazy(() => import("pages/dashboard"));
const UserManagement = lazy(() => import("pages/user-management"));
const ContentManagement = lazy(() => import("pages/content-management"));
const Invitations = lazy(() => import("pages/invitations"));
const VideoSection = lazy(() => import("pages/video-section"));
const WalletManagement = lazy(() => import("pages/wallet-management"));
export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <PrivateRoute allowedRoles={["admin", "user"]}>
        {/* <GuestGuard> */}
        <Dashboard />
        {/* </GuestGuard> */}
      </PrivateRoute>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRoute allowedRoles={["admin", "user"]}>
        {/* <GuestGuard> */}
        <Dashboard />
        {/* </GuestGuard> */}
      </PrivateRoute>
    ),
  },
  {
    path: "/sign-up",
    element: (
      <AuthGuard>
        <Signup />
      </AuthGuard>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthGuard>
        <Login />
      </AuthGuard>
    ),
  },
  {
    path: "/reset-password",
    element: (
      // <GuestGuard>
      <ResetPassword />
      // </GuestGuard>
    ),
  },
  {
    path: "/success",
    element: (
      // <GuestGuard>
      <Success />
      // </GuestGuard>
    ),
  },
  {
    path: "/user-management",
    element: (
      <PrivateRoute allowedRoles={["admin"]}>
        {/* <GuestGuard> */}
        <UserManagement />
        {/* </GuestGuard> */}
      </PrivateRoute>
    ),
  },
  {
    path: "/content-management",
    element: (
      <PrivateRoute allowedRoles={["user"]}>
        {/* <GuestGuard> */}
        <ContentManagement />
        {/* </GuestGuard> */}
      </PrivateRoute>
    ),
  },
  {
    path: "/invitations",
    element: (
      <PrivateRoute allowedRoles={["user", "admin"]}>
        <Invitations />
      </PrivateRoute>
    ),
  },
  {
    path: "/video-section",
    element: <VideoSection />,
  },
  {
    path: "/wallet-management",
    element: <WalletManagement />,
  },
]);
