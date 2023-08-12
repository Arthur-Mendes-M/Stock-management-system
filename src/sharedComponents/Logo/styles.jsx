import { styled } from "styled-components";

export const Styled_h1 = styled.h1`
    font-family: 'Stardom';
    
    span {
        color: ${props => props.theme.colors.extra_blue};
        /* font-style: italic; */
    }
`