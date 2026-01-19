import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

/* ===== AUTH PAGES ===== */
import Login from "../pages/Authentication/Login";
import ForgetPassword from "../pages/Authentication/ForgotPassword";
import VerifyOTP from "../pages/Authentication/VerifyOtp";
import NewPassword from "../pages/Authentication/NewPassword";
import PasswordSuccess from "../pages/Authentication/PasswordSuccess";

/* ===== DASHBOARD PAGES ===== */
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Interactions from "../pages/Interactions";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import Employees from "../pages/Employees";
import FAQ from "../pages/FAQ";
import VerifyOtp from "../pages/Authentication/VerifyOtp";

/* ===== TEMP AUTH CHECK (later AuthContext use korbo) ===== */
const isAuthenticated = () => {
  return localStorage.getItem("user"); // later token check
};

export const router = createBrowserRouter([
  /* ================= AUTH ROUTES ================= */
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  {
    path: "/password-success",
    element: <PasswordSuccess />,
  },

  /* ================= DASHBOARD ROUTES ================= */
  {
    path: "/",
    element: isAuthenticated() ? (
      <DashboardLayout />
    ) : (
      <Navigate to="/login" replace />
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "interactions",
        element: <Interactions />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
    ],
  },

  /* ================= FALLBACK ================= */
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
]);
