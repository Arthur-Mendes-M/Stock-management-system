import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../screens/Dashboard";
import { ProductsLayout } from "../screens/ProductsLayout";
import { ProductsList } from "../screens/ProductsLayout/Products";
import { Product } from "../screens/ProductsLayout/Product";
import { CreateProductForm } from "../sharedComponents/forms/CreateProduct";
import { UpdateProductForm } from "../sharedComponents/forms/UpdateProduct";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: 'products',
        element: <ProductsLayout />,
        // error baundary
        children: [
            {
                index: true,
                element: <ProductsList />
            },
            {
                path: 'product/:productId',
                element: <Product />
            },
            {
                path: 'product/create',
                element: <CreateProductForm />
            },
            {
                path: 'product/:productId/update',
                element: <UpdateProductForm />
            }
        ]
    }
])