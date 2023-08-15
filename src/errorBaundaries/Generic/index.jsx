import { useNavigate } from "react-router-dom"
import { Button } from "../../sharedComponents/buttons/GenericButton"
import { Styled_main } from "./styles"

export const GenericErrorPage = () => {
    const navigate = useNavigate()

    return (
        <Styled_main>
            <h1>👀 Infelizmente algo deu errado 💆 Melhor voltar 🥺</h1>
            <Button action="Voltar para a página anterior" actionOnClick={() => navigate(-1)} />
        </Styled_main>
    )
}