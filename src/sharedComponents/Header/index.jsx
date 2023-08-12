import { Link } from "react-router-dom"
import { Logo } from "../Logo"
import { Styled_header } from "./styles"
import { ThemeButton } from "../buttons/ThemeButton"

export const TopHeader = ({pageName}) => {
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

                <ThemeButton />
            </nav>

            <div className="pageName">
                <h1>{pageName}</h1>
            </div>
        </Styled_header>
    )
}