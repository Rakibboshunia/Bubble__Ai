import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

/* AUTH */
import Login from "../pages/Authentication/Login";
import ForgetPassword from "../pages/Authentication/ForgotPassword";
import VerifyOtp from "../pages/Authentication/VerifyOtp";
import NewPassword from "../pages/Authentication/NewPassword";
import PasswordSuccess from "../pages/Authentication/PasswordSuccess";

/* DASHBOARD */
import Home from "../pages/Home";             
import Dashboard from "../pages/Dashboard";
import Interactions from "../pages/Interactions";
import Settings from "../pages/Settings";
import Employees from "../pages/Employees";
import FAQ from "../pages/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { 
        index: true, 
        element: <Navigate to="home" replace /> 
      }, 
      { 
        path: "home", 
        element: <Home /> 
      },                     
      { 
        path: "dashboard", 
        element: <Dashboard /> 
      },
      { 
        path: "interactions", 
        element: <Interactions /> 
      },
      { 
        path: "settings", 
        element: <Settings /> 
      },
      { 
        path: "employees", 
        element: <Employees /> 
      },
      { 
        path: "faq", 
        element: <FAQ /> 
      },
    ],
  },

  /* Authentication */
  { 
    path: "/login", 
    element: <Login /> 
  },
  { 
    path: "/forget-password", 
    element: <ForgetPassword /> 
  },
  { 
    path: "/verify-otp", 
    element: <VerifyOtp /> 
  },
  { 
    path: "/new-password", 
    element: <NewPassword /> 
  },
  { 
    path: "/password-success", 
    element: <PasswordSuccess /> 
  },

]);
