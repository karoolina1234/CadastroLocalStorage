import { Container } from "react-bootstrap"
import Cadastro from "../../components/cadastro/Cadastro"
import Header from "../../components/header/Header"

const CadastroPage = () => {
    return (
        <>
            <Header />
            <Container>
                <Cadastro />
            </Container>
        </>
    )
}

export default CadastroPage