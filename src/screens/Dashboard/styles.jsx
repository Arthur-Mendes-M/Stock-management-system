import { createGlobalStyle } from "styled-components";
import { flexbox } from "../../Styles";

export const DashboardStyles = createGlobalStyle`
    section {
        ${flexbox({a: 'flex-start', j: 'center', g: '2rem', fw: 'wrap'})}
        width: 100%;

        .container {
            ${flexbox({fd: 'column', g: '1rem'})}
            flex: 1 0 auto;
            max-width: 100%;

            .cards {
                ${flexbox({a: 'center', j: 'center', g: '1.5rem', fw: 'wrap'})}
                flex: 1 1 auto;

                .card {
                    ${flexbox({fd: 'column', g: '.5rem'})}
                    padding: 1rem;
                    /* width: 100%;
                    max-width: 300px; */
                    min-height: 150px;
                    background-color: ${props => props.theme.colors.terciary};
                    flex: 1 0;
                    min-width: 250px;

                    .title {
                        font-size: 1rem;
                    }

                    .content {
                        ${flexbox({a: 'center', j: 'center'})}
                        flex: 1 0 auto;
                        /* font-family: 'Stardom'; */
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }
`