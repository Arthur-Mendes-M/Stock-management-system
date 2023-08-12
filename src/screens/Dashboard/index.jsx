import { TopHeader } from "../../sharedComponents/Header"
import { TableContainer } from "../../sharedComponents/Table"
import { Button } from "../../sharedComponents/buttons/GenericButton"
import { DashboardStyles } from "./styles"

export const Dashboard = () => {

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
                                <h2>2</h2>
                            </div>
                        </div>

                        <div className="card">
                            <div className="title">
                                <h4>Inventário total</h4>
                            </div>

                            <div className="content">
                                <h2>40</h2>
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
                            <tr>
                                <td>Item Y</td>
                                <td>
                                    <Button action="Ver"/>
                                </td>
                            </tr>
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
                                <h2>2</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="title">
                                <h4>Itens acabando</h4>
                            </div>

                            <div className="content">
                                <h2>2</h2>
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
                            <tr>
                                <td>Item x</td>
                                <td>3</td>
                                <td>
                                    <Button action="Ver"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Item x</td>
                                <td>3</td>
                                <td>
                                    <Button action="Ver"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Item x</td>
                                <td>3</td>
                                <td>
                                    <Button action="Ver"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Item x</td>
                                <td>3</td>
                                <td>
                                    <Button action="Ver"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Item x</td>
                                <td>3</td>
                                <td>
                                    <Button action="Ver"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Item x</td>
                                <td>3</td>
                                <td>
                                    <Button action="Ver"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Item x</td>
                                <td>3</td>
                                <td>
                                    <Button action="Ver"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Item x</td>
                                <td>3</td>
                                <td>
                                    <Button action="Ver"/>
                                </td>
                            </tr>
                        </tbody>
                    </TableContainer>
                </div>
            </section>
        </>
    )
}