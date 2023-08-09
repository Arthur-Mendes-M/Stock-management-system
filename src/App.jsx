import { RouterProvider } from "react-router-dom"
import { CustomThemeProvider } from "./contexts/CustomThemeContext"
import { routes } from "./routes"

export const App = () => {
    return (
        <CustomThemeProvider>
            <RouterProvider router={routes} />
        </CustomThemeProvider>
    )
}