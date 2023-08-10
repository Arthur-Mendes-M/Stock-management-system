import { createGlobalStyle } from "styled-components";

export const GlobalApplicationStyles = createGlobalStyle`
    @font-face {
        font-family: 'Stardom';
        src: url(./assets/fonts/Stardom_Complete/Fonts/OTF/Stardom-Regular.otf);
    }

    body {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.secondary};
        font-family: 'Stardom';
    }

    li {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
        transition: all .25s ease-in-out;

        &:hover {
            color: ${props => props.theme.colors.extra_blue};
        }
    }
`