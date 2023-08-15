import { useContext } from "react"
import { TopHeader } from "../../sharedComponents/Header"
import { TableContainer } from "../../sharedComponents/Table"
import { Button } from "../../sharedComponents/buttons/GenericButton"
import { DashboardStyles } from "./styles"
import { ProductsContext } from "../../contexts/ProductsContext"

export const Dashboard = () => {
    const {products, productsDispatch} = useContext(ProductsContext)

    const endingItems = products.filter(product => product.quantity < 10)
    const inventory = products.reduce((result, product) => result += +product.quantity,0)

    const calcDays = (secondDate) => {
        const difInMilliseconds = new Date() - new Date(secondDate)
        const absoluteDif = Math.abs(difInMilliseconds)
        const difInDays = (absoluteDif / 1000) / 60 / 60 / 24
        return Math.floor(difInDays)
    }

    const recentsItems = products.filter(product => calcDays(product.date) <= 10)

    return (
        <>
            <DashboardStyles />

            <TopHeader pageName='Dashboard' />

            <section>
                <div className="container">
                    <div className="cards">
                        <div className="card">
                            <div className="title">
                                <h4>Diversidade de itens</h4>
                            </div>

                            <div className="content">
                                <h2>{products.length}</h2>
                            </div>
                        </div>

                        <div className="card">
                            <div className="title">
                                <h4>Inventário total</h4>
                            </div>

                            <div className="content">
                                <h2>{inventory}</h2>
                            </div>
                        </div>
                    </div>

                    <TableContainer maxheight='350px'>
                        <thead>
                            <tr>
                                <th>Itens recentes</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {recentsItems.map((product, index) => <tr key={index}>
                                <td>{product.name}</td>
                                <td><Button action="Ver" linkTo={`/products/product/${product.id}`}/></td>
                            </tr>)}
                        </tbody>
                    </TableContainer>
                </div>

                <div className="container">
                    <div className="cards">
                        <div className="card">
                            <div className="title">
                                <h4>Itens recentes</h4>
                            </div>

                            <div className="content">
                                <h2>{recentsItems.length}</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="title">
                                <h4>Itens acabando</h4>
                            </div>

                            <div className="content">
                                <h2>{endingItems.length}</h2>
                            </div>
                        </div>
                    </div>

                    <TableContainer maxheight='350px'>
                        <thead>
                            <tr>
                                <th>Itens acabando</th>
                                <th>Qtd.</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            {endingItems.map((item, index) => 
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <Button action="Ver" linkTo={`/products/product/${item.id}`}/>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </TableContainer>
                </div>
            </section>
        </>
    )
}