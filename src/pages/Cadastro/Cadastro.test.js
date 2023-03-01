import { fireEvent, render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import CadastroPage from "./Cadastro"


describe("Render", () => {
    it("Exibe a pagina", () => {
        render(
             <CadastroPage/>,
             {wrapper: BrowserRouter}
        )
        expect(screen.getByTestId('cadastroPage')).toBeInTheDocument()
    })
    it("Exibe os campos corretos de formulario",()=>{
        render(
            <CadastroPage/>,
            {wrapper: BrowserRouter}
       )
       expect(screen.queryByText('Marca:')).toBeInTheDocument()
       expect(screen.queryByText('Modelo:')).toBeInTheDocument()
       expect(screen.queryByText('Ano:')).toBeInTheDocument()
       expect(screen.queryByText('Placa:')).toBeInTheDocument()
       expect(screen.queryByText('Estado do veículo:')).toBeInTheDocument()
       expect(screen.queryByText('Imagem:')).toBeInTheDocument()
    })
    it("Campo select seleciona as opções corretas", ()=>{
        render(
            <CadastroPage/>,
            {wrapper: BrowserRouter}
       )
        const selectOne = screen.getByTestId('selectOpc');

        fireEvent.change(selectOne,{
            target:{value:'bom'}
        })
        expect(screen.getByText("Bom")).toBeInTheDocument();
    })
})