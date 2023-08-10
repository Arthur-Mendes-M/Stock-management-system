export const themes = [
    {
        name: 'dark',
        colors: {
            primary: '#1f1f1f',
            secondary: '#f1f1f1',
            extra_blue: '#4477CE'
        }
    },
    {
        name: 'light',
        colors: {
            primary: '#f1f1f1',
            secondary: '#1f1f1f',
            extra_blue: '#4477CE'
        }
    }
]

export const searchTheme = ({themeName}) => {
    const searchResult = themes.filter(theme => theme.name === themeName)

    return searchResult ? searchResult[0] : null
}

export const defaultTheme = searchTheme({themeName: 'dark'})