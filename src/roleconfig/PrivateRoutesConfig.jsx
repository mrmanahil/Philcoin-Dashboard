import Login from "pages/Login";
import ResetPassword from "pages/reset-password";
import LockScreen from "pages/lock-screen";
import Signup from "pages/signup";
import Success from "pages/success";
import Dashboard from "pages/dashboard";
import UserManagement from "pages/user-management";
import ContentManagement from "pages/content-management";
import Invitations from "pages/invitations";
import VideoSection from "pages/video-section";
import WalletManagement from "pages/wallet-management";
import Roles from "./roles";

export default [
  {
    component: Login,
    path: "/",
    title: "Login",
    exact: true,
  },
  {
    component: Login,
    path: "/login",
    title: "Login",
  },
  {
    component: ResetPassword,
    path: "/reset-password",
    title: "ResetPassword",
  },
  {
    component: LockScreen,
    path: "/lock-screen",
    title: "LockScreen",
  },
  {
    component: Signup,
    path: "/sign-up",
    title: "Sign-Up",
  },
  {
    component: Success,
    path: "/success",
    title: "Success",
  },
  {
    component: UserManagement,
    path: "/user-management",
    title: "User Management",
    permission: [Roles.SUPER_ADMIN],
  },
  {
    component: ContentManagement,
    path: "/content-management",
    title: "Content-Management",
    permission: [Roles.SUPER_ADMIN, Roles.USER],
  },
  {
    component: Invitations,
    path: "/invitations",
    title: "Invitations",
    permission: [Roles.SUPER_ADMIN],
  },
];
