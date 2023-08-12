import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export const Product_errorBaundary = () => {
    const error = useRouteError()
    console.log(error)

    if(isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404:
                return (
                    <>
                        <h1>Algo não foi encontrado</h1>
                        <p>{error.data}</p>
                    </>
                )
            case 401:
                return (
                    <>
                        <h1>Sem autorizações</h1>
                        <p>{error.data}</p>
                    </>
                )
            case 400:
                return (
                    <>
                        <h1>Algo deu errado na requisição</h1>
                        <p>{error.data}</p>
                    </>
                )
    
            case 500:
                return (
                    <>
                        <h1>Algo deu errado no servidor</h1>
                        <p>{error.data}</p>
                    </>
                )
        }
    }

    return (
        <h1>Algo deu errado</h1>
    )
}