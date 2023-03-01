import {  Nav, Navbar } from "react-bootstrap";
import * as S from './Header.style'
const Header = () => {
    return (
        <S.Content>
            <Navbar  id="nav" variant="dark">
                <Nav>
                    <Nav.Link href="/">Listagem</Nav.Link>
                    <Nav.Link href="/add">Cadastro</Nav.Link>
                </Nav>
            </Navbar>
        </S.Content>

    )

}

export default Header;