import { Link, Outlet, useLocation } from "react-router-dom"
import { TopHeader } from "../../sharedComponents/Header"
import { ContentHeader, Styled_outlet } from "./styles"

export const ProductsLayout = () => {
    const location = useLocation()

    return (
        <>
            <TopHeader pageName='Estoque'/>
            
            <ContentHeader>
                <nav>
                    <ul>
                        <Link to='/products'><li className={location.pathname == '/products' ? 'active' : null}>Todos os itens</li></Link>
                        <Link to='/products/product/create'><li className={location.pathname == '/products/product/create' ? 'active' : null}>Novo item</li></Link>
                    </ul>
                </nav>
            </ContentHeader>

            <Styled_outlet>
                <Outlet />
            </Styled_outlet>
        </>
    )
}