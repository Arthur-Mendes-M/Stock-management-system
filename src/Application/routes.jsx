import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../screens/Dashboard";
import { ProductsLayout } from "../screens/ProductsLayout";
import { ProductsList } from "../screens/ProductsLayout/Products";
import { Product } from "../screens/ProductsLayout/Product";
import { getProduct } from "../database/localStorage";
import { Product_errorBaundary } from "../errorBaundaries/Product";
import { GenericErrorPage } from "../errorBaundaries/Generic";
import { ProductForm } from "../sharedComponents/ProductForm";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        errorElement: <GenericErrorPage />
    },
    {
        path: 'products',
        element: <ProductsLayout />,
        children: [
            {
                index: true,
                element: <ProductsList />
            },
            {
                path: 'product/:productId',
                element: <Product />,
                loader: getProduct,
                errorElement: <Product_errorBaundary />
            },
            {
                path: 'product/create',
                element: <ProductForm action="create"/>
            },
            {
                path: 'product/:productId/update',
                element: <ProductForm action="update"/>,
                loader: getProduct,
                errorElement: <Product_errorBaundary />
            }
        ]
    }
])