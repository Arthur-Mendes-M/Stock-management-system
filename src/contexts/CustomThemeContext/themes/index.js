export const themes = [
    {
        name: 'dark',
        colors: {
            primary: '#1f1f1f',
            secondary: '#f1f1f1'
        }
    },
    {
        name: 'light',
        colors: {
            primary: '#f1f1f1',
            secondary: '#1f1f1f'
        }
    }
]

export const searchTheme = ({themeName}) => {
    const searchResult = themes.filter(theme => theme.name === themeName)

    return searchResult ? searchResult[0] : null
}

export const defaultTheme = searchTheme({themeName: 'dark'})