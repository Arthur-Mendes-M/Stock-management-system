import { createGlobalStyle } from "styled-components";
import { flexbox } from "../../Styles";

export const DashboardStyles = createGlobalStyle`
    section {
        ${flexbox({a: 'center', j: 'center', g: '2rem', fw: 'wrap'})}
        width: 100%;

        .container {
            ${flexbox({fd: 'column', g: '1rem'})}
            flex: 1 0 auto;
            max-width: 100%;

            .cards {
                ${flexbox({a: 'center', j: 'center', g: '1.5rem', fw: 'wrap'})}
                flex: 1 1 auto;

                .card {
                    border: 1px solid red;
                    padding: 1rem;
                    /* width: 100%;
                    max-width: 300px; */
                    min-height: 150px;

                    flex: 1 0;
                    min-width: 250px;

                    .title {
                        font-size: 1rem;
                    }
                }
            }

            .tableContainer {
                border: 1px solid red;
            }
        }
    }
`