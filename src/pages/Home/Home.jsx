import { useState } from "react";
import { Container } from "react-bootstrap";
import ReactPaginate from 'react-paginate';
import DeleteIcon from "../../assets/icons/delete.icon";
import EditIcon from "../../assets/icons/edit.icon";
import EditComponent from "../../components/edit/Edit";
import Header from "../../components/header/Header";
import Form from 'react-bootstrap/Form';

import * as S from './Home.style'

const Home = () => {
    const [isEdit, setIsEdit] = useState(false)
    const [itemEdit, setItemEdit] = useState([])

    const [title,setTitle] = useState('')

    const [itemOffset, setItemOffset] = useState(0);


    var arrayLocal = localStorage.getItem("items_dados");
    var arr = JSON.parse(arrayLocal)


    const endOffset = itemOffset + 3;
    const currentItems = arr?.slice(itemOffset, endOffset);

    const pageCount = Math.ceil(arr?.length / 3 || 0);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 6) % arr.length;
       
        setItemOffset(newOffset);
      };

    const revemoveItem = (id) => {
        const prod = arr.filter((item) => item.id !== id)
        localStorage.setItem("items_dados", JSON.stringify(prod))
        window.location.reload()
        return prod
    }
    const EditItem = (item) => {
        setIsEdit(true)
        setItemEdit(item)
    }
    return (
        <S.Content data-testid="pageList">
            <Header />
            {isEdit && <EditComponent item={itemEdit} onClose={() => setIsEdit(false)} />}
            <Container>
                {arr?.length>0 && <Form className="filterList">
                    <Form.Group>
                        <Form.Label>Busca por Carro</Form.Label>
                        <Form.Control placeholder="Digite o modelo ou a marca" onChange={(e)=>setTitle(e.target.value)}/>
                    </Form.Group>
                </Form>}
               
                {arr?.length<1 && <S.NoData>Ainda não há itens disponíveis</S.NoData>}
                {
                currentItems?.filter((val)=>{
                    if(title === ''){
                        return val
                    }else if(val?.marca?.toLowerCase().includes(title?.toLocaleLowerCase())|| val?.modelo?.toLowerCase().includes(title.toLocaleLowerCase())){
                        return val
                    }
                }).map((item) => {
                    return (
                        <div  className="listItem">
                            <img src={item.file} />
                            <div className="paragraphData">
                                <p>Marca: {item.marca}</p>
                                <p>Ano: {item.ano}</p>
                                <p>Modelo: {item.modelo}</p>
                                <p>Placa: {item.placa}</p>
                                <S.Estado estado={item.estado}>Estado: {item.estado}</S.Estado>
                            </div>
                            <button onClick={() => EditItem(item)} className="editButton">
                                <EditIcon />
                                Editar
                            </button>
                            <button onClick={() => revemoveItem(item.id)} className="removeObj"><DeleteIcon /></button>
                        </div>
                    )
                })}

                <ReactPaginate
                    breakLabel="..."
                    breakClassName="break-me"
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    previousLabel={false}
                    nextLabel={false}
                    className="listaPAG"
                />
            </Container>
        </S.Content>

    )
}

export default Home;