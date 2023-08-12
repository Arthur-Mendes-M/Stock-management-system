import { useContext } from "react"
import { CustomThemeContext } from "../../../contexts/CustomThemeContext"
import { defaultTheme } from "../../../contexts/CustomThemeContext/themes"

export const ThemeButton = () => {
    const {themeName, handleTheme} = useContext(CustomThemeContext)

    const toggleTheme = () => {
        themeName === 'dark' ? handleTheme({themeName: 'light'}) : handleTheme({themeName: 'dark'})
    }

    return  (
        <button type="button" onClick={toggleTheme}>
            {themeName == 'light' ? `${defaultTheme.name}` : 'light'}
        </button>
    )
}