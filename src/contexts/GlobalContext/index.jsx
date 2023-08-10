import { CustomThemeProvider } from "../CustomThemeContext"
import { ProductsProvider } from "../ProductsContext"

export const GlobalContextProvider = ({children}) => {
    return (
        <CustomThemeProvider>
            <ProductsProvider>
                {children}
            </ProductsProvider>
        </CustomThemeProvider>
    )
}