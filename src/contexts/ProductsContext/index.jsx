import { createContext, useReducer } from "react";
import { getLocalData, removeProduct, saveProduct, updateProduct } from "../../database/localStorage";

export const ProductsContext = createContext()

const reducer = (state, action) => {
    let newState = state

    switch (action.type) {
        case 'create':
            newState = saveProduct({product: action.data})
            break
        case 'update':
            newState = updateProduct({productId: action.id, productData: action.product})
            break 
        case 'remove':
            newState = removeProduct({productId: action.productId})
            break
        default: 
            throw new Error('Something is wrong')
    }

    return [...newState]
}

export const ProductsProvider = ({children}) => {
    const [products, productsDispatch] = useReducer(reducer, getLocalData({localName: 'products'}) ?? [])

    return (
        <ProductsContext.Provider value={{products, productsDispatch}}>
            {children}
        </ProductsContext.Provider>
    )
}