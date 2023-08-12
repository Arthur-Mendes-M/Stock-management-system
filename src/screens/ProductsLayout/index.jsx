import { Outlet } from "react-router-dom"
import { TopHeader } from "../../sharedComponents/Header"

export const ProductsLayout = () => {
    return (
        <>
            <TopHeader pageName='Estoque'/>
            
            <h1>Layout dos produtos</h1>
            <Outlet />
        </>
    )
}