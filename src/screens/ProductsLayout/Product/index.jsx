import { useLoaderData } from "react-router-dom"

export const Product = () => {
    const product = useLoaderData()

    return (
        <>
            <h1>Produto: {product.name}</h1>
            <br />
            <p>{product.id} <br />
            {product.name}<br />
            {product.quantity}<br />
            {product.price}<br />
            {product.category}<br />
            {product.description}</p>
        </>
    )
}