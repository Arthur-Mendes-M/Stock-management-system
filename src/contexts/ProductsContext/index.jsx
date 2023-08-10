import { createContext, useReducer } from "react";

export const ProductsContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case 'create':

            return [...state, {name: 'New product'}]
        case 'update':
            
            return [...state, {name: 'Product has been updated'}]
        case 'remove':

            return [...state, {name: 'Product removed'}]
        default: 
            throw new Error('Something is wrong')
    }
}

export const ProductsProvider = ({children}) => {
    const [products, productDispatch] = useReducer(reducer, [])

    return (
        <ProductsContext.Provider value={{products, productDispatch}}>
            {children}
        </ProductsContext.Provider>
    )
}