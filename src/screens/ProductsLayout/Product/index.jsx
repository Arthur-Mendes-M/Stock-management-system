import { useLoaderData, useNavigate } from "react-router-dom"
import { Button } from "../../../sharedComponents/buttons/GenericButton"
import { useContext } from "react"
import { ProductsContext } from "../../../contexts/ProductsContext"
import { Styled_div_tag, Styled_header, Styled_section_cards, Styled_section_infos } from "./styles"

export const Product = () => {
    const {products, productsDispatch} = useContext(ProductsContext)
    const product = useLoaderData()
    const navigate = useNavigate()

    let createdDate = String(new Date(product.date))
    const created = createdDate.split(' ').reduce((result, current, index) => index < 5 ? result += `${current} ` : result, '')

    let updateDate = product.updated && String(new Date(product.updated))
    const updated = updateDate?.split(' ').reduce((result, current, index) => index < 5 ? result += `${current} ` : result, '')

    const deleteCurrentProduct = () => {
        productsDispatch({type: 'remove', productId: product.id})
        navigate(-1)
    }

    return (
        <>
            <Styled_header>
                <h2>{product.name}</h2>
                <div className="actions">
                    <Button action="Atualizar" linkTo={`/products/product/${product.id}/update`}/>
                    <Button action="Excluir" className='danger' actionOnClick={deleteCurrentProduct} />
                </div>
            </Styled_header>

            <Styled_section_cards>
                <Styled_div_tag>
                    <h4>Categoria: {product.category}</h4>
                </Styled_div_tag>

                <Styled_div_tag>
                    <h4>Quantidade em estoque: {product.quantity}</h4>
                </Styled_div_tag>

                <Styled_div_tag>
                    <h4>Preço: {Intl.NumberFormat('BRL', {style: 'currency', currency: 'BRL'}).format(product.price)}</h4>
                </Styled_div_tag>
            </Styled_section_cards>

            <Styled_section_infos>
                <h2>Descrição</h2>
                <p>{product.description}</p>

                <Styled_div_tag>
                    <p>Criado em: {created}</p>
                    {updated && <p>Atualizado em: {updated}</p>}
                </Styled_div_tag>
            </Styled_section_infos>
        </>
    )
}