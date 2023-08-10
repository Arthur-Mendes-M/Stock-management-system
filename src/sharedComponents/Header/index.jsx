import { Link } from "react-router-dom"
import { Logo } from "../Logo"
import { Styled_header } from "./styles"

export const TopHeader = () => {
    return (
        <Styled_header>
            <Logo />

            <nav>
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>

                    <Link to='/products'>
                        <li>Products</li>
                    </Link>
                </ul>
            </nav>
        </Styled_header>
    )
}