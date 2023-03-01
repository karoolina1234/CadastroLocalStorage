import { Container } from "react-bootstrap"
import Cadastro from "../cadastro/Cadastro"
import * as S from './Edit.style'

const EditComponent = (item) => {
    console.log("o que vem aqui", item)
    return (
        <S.Content>
            <Container>
                <Cadastro item={item} />
            </Container>
        </S.Content>

    )
}

export default EditComponent;