import { lazy } from "react";

// This file only exports lazy components so Vite's fast-refresh works correctly.
export const Home = lazy(() => import("../pages/Home"));
export const NotFound = lazy(() => import("../pages/NotFound"));
export const AdminDashboard = lazy(() => import("@/pages/Admin/AdminDashboard"));
export const Login = lazy(() => import("@/pages/Login"));
export const Signup = lazy(() => import("@/pages/Signup"));
export const CreateAgent = lazy(() => import("@/pages/CreateAgent"));
