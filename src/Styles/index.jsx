import { css } from "styled-components"

export const flexbox = ({
    fd = 'initial',
    a = 'initial',
    j = 'initial',
    g = '0',
    fw = 'initial',
}) => {
    return css`
        display: flex;
        flex-direction: ${fd};
        align-items: ${a};
        justify-content: ${j};
        gap: ${g};
        flex-wrap: ${fw};
    `
}