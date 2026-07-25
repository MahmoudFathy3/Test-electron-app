import { createHashRouter } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout/MainLayout";
import Splash from "@/splash";
import homeRoutes from "@/features/Home/routes";
import aboutRoutes from "@/features/About/routes";
import ErrorPage from "../Error/ErrorPage";
import AuthLayout from "@/components/layouts/AuthLayout/AuthLayout";
import authRoutes from "@/features/Auth/routes";

export const router = createHashRouter([
  {
    path: "/splash",
    element: <Splash />,
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [...authRoutes],
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [...homeRoutes, ...aboutRoutes],
  },
]);
