import { createContext, useState } from "react";
import { defaultTheme, searchTheme } from "./themes";
import { ThemeProvider } from "styled-components";

export const CustomThemeContext = createContext()

export const CustomThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(defaultTheme)

    const handleTheme = ({themeName}) => {
        const foundTheme = searchTheme({themeName})
        
        foundTheme && setTheme(foundTheme)
    }

    return (
        <CustomThemeContext.Provider value={{themeName: theme.name, handleTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </CustomThemeContext.Provider>
    )
}