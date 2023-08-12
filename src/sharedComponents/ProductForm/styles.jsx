import { styled } from "styled-components";
import { flexbox } from "../../Styles";

export const Styled_form = styled.form`
    ${flexbox({j: 'space-between', g: '1.3rem', fw: 'wrap'})};
    max-width: 900px;
    justify-self: center;

    .field {
        ${flexbox({fd: 'column', g: '.5rem' ,fw: 'wrap'})};
        flex: 1 0 auto;

        &.big {
            width: 100%;
            align-items: flex-start;
        }

        textarea {
            width: 100%;
            resize: none;
            min-height: 150px;

            border: 2px solid ${props => props.theme.colors.secondary};
            border-radius: .3rem;
        }

        input, select {
            border: 2px solid ${props => props.theme.colors.secondary};
            border-radius: .3rem;
            height: 35px;
            flex: 1 0 auto;
        }
    }

    .actions {
        ${flexbox({j: 'center', g: '1rem' ,fw: 'wrap'})};
        width: 100%;

        button {
            flex: 1 0 auto;
        }
    }
`