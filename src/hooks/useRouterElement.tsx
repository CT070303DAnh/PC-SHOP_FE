import { Navigate, Outlet, useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import DashBoard from "../pages/DashBoard/DashBoard";
import Detail from "../pages/Detail/Detail";
import DetailProduct from "../pages/DetailProduct";
import Cart from "../pages/Cart/Cart";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import EditProduct from "../pages/DashBoard/pages/EditProduct/EditProduct";
import Write from "../pages/Introduce/Write";
import Introduce from "../pages/Introduce/Introducee";
import Connect from "../pages/Introduce/Connect";
import SearchResultsPage from "../components/InputSearch/SearchResultsPage";
import { getUserRoles } from "../api/auth";
import React, { useEffect, useState } from "react";
// ProtectedRoute to check for authentication
function ProtectedRouteCart() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

  const ProtectedRoute = () => {
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const checkRoles = async () => {
            const roles = await getUserRoles();
            if (roles.includes("ROLE_ADMIN")) {
                setIsAdmin(true);
            }
            setLoading(false);
        };

        checkRoles();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // hoặc spinner gì đó
    }

    if (!isAdmin) {
        return <Navigate to="/" />; // Không có quyền thì redirect
    }

    return <Outlet />; // Có quyền thì render tiếp các child routes
};
function useRouterElement() {
  const routeElement = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    // {
    //  path: "/product/:slug-:productId",
    //  element: <DetailProduct />
    // },
    {
      path: "/categories/:name",
      element: <Detail />,
    },
      {
      path: "/search",
      element: <SearchResultsPage />,
    },
    {
      path: "/:productName",
      element: <DetailProduct />,
    },
    {
      path: "/dashboard",
      element: <ProtectedRoute />, // Add protection to dashboard if needed
      children: [
        {
          path: "", // This will render the dashboard main page
          element: <DashBoard />,
        },
        {
          path: "editProduct", // This will be accessible at /dashboard/editProduct
          element: <EditProduct />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
      {
      path: "/connect",
      element: <Connect />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "", // Protect the route for cart
      element: <ProtectedRouteCart />,
      children: [
        {
          path: "cart", // Use relative path here
          element: <Cart />,
        },
      ],
    },
  ]);

  return routeElement;
}

export default useRouterElement;
