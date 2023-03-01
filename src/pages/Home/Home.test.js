import { render, screen} from "@testing-library/react"
import Home from "./Home"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"


describe("Render", () => {
    it("Exibe a pagina", () => {
        render(
             <Home/>,
             {wrapper: BrowserRouter}
        )
        expect(screen.getByTestId('pageList')).toBeInTheDocument()
    })
})