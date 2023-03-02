import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as S from './Cadastro.style'
import AlertItem from '../alert/Alert';

const Cadastro = (item) => {
    const [marca, setMarca] = useState();
    const [ano, setAno] = useState();
    const [modelo, setModelo] = useState();
    const [placa, setPlaca] = useState();
    const [files, setFiles] = useState([]);
    const [estado, setEstado] = useState('excelente')
    const [add, setAdd] = useState(false);

    const { getInputProps } = useDropzone({
        accept: {
            'image/*': []
        },
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles?.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const addItem = () => {
        if (!item?.item) {
            const product = {
                marca: marca,
                ano: ano,
                modelo: modelo,
                placa: placa,
                id: Math.floor(Math.random() * 100),
                file: files[0]?.preview,
                estado:estado
            }

            var products = JSON.parse(localStorage.getItem("items_dados") || "[]");
            products.push(product);

            localStorage.setItem("items_dados", JSON.stringify(products))
            setAdd(true)
            clearData();
        } else {
            var arrayLocal = localStorage.getItem("items_dados");
            var arr = JSON.parse(arrayLocal)

            arr?.forEach(val => {
                if (val?.id === item.item.item.id) {
                    val.marca = marca
                    val.ano = ano
                    val.modelo = modelo
                    val.file = val.file
                    val.placa = placa
                    val.estado = estado

                }
            })
            localStorage.setItem("items_dados", JSON.stringify(arr))
            window.location.reload()

        }

    }



    const clearData = () => {
        setAno('')
        setMarca('')
        setModelo('')
        setPlaca('')
        setFiles('')
    }

    useEffect(() => {
        if (item.item) {
            setAno(item.item.item.ano);
            setMarca(item.item.item.marca);
            setPlaca(item.item.item.placa);
            setModelo(item.item.item.modelo)
            setEstado(item.item.item.estado)
        }
    }, [])

    useEffect(()=>{
        if(add){
            setTimeout(() => {
                setAdd(false)
              }, 1000)
        }
    },[add])

    return (
        <S.Content data-testid='cadastroPage'>
            {item.item ?
                (<h3 className='titleForm'>Editar item</h3>) :
                (<h3 className='titleForm'>Cadastro de novos veículos</h3>)
            }
            <Form>
                <Form.Group>
                    <Form.Label>Imagem:</Form.Label>
                    <input id="addImage" {...getInputProps()} />
                    <div className='previewImg'>
                        {files[0]?.preview && <p id='remove' onClick={() => setFiles([])}>x</p>}
                        <img className='preview' src={files[0]?.preview} />

                    </div>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Marca:</Form.Label>
                    <Form.Control type="text" placeholder="informe a marca"
                        onChange={(e) => setMarca(e.target.value)} value={marca} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Modelo:</Form.Label>
                    <Form.Control type="text" placeholder="informe o modelo"
                        onChange={(e) => setModelo(e.target.value)} value={modelo} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Ano:</Form.Label>
                    <Form.Control type="text" placeholder="informe o ano"
                        onChange={(e) => setAno(e.target.value)} value={ano} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Placa:</Form.Label>
                    <Form.Control type="text" placeholder="informe a placa"
                        onChange={(e) => setPlaca(e.target.value)} value={placa} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Estado do veículo:</Form.Label>
                    <Form.Select data-testid="selectOpc" onChange={(e)=>setEstado(e.target.value)}>
                        <option value={"excelente"}>Excelente</option>
                        <option value={'bom'}>Bom</option>
                        <option value={'ruim'}>Ruim</option>
                    </Form.Select>
                </Form.Group>
                {item.item ?
                    (<Button onClick={addItem}>Editar</Button>)
                    :
                    (<Button onClick={addItem}>Adicionar</Button>)}

                    {add && <AlertItem/>}
            </Form>
        </S.Content>

    )
}

export default Cadastro;