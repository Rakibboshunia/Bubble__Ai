import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

// pages
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Interactions from "../pages/Interactions";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import Employees from "../pages/Employees";
import FAQ from "../pages/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      // "/" → Home (ONLY once)
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

      // fallback
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
