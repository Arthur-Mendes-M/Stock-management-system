import { styled } from "styled-components";
import { flexbox } from "../../Styles";

export const Styled_div = styled.div`
    max-width: 100%;
    width: 100%;
    /* max-height: 300px; */
    max-height: ${props => props.$maxheight};
    overflow: auto;

    table {
        width: 100%;
        text-align: center;
        border-collapse: collapse;

        th, td {
            padding: 1rem;
        }

        thead {
            background-color: ${props => props.theme.colors.terciary};

            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.theme.colors.extra_blue};;
                bottom: 0;
                left: 0;
            }
        }

        thead, thead tr {
            position: sticky;
            top: 0;
        }

        .actions {
            ${flexbox({a: 'center', j: 'center', g: '.5rem'})};
        }
    }
`