import { styled } from "styled-components";
import { flexbox } from "../../Styles";

export const ContentHeader = styled.header`
    /* padding: 1rem; */
    width: 100%;
    border-bottom: 2px solid ${props => props.theme.colors.extra_blue};
    margin-bottom: 2rem;

    nav {
        ul {
            ${flexbox({a: 'center', g: '2rem'})};

            li {
                padding: 1rem;

                &.active {
                    border-bottom: 3px solid ${props => props.theme.colors.extra_blue};
                    color: ${props => props.theme.colors.extra_blue};
                }
            }
        }
    }
`

export const Styled_outlet = styled.section`
    ${flexbox({fd: 'column', a: 'center', j: 'center', g: '2rem'})};
    width: 100%;
`