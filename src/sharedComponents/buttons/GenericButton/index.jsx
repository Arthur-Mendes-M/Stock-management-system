import { Link } from "react-router-dom"
import { Styled_button } from "./styles"

export const Button = ({action = "ver", className, linkTo, type, actionOnClick}) => {
    if(linkTo) {
        return (
            <Link to={linkTo}>
                <Styled_button type={type ?? 'button'} className={className}>
                    {action}
                </Styled_button>
            </Link>
        )
    } else {
        return (
            <Styled_button type={type ?? 'button'} className={className} onClick={actionOnClick}>
                {action}
            </Styled_button>
        )
    }
}