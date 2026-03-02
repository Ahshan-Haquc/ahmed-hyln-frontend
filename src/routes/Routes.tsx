import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminRoute from "./AdminRoutes";
import { Home, NotFound, AdminDashboard, Login, Signup, CreateAgent } from "./lazyPages";

const withSuspense = (el: React.ReactElement) => (
  <Suspense fallback={<div>Loading...</div>}>{el}</Suspense>
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: withSuspense(<Home />),
      },
      {
        path: "/admin",
        element: <AdminRoute />,
        children: [
          {
            path: "",
            element: withSuspense(<AdminDashboard />)
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: withSuspense(<Login />),
  },
  {
    path: "/signup",
    element: withSuspense(<Signup />),
  },
  {
    path: "/create-agent",
    element: withSuspense(<CreateAgent />),
  },
  {
    path: "*",
    element: withSuspense(<NotFound />),
  },
]);

export default routes;
