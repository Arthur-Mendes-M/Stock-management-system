import { TopHeader } from "../../sharedComponents/Header"
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
                                <h2>XX</h2>
                            </div>
                        </div>

                        <div className="card">
                            <div className="title">
                                <h4>Inventário total</h4>
                            </div>

                            <div className="content">
                                <h2>XX</h2>
                            </div>
                        </div>
                    </div>

                    <div className="tableContainer">
                        <table>
                            <thead>
                                <tr>
                                    <th>X</th>
                                    <th>X</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* <tr></tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="container">
                    <div className="cards">
                        <div className="card">
                            <div className="title">
                                <h4>Itens recentes</h4>
                            </div>

                            <div className="content">
                                <h2>XX</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="title">
                                <h4>Itens acabando</h4>
                            </div>

                            <div className="content">
                                <h2>XX</h2>
                            </div>
                        </div>
                    </div>

                    <div className="tableContainer">
                        <table>
                            <thead>
                                <tr>
                                    <th>X</th>
                                    <th>X</th>
                                    <th>X</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* <tr></tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}