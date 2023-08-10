import { styled } from "styled-components";
import { flexbox } from "../../Styles";

export const Styled_header = styled.header`
    ${flexbox({a: 'center', j: 'space-between', g: '1rem'})};
    padding: 1rem;

    nav {
        ul {
            ${flexbox({a: 'center', g: '1rem'})};
        }
    }
`