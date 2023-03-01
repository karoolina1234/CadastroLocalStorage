import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home/Home";
import CadastroPage from "./pages/Cadastro/Cadastro";

function App() {
  return (
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<CadastroPage/>}/>

        </Routes>
    </BrowserRouter>
   
  );
}

export default App;
