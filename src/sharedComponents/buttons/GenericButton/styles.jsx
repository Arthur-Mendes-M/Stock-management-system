import { styled } from "styled-components";

export const Styled_button = styled.button`
    border: 2px solid ${props => props.theme.colors.secondary};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    &.info {
        border-color: ${props => props.theme.colors.extra_blue};
        color: ${props => props.theme.colors.extra_blue};
    }

    &.danger {
        border-color: red;
        color: red;
    }
`