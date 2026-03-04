import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import CreateAgent from "@/pages/CreateAgent";
import NotFound from "@/pages/NotFound";
import DashboardHome from "@/pages/Dashboard/DashboardHome";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "./DashboardLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/create-agent",
    element: <CreateAgent />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: "about",
            element: <DashboardHome />,
          },
          {
            path: "business",
            element: <DashboardHome />,
          },
          {
            path: "phone",
            element: <DashboardHome />,
          },
          {
            path: "integrations",
            element: <DashboardHome />,
          },
          {
            path: "settings",
            element: <DashboardHome />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
