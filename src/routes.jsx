import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./screens/Dashboard";
import { ProductsLayout } from "./screens/ProductsLayout";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: 'products',
        element: <ProductsLayout />
    }
])