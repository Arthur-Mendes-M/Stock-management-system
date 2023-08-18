import { useContext } from "react"
import { CustomThemeContext } from "../../../contexts/CustomThemeContext"

export const ThemeButton = () => {
    const {themeName, handleTheme} = useContext(CustomThemeContext)

    const toggleTheme = () => {
        themeName === 'dark' ? handleTheme({themeName: 'light'}) : handleTheme({themeName: 'dark'})
    }

    return  (
        <button type="button" onClick={toggleTheme}>
            {themeName == 'light' ? 'Tema escuro' : 'Tema claro'}
        </button>
    )
}