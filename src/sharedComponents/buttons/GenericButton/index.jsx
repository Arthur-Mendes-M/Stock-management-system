import { Styled_button } from "./styles"

export const Button = ({action = "ver", className}) => {
    return (
        <Styled_button type="button" className={className}>
            {action}
        </Styled_button>
    )
}