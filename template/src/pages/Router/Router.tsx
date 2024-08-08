import React, { lazy, Suspense } from "react";
import Cookies from "js-cookie";
import { createBrowserRouter, RouterProvider, redirect, Outlet } from "react-router-dom";

// layouts
const AuthLayout = lazy(() => import("../../layouts/AuthLayout"));

// pages
const Home = lazy(() => import("../Home"));
const LogIn = lazy(() => import("../LogIn"));

const renderWithSuspense = (Component: React.LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback="...">
    <Component />
  </Suspense>
);

const PRIVATE_ROUTES = [
  {
    element: <Outlet />,
    loader: async () => {
      const accessToken = Cookies.get("accessToken");

      if (!accessToken) {
        return redirect("/auth/login");
      }

      return null;
    },
    children: [
      {
        path: "/private",
        element: renderWithSuspense(Home)
      }
    ]
  }
];

const AUTH_ROUTES = [
  {
    path: "/auth/login",
    element: renderWithSuspense(LogIn)
  }
];

const ROOT_ROUTER = [
  {
    path: "/",
    element: renderWithSuspense(Home)
  },
  {
    path: "/auth",
    element: renderWithSuspense(AuthLayout),
    children: AUTH_ROUTES,
  },
  ...PRIVATE_ROUTES,
];

const Router = () => <RouterProvider router={createBrowserRouter(ROOT_ROUTER)} />;

export default Router;
