import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export const Product_errorBaundary = () => {
    const error = useRouteError()
    console.log(error)

    if(isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404:
                return (
                    <>
                        <h1>🕵️‍♂️ Parece que o que você esta procurando não foi encontrado 🤭</h1>
                        <p>Mais detalhes sobre o que aconteceu: <span>{error.data}</span></p>
                    </>
                )
            case 401:
                return (
                    <>
                        <h1>💂‍♀️ Você não possui autorizações de acesso 🤚</h1>
                        <p>Mais detalhes sobre o que aconteceu: <span>{error.data}</span></p>
                    </>
                )
            case 400:
                return (
                    <>
                        <h1>🌐 Me parece que ha de algo errado na requisição 🧐</h1>
                        <p>Mais detalhes sobre o que aconteceu: <span>{error.data}</span></p>
                    </>
                )
    
            case 500:
                return (
                    <>
                        <h1>Eita 😬 Algo deu errado no servidor</h1>
                        <p>Mais detalhes sobre o que aconteceu: <span>{error.data}</span></p>
                    </>
                )
        }
    }

    return (
        <h1>Vish 😰 Algo desconhecido causou esse erro 👀</h1>
    )
}