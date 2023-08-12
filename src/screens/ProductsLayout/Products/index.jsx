import { useContext } from "react"
import { TableContainer } from "../../../sharedComponents/Table"
import { Button } from "../../../sharedComponents/buttons/GenericButton"
import { ProductsContext } from "../../../contexts/ProductsContext"

export const ProductsList = () => {
    const {products, productsDispatch} = useContext(ProductsContext)
    
    return (
        <TableContainer>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Em estoque</th>
                    <th>Categoria</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                {products.map((product, index) => 
                    <tr key={index}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.category}</td>
                        <td>
                            <div className="actions">
                                <Button action="Ver" className='info' linkTo={`product/${product.id}`}/>
                                <Button action="Atualizar" linkTo={`product/${product.id}/update`}/>
                                <Button action="Excluir" className='danger' actionOnClick={() => productsDispatch({type: 'remove', productId: product.id})}/>
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        </TableContainer>
    )
}