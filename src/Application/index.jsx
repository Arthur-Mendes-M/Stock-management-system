import { RouterProvider } from "react-router-dom"
import { GlobalContextProvider } from "../contexts/GlobalContext"
import { routes } from "./routes"
import { GlobalApplicationStyles } from "./styles"

export const Application = () => {
    return (
        <GlobalContextProvider>
            <GlobalApplicationStyles />
            <RouterProvider router={routes} />
        </GlobalContextProvider>
    )
}