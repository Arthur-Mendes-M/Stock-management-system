import { useContext, useState } from "react"
import { Button } from "../buttons/GenericButton"
import { Styled_form } from "./styles"
import {v4 as uuidv4} from "uuid"

import { useLoaderData, useNavigate } from "react-router-dom"
import { ProductsContext } from "../../contexts/ProductsContext"

const initialInputs = {
    name: '',
    quantity: '',
    price: '',
    category: '',
    description: '',
}

export const ProductForm = ({action = 'create'}) => {
    const product = useLoaderData()
    const [inputs, setInputs] = useState(() => product ?? initialInputs)
    const navigate = useNavigate()

    const {products, productsDispatch} = useContext(ProductsContext)

    const handleInput = (event) => {
        const input = event.currentTarget
        const field = input.id

        setInputs((prev) => {
            return {...prev, [field]: input.value}
        })
    }

    const createProduct = () => {
        const product = {
            id: uuidv4(),
            date: new Date(),
            ...inputs
        }

        productsDispatch({type: 'create', data: product})
        setInputs(initialInputs)
    }

    const updateProduct = () => {
        const updatedProduct = {
            ...product,
            updated: new Date(),
            ...inputs
        }

        productsDispatch({type: 'update', id: product.id, product: updatedProduct})
    }

    const submitControl = (event) => {
        event.preventDefault()

        const options = ['create', 'update']
        if (!options.includes(action)) {
            return
        }

        switch (action){
            case 'create':
                createProduct()
                event.currentTarget.querySelectorAll('input')[0].focus()
                break
            case 'update':
                updateProduct()
                navigate(-1)
                break
        }

    }

    return (
        <Styled_form onSubmit={submitControl}>
            <div className="field">
                <label htmlFor="name">Nome</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={inputs.name}
                    onChange={handleInput} 
                    required
                    autoFocus
                />
            </div>

            <div className="field">
                <label htmlFor="quantity">Quantidade</label>
                <input 
                    type="number" 
                    name="quantity" 
                    id="quantity" 
                    min={1} 
                    value={inputs.quantity}
                    onChange={handleInput} 
                    required
                />
            </div>

            <div className="field">
                <label htmlFor="price">Preço</label>
                <input 
                    type="number" 
                    name="price" 
                    id="price" 
                    min={1} 
                    value={inputs.price}
                    onChange={handleInput} 
                    step={0.01}
                    required
                />
            </div>

            <div className="field">
                <label htmlFor="category">Categoria</label>

                <select 
                    name="category" 
                    id="category" 
                    value={inputs.category}
                    onChange={handleInput} 
                    required
                >
                    <option value="">Selecione uma categoria</option>
                    <option value="food">Alimento</option>
                    <option value="cleaning">Produto de limpeza</option>
                    <option value="automotive">Produto automotivo</option>
                    <option value="games">Jogos</option>
                    <option value="books">Livros</option>
                </select>
            </div>

            <div className="field big">
                <label htmlFor="description">Descrição</label>
                <textarea 
                    name="description" 
                    id="description" 
                    value={inputs.description}
                    onChange={handleInput}
                    required
                ></textarea>
            </div>

            <div className="actions">
                <Button action="Limpar" type='reset'/>
                <Button className='info' action="Salvar" type='submit'/>
            </div>
        </Styled_form>
    )
}