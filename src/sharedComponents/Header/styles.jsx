import { styled } from "styled-components";
import { flexbox } from "../../Styles";

export const Styled_header = styled.header`
    ${flexbox({a: 'center', j: 'space-between', g: '1rem', fw: 'wrap'})};
    padding: 1rem 0;

    nav {
        ${flexbox({a: 'center', j: 'center',  g: '.5rem 1.5rem', fw: 'wrap'})};

        ul {
            ${flexbox({a: 'center', g: '1rem', fw: 'wrap'})};
        }

        button {
            border: 2px solid ${props => props.theme.colors.extra_blue};
            padding: 0.5rem 1rem;
            border-radius: .5rem;
            transition: all .25s ease-in-out;
            position: relative;
            overflow: hidden;

            &::before {
                content: '';
                box-sizing: border-box;
                position: absolute;
                width: 0;
                height: 100%;
                top: 0;
                left: 0;
                transition: all .2s ease-in-out;
                background-color: ${props => props.theme.colors.extra_blue};
                z-index: -1;
            }

            &:hover {
                &::before {
                    width: 100%;
                }
            }
        }
    }

    .pageName {
        width: 100%;
    }
`