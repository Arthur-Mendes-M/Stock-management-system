import { useParams } from "react-router-dom"

export const Product = () => {
    const { productId } = useParams()

    return (
        <h1>Product infos {productId}</h1>
    )
}