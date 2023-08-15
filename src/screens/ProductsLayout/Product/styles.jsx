import { styled } from "styled-components";
import { flexbox } from "../../../Styles";

export const Styled_header = styled.header`
    ${flexbox({g: '2rem', fw: 'wrap'})};

    .actions {
        ${flexbox({g: '1rem', fw: 'wrap'})};
    }
`

export const Styled_section_cards = styled.section`
    ${flexbox({g: '2rem', fw: 'wrap'})};
`

export const Styled_div_tag = styled.div`
    ${flexbox({j: 'center',g: '4rem', fw: 'wrap'})};

    padding: 1rem 2rem;
    background-color: ${props => props.theme.colors.terciary};
    flex: 1 0 auto;
    max-width: 100%;
`

export const Styled_section_infos = styled.section`
    ${flexbox({fd: 'column', g: '1rem'})};
`