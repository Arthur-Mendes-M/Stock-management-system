import { createGlobalStyle } from "styled-components";

export const GlobalApplicationStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: 'Stardom';
        src: url(/assets/fonts/Stardom_Complete/Fonts/OTF/Stardom-Regular.otf);
    }

    @font-face {
        font-family: 'Satoshi';
        src: url(/assets/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Regular.otf);
    }

    body {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.secondary};
        font-family: 'Satoshi';

        padding: 0 1rem;
    }

    li {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
        transition: all .25s ease-in-out;
        font-family: 'Satoshi';

        &:hover {
            color: ${props => props.theme.colors.extra_blue};
        }
    }

    button {
        cursor: pointer;
    }

    button, input, select, textarea {
        background: none;
        border: none;
        color: inherit;
        padding: 0.5rem;
    }

    textarea {
        padding: 1rem;
    }
`