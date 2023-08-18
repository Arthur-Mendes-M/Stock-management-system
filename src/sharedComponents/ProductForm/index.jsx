import { useContext, useRef, useState } from "react"
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
    const firstInputRef = useRef(null)
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
        const newProduct = {
            id: uuidv4(),
            date: new Date(),
            ...inputs
        }

        productsDispatch({type: 'create', data: newProduct})
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
                firstInputRef.current.focus()
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
                    ref={firstInputRef}
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
                    <option value="alimento">Alimento</option>
                    <option value="produto de limpeza">Produto de limpeza</option>
                    <option value="produto automotivo">Produto automotivo</option>
                    <option value="jogos">Jogos</option>
                    <option value="livros">Livros</option>
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
                <Button 
                    action="Limpar" 
                    type='reset' 
                    actionOnClick={() => {
                        setInputs(initialInputs)
                        firstInputRef.current.focus()
                    }}
                />
                <Button className='info' action="Salvar" type='submit'/>
            </div>
        </Styled_form>
    )
}