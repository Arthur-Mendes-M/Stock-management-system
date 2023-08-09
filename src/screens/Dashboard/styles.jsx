import { createGlobalStyle } from "styled-components";

export const ScreenStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.secondary};
    }
`